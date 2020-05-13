<template>
  <div id="app">
    <keep-alive exclude="Detail,Category">
      <router-view />
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "./components/common/tab-bar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabbar
  }
};
</script>

<style>
@import "./assets/css/base.css";
#app {
  font-size: 16px;
}
</style>
