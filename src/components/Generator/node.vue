<template>
  <div>
    <NodeWrap
      v-if="node.type == 'start' || node.type == 'approver' || node.type == 'notifier'"
      :node="node"
      @addnode="addnode"
      @delNode="delNode"
    />
    <ConditionNode
      v-if="node.type == 'condition'"
      :node.sync="node"
      @addnode="addnode"
      @delConditionNode="delConditionNode"
      @addConditionFactor="addConditionFactor"
    />
    <BranchWrap
      v-if="node.type == 'route'"
      :node="node"
      @addnode="addnode"
      @delNode="delNode"
    />
  </div>
</template>
<script>
import NodeWrap from './node-wrap'
import ConditionNode from './condition-node'
import BranchWrap from './branch-wrap'
export default {
  name: 'Node',
  components: {
    NodeWrap,
    BranchWrap,
    ConditionNode
  },
  props: {
    node: {
      type: Object,
      default: undefined
    }
  },
  methods: {
    addnode (node) {
      this.$emit('addnode', node)
    },
    delNode () {
      this.$emit('delNode')
    },
    delConditionNode () {
      this.$emit('delConditionNode')
    },
    addConditionFactor (node) {
      this.$emit('addConditionFactor', node)
      this.node = node
      // console.log(this.node)
    }
  }
}
</script>
