<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 15px;
  bottom: 55px;
  z-index: 10;
}
.back-top img {
  width: 50px;
  opacity: 0.5;
}
</style>
