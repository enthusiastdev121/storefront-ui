import Glide from "@glidejs/glide";
import lozad from "lozad";

export default {
  name: "SfGallery",
  props: {
    /**
     * Images list
     */
    images: {
      type: Array,
      default: () => []
    },
    /**
     * Initial image number (starting from 1)
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * Glide slider options (https://glidejs.com/docs/options/)
     */
    sliderOptions: {
      type: Object,
      default() {
        return {
          type: "slider",
          autoplay: false,
          rewind: false,
          gap: 0
        };
      }
    }
  },

  data() {
    return {
      glide: null,
      activeIndex: this.current - 1
    };
  },

  methods: {
    go(index) {
      this.activeIndex = index;
      /**
       * Event for current image change (`v-model`)
       * @type {Event}
       */
      this.$emit("click", index + 1);
      if (this.glide) {
        this.glide.go("=" + index);
      }
    }
  },

  mounted() {
    // handle slider with swipe and transitions with Glide.js
    // https://glidejs.com/docs/
    const glide = new Glide(this.$refs.glide, {
      gap: 0,
      ...this.sliderOptions
    });
    glide.on("run", () => {
      this.go(glide.index);
    });
    glide.mount();
    this.glide = glide;
    // handle lazy load for big images with lozad
    // https://apoorv.pro/lozad.js/
    const observer = lozad(".sf-gallery__big-image");
    observer.observe();
  },

  beforeDestroy() {
    if (this.glide) {
      this.glide.destroy();
    }
  }
};
