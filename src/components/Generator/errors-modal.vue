<template>
  <AModal :dialog.sync="dialog1">
    <div
      class="ant-modal-body"
    >
      <div
        class="ant-modal-confirm-body-wrapper"
      >
        <div class="ant-modal-confirm-body">
          <i
            aria-label="icon: close-circle"
            class="anticon anticon-close-circle"
          ><svg
            viewBox="64 64 896 896"
            focusable="false"
            class=""
            data-icon="close-circle"
            width="1em"
            height="1em"
            fill="currentColor"
          ><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" /><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /></svg></i><span class="ant-modal-confirm-title">当前无法发布</span><div class="ant-modal-confirm-content">
            <div>
              <p class="error-modal-desc">
                以下内容不完善，需进行修改
              </p><div
                class="error-modal-list"
              >
                <div
                  v-for="(item, index) in data"
                  :key="index"
                  class="error-modal-item"
                >
                  <div class="error-modal-item-label">
                    流程设计
                  </div>
                  <div class="error-modal-item-content">
                    {{ item.name }} 未选择
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><div class="ant-modal-confirm-btns">
          <button
            type="button"
            class="ant-btn"
            @click="dialog1 = false"
          >
            <span>我知道了</span>
          </button>
        </div>
      </div>
    </div>
  </AModal>
</template>
<script>
import AModal from './../AModal/AModal'
export default {
  components: {
    AModal
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: undefined
    }
  },
  data () {
    return {
      dialog1: false
    }
  },
  watch: {
    'dialog' (val) {
      this.dialog1 = val
    },
    dialog1 (val) {
      this.$emit('update:dialog', val)
    }
  }
}
</script>
