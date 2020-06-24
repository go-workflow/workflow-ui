<template>
  <div style="float:left">
    <button
      type="button"
      class="ant-btn ant-btn-primary"
      style="margin: 16px 10px 16px 24px;"
      @click="click"
    >
      <i
        aria-label="icon: plus"
        class="anticon anticon-plus"
        style="color: rgb(255, 255, 255);"
      ><svg
        viewBox="64 64 896 896"
        focusable="false"
        class=""
        data-icon="plus"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      ><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" /><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" /></svg></i><span>添加条件</span>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
