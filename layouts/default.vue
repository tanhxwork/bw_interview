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
    <div class="promotion-container">
      <div class="title-container">
        <h2>Free US$600 Credits!</h2>
      </div>
      <div class="content-container">
        <div class="promotion-item">
          <img
            class="promotion-item-img"
            src="~/public/img/Promo_1B.png"
            alt=""
          />
        </div>
        <div class="promotion-item">
          <div style="display: flex; margin-bottom: 30px">
            <div class="bg-orange-500 font-bold rounded-full px-2 h-6 mr-7">
              1
            </div>
            <div>
              <div class="orange_sub_text">US$200 credits</div>
              <div class="sub_text">
                when you open an account & deposit US$200
              </div>
            </div>
          </div>
          <div style="display: flex">
            <div class="bg-orange-500 font-bold rounded-full px-2 h-6 mr-7">
              2
            </div>
            <div>
              <div class="orange_sub_text">US$20 credits</div>
              <div class="sub_text">for every lot you trade, up to 20 lots</div>
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: center;
              gap: 10px;
              margin-top: 50px;
            "
          >
            <div
              class="bg-orange-500 font-bold rounded-full px-2 h-6 sub_text text-white"
            >
              Create Live Account
            </div>
            <div
              class="bg-orange-500 font-bold rounded-full px-2 h-6 sub_text text-white"
            >
              Download MT4 Platform
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="promotion-container">
      <div class="title-container" style="right: 80px">
        <h2>Free INR₹22,000 Gift Cards!</h2>
      </div>
      <div class="content-container" style="flex-direction: row">
        <div class="promotion-item">
          <img
            class="promotion-item-img"
            src="~/public/img/Promo_2B.png"
            alt=""
            style="width: 50%"
          />
        </div>
        <div class="promotion-item">
          <div style="display: flex; margin-bottom: 30px">
            <div class="bg-orange-500 font-bold rounded-full px-2 h-6 mr-7">
              3
            </div>
            <div>
              <div class="orange_sub_text">INR₹2,000 Flipkart gift card</div>
              <div class="sub_text">
                when you refer someone to enjoy
                <span
                  class="bg-orange-500 font-bold rounded-full px-1 text-black"
                  >1</span
                >
              </div>
            </div>
          </div>
          <div style="display: flex">
            <div class="bg-orange-500 font-bold rounded-full px-2 h-6 mr-7">
              4
            </div>
            <div>
              <div class="orange_sub_text">INR₹20,000 Flipkart gift card</div>
              <div class="sub_text">
                when you refer a second person to enjoy
                <span
                  class="bg-orange-500 font-bold rounded-full px-1 text-black mx-1"
                  >1</span
                >
                <span
                  class="bg-orange-500 font-bold rounded-full px-1 text-black mx-1"
                  >2</span
                >
                <span
                  class="bg-orange-500 font-bold rounded-full px-1 text-black mx-1"
                  >3</span
                >
              </div>
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: center;
              gap: 10px;
              margin-top: 50px;
            "
          >
            <div
              class="bg-orange-500 font-bold rounded-full px-2 h-6 sub_text text-white"
            >
              Create Live Account
            </div>
            <div
              class="bg-orange-500 font-bold rounded-full px-2 h-6 sub_text text-white"
            >
              Download MT4 Platform
            </div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="~/public/img/easy_step_bg.png"
      alt="Background"
      class="banner2-image"
    />

    <div class="step-container">
      <div class="step-box">
        <div class="step-box-border-top"></div>
        <div class="step-box-border-right"></div>
        <div class="step-title">
          <div
            class="bg-blue-500 font-bold rounded-full px-4 h-6 primary_text"
            style="
              /* transform: translateY(-10%); */
              position: relative;
              margin-left: 30px;
            "
          >
            STEP
          </div>
          <div
            class="orange_main_text"
            style="
              font-size: 100px;
              position: relative;
              transform: translateY(-30%);
              right: -15px;
            "
          >
            01
          </div>
        </div>

        <p class="sub_text step-content">
          Create an account with Blackwell Global & log in to the Client Portal.
        </p>
      </div>
      <div class="orange_main_text step-box-arrow">
        <font-awesome-icon
          class="step-arrow"
          icon="fa-solid fa-chevron-right"
        />
      </div>
      <div class="step-box">
        <div class="step-box-border-top"></div>
        <div class="step-box-border-right"></div>
        <div class="step-title">
          <div
            class="bg-blue-500 font-bold rounded-full px-4 h-6 primary_text"
            style="
              /* transform: translateY(-10%); */
              position: relative;
              margin-left: 30px;
            "
          >
            STEP
          </div>
          <div
            class="orange_main_text"
            style="
              font-size: 100px;
              position: relative;
              transform: translateY(-30%);
              right: -15px;
            "
          >
            02
          </div>
        </div>

        <p class="sub_text step-content">
          Under the "Promotion" tab, copy your unique referral link & send it to
          your referee, or get your referee to scan your unique QR code to
          create an account with us.
        </p>
      </div>
      <div class="orange_main_text step-box-arrow">
        <font-awesome-icon
          class="step-arrow"
          icon="fa-solid fa-chevron-right"
        />
      </div>
      <div class="step-box">
        <div class="step-box-border-top"></div>
        <div class="step-box-border-right"></div>
        <div class="step-title">
          <div
            class="bg-blue-500 font-bold rounded-full px-4 h-6 primary_text"
            style="
              /* transform: translateY(-10%); */
              position: relative;
              margin-left: 30px;
            "
          >
            STEP
          </div>
          <div
            class="orange_main_text"
            style="
              font-size: 100px;
              position: relative;
              transform: translateY(-30%);
              right: -15px;
            "
          >
            03
          </div>
        </div>

        <p class="sub_text step-content">
          Monitor your referees in the Referral Activity section to track
          whether you've fulfilled the requirements for various rewards!
        </p>
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

