<template>
  <div class="header">
    <img src="/img/logo-white.png" alt="logo-white" srcset="" />
    <div class="promotion_text">
      <div>
        <p class="text_center">PROMOTION</p>
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
          <DropdownItem id="login"> Login </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
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
</style>

<script>
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default {
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
      faUser,
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
  },
};
</script>
