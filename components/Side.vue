<script setup lang="ts">
defineProps<{
  path: string
}>()

function close() {
  if (import.meta.client)
    document.getElementById('left-sidebar-drawer')?.click()
}
const DEBUG_MINI = process.env.DEBUG_MINI
const DEV = import.meta.env.DEV
</script>

<template>
  <label class="drawer-overlay :uno: p0" for="left-sidebar-drawer" />
  <aside class=":uno: bg-base-100 min-h-screen w65 lt-xl:w55 ">
    <div
      class=":uno: bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex shadow-sm lt-lg:px1"
    >
      <NuxtLink class=":uno: b-0 btn btn-ghost " to="/">
        <div class=":uno: inline-flex text-lg md:text-2xl">
          Demo
        </div>
      </NuxtLink>
    </div>
    <div
      class=":uno: bg-base-100 grid-row-2 sticky top-0 z-10 grid w-full gap-y-2 bg-opacity-90 px-2 py-3 backdrop-blur lg:hidden"
    >
      <div class=":uno: flex w-full">
        搜索框
      </div>
    </div>
    <div class=":uno: h-4" />
    <ul @click="close" class="site-menu menu menu-lg :uno: px-4 py-0 lt-lg:px1">
      <li class=":uno: hidden lt-lg:flex">
        <NuxtLink to="/">
          <i class=":uno: iconfont icon-shouye !font-size-6" />
          主页
        </NuxtLink>
      </li>
      <li>
        <NuxtLink>
          <i class=":uno: iconfont icon-wode !font-size-6" />
          我的
        </NuxtLink>
      </li>
    </ul>
    <div
      class=":uno: bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"
    />
  </aside>
</template>

<style lang="scss" scoped>
.site-menu li {
  margin-top: 1px;
  margin-bottom: 1px;
  a:hover {
    background-color: #f5f4fc;
  }
  a:focus,
  .router-link-active,
  .active {
    background-color: #00c199;
    color: #fff;
  }
  & > *:not(ul):not(.menu-title):not(details):active,
  & > details > summary:active {
    background-color: #00c199;
    color: #fff;
  }
  :where(li ul):before {
    width: 0;
  }
}
</style>
