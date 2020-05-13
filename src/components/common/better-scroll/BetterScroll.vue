<template>
  <div class="wrapper" ref="wrapper">
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
    //挂载
    this.bs = new BS(this.$refs.wrapper, {
      click: this.click,
      pullUpLoad: this.pullupLoad,
      probeType: this.probeType // mouseWheel: true, // disableMouse: false, // disableTouch: false
    });
    //监听滚动事件
    this.bs.on("scroll", position => {
      this.$emit("bsscroll", position);
    });
    //监听上拉事件
    this.bs.on("pullingUp", () => {
      this.$emit("pullup");
    });
  },
  methods: {
    finishpullup() {
      this.bs.finishPullUp();
    },
    scrollTo(x, y, time = 300) {
      this.bs && this.bs.scrollTo(x, y, time);
    },
    getScrollY() {
      return this.bs ? this.bs.y : 0;
    },
    refresh() {
      this.bs && this.bs.refresh();
    }
  }
};
</script>
<style scoped>
</style>