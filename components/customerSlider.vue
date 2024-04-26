<template>
  <div class="relative my-12 md:my-24 overflow-hidden" ref="sliderContainer">
    <div class="-rotate-3">
      <div
        class="flex flex-nowrap transition-transform duration-300 ease-out w-auto"
        :style="{ transform: 'translateX(' + offsetX + 'px)' }"
      >
        <div
          v-for="i in 26"
          :key="i"
          class="mr-4 min-w-48"
          ref="imageContainer"
        >
          <img
            :src="'/gm_slider_' + (i % 13) + '.jpeg'"
            :alt="'Professional Hairstudio Kundenfoto ' + i"
            :title="'Professional Hairstudio Kundenfoto ' + i"
            class="h-full w-full object-cover"
            ref="image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetX: 0,
      isDragging: false,
      startDragX: 0,
      currentTranslate: 0,
      containerWidth: 0,
      speed: 0,
      scrollTimeout: null,
      animationId: null,
    };
  },
  methods: {
    animateSlider() {
      const sliderWidth = this.$refs.sliderContainer.offsetWidth;
      if (this.offsetX <= -(this.containerWidth - sliderWidth)) {
        // Reset the slider to the beginning
        this.offsetX = 0;
      } else {
        this.offsetX -= 3 + this.speed;
      }
      this.animationId = requestAnimationFrame(this.animateSlider);
    },
    startAnimation() {
      this.animationId = requestAnimationFrame(this.animateSlider);
    },
    handleMouseWheel(event) {
      this.speed = Math.abs(event.deltaY) * 0.5;
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.speed = 0;
      }, 100); // Adjust timeout duration as needed
    },
    distortImages() {
      const imageContainers = this.$refs.imageContainer;
      const images = this.$refs.image;

      for (let i = 0; i < imageContainers.length; i++) {
        const containerRect = imageContainers[i].getBoundingClientRect();
        const imageRect = images[i].getBoundingClientRect();

        const imageCenterY = imageRect.top + imageRect.height / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;
        const distanceFromCenter = containerCenterY - imageCenterY;
        const distortionAmount = this.speed * 0.002;

        this.$gsap.to(images[i], {
          duration: 0.5,
          skewY: distanceFromCenter * distortionAmount,
        });
      }
    },
    setupSlider() {
      this.containerWidth = this.$refs.sliderContainer.scrollWidth;
      this.startAnimation();

      document.addEventListener("wheel", (event) => {
        //if user is at top of the page do not trigger handleMouseWheel
        if (window.scrollY === 0) return;
        this.handleMouseWheel(event);
      });
      document.addEventListener("scroll", this.distortImages);
    },
  },
  mounted() {
    if(process.client) {
      this.setupSlider();
    }
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animationId);
    clearTimeout(this.scrollTimeout);
    document.removeEventListener("wheel", this.handleMouseWheel);
    document.removeEventListener("scroll", this.distortImages);
  },
};
</script>

<style scoped></style>
