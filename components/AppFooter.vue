<template>
  <div
    class="bg-blue-950"
    style="width: 100vw; margin-top: 30px; padding: 20px"
  >
    <div class="sub_text text-center mb-3 text-xl">
      LOG IN TO MY4 DESKTOP APP
    </div>
    <div style="display: flex; justify-content: center">
      <button
        class="bg-orange-500 font-bold rounded-full px-2 h-6 mb-3 sub_text text-white"
        style="min-width: 450px"
      >
        Download Platform
      </button>
    </div>
    <div class="sub_text text-center mb-3 text-xl">
      LOG IN VIA MY4 DESKTOP APP
    </div>
    <div style="display: flex; justify-content: center; gap: 50px">
      <img
        style="flex: 0 0 10%; width: 75px"
        src="/img/apple.png"
        alt=""
        srcset=""
      />
      <img
        style="flex: 0 0 10%; width: 75px"
        src="/img/android.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/_colors.scss";

body {
  background-color: $primary_background;
}

.primary_text {
  color: $primary_text;
  font-family: $main_title_font;
}

.sub_text {
  color: $primary_text;
  font-family: $sub_title_font;
}
</style>
