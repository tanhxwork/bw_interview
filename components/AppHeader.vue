<template>
  <div class="header">
    <div style="display: flex; align-items: center">
      <img
        src="@/public/img/logo-white.png"
        alt="logo-white"
        srcset=""
        style="width: 125px; height: fit-content"
      />
    </div>
    <div class="promotion_text">
      <div>
        <p class="text_center" style="margin-bottom: 0px">PROMOTION</p>
        <p class="text_center">ENDS IN</p>
      </div>
      <div class="timer">
        <div>
          <div class="text_center">{{ promotion.days }}</div>
          <div class="text_center">Days</div>
        </div>
        <div>:</div>
        <div>
          <div class="text_center">{{ promotion.hours }}</div>
          <div class="text_center">Hours</div>
        </div>
        <div>:</div>

        <div>
          <div class="text_center">{{ promotion.minutes }}</div>
          <div class="text_center">Minutes</div>
        </div>
        <div>:</div>

        <div>
          <div class="text_center">{{ promotion.seconds }}</div>
          <div class="text_center">Seconds</div>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <button
        class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full h-10 bg-center"
        style="font-family: ATRotisSemiSans-Light"
      >
        REGISTER NOW
      </button>
      <Dropdown>
        <DropdownToggle button="secondary" size="sm">
          <font-awesome-icon icon="fa-solid fa-user" class="text-gray-600" />
        </DropdownToggle>
        <DropdownMenu dark>
          <DropdownItem
            id="login"
            v-show="is_logged_in == false"
            @click="isOpen = true"
          >
            Login
          </DropdownItem>
          <DropdownItem
            id="logout"
            v-show="is_logged_in == true"
            @click="logout"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>

  <UModal v-model="isOpen">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        background: 'bg-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-white">
            Login Modal
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <div>
        <div class="register-input">
          <input
            placeholder="Email"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-200 focus:border-blue-400 focus:outline-0"
            v-model="login.email"
          />
        </div>
        <div class="register-input">
          <input
            placeholder="Password"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-200 focus:border-blue-400 focus:outline-0"
            v-model="login.password"
          />
        </div>
        <div class="register-input">
          <button
            :disabled="v$.invalid"
            class="bg-green-500 disabled:bg-slate-500 rounded-full px-2 h-6 sub_text text-white w-full"
            @click="loginSubmit"
          >
            login
          </button>
        </div>
      </div>
      <!-- <Placeholder class="h-32" /> -->
    </UCard>
  </UModal>
</template>

<style lang="scss">
// @import "~/assets/css/main.css";
@import "~/assets/scss/_colors.scss";

.header {
  display: flex;
  justify-content: space-between;
}

.promotion_text {
  color: $primary_text;
  font-family: "ATRotisSemiSans-Light", sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.text_center {
  text-align: center;
}

.timer {
  color: $primary_text;
  font-family: "ATRotisSemiSans-Light", sans-serif;
  display: flex;
  justify-content: space-around;
  margin-left: 200px;
  width: 300px;
}

.register-input {
  margin-bottom: 10px;
}
</style>

<script>
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate(), toast: useToast(), userStore: useUserStore() };
  },
  data() {
    return {
      promotion_end_date: "2024-12-31T23:59:59",
      promotion: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        intervalId: null,
      },
      login: {
        email: "cc@hotmail.com",
        password: "123456",
      },
      faUser,
      isOpen: false,
      is_logged_in: false,
    };
  },
  validations() {
    return {
      login: {
        email: { required, email },
        password: { required },
      },
    };
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.promotion.intervalId);
  },
  methods: {
    startTimer() {
      this.promotion.intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(this.promotion_end_date).getTime() - now;
        this.promotion.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.promotion.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.promotion.minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.promotion.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
          clearInterval(this.promotion.intervalId);
          this.promotion.days = 0;
          this.promotion.hours = 0;
          this.promotion.minutes = 0;
          this.promotion.seconds = 0;
        }
      }, 1000);
    },
    async loginSubmit() {
      const result = await this.v$.$validate();
      if (!result) {
        console.log(this.v$);
        alert("Please fill in all required fields");
        return;
      }

      const form = await this.userStore.login(
        this.login.email,
        this.login.password
      );

      if (this.userStore.is_logged_in) {
        this.toast.add({ title: "Login successful", variant: "success" });
        this.isOpen = false;
        this.is_logged_in = this.userStore.is_logged_in;

        console.log(this.is_logged_in);
      }
    },
    async logout() {
      await this.userStore.logout();
      this.is_logged_in = this.userStore.is_logged_in;

      this.toast.add({ title: "Logout successful", variant: "success" });
    },
  },
};
</script>
