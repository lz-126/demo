//混入返回顶部
import BackTop from "../components/content/back-top/BackTop";
export let backTopMixin = {
  data() {
    return {
      isShowTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 2000);
    },
    getBackShow(position) {
      this.isShowTop = position.y < -800;
    }
  },
  components: {
    BackTop
  }
}