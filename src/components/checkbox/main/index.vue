<template>
  <label class="fly-checkbox">
    <span
      :class="['fly-icon fly-checkbox__input',{
        'is-checked':isChecked,
        'is-disabled':disabled,
        'is-indeterminate':indeterminate
      }]"
    />
    <span class="fly-checkbox__label">
      <slot />
    </span>
    <input
      v-model="model"
      class="fly-checkbox__input-native"
      :disabled="disabled"
      :value="label"
      :name="name"
      :true-value="trueValue"
      :false-value="falseValue"
      type="checkbox"
      @change="handleChange"
    >
  </label>
</template>
<script>
import { findParentByName, emitter } from '../../../utils/index'
export default {
  name: 'FlyCheckbox',
  mixins: [emitter],
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selfModel: undefined
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.parent.value : this.selfModel
      },
      set (newValue) {
        if (this.isGroup) {
          this.dispatch('FlyCheckboxGroup', 'input', [newValue])
        } else {
          this.selfModel = newValue
          this.$emit('input', newValue)
        }
      }
    },
    isChecked: {
      get () {
        return this.isGroup
          ? this.parent.value.indexOf(this.label) > -1
          : typeof this.model === 'boolean' ? this.model : this.model === this.trueValue
      }
    },
    isGroup: {
      get () {
        return !!this.parent
      }
    },
    parent: {
      get () {
        return findParentByName('FlyCheckboxGroup', this)
      }
    }
  },
  watch: {
    modelValue () {
      this.model = this.modelValue
    }
  },
  created () {
    this.selfModel = this.modelValue || this.checked
  },
  methods: {
    handleChange (e) {
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch('FlyCheckboxGroup', 'change', [this.parent.value])
        } else {
          this.$emit('change', this.model)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
