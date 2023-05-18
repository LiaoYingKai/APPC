<script setup>
import { ref } from 'vue'
import logoUrl from '@/assets/images/logo.png'
import IconMenu from './icons/IconMenu.vue'
import IconArrow from './icons/IconArrow.vue'
import IconHome from './icons/navbar/IconHome.vue'
import IconShoppingCart from './icons/navbar/IconShoppingCart.vue'
import IconService from './icons/navbar/IconService.vue'
import IconCarrier from './icons/navbar/IconCarrier.vue'
import IconFinance from './icons/navbar/IconFinance.vue'
import IconHr from './icons/navbar/IconHr.vue'

const routes = [
  {
    icon: IconHome,
    name: 'Home General',
    children: [
      {
        name: 'Option_1',
        link: '/'
      },
      {
        name: 'Option_2',
        children: [
          {
            name: 'Option_2-1',
            link: '/'
          },
          {
            name: 'Option_2-2',
            link: '/'
          }
        ]
      },
      {
        name: 'Option_3',
        link: '/'
      }
    ]
  },
  {
    icon: IconShoppingCart,
    name: 'Marketing & Sales Marketing',
    children: [
      {
        name: 'Collection',
        link: '/collection'
      },
      {
        name: 'Option_2',
        children: [
          {
            name: 'Option_2-1',
            link: '/'
          },
          {
            name: 'Option_2-2',
            link: '/'
          }
        ]
      },
      {
        name: 'Option_3',
        link: '/'
      }
    ]
  },
  {
    icon: IconService,
    name: 'Customer Service & Operation',
    children: [
      {
        name: 'Option_1',
        link: '/'
      }
    ]
  },
  {
    icon: IconCarrier,
    name: 'Carrier Management',
    children: [
      {
        name: 'Option_1',
        link: '/'
      }
    ]
  },
  {
    icon: IconFinance,
    name: 'Finance & Accounting',
    children: [
      {
        name: 'Option_1',
        link: '/'
      }
    ]
  },
  {
    icon: IconHr,
    name: 'HR Development & Organization Setup',
    children: [
      {
        name: 'Option_1',
        link: '/'
      }
    ]
  }
]

const isOpen = ref(true)

console.log(isOpen.value)

const handleToggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="flex flex-col">
    <div class="pl-5 pr-12 py-10 flex items-center gap-8 flex-shrink-0">
      <button :click="handleToggle" class="w-6 h-6 flex items-center justify-center">
        <IconMenu />
      </button>
      <router-link to="/">
        <img :src="logoUrl" alt="logo" />
      </router-link>
    </div>
    <ul class="overflow-y-scroll flex-1 scroll-hidden">
      <li v-for="route in routes" :key="route.name" class="mb-5">
        <input :id="route.name" type="checkbox" class="peer hidden" />
        <label
          class="flex items-center pl-5 pr-12 py-4 gap-3 font-semibold max-w-[320px] cursor-pointer"
          :for="route.name"
        >
          <component :is="route.icon"></component>
          <p class="flex-1 text-black">{{ route.name }}</p>
          <IconArrow />
        </label>
        <div
          class="ml-12 overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-screen"
        >
          <template v-for="subMenu in route.children" :key="subMenu.name">
            <template v-if="subMenu.children?.length > 0">
              <div class="mb-3">
                <input :id="route.name + subMenu.name" type="checkbox" class="peer hidden" />
                <label
                  :for="route.name + subMenu.name"
                  class="flex gap-5 items-center font-semibold cursor-pointer"
                >
                  {{ subMenu.name }}
                  <IconArrow />
                </label>
                <div
                  class="ml-5 overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-screen"
                >
                  <router-link
                    class="block mt-6 text-sm font-medium"
                    :to="subMenuItem.link"
                    v-for="subMenuItem in subMenu.children"
                    :key="subMenuItem.name"
                  >
                    {{ subMenuItem.name }}
                  </router-link>
                </div>
              </div>
            </template>
            <router-link class="block py-2 mb-3 font-semibold" :to="subMenu.link" v-else>
              {{ subMenu.name }}
            </router-link>
          </template>
        </div>
      </li>
    </ul>
  </nav>
</template>
