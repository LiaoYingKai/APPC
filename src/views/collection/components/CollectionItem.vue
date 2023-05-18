<script setup>
import IconFavourite from '../../../components/icons/collection/IconFavourite.vue'
import IconGood from '../../../components/icons/collection/IconGood.vue'
import IconComment from '../../../components/icons/collection/IconComment.vue'
import IconShare from '../../../components/icons/collection/IconShare.vue'
</script>

<template>
  <div class="px-3 py-4 h-24 flex items-start justify-between gap-5 border-1 border-collection-item-border-color border-solid">
    <div class='mt-1'>
      <IconFavourite />
    </div>
    <div class="flex-1">
      <p class="line-clamp-1 mb-2.5">APPX System New Version Release Announce on 14th Dec...</p>
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <IconGood />
          <p class="text-xs text-gray">150 Likes</p>
        </div>
        <div class="flex items-center gap-2">
          <IconComment />
          <p class="text-xs text-gray">10 Comments</p>
        </div>
        <div class="flex items-center gap-2">
          <IconShare />
          <p class="text-xs text-gray">5 Shares</p>
        </div>
      </div>
    </div>
    <div class="text-right">
      <div class="mb-2.5 text-xs bg-tag-background-color px-2 py-0.5 inline-block rounded-3xl">
        News
      </div>
      <p class="text-gray text-xs">Dec 19, 2022</p>
    </div>
  </div>
</template>
