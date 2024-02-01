<template>
  <div
    class="fly-input"
    @mouseover="hovering=true"
  >
    <span
      v-if="$slots.prepend"
      class="fly-input__prepend"
    >
      <slot name="prepend" />
    </span>
    <span
      v-if="isShowPrefix"
      :class="[
        'fly-input__prefix',
        `fly-input__prefix--${size}`]"
    >
      <slot name="prefix">
        <i
          class="fly-icon"
          :class="prefixIcon"
        />
      </slot>
    </span>
    <input
      ref="input"
      :type="selfType"
      :class="['fly-input__native',
               `fly-input__native--${size}`,
               {
                 'is-disabled':disabled,
                 'is-prefix':isShowPrefix,
                 'is-suffix':isShowSuffix,
                 'is-prepend':$slots.prepend,
                 'is-append':$slots.append,
                 'is-round':isRound
               }]"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxLength"
      :minlength="minLength"
      :placeholder="placeholder"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @input="handleInput"
    >
    <span
      v-if="isShowSuffix"
      :class="[
        'fly-input__suffix',
        `fly-input__suffix--${size}`]"
    >
      <slot name="suffix">
        <i
          class="fly-icon"
          :class="suffixIcon"
        />
      </slot>
    </span>
    <span
      v-if="$slots.append"
      class="fly-input__append"
    >
      <slot name="append" />
    </span>
    <i
      v-if="showPassword"
      class="fly-icon fly-icon-eye_protection fly-input__eye"
      @click="handleShowPassword"
    />
    <i
      v-if="clearable"
      v-show="isShowClear"
      class="fly-icon fly-icon-close fly-input__clear"
      @click="handleClear"
    />
  </div>
</template>
<script>
export default {
  name: 'FlyInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['large', 'medium', 'small'].indexOf(value) > -1
      }
    },
    maxLength: {
      type: Number,
      default: 20
    },
    minLength: {
      type: Number,
      default: 0
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      focused: false,
      hovering: false,
      selfType: this.type
    }
  },
  computed: {
    isShowClear: {
      get () {
        return (this.value && this.value.length > 0) && (this.focused || this.hovering)
      }
    },
    isShowPrefix: {
      get () {
        return this.prefixIcon || this.$slots.prefix
      }
    },
    isShowSuffix: {
      get () {
        return this.suffixIcon || this.$slots.suffix
      }
    },
    isRound: {
      get () {
        return this.round && (!this.$slots.append && !this.$slots.prepend)
      }
    }
  },
  created () {
    if (this.showPassword) {
      this.clearCode = false
    }
  },
  methods: {
    handleInput ($event) {
      this.$emit('input', $event.target.value)
    },
    handleClear ($event) {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear', '')
      this.focus()
    },
    handleBlur ($event) {
      this.$emit('blur', $event)
      this.focused = false
    },
    handleFocus ($event) {
      this.focused = true
      this.$emit('focus', $event)
    },
    handleChange ($event) {
      this.$emit('change', $event.target.value)
    },
    handleShowPassword () {
      if (this.clearCode) {
        this.clearCode = false
        this.selfType = 'password'
      } else {
        this.clearCode = true
        this.selfType = 'input'
      }
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
