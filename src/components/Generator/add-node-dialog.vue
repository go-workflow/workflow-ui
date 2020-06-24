<template>
  <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
    <div>
      <div
        v-if="dialog"
        class="ant-popover  ant-popover-placement-rightTop"
        style="left:55%;top:55%;transform-origin: -4px 0px;"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow" /><div
            class="ant-popover-inner"
            role="tooltip"
          >
            <div>
              <div class="ant-popover-inner-content">
                <div
                  class="add-node-popover"
                  data-spm-anchor-id="0.0.0.i102.2f244490UdKR44"
                >
                  <div class="add-node-popover-header">
                    <i
                      aria-label="icon: close"
                      tabindex="-1"
                      class="anticon anticon-close add-node-popover-close"
                      @click="dialog1 = false"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        class=""
                        data-icon="close"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        data-spm-anchor-id="0.0.0.i103.2f244490UdKR44"
                      ><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                      </svg>
                    </i>
                  </div>
                  <div class="add-node-popover-body">
                    <a
                      v-for="(n, index) in nodes"
                      :key="index"
                      :class="'add-node-popover-item ' + n.type"
                      @click="click(n)"
                    >
                      <div class="item-wrapper">
                        <span class="iconfont">
                          <svg
                            class=""
                            viewBox="64 64 896 896"
                            fill="currentColor"
                            aria-hidden="true"
                            width="1em"
                            height="1em"
                          ><path
                            :d="n.svgpath"
                          /></svg>
                        </span>
                      </div><p>{{ n.label }}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog1: false,
    nodes: [
      { type: 'approver', label: '审批人', svgpath: 'M644.8 581.568l160.64 187.456A64 64 0 0 1 756.842667 874.666667H267.157333a64 64 0 0 1-48.597333-105.642667l160.661333-187.434667c18.922667 11.52 39.466667 20.629333 61.205334 26.944L267.157333 810.666667H480v-128h64v128h212.842667l-173.269334-202.133334a254.613333 254.613333 0 0 0 61.226667-26.965333zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z' },
      { type: 'notifier', label: '抄送人', svgpath: 'M309.461333 205.994667a68.778667 68.778667 0 0 1 34.965334 18.837333l153.813333 153.813333 0.042667-0.085333 45.248 45.248-0.064 0.085333 161.557333 161.557334 0.064-0.085334 45.269333 45.290667-168.490666 168.533333c-48.597333 48.576-129.792 46.208-181.333334-5.333333L88.021333 481.28c-25.792-25.770667-26.986667-66.346667-2.688-90.666667a59.818667 59.818667 0 0 1 33.92-16.810666l102.912-14.805334 14.784-102.912c4.992-34.709333 37.461333-57.130667 72.533334-50.090666z m-11.690666 62.698666l-19.413334 146.496-146.538666 19.413334L446.848 749.653333c25.962667 25.962667 66.432 27.626667 90.368 3.690667l122.581333-122.602667-362.026666-362.026666z m525.44-3.84l101.205333 101.248a64 64 0 0 1 0 90.517334l-143.872 143.872-45.290667-45.290667 143.914667-143.850667-101.226667-101.226666a85.333333 85.333333 0 0 0-120.682666 0l-83.562667 83.52-45.226667-45.248 83.541334-83.52a149.333333 149.333333 0 0 1 211.2 0z' },
      { type: 'route', label: '条件分支', svgpath: 'M568.896 149.333333a64 64 0 0 1 64 64v113.770667a64 64 0 0 1-64 64H544v48.597333h140.501333a96 96 0 0 1 95.893334 91.477334l0.106666 4.522666-0.021333 79.402667H810.666667a64 64 0 0 1 64 64v113.792a64 64 0 0 1-64 64h-113.770667a64 64 0 0 1-64-64v-113.792a64 64 0 0 1 64-64h19.584l0.021333-79.125333-0.149333-3.349334a32 32 0 0 0-31.850667-28.928l-348.864 0.021334c-17.664 0.746667-31.36 15.68-30.592 34.688l-0.021333 76.693333h22.08a64 64 0 0 1 64 64v113.792a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64v-113.792a64 64 0 0 1 64-64h27.690667l0.042667-75.349333a96 96 0 0 1 87.36-99.669334l4.501333-0.298666a96 96 0 0 1 4.053333-0.085334H480v-48.597333h-24.896a64 64 0 0 1-64-64V213.333333a64 64 0 0 1 64-64h113.792zM327.104 679.104H213.333333v113.792h113.770667v-113.792z m483.562667 0h-113.770667v113.792H810.666667v-113.792zM568.896 213.333333h-113.792v113.770667h113.792V213.333333z' }
    ]
  }),
  watch: {
    'dialog' (val) {
      this.dialog1 = val
    },
    dialog1 (val) {
      this.$emit('update:dialog', val)
    }
  },
  methods: {
    click (item) {
      this.dialog1 = false
      switch (item.type) {
        case 'approver':
          this.addApprover(item)
          break
        case 'route':
          this.addRoute(item)
          break
        case 'notifier':
          this.addNotifier(item)
          break
        default:
          this.$Message.error('暂时不支持')
      }
    },
    addApprover (item) {
      // console.log(this.node)
      var node = {
        name: '审批人',
        prevId: this.node.nodeId,
        nodeId: '' + new Date().getTime(),
        type: 'approver'
      }
      this.$emit('addnode', node)
    },
    addNotifier (item) {
      var node = {
        name: '抄送人',
        prevId: this.node.nodeId,
        nodeId: '' + new Date().getTime(),
        type: 'notifier'
      }
      this.$emit('addnode', node)
    },
    addRoute (item) {
      var nodeId = new Date().getTime()
      var node = {
        type: 'route',
        prevId: this.node.nodeId,
        nodeId: '' + nodeId,
        conditionNodes: [
          { name: '条件1', type: 'condition', prevId: '' + nodeId, nodeId: '' + (nodeId + 10) },
          { name: '条件2', type: 'condition', prevId: '' + (nodeId + 10), nodeId: '' + (nodeId + 20) }
        ]
      }
      this.$emit('addnode', node)
    }
  }
}
</script>
