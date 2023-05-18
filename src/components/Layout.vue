<script setup>
import Header from './Header.vue'
import Navbar from './Navbar.vue'
</script>

<template>
  <main class="flex w-full h-full bg-background-color">
    <Navbar />
    <section class="flex-1 flex flex-col pr-5">
      <Header />
      <slot></slot>
    </section>
  </main>
</template>