.banner2-image {
  position: absolute;
  z-index: -1;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 300px;
  margin-top: 60px;
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

.promotion-container {
  position: relative;
  margin-top: 150px;
  padding: 40px;
  border: 1px solid $linearrow_color;
}

.title-container {
  position: absolute;
  transform: translateY(-135%);
  background-color: $primary_background;
  padding: 0px 20px;
  color: $primary_text;
  font-family: $sub_title_font;
}

.content-container {
  flex: wrap;
  display: flex;
  flex-direction: row-reverse;
}

.promotion-item {
  flex: 0 0 calc(50% - 10px);
}

.promotion-item-img {
  width: 40%;
  position: absolute;
  transform: translateY(-40%);
}

.step-container {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  height: 50%;
  gap: 30px;
  flex: wrap;
}

.step-box {
  border: 1px solid $linearrow_color;
  border-width: 0 0 1px 1px;
  border-radius: 8px;
  position: relative;
  min-height: 170px;
  max-height: 250px;
}

.step-box-border-top {
  border-top: 1px solid $linearrow_color;
  width: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8px 0 0 0;
}

.step-box-border-right {
  border-right: 1px solid $linearrow_color;
  height: 90px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-radius: 8px 0 0 0;
}

.step-box-arrow {
  display: flex;
  align-items: center;
}

.step-title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  height: 30%;
}

.step-content {
  padding: 0 20px;
  word-wrap: break-word;
  margin-bottom: 0px;
  text-align: left;
}

@media (max-width: 768px) {
  .layout-container {
    max-width: 100%;
    padding: 0 20px;
  }

  .reward-item {
    flex: 0 0 100%;
  }

  .content-container {
    all: unset;
  }

  .promotion-item {
    flex: 0 0 100%;
  }

  .promotion-item-img {
    all: initial;
    width: 50%;
  }

  .banner2-image {
    min-height: 750px;
  }

  .step-container {
    flex-direction: column;
  }

  .step-box {
    flex: 0 0 100%;
  }

  .step-title {
    max-height: 75px;
  }

  .step-box-arrow {
    flex: 0 0 100%;
  }

  .step-arrow {
    transform: rotate(90deg);
  }
}
</style>
