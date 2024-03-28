<template>
  <div class="main">
    <AppHeader />
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/_colors.scss";

.main {
  max-width: 80%;
  margin: 0 auto;
}
</style>
