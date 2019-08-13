import SfSelectOption from "./_internal/SfSelectOption.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import Vue from "vue";

Vue.component("SfSelectOption", SfSelectOption);
export default {
  name: "SfSelect",
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    /**
     * Selected item value
     */
    selected: {
      type: [String, Object],
      default: ""
    },
    /**
     * Dropdown list size
     */
    size: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      open: false,
      index: -1,
      options: [],
      indexes: {},
      optionHeight: 0
    };
  },
  components: {
    SfButton
  },
  watch: {
    index(index) {
      this.$emit("change", this.options[index].value);
    },
    open: {
      immediate: true,
      handler: function(visible) {
        if (visible) {
          this.$nextTick(() => {
            this.optionHeight = this.$slots.default[0].elm.offsetHeight;
          });
        }
      }
    }
  },
  computed: {
    html() {
      if (this.index < 0) return;
      return this.options[this.index].html;
    },
    maxHeight() {
      if (!this.size) return;
      return `${this.optionHeight * this.size}px`;
    }
  },
  methods: {
    update(index) {
      this.index = index;
    },
    move(payload) {
      const optionsLength = this.options.length;
      let index = this.index;
      index += payload;

      if (index < 0) index = 0;
      if (index >= optionsLength) index = optionsLength - 1;

      this.index = index;
    },
    enter() {
      this.toggle();
    },
    toggle(event) {
      if (event.target.contains(this.$refs.cancel.$el)) return;
      console.error("toggle");
      this.open = !this.open;
    },
    openHandler() {
      console.error("openHandler");
      this.open = true;
    },
    closeHandler() {
      console.error("closeHandler");
      this.open = false;
    }
  },
  created: function() {},
  mounted: function() {
    const selected = this.selected,
      options = [],
      indexes = {};
    let i = 0;

    if (!this.$slots.default) return;

    this.$on("update", this.update);

    this.$slots.default.forEach(slot => {
      if (!slot.tag) return;
      options.push({
        ...slot.componentOptions.propsData,
        html: slot.elm.innerHTML
      });
      indexes[JSON.stringify(slot.componentOptions.propsData.value)] = i;
      i++;
    });

    this.options = options;
    this.indexes = indexes;
    if (typeof indexes[JSON.stringify(selected)] === "undefined") return;
    this.index = indexes[JSON.stringify(selected)];
  },
  beforeDestroy: function() {
    this.$off("update", this.update);
  }
};
