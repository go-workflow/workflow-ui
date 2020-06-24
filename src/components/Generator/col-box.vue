<template>
  <div class="col-box">
    <div
      v-if="pos == 0"
      class="top-left-cover-line"
    />
    <div
      v-if="pos == 0"
      class="bottom-left-cover-line"
    />
    <div
      v-if="pos == (total-1)"
      class="top-right-cover-line"
    />
    <div
      v-if="pos == (total-1)"
      class="bottom-right-cover-line"
    />
    <Node
      v-for="(item, index) in items"
      :key="index"
      :node="item"
      @addnode="addnode"
      @delNode="delNode(item)"
      @delConditionNode="delConditionNode"
      @addConditionFactor="addConditionFactor"
    />
  </div>
</template>
<script>
import { iteratorData, addNewNode, delNode } from './process'
export default {
  name: 'ColBox',
  props: {
    node: {
      type: Object,
      default: undefined
    },
    total: {
      type: Number,
      default: 0
    },
    pos: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    items: [],
    node1: null
  }),
  watch: {
    node: {
      handler (val) {
        // console.log(val)
        if (val) {
          this.getData(val)
          this.node1 = val
        }
      },
      deep: true
    }
  },
  mounted () {
    if (this.node) {
      this.getData(this.node)
      this.node1 = this.node
    }
  },
  methods: {
    getData (data) {
      this.items = []
      iteratorData(this.items, data)
    },
    addnode (node) {
      // console.log(this.node1)
      addNewNode(node, this.node1, this.items)
    },
    delNode (node) {
      delNode(node, this.node1, this.items)
    },
    delConditionNode () {
      this.$emit('delConditionNode')
    },
    addConditionFactor (node) {
      this.$emit('addConditionFactor', node)
    }
  }
}
</script>
