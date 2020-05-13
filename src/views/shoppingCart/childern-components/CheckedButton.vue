<template>
  <div class="click-button" :class="{active: ischeck}" @click="checkClick">
    <img src="../../../assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckedButton",
  data() {
    return {};
  },
  props: {
    ischeck: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  methods: {
    checkClick() {
      // console.log("111");
      this.$emit("checkClick");
    }
  }
};
</script>

<style scoped>
.click-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.active {
  background: hotpink;
  border: 2px solid hotpink;
}
</style>
