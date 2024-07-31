<template>
  <div
    class=":uno: sticky bg-base-100 text-base-content z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 shadow-sm"
  >
    <nav class=":uno: navbar w-full">
      <div class=":uno: flex flex-1 md:gap-1 lg:gap-2">
        <span class=":uno: tooltip tooltip-right z-19">
          <label class=":uno: lg:hidden btn btn-square btn-ghost drawer-button" for="left-sidebar-drawer">
            <i class=":uno: h-5 inline-block w-5 i-mdi-menu " />
          </label>
        </span>
        <div class=":uno: flex items-center gap-2 lg:hidden">
          <NuxtLink class=":uno: flex-0 btn btn-ghost gap-1 px-2 md:gap-2" to="/">
            <div class=":uno: inline-flex text-lg md:text-2xl">
              Demo
            </div>
          </NuxtLink>
        </div>
        <div class=":uno: hidden w-full max-w-sm lg:flex">
          搜索框
        </div>
      </div>
    </nav>
  </div>
</template>
