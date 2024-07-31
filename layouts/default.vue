<script setup lang="ts">
import '@/assets/web.scss'

const route = useRoute()
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input class="drawer-toggle" id="left-sidebar-drawer" type="checkbox">
    <div class="drawer-content">
      <Navbar />
      <main
        class=":uno: min-h-[calc(100vh-200px)] px2 sm:px6 pb-2 lg-md:pr-2 "
      >
        <slot />
      </main>
    </div>
    <div class="drawer-side :uno: z-40 scrollbar-trigger">
      <Side :path="route.path" />
    </div>
  </div>
</template>
