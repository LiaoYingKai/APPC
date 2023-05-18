<script setup>
import Header from './Header.vue'
import Navbar from './Navbar.vue'
import Breadcrumbs from './Breadcrumbs.vue'
</script>

<template>
  <main class="flex w-full h-full bg-background-color">
    <Navbar />
    <section class="flex-1 flex flex-col pr-5">
      <Header />
      <Breadcrumbs/>
      <slot></slot>
    </section>
  </main>
</template>
