<template>
  <div>
    <swiper class="swiper">
      <swiper-item v-for="(item,index) in  topImages" :key="index" class="swiper-image">
        <img :src="item" class="top-image" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
</style>
