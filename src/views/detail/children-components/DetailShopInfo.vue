<template>
  <div class="shop-info" v-if="Object.keys(shops).length!=0">
    <div class="shop-top">
      <img :src="shops.logo" alt />
      <span class="title">{{shops.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sell-count">{{shops.sells| sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shops.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter?'高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shops: {
      type: Object,
      defalut() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      let result = value;
      if (value > 1000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    }
  }
};
</script>

<style scoped>
.shop-info {
  padding: 30px 20px;
  text-align: center;
}
.shop-top {
  display: flex;
  font-size: 24px;
  align-items: center;
  margin-bottom: 20px;
}
.shop-top img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 10px;
}
.shop-middle {
  display: flex;
  justify-content: space-around;
}
.shop-middle-item {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  text-align: center;
}

.info-goods {
  padding: 0 10px;
  border-right: 2px solid #ccc;
}
.sell-count,
.goods-count {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.shop-middle-right {
  font-size: 18px;
}
.shop-middle-right tr {
  height: 30px;
}
.shop-middle-right td {
  padding: 0 5px;
}
.score {
  color: green;
}
.better {
  color: #fff;
  background-color: green;
}
.score-better {
  color: red;
}
.better-more {
  color: #fff;
  background-color: red;
}
.shop-bottom {
  width: 150px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #eee;
  font-size: 18px;
  color: #000;
}
</style>
