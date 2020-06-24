<template>
  <div class="add-node-btn-box">
    <AddNodeBtn
      :node="node"
      @addnode="addnode"
    />
  </div>
</template>
<script>
import AddNodeBtn from './add-node-btn'
export default {
  name: 'AddNodeBtnBox',
  components: {
    AddNodeBtn
  },
  props: {
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
  }),
  methods: {
    addnode (node) {
      // console.log('add-node-btn-box 新结节')
      // console.log(node)
      this.$emit('addnode', node)
    }
  }
}
</script>
