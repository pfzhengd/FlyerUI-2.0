<template>
  <div class="nui-demo">
    {{ msg }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('Hello NUI')
</script>

<style lang="scss">
@import './index.scss';
</style>
