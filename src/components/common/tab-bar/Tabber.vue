<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
};
</script>

<style>
#tab-bar {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  height: 50px;
  background: #eee;
}
</style>