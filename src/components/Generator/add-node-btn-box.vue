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
      this.$emit('addnode', node)
    }
  }
}
</script>
