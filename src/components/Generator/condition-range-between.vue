<template>
  <div class="range-between">
    <span class="range-group">
      <ConditionRangeBetweenNumber :value.sync="num1" />
      <ConditionRangeBetweenSelect :value.sync="val1" />
    </span>
    <span class="range-group-label">{{ data.paramLabel }}</span>
    <span class="range-group">
      <ConditionRangeBetweenSelect :value.sync="val2" />
      <ConditionRangeBetweenNumber :value.sync="num2" />
    </span>
  </div>
</template>
<script>
import ConditionRangeBetweenSelect from './condition-range-between-select'
import ConditionRangeBetweenNumber from './condition-range-between-number'
export default {
  name: 'ConditionRangeBetween',
  components: {
    ConditionRangeBetweenSelect,
    ConditionRangeBetweenNumber
  },
  props: {
    data: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
      val1: {
        key: '',
        label: ''
      },
      val2: {
        key: '',
        label: ''
      },
      num1: undefined,
      num2: undefined,
      data1: undefined
    }
  },
  watch: {
    val1: {
      handler (val) {
        if (val.key === 'lt') {
          this.data1.lowerBound = this.data1.lowerBoundEqual
          this.data1.lowerBoundEqual = undefined
        } else {
          this.data1.lowerBoundEqual = this.data1.lowerBound
          this.data1.lowerBound = undefined
        }
        this.$emit('update:data', this.data1)
      },
      deep: true
    },
    val2: {
      handler (val) {
        if (val.key === 'lt') {
          this.data1.upperBound = this.data1.upperBoundEqual
          this.data1.upperBoundEqual = undefined
        } else {
          this.data1.upperBoundEqual = this.data1.upperBound
          this.data1.upperBound = undefined
        }
        this.$emit('update:data', this.data1)
      },
      deep: true
    },
    num1 (val) {
      if (this.val1.key === 'lt') {
        this.data1.lowerBound = val
      } else {
        this.data1.lowerBoundEqual = val
      }
      this.$emit('update:data', this.data1)
    },
    num2 (val) {
      if (this.val2.key === 'lt') {
        this.data1.upperBound = val
      } else {
        this.data1.upperBoundEqual = val
      }
      this.$emit('update:data', this.data1)
    }
  },
  mounted () {
    this.data1 = this.data
    this.getVal1()
    this.getVal2()
    this.num1 = this.data1.lowerBound && this.data1.lowerBound !== '' ? this.data1.lowerBound : this.data1.lowerBoundEqual
    this.num2 = this.data1.upperBound && this.data1.upperBound !== '' ? this.data1.upperBound : this.data1.upperBoundEqual
  },
  methods: {
    getVal1 () {
      if (this.data1.lowerBound && this.data1.lowerBound !== '') {
        this.val1.key = 'lt'
        this.val1.label = '<'
      } else {
        this.val1.key = 'le'
        this.val1.label = '≤'
      }
    },
    getVal2 () {
      if (this.data1.upperBound && this.data1.upperBound !== '') {
        this.val2.key = 'lt'
        this.val2.label = '<'
      } else {
        this.val2.key = 'le'
        this.val2.label = '≤'
      }
    }
  }
}
</script>
