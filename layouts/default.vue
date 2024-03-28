<template>
  <div class="layout-container">
    <img
      src="~/public/img/trading-tango-header.png"
      alt="Background"
      class="banner-image"
    />

    <AppHeader />
    <div
      style="
        display: flex;
        justify-content: space-evenly;
        margin-top: 70px;
        gap: 20px;
        flex-wrap: wrap;
      "
    >
      <div>
        <img
          src="~/public/img/logomark.png"
          alt="logomark"
          style="width: 200px"
        />
      </div>
      <div class="primary_text" style="text-align: center">
        <h1 style="font-size: 75px">TRADING TANGO</h1>
        <div class="sub_text">
          <h3 style="font-size: 35px; margin-bottom: 0px">
            VALENTINE'S DAY PROMOTION
          </h3>
          <h3 style="font-size: 35px; margin-top: 0px">1 - 29 Febraury 2024</h3>
        </div>
        <p class="sub_text" style="font-size: 12px">
          *<span class="orange_sub_text" style="text-decoration: underline"
            >Terms & conditions</span
          >
          apply.
        </p>
      </div>
    </div>
    <div class="orange_main_text">
      <h1 style="text-align: center">Collect All Rewards</h1>
      <div class="rewards-container">
        <div class="reward-item">
          US$200 credits
          <img
            src="~/public/img/logo_side.png"
            alt="logo_side"
            class="reward-item-logo"
          />
        </div>
        <div class="reward-item">
          INR₹2000 gift card
          <img
            src="~/public/img/logo_side.png"
            alt="logo_side"
            class="reward-item-logo"
          />
        </div>
        <div class="reward-item">
          US$400 credits
          <img
            src="~/public/img/logo_side.png"
            alt="logo_side"
            class="reward-item-logo"
          />
        </div>
        <div class="reward-item">
          INR₹20,000 gift card
          <img
            src="~/public/img/logo_side.png"
            alt="logo_side"
            class="reward-item-logo"
          />
        </div>
      </div>
    </div>
  </div>
  <div>testing</div>
  <div class="main-content">
    <!-- <AppHeader /> -->
    <p>Some default layout content shared across all pages</p>
    <slot />
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

.orange_main_text {
  color: $linearrow_color;
  font-family: $main_title_font;
}
.orange_sub_text {
  color: $linearrow_color;
  font-family: $sub_title_font;
}

.layout-container {
  max-width: 70%;
  margin: 0 auto;
  margin-top: 10px;
}

// .header-container {
//   position: relative;
//   z-index: 2;
// }

// .main-content {
//   position: relative;
//   z-index: 2;
// }

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  z-index: -1;
  object-fit: cover;
}

.rewards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.reward-item {
  background-color: #0303035b;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 0 0 calc(50% - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.reward-item-logo {
  position: absolute;
  right: 0px;
  top: 70%;
  width: 40px;
  transform: translateY(-50%);
}

@media (max-width: 768px) {
  .layout-container {
    max-width: 100%;
    padding: 0 20px;
  }

  .reward-item {
    flex: 0 0 100%;
  }
}
</style>
