<template>
  <button @click="scrollToTop" id="scrollToTop" title="Go to top">UP</button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.pageYOffset > 100; // Show button when user scrolls down 100px
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
#scrollToTop {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 24px;
}
#scrollToTop:hover {
  background-color: #0056b3;
}
</style>
