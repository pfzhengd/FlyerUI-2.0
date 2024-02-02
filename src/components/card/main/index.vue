<template>
  <div class="fly-card">
    <div
      v-if="$slots.header"
      class="fly-card__header"
    >
      <slot name="header" />
    </div>
    <div class="fly-card__body">
      <slot name="default" />
    </div>
    <div
      v-if="$slots.footer"
      class="fly-card__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlyCard'
}
</script>
<style lang="scss">
@import './index.scss';
</style>
