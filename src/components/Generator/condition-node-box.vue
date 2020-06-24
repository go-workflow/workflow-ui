<template>
  <div class="condition-node-box">
    <div class="auto-judge node_8f5e_917f">
      <div class="sort-left">
        &lt;
      </div><div class="title-wrapper">
        <span
          style="float:right;color: grey;"
          @click="delConditionNode"
        >X</span>
        <span
          class="editable-title"
          data-spm-anchor-id="0.0.0.i35.2f244490ZxXSWD"
        >{{ node.name }}</span>
      </div>
      <div
        class="content"
        @click="setProperties"
      >
        <div>{{ text1 }}</div>
      </div>
    </div>
    <AddNodeBtn
      :node="node"
      @addnode="addnode"
    />
    <AddNodeCondition
      :show.sync="show"
      :properties="node.properties"
      @on-success="setPropertiesOK"
    />
  </div>
</template>
<script>
import AddNodeBtn from './add-node-btn'
import AddNodeCondition from './add-node-condition'
export default {
  components: {
    AddNodeBtn,
    AddNodeCondition
  },
  props: {
    text: {
      type: String,
      default: '请设置条件'
    },
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    show: false,
    text1: ''
  }),
  mounted () {
    this.text1 = this.getText()
    if (!this.node.properties) {
      this.node.properties = {
        conditions: [[]]
      }
    }
  },
  methods: {
    addnode () {
      this.$emit('addnode')
    },
    delConditionNode () {
      this.$emit('delConditionNode')
    },
    setProperties () {
      this.show = true
    },
    setPropertiesOK (properties) {
      this.node.properties = properties
      this.$emit('addConditionFactor', this.node)
      // this.text1.set(this.getText())
      this.text1 = this.getText()
    },
    getText () {
      var text = '请设置条件'
      if (!this.node.properties) {
        return text
      }
      text = ''
      this.node.properties.conditions[0].forEach(cond => {
        var temp = ''
        temp += cond.paramLabel
        switch (cond.key) {
          case 'lt':
            temp += '<' + cond.upperBound
            break
          case 'le':
            temp += '≤' + cond.upperBoundEqual
            break
          case 'eq':
            temp += '=' + cond.boundEqual
            break
          case 'gt':
            temp += '>' + cond.lowerBound
            break
          case 'ge':
            temp += '≥' + cond.lowerBoundEqual
            break
          case 'between':
            temp = ''
            if (cond.lowerBound && cond.lowerBound !== '') {
              temp = cond.lowerBound + '<'
            } else {
              temp = cond.lowerBoundEqual + '≤'
            }
            temp += cond.paramLabel
            if (cond.upperBound && cond.upperBound !== '') {
              temp += '<' + cond.upperBound
            } else {
              temp += '≤' + cond.upperBoundEqual
            }
            break
          default:
        }
        temp += ' 且 '
        text += temp
      })
      text = text.substring(0, text.length - 2)
      return text
    }
  }
}
</script>
