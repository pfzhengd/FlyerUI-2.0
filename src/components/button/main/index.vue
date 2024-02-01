<template>
  <button
    :type="nativeType"
    :disabled="disabled"
    :class="[
      'fly-button',
      `fly-button--${type}`,
      `fly-button--${size}`,
      {
        'is-disabled':disabled,
        'is-loading':loading,
        'is-plain':plain,
        'is-circle':circle,
        'is-round':round
      }
    ]"
    @click="handleClick"
  >
    <i
      v-if="icon"
      :class="['fly-icon fly-button__icon',icon]"
    />
    <i
      v-if="loading"
      class="fly-icon fly-button__icon fly-icon-loading"
    />
    <span><slot name="default" /></span>
  </button>
</template>
<script>
export default {
  name: 'FlyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['large', 'medium', 'small', 'mini'].indexOf(value) > -1
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
