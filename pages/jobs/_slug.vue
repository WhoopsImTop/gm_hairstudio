<template>
  <div class="content-container" style="margin: 150px auto;">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
  layout: "main",

  async asyncData({ $content, params }) {
    const page = await $content('jobs/' + params.slug).fetch();
    return { page };
  },
};
</script>

<style>
</style>