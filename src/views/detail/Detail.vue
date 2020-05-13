<template>
  <div id="detail">
    <!-- 顶部导航 -->

    <detail-navbar class="detail-nav" @titleclick="titleClick" ref="nav" />
    <better-scroll :click="true" :probeType="3" class="content" ref="scroll" @bsscroll="bScroll">
      <!-- <div>
        <li v-for="item in $store.state.cartList">{{item}}</li>
      </div>-->
      <!-- 轮播图 -->
      <detail-swiper :top-images="topImages" />
      <!-- 商品基本信息 -->
      <detail-base-info :goods="goods" />
      <!-- 店铺基本信息 -->
      <detail-shop-info :shops="shops" />
      <!-- 商品详情展示 -->
      <detail-goods-info :detail-info="detailsInfo" @imgload="imgload" />
      <!-- 商品参数展示 -->
      <detail-params-info :params-info="paramsInfo" ref="goods" />
      <!-- 评论信息展示 -->
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <!-- 推荐 -->
      <deatil-recommend-info :recommendInfo="recommendInfo" ref="recommend" />
    </better-scroll>
    <!-- 底部 -->
    <detail-bottom-bar @addCart="addCart" />
    <!-- 返回顶部 -->
    <back-top v-show="isShowTop" @click.native="backTop"></back-top>
  </div>
</template>

<script>
//数据请求
import {
  GetDatailData,
  GoodsInfo,
  Shop,
  GoodsParams,
  getRecommendData
} from "../../network/detail";

/*公共组件*/
import BetterScroll from "../../components/common/better-scroll/BetterScroll";

/*detail组件*/
import DetailNavbar from "./children-components/DetailNavbar";
//轮播图
import DetailSwiper from "./children-components/DetailSwiper";
//商品基本
import DetailBaseInfo from "./children-components/DetailBaseInfo";
//店铺信息
import DetailShopInfo from "./children-components/DetailShopInfo";
//商品详情
import DetailGoodsInfo from "./children-components/DetailGoodsInfo";
//商品参数
import DetailParamsInfo from "./children-components/DetailParamsInfo";
//评论信息
import DetailCommentInfo from "./children-components/DetailCommentInfo";
//推荐
import DeatilRecommendInfo from "./children-components/DeatilRecommendInfo";
//底部
import DetailBottomBar from "./children-components/DetailBottomBar";
//防抖
import { debounce } from "../../commont/shake";
//返回顶部
import { backTopMixin } from "../../commont/mixin";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailsInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      positionY: [],
      getPositionY: null,
      currentIndex: 0
    };
  },
  mixins: [backTopMixin],
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    BetterScroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DeatilRecommendInfo,
    DetailBottomBar
  },
  created() {
    //1.保存传入的iid
    // this.iid = this.$route.params.iid;
    this.iid = this.$route.query.iid;
    //2.根据iid请求详情数据
    GetDatailData(this.iid).then(res => {
      //获取数据
      console.log(res);
      const data = res.result;
      //1-获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      //2-创建商品信息的对象
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3-创建店铺信息的对象
      this.shops = new Shop(data.shopInfo);
      //创建店铺信息的商家信息
      this.shopsInfo = data.shopInfo;
      //获取商品详情信息
      this.detailsInfo = data.detailInfo;
      //获取商品参数信息
      this.paramsInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 请求热门推荐数据
    getRecommendData().then(res => {
      console.log(res);
      this.recommendInfo = res.data.list;
    });
    this.getPositionY = debounce(() => {
      this.positionY = [];
      this.positionY.push(0);
      this.positionY.push(-this.$refs.goods.$el.offsetTop + 44);
      this.positionY.push(-this.$refs.comment.$el.offsetTop + 44);
      this.positionY.push(-this.$refs.recommend.$el.offsetTop + 44);
    }, 300);
  },
  methods: {
    imgload() {
      console.log("打印");
      this.$refs.scroll.refresh();
      this.getPositionY();
      console.log(this.$refs.goods);
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, this.positionY[index], 0);
    },
    bScroll(position) {
      // console.log(position);
      let y = position.y;
      for (let i in this.positionY) {
        if (
          this.currentIndex !== i &&
          ((y <= this.positionY[i] &&
            y > this.positionY[+i + 1] &&
            i < this.positionY.length - 1) ||
            (i == this.positionY.length - 1 && y <= this.positionY[i]))
        ) {
          console.log(i);

          this.currentIndex = i;
          this.$refs.nav.currentIndex = i;
        }
      }
      this.getBackShow(position);
    },
    addCart() {
      console.log("111");
      //获取购物车的需要展示的信息
      let cartInfo = {};
      cartInfo.img = this.topImages[0];
      cartInfo.title = this.goods.title;
      cartInfo.desc = this.goods.desc;
      cartInfo.price = this.goods.highNowPrice;
      cartInfo.iid = this.iid;
      console.log(cartInfo);
      //将商品加入到购物车
      //通过vuex管理
      // this.$store.commit("addCart", cartInfo);
      this.$store.dispatch("addCart", cartInfo);
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 10;
}
.content {
  height: calc(100% - 44px - 60px);
}
</style>
