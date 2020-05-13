<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <!-- 标题 -->
    <div class="info-title">{{goods.title}}</div>
    <!-- 价格 -->
    <div class="info-price">
      <span class="new-price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span
        v-if="goods.discount"
        class="discount"
        :style="{backgroundColor: goods.discountBgColor}"
      >{{goods.discount}}</span>
    </div>
    <!-- 销量收藏 -->
    <div class="info-sales">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <!-- 退换货 -->
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.base-info {
  padding: 0 10px;
  margin-top: 15px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .new-price {
  font-size: 24px;
  color: hotpink;
}
.info-price .old-price {
  font-size: 13px;
  text-decoration: line-through;
  margin-left: 5px;
}
.info-price .discount {
  /* background-color: hotpink; */
  border-radius: 8px;
  color: #fff;
  padding: 2px 5px;
  font-size: 12px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}
.info-sales {
  margin: 15px;
  display: flex;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  font-size: 14px;
  color: #000;
  line-height: 30px;
}
.info-service {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #333;
  line-height: 60px;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item sapn {
  font-size: 13px;
  color: #333;
}
</style>
