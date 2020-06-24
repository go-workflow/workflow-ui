<template>
  <div class="ant-row-flex ant-row-flex-space-around ant-row-flex-middle condition-group">
    <div class="ant-col ant-col-4 group-title">
      <span>参数 {{ pos + 1 }}</span>
    </div>
    <div class="ant-col ant-col-17">
      <div>
        <div class="condition-panel-range-set">
          <div
            class="ant-input-number"
            style="width: 50%;"
          >
            <div class="ant-input-number-input-wrap">
              <input
                v-model="data1.paramKey"
                class="ant-input-number-input"
                placeholder="请输入key,如: day"
              >
            </div>
          </div>
          <div
            class="ant-input-number"
            style="width: 50%;"
          >
            <div class="ant-input-number-input-wrap">
              <input
                v-model="data1.paramLabel"
                class="ant-input-number-input"
                placeholder="请输入label,如: 请假天数"
              >
            </div>
          </div>
        </div>
        <div class="condition-panel-range-set">
          <ConditionRange
            :name.sync="data1.key"
            :label.sync="data1.label"
            :items="items"
          />
          <ConditionInputNumber
            v-if="data1.key !== 'between'"
            :value.sync="inputVal"
          />
          <ConditionRangeBetween
            v-if="data1.key === 'between'"
            :data.sync="data1"
          />
        </div>
      </div>
    </div>
    <div
      class="ant-col ant-col-1 group-delete"
      @click="del"
    >
      <i
        aria-label="icon: delete"
        class="anticon anticon-delete"
        style="color: rgba(25, 31, 37, 0.56); font-size: 13px;"
      ><svg
        viewBox="64 64 896 896"
        focusable="false"
        class=""
        data-icon="delete"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      ><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" /></svg></i>
    </div>
  </div>
</template>
<script>
import ConditionRange from './condition-range'
import ConditionInputNumber from './condition-input-number'
import ConditionRangeBetween from './condition-range-between'
export default {
  components: {
    ConditionRange,
    ConditionInputNumber,
    ConditionRangeBetween
  },
  props: {
    data: {
      type: Object,
      default: undefined
    },
    pos: {
      type: Number,
      default: undefined
    }
  },
  data () {
    return {
      inputVal: undefined,
      data1: {
        paramKey: '',
        paramLabel: ''
      },
      items: [
        { key: 'lt', label: '小于', value: 'upperBound' },
        { key: 'le', label: '小于等于', value: 'upperBoundEqual' },
        { key: 'eq', label: '等于', value: 'boundEqual' },
        { key: 'gt', label: '大于', value: 'lowerBound' },
        { key: 'ge', label: '大于等于', value: 'lowerBoundEqual' },
        { key: 'between', label: '介于(两个数之间)', value: '' }
      ]
    }
  },
  computed: {
    key () {
      return this.data1.key
    }
  },
  watch: {
    data: {
      handler (val) {
        this.data1 = val
      },
      deep: true
    },
    data1: {
      handler (val) {
        this.$emit('update:data', val)
      },
      deep: true
    },
    key (val, oldval) { // 监测key,变化之后要重新赋值
      if (oldval === undefined) return
      this.data1.upperBound = ''
      this.data1.upperBoundEqual = ''
      this.data1.boundEqual = ''
      this.data1.lowerBound = ''
      this.data1.lowerBoundEqual = ''
      this.inputVal = undefined
    },
    inputVal (val) {
      if (!val) return
      var key = this.data1.key
      if (!key) {
        alert('先设置操作符')
        return
      }
      switch (key) {
        case 'lt':
          this.data1.upperBound = val
          break
        case 'le':
          this.data1.upperBoundEqual = val
          break
        case 'eq':
          this.data1.boundEqual = val
          break
        case 'gt':
          this.data1.lowerBound = val
          break
        case 'ge':
          this.data1.lowerBoundEqual = val
          break
        case 'between':
          this.data1.boundEqual = val
          break
        default:
      }
    }
  },
  mounted () {
    this.data1 = this.data
    this.setValue(this.data1)
  },
  methods: {
    del () {
      this.$emit('del')
    },
    setValue (val) {
      if (!val) return
      if (val.key && val.key !== '') {
        switch (val.key) {
          case 'lt':
            this.inputVal = val.upperBound
            val.label = '小于'
            break
          case 'le':
            this.inputVal = val.upperBoundEqual
            val.label = '小于等于'
            break
          case 'eq':
            this.inputVal = val.boundEqual
            val.label = '等于'
            break
          case 'gt':
            this.inputVal = val.lowerBound
            val.label = '大于'
            break
          case 'ge':
            this.inputVal = val.lowerBoundEqual
            val.label = '大于等于'
            break
          case 'between':
            val.label = '介于(两个数之间)'
            break
          default:
        }
      } else {
        if (val.lowerBound && val.lowerBound !== '') {
          val.key = 'gt'
          this.inputVal = val.lowerBound
          val.label = '大于'
        }
        if (val.upperBound && val.upperBound !== '') {
          val.key = 'lt'
          this.inputVal = val.upperBound
          val.label = '小于'
        }
      }
    }
  }
}
</script>
