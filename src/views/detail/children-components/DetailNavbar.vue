<template>
  <div class="nav-bar">
    <Navbar>
      <div slot="left" class="back-image" @click="backHome">
        <img src="../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title-item"
          @click="itemClick(index)"
          :class="{active:index==currentIndex}"
        >{{item}}</div>
      </div>
    </Navbar>
  </div>
</template>

<script>
//公共组件
import Navbar from "../../../components/common/Nav-bar/nav-bar";
export default {
  name: "DetailNavvue",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    Navbar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleclick", index);
    },
    backHome() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
  z-index: 10;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.back-image img {
  margin-top: 12px;
}
.active {
  color: hotpink;
}
</style>
