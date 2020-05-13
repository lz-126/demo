<template>
  <div class="list-item">
    <!-- 多选 -->
    <div class="item-button">
      <checked-button :ischeck="item.check" @checkClick="changeCheck" />
    </div>
    <div class="item-img">
      <img :src="item.img" @load="cartitem" alt />
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述:{{item.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">${{item.price}}</div>
        <div class="item-count right">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedButton from "./CheckedButton";
export default {
  name: "CartListItem",
  components: {
    CheckedButton
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    changeCheck() {
      this.$store.commit("changeCheck", this.item);
    },
    cartitem() {
      this.$emit("cartitem");
    }
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  width: 100%;
  padding: 5px;
}
.item-button {
  position: relative;
  left: 0;
  top: 40px;
  margin-right: 10px;
}
.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-info {
  font-size: 18px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
.item-bottom {
  margin-top: 10px;
}
.item-bottom .item-price {
  color: #ff4500;
}
</style>
