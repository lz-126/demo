<template>
  <div>
    <navbar class="nav-bar">
      <div slot="left"></div>
      <div slot="center">蘑菇街</div>
      <div slot="right"></div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../components/common/Nav-bar/nav-bar";
export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: hotpink;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
</style>
