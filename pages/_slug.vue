<template>
  <div class="content-container" style="margin-top: 130px;">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      title: "Home",
    };
  },
  async asyncData({ $content, params }) {
    const page = await $content("/", params.slug).fetch();
    return { page };
  },
};
</script>

<style>
.content-container a {
  color: var(--orange-color);
  text-decoration: underline;
}

.content-container h4 {
  color: var(--orange-color);
  text-decoration: none;
}
</style>