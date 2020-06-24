<template>
  <div :class="[value1.key === 'between' ? 'range-select-type between ant-select ant-select-enabled' : 'range-select-type ant-select ant-select-enabled']">
    <div
      class="ant-select-selection ant-select-selection--single"
      @click="show = !show"
    >
      <div
        class="ant-select-selection__rendered"
      >
        <div
          class="ant-select-selection-selected-value"
          style="display: block; opacity: 1;"
        >
          {{ value1.label }}
        </div>
      </div>
      <span
        class="ant-select-arrow"
        unselectable="on"
        style="user-select: none;"
      ><i
        aria-label="icon: down"
        class="anticon anticon-down ant-select-arrow-icon"
      ><svg
        viewBox="64 64 896 896"
        focusable="false"
        class=""
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      ><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></i></span>
    </div>
    <ConditionRangeMenu
      :show.sync="show"
      :value.sync="value1"
      :items="items"
    />
  </div>
</template>
<script>
import ConditionRangeMenu from './condition-range-menu'
export default {
  components: {
    ConditionRangeMenu
  },
  props: {
    value: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    },
    items: {
      type: Array,
      default: undefined
    }
  },
  data () {
    return {
      show: false,
      value1: {
        key: '',
        label: ''
      }
    }
  },
  watch: {
    value: {
      handler (val) {
        this.value1 = val
      },
      deep: true
    },
    name (val) {
      this.value1.key = val
    },
    label (val) {
      this.value1.label = val
    },
    value1: {
      handler (val) {
        this.$emit('update:value', val)
        this.$emit('update:name', val.key)
        this.$emit('update:label', val.label)
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
