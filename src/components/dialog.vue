<template>
  <div
    v-if="dialog"
    role="document"
    class="v-dialog__content v-dialog__content--active"
    style="z-index: 202;"
    tabindex="0"
  >
    <div
      class="v-dialog v-dialog--active"
      style="width: 500px;"
    >
      <div class="v-card v-sheet theme--light">
        <div
          primary-title=""
          class="v-card__title headline grey lighten-2"
        >
          Privacy Policy
        </div><div class="v-card__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div><hr
          role="separator"
          aria-orientation="horizontal"
          class="v-divider theme--light"
        ><div class="v-card__actions">
          <div class="spacer" />
          <button
            type="button"
            class="v-btn v-btn--flat v-btn--text theme--light v-size--default primary--text"
            @click="close"
          >
            <span class="v-btn__content">
              I accept
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './../assets/dialog.sass'
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.dialog = false
    }
  }
}
</script>
