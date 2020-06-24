<template>
  <AModal
    :dialog.sync="dialog1"
    @close="cancel"
  >
    <div class="panel-approver">
      <div class="common-group approver-type-wrapper">
        <div class="group-title">
          选择审批对象
        </div>
        <div
          class="group-content"
        >
          <div>
            <div
              class="ant-radio-group ant-radio-group-outline"
            >
              <label
                v-for="(a, index) in approvers"
                :key="index"
                :class="[currentApp === a.value ? 'ant-radio-wrapper ant-radio-wrapper-checked' : 'ant-radio-wrapper']"
                @click="setApprover(a)"
              >
                <span :class="[currentApp === a.value ? 'ant-radio ant-radio-checked' : 'ant-radio']">
                  <input
                    type="radio"
                    class="ant-radio-input"
                    :value="a.value"
                  ><span class="ant-radio-inner" /></span>
                <span>{{ a.label }}</span>
              </label>
            </div>
          </div>
          <div
            v-if="currentApp === 'target_label' && !showAddRole"
            class="approver-actions"
          >
            <button
              type="button"
              class="ant-btn ant-btn-primary"
              ant-click-animating-without-extra-node="false"
              @click="addRole"
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
              ><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" /><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" /></svg></i><span>添加角色</span>
            </button>
          </div>
          <div
            v-if="showAddRole"
            class="ant-row-flex ant-row-flex-space-around ant-row-flex-middle condition-group"
          >
            角色名&nbsp;&nbsp;
            <div
              class="ant-select ant-select-enabled"
              style="min-width: 150px;"
            >
              <div class="ant-input-number-input-wrap">
                <input
                  v-model="properties1.actionerRules[0].labelNames"
                  class="ant-input-number-input"
                  placeholder="输入角色名"
                >
              </div>
            </div>
          </div>
          <div
            v-if="currentApp === 'target_management'"
            class="approver-actions"
          >
            发起人的&nbsp;&nbsp;<div
              class="ant-select ant-select-enabled"
              style="min-width: 150px;"
            >
              <div
                class="ant-select-selection ant-select-selection--single"
                aria-expanded="false"
                tabindex="0"
              >
                <div
                  class="ant-select-selection__rendered"
                  data-spm-anchor-id="0.0.0.i263.2f244490UdKR44"
                >
                  <div
                    class="ant-select-selection-selected-value"
                    title="直接主管"
                    style="display: block; opacity: 1;"
                    data-spm-anchor-id="0.0.0.i265.2f244490UdKR44"
                  >
                    直接主管
                  </div>
                </div>
              </div>
            </div><div class="area-auto-up" />
          </div>
        </div>
      </div>
      <div class="common-group area-act-type-wrapper">
        <div class="group-title">
          <div>多人审批时采用的审批方式</div>
        </div><div class="group-content">
          <div class="ant-radio-group ant-radio-group-outline">
            <label
              v-for="(a, i) in actTypes"
              :key="i"
              :class="[currentAction === a.value ? 'ant-radio-wrapper ant-radio-wrapper-checked' : 'ant-radio-wrapper']"
              @click="setAction(a)"
            >
              <span :class="[currentAction === a.value ? 'ant-radio ant-radio-checked' : 'ant-radio']">
                <input
                  type="radio"
                  class="ant-radio-input"
                  :value="a.value"
                ><span class="ant-radio-inner" /></span>
              <span>{{ a.label }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="common-group none-actioner-wrapper">
        <button
          type="button"
          class="ant-btn ant-btn-default"
          @click="cancel"
        >
          <span>取 消</span>
        </button><button
          type="button"
          class="ant-btn ant-btn-primary"
          @click="save"
        >
          <span>保 存</span>
        </button>
      </div>
      <div class="common-group none-actioner-wrapper">
        {{ properties1 }}
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
    properties: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog1: false,
    showAddRole: false,
    currentApp: 'target_management',
    currentAction: 'or',
    temp: {},
    approvers: [
      { label: '主管', value: 'target_management', color: 'red' },
      { label: '角色', value: 'target_label', color: 'green' }
    ],
    actTypes: [
      { label: '或签（一名审批人同意或拒绝即可）', value: 'or', color: 'red' },
      { label: '会签（须所有审批人同意）', value: 'and', color: 'green' }
    ],
    properties1: {
      actionerRules: [{
        type: 'target_management',
        level: 1,
        isEmpty: false,
        autoUp: true,
        actType: 'or'
      }]
    }
  }),
  watch: {
    'dialog' (val) {
      this.dialog1 = val
    },
    dialog1 (val) {
      this.$emit('update:dialog', val)
    }
  },
  mounted () {
    this.properties1 = this.properties
    this.init()
    Object.assign(this.temp, this.properties1)
  },
  methods: {
    init () {
      this.properties1 = this.properties1 ? this.properties1 : {
        actionerRules: [
          {
            type: 'target_management',
            level: 1,
            isEmpty: false,
            autoUp: true,
            actType: 'or'
          }
        ]
      }
      var rule = this.properties1.actionerRules && this.properties1.actionerRules[0]
      if (rule) {
        this.currentApp = rule.type
        this.currentAction = rule.actType
        if (rule.labelNames) this.showAddRole = true
      }
    },
    save () {
      var rule = this.properties1.actionerRules[0]
      switch (rule.type) {
        case 'target_label':
          if (!rule.labelNames || rule.labelNames === '') {
            alert('角色不能为空')
            return
          }
          break
      }
      this.dialog1 = false
      Object.assign(this.temp, this.properties1)
      this.$emit('setProperties', this.properties1)
    },
    cancel () {
      this.dialog1 = false
      this.properties1 = {}
      Object.assign(this.properties1, this.temp)
      this.init()
      this.$emit('setProperties', this.properties1)
    },
    setApprover (app) {
      this.currentApp = app.value
      if (app.value === 'target_label') {

      } else {
        this.showAddRole = false
      }
      this.properties1.actionerRules = []
      switch (app.value) {
        case 'target_management':
          this.properties1.actionerRules.push({
            type: 'target_management',
            level: 1,
            isEmpty: false,
            autoUp: true
          })
          break
        case 'target_label':
          this.properties1.actionerRules.push({
            type: 'target_label',
            labelNames: '',
            labels: '',
            isEmpty: false,
            memberCount: 1,
            actType: 'or'
          })
          break
        default:
      }
    },
    setAction (act) {
      this.currentAction = act.value
      this.properties1.actionerRules[0].actType = act.value
    },
    addRole () {
      this.showAddRole = true
    }
  }
}
</script>
