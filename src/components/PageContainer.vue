<script setup>
import Breadcrumbs from './Breadcrumbs.vue'
</script>

<template>
  <Breadcrumbs/>
  <section class="flex-1  overflow-hidden">
    <slot></slot>
  </section>
</template>