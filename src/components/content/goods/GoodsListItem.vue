<template>
  <div class="goods-list-item">
    <img :src="goodsitem.show.img" alt />
    <div class="good-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">¥{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-list-item img {
  width: 100%;
}
.good-info {
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
}
.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.good-info .price {
  color: #f00;
  margin-right: 20px;
}
.good-info .cfav {
  position: relative;
}
.good-info .cfav::before {
  position: absolute;
  content: "";
  width: 14px;
  height: 14px;
  left: -14px;
  top: 0;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
