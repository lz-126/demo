<template>
  <div id="home">
    <navbar class="nav-bar">
      <div slot="left"></div>
      <div slot="center">蘑菇街</div>
      <div slot="right"></div>
    </navbar>

    <tab-control
      :titles="['流行','新款','精选']"
      class="tab-control"
      @tabclick="tabClick"
      v-show="isTapFixed"
      ref="tabFixed"
    />

    <better-scroll
      :click="true"
      :pullupLoad="true"
      :probeType="3"
      class="better-scroll"
      @bsscroll="homeScroll"
      ref="scroll"
      @pullup="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-popular />

      <tab-control
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabclick="tabClick"
        v-show="!isTapFixed"
        ref="tabControl"
      />
      <goods-list :goods="goods[currentType].list"></goods-list>
    </better-scroll>
    <back-top v-show="isShowTop" @click.native="backTop" />
  </div>
</template>

<script>
//外部插件
import axios from "axios";
//公共组件
import Navbar from "../../components/common/Nav-bar/nav-bar";
import TabControl from "../../components/content/tabControl/TabControl";
import BetterScroll from "../../components/common/better-scroll/BetterScroll";
import BackTop from "../../components/content/back-top/BackTop";
//home子组件
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import HomeSwiper from "../../views/home/childComps/HomeSwiper";
import HomeRecommend from "../../views/home/childComps/HomeRecommend";
import HomePopular from "../../views/home/childComps/HomePopular";
import GoodsList from "../../components/content/goods/GoodsList";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowTop: false,
      isTapFixed: false,
      saveY: 0
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    console.log("激活");
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh(); //刷新页面
  },
  deactivated() {
    //停用
    console.log("停用");
    //通过获取scroll的y值来保存之前的坐标
    // this.saveY = this.$refs.scroll.bs.y;
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
  },
  methods: {
    //调用数据
    getHomeMultiData() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // this.goods[type].page = page;
          this.$refs.scroll.finishpullup();
        })
        .catch(err => {
          this.$refs.scroll.finishpullup();
        });
    },
    //home事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabFixed.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    homeScroll(position) {
      this.isShowTop = position.y < -800;
      this.isTapFixed = position.y < -620;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 2000);
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.better-scroll {
  height: calc(100% - 94px);
  overflow: hidden;
}
.nav-bar {
  width: 100%;
  background-color: hotpink;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 10;
}
</style>
