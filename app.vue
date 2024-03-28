<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/_colors.scss";

body {
  background-color: colors.$primary_background;
}
</style>
