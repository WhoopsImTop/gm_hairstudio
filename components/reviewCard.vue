<template>
  <div class="rounded bg-gray-100 p-4 md:p-6">
    <div class="flex flex-col">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <div class="bg-white rounded-full p-1 mr-3">
            <img src="/googleReview.svg" width="35" />
          </div>
          <div class="flex flex-col">
            <span class="font-bold">{{ author_name }}</span>
            <span class="text-sm">{{ relative_time_description }}</span>
          </div>
        </div>
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
      <p class="">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author_name: {
      type: String,
      default: "",
    },
    author_url: {
      type: String,
      default: "",
    },
    profile_photo_url: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    relative_time_description: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
