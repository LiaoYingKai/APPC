<script setup>
import { ref } from 'vue'
import IconSearch from './icons/header/IconSearch.vue'
import IconWeather from './icons/header/IconWeather.vue'
import IconSetting from './icons/header/IconSetting.vue'
import IconNotification from './icons/header/IconNotification.vue'
import IconArrow from './icons/IconArrow.vue'

const countryValue = ref('Antananarivo')
const countryOptions = ['Antananarivo', 'Hongkong', 'Taipei', 'Tokyo']

const searchValue = ref('By All')
const searchOptions = ['By All', 'By Station', 'By Country']
</script>

<template>
  <header class="py-8 flex justify-between items-center">
    <div class="flex gap-2">
      <div class="flex gap-2.5 px-6 py-3 bg-white rounded-lg border-1 border-solid border-gray">
        <input />
        <div class="w-0.25 h-full bg-black"></div>
        <IconSearch />
      </div>
      <v-select
        class="search-select"
        v-model="searchValue"
        :options="searchOptions"
        :clearable="false"
        :searchable="false"
      ></v-select>
    </div>
    <div class="flex items-center gap-12">
      <div class="flex items-center gap-3">
        <IconWeather />
        <p class="font-semibold text-lg">09:54 am</p>
        <v-select
          class="country-select"
          v-model="countryValue"
          :options="countryOptions"
          :clearable="false"
          :searchable="false"
        ></v-select>
      </div>
      <div>
        <router-link to="/setting">
          <IconSetting />
        </router-link>
      </div>
      <div>
        <router-link to="/notify">
          <IconNotification />
        </router-link>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-12.5 h-12.5 bg-fuchsia-100 rounded-full"></div>
        <IconArrow />
      </div>
    </div>
  </header>
</template>

<style lang="css">
.search-select {
  width: 132px;
  border-radius: 8px;
  background-color: #fff;
}

.search-select .vs__search {
  display: none;
}

.search-select .vs__dropdown-toggle {
  border-color: #737791;
  height: 100%;
  border-radius: 8px;
}

.country-select {
  width: 144px;
}

.country-select .vs__search {
  display: none;
}

.country-select .vs__dropdown-toggle {
  border: none;
}
</style>
