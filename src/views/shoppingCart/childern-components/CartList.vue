<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item,index) in cartList"
      :key="index"
      :item="item"
      @cartitem="cartitem"
    />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  data() {
    return {};
  },
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  methods: {
    cartitem() {
      this.$emit("cartitem");
    }
  }
};
</script>

<style scoped>
</style>
