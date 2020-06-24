<template>
  <div class="add-node-btn">
    <button
      class="btn"
      type="button"
      @click="click"
    >
      <span class="iconfont"><svg
        viewBox="64 64 896 896"
        focusable="false"
        class=""
        data-icon="close"
        width="1em"
        height="1em"
        fill="currentColor"
      ><path
        d="M810.666667 554.666667h-256v256h-85.333334v-256H213.333333v-85.333334h256V213.333333h85.333334v256h256v85.333334z"
      /></svg></span>
    </button>
    <AddNodeDialog
      :dialog.sync="dialog"
      :node="node"
      @addnode="addnode"
    />
  </div>
</template>
<script>
import AddNodeDialog from './add-node-dialog'
export default {
  name: 'AddNodeBtn',
  components: {
    AddNodeDialog
  },
  props: {
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    click () {
      this.dialog = true
    },
    addnode (node) {
      this.$emit('addnode', node)
    }
  }
}
</script>
