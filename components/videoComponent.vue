<template>
  <div
    class="aspect-video bg-gray-300 rounded mt-24 relative"
    id="video-reveal"
  >
    <iframe
      class="absolute top-0 left-0 w-full h-full z-1"
      src="https://www.youtube.com/embed/aboAs8kCQHU?si=3i_5cVCMPtene3-J&amp;controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  mounted() {
    // Animation für das Video
    this.$gsap.from("#video-reveal", {
      y: 100,
      opacity: 0,
      duration: .7,
      scrollTrigger: {
        trigger: "#video-reveal",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  },
};
</script>

<style></style>
