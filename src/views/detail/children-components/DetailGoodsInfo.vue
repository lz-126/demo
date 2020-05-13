<template>
  <div calss="goods-info" v-if="Object.keys(detailInfo).length!==0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imageload"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      imgLength: 0,
      num: 0
    };
  },
  props: {
    detailInfo: {
      type: Object,
      defalut() {
        return {};
      }
    }
  },
  methods: {
    imageload() {
      this.num += 1;
      // console.log(this.num);
      if (this.num === this.imgLength) {
        this.$emit("imgload");
      }
    }
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.start,
.end {
  width: 90px;
  height: 1px;
  background-color: black;
  position: relative;
}
.start {
  float: left;
}
.end {
  float: right;
}
.start::before,
.end::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
}
.desc {
  padding: 15px;
}
.info-key {
  width: 100%;
}
.info-key img {
  width: 100%;
}
.info-list {
  width: 100%;
}
.info-list img {
  width: 100%;
}
</style>