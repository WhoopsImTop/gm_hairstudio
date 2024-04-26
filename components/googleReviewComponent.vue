<template>
  <a
    href="https://g.page/r/CQ_Ce8A5T7XoEB0/review"
    class="rounded-lg bg-gold-50 shadow-sm py-3 pl-3 pr-5 inline-flex items-center"
  >
    <img src="/googleReview.svg" width="35" class="mr-2" />
    <div class="flex flex-col">
      <div class="flex items-baseline justify-between my-0">
        <span class="text-gold-500 mr-2 text-sm">5/5</span>
        <div class="flex items-center">
          <img
            v-for="star in 5"
            :key="star"
            src="/fiveStars.svg"
            width="13"
            class="mx-[2px]"
          />
        </div>
      </div>
      <span class="my-0 text-sm"
        ><span id="reviewCounter"></span>+ Bewertungen</span
      >
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      reviewCount: 0,
      reviews: [],
    };
  },
  methods: {
    animateReviews() {
      //make counter count up to 385 with gsap
      this.$gsap.to("#reviewCounter", {
        duration: 3,
        innerHTML: this.reviewCount,
        ease: "power1.inOut",
        onUpdate: function () {
          this.targets()[0].innerHTML = Math.round(this.targets()[0].innerHTML);
        },
        scrollTrigger: {
          trigger: this.$refs.googleReview,
          start: "top 80%",
        },
      });
    },
  },
  async mounted() {
    if (
      sessionStorage.getItem("reviewCount") &&
      sessionStorage.getItem("reviews")
    ) {
      this.reviewCount = sessionStorage.getItem("reviewCount");
      this.reviews = JSON.parse(sessionStorage.getItem("reviews"));
      //check how many reviews have text
      const reviewsWithText = this.reviews.filter(
        (review) => review.text !== ""
      );
      //if there are less than 3 reviews with text fill up with reviews without text
      if (reviewsWithText.length < 3) {
        const reviewsWithoutText = this.reviews.filter(
          (review) => review.text === ""
        );
        this.reviews = reviewsWithText.concat(
          reviewsWithoutText.slice(0, 3 - reviewsWithText.length)
        );
      } else {
        this.reviews = reviewsWithText.slice(0, 3);
      }
      this.animateReviews();
    } else {
      await axios
        .get("https://api.eliasenglen.de/google-reviews")
        .then((response) => {
          this.reviewCount = response.data.user_ratings_total;
          this.reviews = response.data.reviews;
          //check how many reviews have text
          const reviewsWithText = this.reviews.filter(
            (review) => review.text !== ""
          );
          //if there are less than 3 reviews with text fill up with reviews without text
          if (reviewsWithText.length < 3) {
            const reviewsWithoutText = this.reviews.filter(
              (review) => review.text === ""
            );
            this.reviews = reviewsWithText.concat(
              reviewsWithoutText.slice(0, 3 - reviewsWithText.length)
            );
          } else {
            this.reviews = reviewsWithText.slice(0, 3);
          }

          sessionStorage.setItem("reviewCount", this.reviewCount);
          sessionStorage.setItem("reviews", JSON.stringify(this.reviews));
        });
      this.animateReviews();
    }
  },
};
</script>

<style></style>
