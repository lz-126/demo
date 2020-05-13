<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- <Scroll class="content" :click="true" ref="scroll">
      
    </Scroll>-->

    <cube-scroll ref="scroll" class="scroll-list-wrap">
      <div class="cartlist">
        <cart-list @cartitem="cartitem" />
      </div>
    </cube-scroll>

    <car-bottom-bar />
  </div>
</template>

<script>
import NavBar from "../../components/common/Nav-bar/nav-bar.vue";
import Scroll from "../../components/common/better-scroll/BetterScroll";
import { mapGetters, mapActions } from "vuex";
import CartList from "./childern-components/CartList";
import CarBottomBar from "./childern-components/CarBottomBar";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CarBottomBar,
    Scroll
  },
  computed: {
    // ...mapGetters([" cartLength", " cartList"])
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  },
  methods: {
    cartitem() {
      this.$refs.scroll.refresh();
    }
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.cart .nav-bar {
  height: 44px;
  background-color: hotpink;
  color: #fff;
}
.content,
.scroll-list-wrap {
  height: calc(100% - 138px);
}
</style>