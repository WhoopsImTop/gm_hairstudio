<template>
  <a class="py-4 inline-flex items-center" href="https://g.page/r/CQ_Ce8A5T7XoEB0/review" target="_blank" ref="googleReview">
    <img src="/googleReview.svg" width="20" class="mr-2" />
    <div class="flex flex-col">
      <div class="flex items-baseline justify-between my-0">
        <span class="text-gold-500 mr-2 text-sm">5,0</span>
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
    </div>
  </a>
</template>

<script>
export default {
};
</script>

<style></style>
