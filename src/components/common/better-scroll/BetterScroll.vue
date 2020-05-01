<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BScroll from "@better-scroll/core";
// import Pullup from "@better-scroll/pull-up";
// BScroll.use(Pullup);

import BS from "better-scroll";

export default {
  name: "BetterScroll",
  data() {
    return {
      bs: null
    };
  },
  props: {
    click: {
      type: Boolean,
      default: false
    },
    pullupLoad: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.bs = new BS(".wrapper", {
      click: this.click,
      pullUpLoad: this.pullupLoad,
      probeType: this.probeType // mouseWheel: true, // disableMouse: false, // disableTouch: false
    });
    //监听滚动事件
    this.bs.on("scroll", position => {
      this.$emit("bsScroll", position);
    });
    //监听上拉事件
    this.bs.on("pullingUp", () => {
      this.$emit("pullup");
    });
  },
  methods: {
    finishpullup() {
      this.bs.finishPullUp();
    }
  }
};
</script>
<style scoped>
</style>