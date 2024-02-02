<template>
  <div class="fly-textarea">
    <textarea
      v-model="model"
      class="fly-textarea__native"
      :class="{
        'is-disabled':disabled
      }"
      :rows="rows"
      :cols="cols"
      :disabled="disabled"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :minlength="minLength"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @change="$emit('change')"
    />
  </div>
</template>
<script>
export default {
  name: 'FlyTextarea',
  props: {
    modelValue: [String, Number],
    placeholder: String,
    disabled: Boolean,
    maxLength: Number,
    minLength: Number,
    rows: Number,
    cols: Number
  },
  computed: {
    model: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
