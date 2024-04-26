<template>
  <div
    class="rounded border border-gold-500 p-4 md:p-6 flex items-center justify-center"
  >
    <div class="text-center">
      <span class="text-4xl font-bold text-gold-500">
        <span ref="counter">0</span>
        <span v-html="specialChar" class="mx-0"></span>
      </span>
      <p class="text-sm md:text-md text-gold-500">{{ content }}</p>
    </div>
  </div>
</template>

<script>
import googleReviewNotice from "./googleReviewNotice.vue";
export default {
  props: {
    number: {
      default: 365,
    },
    specialChar: {
      type: String,
      default: "&#43;",
    },
    content: {
      type: String,
      default: "Zufriedene Kunden",
    },
  },
  mounted() {
    this.animateCounter(); // Führe die Animation bei der Montage aus
  },
  watch: {
    number(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.animateCounter(); // Führe die Animation erneut aus, wenn sich der Wert ändert
      }
    },
  },
  methods: {
    animateCounter() {
      this.$gsap.to(this.$refs.counter, {
        scrollTrigger: {
          trigger: this.$refs.counter,
          start: "top 80%",
        },
        textContent: this.number,
        duration: 3,
        ease: "none",
        snap: {
          textContent: 1,
        },
      });
    },
  },
};
</script>

<style></style>
