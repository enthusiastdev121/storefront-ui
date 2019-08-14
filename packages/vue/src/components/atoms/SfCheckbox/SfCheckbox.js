import SfIcon from "../SfIcon/SfIcon.vue";

export default {
  name: "SfCheckbox",
  components: {
    SfIcon
  },
  props: {
    /**
     * Current input value (`v-model`)
     */
    value: {
      type: [String, Boolean, Number, Object],
      default: false
    },
    /**
     * Value emitted when input is checked
     */
    checkedValue: {
      type: [String, Boolean, Number, Object],
      default: true
    },
    /**
     * Value emitted when input is unchecked
     */
    uncheckedValue: {
      type: [String, Boolean, Number, Object],
      default: false
    },
    /**
     * Native input ID attribute
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * Native input name attribute
     */
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: null
    },
    /**
     * Native input disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isChecked: {
      get() {
        return this.value === this.checkedValue;
      },
      set(checked) {
        /**
         * Event for check/uncheck (`v-model`)
         * @type {Event}
         */
        this.$emit("input", checked ? this.checkedValue : this.uncheckedValue);
      }
    }
  }
};
