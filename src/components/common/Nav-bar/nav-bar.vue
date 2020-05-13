<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
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
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;
  position: relative;
  background-color: #fff;
}
.nav-bar .left,
.right {
  width: 60px;
  /* background-color: skyblue; */
}
.nav-bar .center {
  flex: 1;
  /* background-color: yellowgreen; */
}
</style>
