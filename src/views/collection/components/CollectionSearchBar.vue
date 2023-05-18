<script setup>
import { ref } from 'vue'

const options = ['All', 'News', 'HR Announcement']
const selectValue = ref('All')
const inputValue = ref('')

const handleSearch = () => {
  console.log(selectValue.value)
  console.log(inputValue.value)
}
</script>

<template>
  <div class="p-5 bg-white flex items-end gap-4">
    <div class="flex flex-col gap-1.5">
      <label class="text-sm text-gray">Category</label>
      <v-select
        class="collection-select"
        v-model="selectValue"
        :options="options"
        :clearable="false"
        :searchable="false"
      ></v-select>
    </div>
    <div class="flex flex-col gap-1.5">
      <label class="text-sm text-gray">Subtitle</label>
      <input
        class="h-12 px-4 py-2.5 border-1 border-background-color border-solid rounded-lg"
        v-model="inputValue"
      />
    </div>
    <button
      @click="handleSearch"
      class="bg-background-color text-button-text-color text-lg h-12 rounded-lg flex items-center justify-center px-4"
    >
      Search
    </button>
  </div>
</template>

<style lang="css">
.collection-select .vs__dropdown-toggle {
  height: 48px;
  width: 256px;
  border-color: #f2f2f7;
}
</style>
