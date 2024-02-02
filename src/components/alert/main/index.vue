<template>
  <div
    v-if="show"
    :class="['fly-alert',`fly-alert--${type}`]"
  >
    <slot name="title">
      {{ title }}
    </slot>
    <i
      v-if="closable"
      class="fly-icon fly-icon-close fly-alert__close"
      @click="handleClose"
    />
  </div>
</template>
<script>
export default {
  name: 'FlyAlert',
  props: {
    type: {
      type: String,
      validator (value) {
        return ['success', 'warning', 'danger', 'info'].indexOf(value) > -1
      },
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    handleClose () {
      this.show = false
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
