<template>
  <div class="tab-list" @click="listClick" :class="{active:isActive}">
    <div v-if="!isActive">
      <slot name="tab-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-icon-active"></slot>
    </div>
    <div :style="styleColor">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    styleColor() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  methods: {
    listClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab-list {
  flex: 1;
  text-align: center;
  align-self: center;
  font-style: 16px;
}
.active {
  color: red;
}
/* 动态改变颜色 */
</style>