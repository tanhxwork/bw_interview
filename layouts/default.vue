<template>
  <div class="layout-container">
    <img :src="banner1" alt="Background" class="banner-image" />
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
            <button
              class="bg-orange-500 font-bold rounded-full px-2 h-6 sub_text text-white"
            >
              Create Live Account
            </button>
            <button
              class="bg-orange-500 font-bold rounded-full px-2 h-6 sub_text text-white"
            >
              Download MT4 Platform
            </button>
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
            <button
              class="bg-orange-500 font-bold rounded-full px-2 h-6 sub_text text-white"
            >
              Create Live Account
            </button>
            <button
              class="bg-orange-500 font-bold rounded-full px-2 h-6 sub_text text-white"
            >
              Download MT4 Platform
            </button>
          </div>
        </div>
      </div>
    </div>

    <img
      src="~/public/img/easy_step_bg.png"
      alt="Background"
      class="banner2-image"
    />

    <div class="sub_text step-main-title">3 Easy Steps to Refer</div>
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
    <div class="register-container">
      <h3 v-if="is_logged_in == false" class="orange_main_text">
        Register Now
      </h3>
      <div v-if="is_logged_in == false" class="register-box">
        <div class="register-input">
          <input
            placeholder="First Name"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-200 focus:border-blue-400 focus:outline-0"
            v-model="register.first_name"
          />
        </div>
        <div class="register-input">
          <input
            placeholder="Last Name"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-200 focus:border-blue-400 focus:outline-0"
            v-model="register.last_name"
          />
        </div>
        <div class="register-input">
          <input
            placeholder="Email"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-200 focus:border-blue-400 focus:outline-0"
            v-model="register.email"
          />
        </div>
        <div
          class="register-input"
          style="display: flex; flex: wrap; justify-content: space-between"
        >
          <div style="flex: 0 0 10%">
            <select
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              v-model="register.country"
            >
              <option value="60">+60</option>
              <option value="65">+65</option>
            </select>
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Country
            </label>
          </div>
          <div style="flex: 0 0 85%">
            <input
              placeholder="Phone"
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-200 focus:border-blue-400 focus:outline-0"
              v-model="register.mobile"
            />
          </div>
        </div>
        <div class="register-input">
          <input
            placeholder="Password"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-200 focus:border-blue-400 focus:outline-0"
            v-model="register.password"
          />
        </div>
        <div class="register-input">
          <input
            placeholder="Password Confirmation"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-200 focus:border-blue-400 focus:outline-0"
            v-model="register.c_password"
          />
        </div>
        <div class="register-input">
          <div class="inline-flex items-center">
            <label
              class="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="check"
            >
              <input
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="check1"
                v-model="register.check_18"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              class="mt-px font-light text-blue-200 cursor-pointer select-none"
              htmlFor="check"
            >
              I confirm that I am at least 18 years old.
            </label>
          </div>
        </div>
        <div class="register-input">
          <div class="inline-flex items-center">
            <label
              class="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="check"
            >
              <input
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="check2"
                v-model="register.check_terms"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              class="mt-px font-light text-blue-200 cursor-pointer select-none"
              htmlFor="check"
            >
              By joining and participating in the Competition, I acknowledge and
              confirm that I have read, understood and agreed to be bound by the
              <a href="" class="text-blue-200">Terms and Conditions</a> of the
              Competition.
            </label>
          </div>
        </div>
        <div class="register-input text-blue-200">
          This site is protected by recAPTCHA and the Google
          <a href="" class="text-blue-200">Privacy Policy</a> and
          <a href="" class="text-blue-200">Terms of Service</a> apply.
        </div>
        <div class="register-input">
          <button
            :disabled="v$.invalid"
            class="bg-green-500 disabled:bg-slate-500 rounded-full px-2 h-6 sub_text text-white w-full"
            @click="submit"
          >
            Register Now
          </button>
        </div>
        <div
          class="signup-facebook-google"
          style="
            display: flex;
            justify-content: space-between;
            flex: wrap;
            gap: 10px;
          "
        >
          <div style="flex: 0 0 50%">
            <button
              class="bg-blue-700 rounded-lg px-2 h-6 sub_text text-white w-full"
            >
              Signup by Facebook
            </button>
          </div>
          <div style="flex: 0 0 50%">
            <button
              class="bg-red-700 rounded-lg px-2 h-6 sub_text text-white w-full"
            >
              Signup by Google
            </button>
          </div>
        </div>
      </div>
      <div v-if="is_logged_in == true" class="register-box">
        <h1>
          Hi {{ user_first_name }}, welcome to Blackwell, please verify your
          email immediately.
        </h1>
      </div>
    </div>
    <div class="training-guide-container">
      <h1 class="orange_sub_text font-bold text-center mb-10">
        Trading Guides
      </h1>
      <div style="max-width: 500px; margin: 0 auto">
        <TradingGuidesCarousel />
      </div>
    </div>
    <UNotifications />
  </div>
  <AppFooter />
  <div class="main-content">
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
  min-height: 300px;
  height: 400px;
  margin-top: 60px;
  margin-bottom: 30px;
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

.step-main-title {
  margin-top: 80px;
  margin-left: 100px;
  font-size: large;
}

.step-container {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  height: 50%;
  gap: 30px;
  flex: wrap;
  margin-bottom: 100px;
}

.step-box {
  border: 1px solid $linearrow_color;
  border-width: 0 0 1px 1px;
  border-radius: 8px;
  position: relative;
  min-height: 170px;
  max-height: 250px;
  flex: 0 0 20%;
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

.register-container {
  margin-bottom: 80px;
}

.register-input {
  margin-bottom: 10px;
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
    justify-content: center;
  }

  .step-arrow {
    transform: rotate(90deg);
  }
}
</style>

<script>
import banner1 from "@/public/img/trading-tango-header.png";
import { useVuelidate } from "@vuelidate/core";
import { required, email, numeric, sameAs } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate(), toast: useToast(), userStore: useUserStore() };
  },
  data() {
    return {
      banner1,
      register: {
        first_name: "hong",
        last_name: "tan",
        email: "ss@hotmail.com",
        country: "60",
        mobile: "123123123123",
        password: "123456",
        c_password: "123456",
        check_18: true,
        check_terms: true,
      },
      register_isDisabled: true,
      is_logged_in: false,
      is_register: false,
      user_first_name: "",
    };
  },
  validations() {
    return {
      register: {
        first_name: { required },
        last_name: { required },
        email: { required, email },
        country: { required },
        mobile: { required, numeric },
        password: { required },
        c_password: {
          sameAsPassword: sameAs(this.register.password),
        },
        check_18: { required },
        check_terms: { required },
      },
    };
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        console.log(this.v$);
        alert("Please fill in all required fields");
        return;
      }

      const form = await $fetch("http://localhost:8080/user", {
        method: "POST",
        body: this.register,
      });

      this.toast.add({
        title: "Register successful, please log in to your account",
        variant: "success",
      });
      this.is_register = true;

      const log_in = await this.userStore.login(
        this.register.email,
        this.register.password
      );

      // alert("Form submitted");
    },
  },
  created() {
    this.is_logged_in = this.userStore.is_logged_in;
    console.log(this.userStore.is_logged_in);
    // Watch for changes in is_logged_in
    this.$watch(
      () => this.userStore.is_logged_in,
      (newValue, oldValue) => {
        this.is_logged_in = newValue;
        this.user_first_name = this.userStore.first_name;
      }
    );
  },
};
</script>
