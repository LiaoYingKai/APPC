<script setup>
import IconArrow from '../../../components/icons/IconArrow.vue'
import { computed, ref } from 'vue'

const total = 480
const pages = computed(() => total / 10)
const pageOptions = computed(() => {
  const options = new Array(pages.value).fill(true).map((_, index) => index + 1)
  return options
})

const currentPage = ref(1)

const handlePrev = () => {
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1
  }
}

const handleNext = () => {
  if (currentPage.value < pages.value) {
    currentPage.value = currentPage.value + 1
  }
}
</script>

<template>
  <div class="flex pt-6 pb-2.5 items-center justify-between">
    <p class="font-semibold">My Collection</p>
    <div class="flex gap-6 items-center">
      <p class="text-gray">Total {{ total }} |</p>
      <div class="flex gap-5">
        <button class="rotate-90" @click="handlePrev()">
          <IconArrow></IconArrow>
        </button>
        <v-select
          class="page-select"
          v-model="currentPage"
          :options="pageOptions"
          :clearable="false"
          :searchable="false"
        ></v-select>
        <button class="-rotate-90" @click="handleNext()">
          <IconArrow></IconArrow>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.page-select {
  width: 60px;
  height: 32px;
  background-color: #fff;
  border-radius: 8px;
}

.page-select .vs__search {
  display: none;
}

.page-select .vs__dropdown-toggle {
  border-width: 0px;
}
</style>
