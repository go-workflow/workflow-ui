<template>
  <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
    <div v-if="show">
      <div
        class="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
        style="width:150px;left:1%;top:30px;"
      >
        <div
          id="03450996-9dae-41a7-e523-76744d26b0fe"
          style="overflow: auto; transform: translateZ(0px);"
        >
          <ul
            role="listbox"
            class="ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical"
            tabindex="0"
          >
            <li
              v-for="(item, index) in items1"
              :key="index"
              role="option"
              unselectable="on"
              :class="[item.label === value1.label ? 'ant-select-dropdown-menu-item ant-select-dropdown-menu-item-selected' : 'ant-select-dropdown-menu-item']"
              aria-selected="false"
              style="user-select: none;"
              @click="click(item)"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: undefined
    },
    items: {
      type: Array,
      default: undefined
    }
  },
  data () {
    return {
      show1: false,
      value1: {
        key: '',
        label: ''
      },
      items1: [
        { key: '1', label: '选择1', value: '' },
        { key: '2', label: '选项2', value: '' }
      ]
    }
  },
  watch: {
    show (val) {
      this.show1 = val
    },
    show1 (val) {
      this.$emit('update:show', val)
    },
    value: {
      handler (val) {
        this.value1 = val
      },
      deep: true
    },
    value1: {
      handler (val) {
        this.$emit('update:value', val)
      }
    }
  },
  mounted () {
    if (this.items) this.items1 = this.items
  },
  methods: {
    click (item) {
      this.value1 = item
      this.show1 = false
    }
  }
}
</script>
