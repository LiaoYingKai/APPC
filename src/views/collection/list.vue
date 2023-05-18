<script setup>
import CollectionSearchBar from './components/CollectionSearchBar.vue'
import CollectionTitle from './components/CollectionTitle.vue'
import CollectionItem from './components/CollectionItem.vue'

const fakeData = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  }
]
</script>

<template>
  <section class="flex-1 flex flex-col overflow-hidden">
    <CollectionSearchBar />
    <CollectionTitle />
    <div class="bg-white overflow-y-scroll scroll-hidden flex-1">
      <CollectionItem v-for="item in fakeData" :key="item.id" :dataSource="item"></CollectionItem>
    </div>
  </section>
</template>
