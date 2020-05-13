<template>
  <div class="main-bar">
    <tabbar>
      <tabbar-item path="/home" activeColor="green">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor="blue">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="yellow">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" activeColor="red">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "./Tabbar";
import TabbarItem from "./TabbarItem";

export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style>
@import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
.main-bar {
  font-size: 16px;
}
</style>