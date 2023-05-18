<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbList = computed(() => route.matched.filter((item) => !!item.meta.breadcrumbName))
</script>

<template>
  <div class="py-5 pl-2 flex items-center gap-4 text-gray">
    <template v-for="(item, index) in breadcrumbList" :key="item.path">
      <template v-if="index + 1 !== breadcrumbList.length">
        <span>
          {{ item.meta.breadcrumbName }}
        </span>
        <span> > </span>
      </template>
      <span v-else class="text-deep-black">{{ item.meta.breadcrumbName }}</span>
    </template>
  </div>
</template>
