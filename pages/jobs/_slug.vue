<template>
  <div class="container px-4 mx-auto mt-12 md:mt-24">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
  layout: "main",

  async asyncData({ $content, params }) {
    const page = await $content("jobs/" + params.slug).fetch();
    return { page };
  },

  head() {
    return {
      title: this.page.title + " - GM Professional Hairstudio",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "GM Professional Hairstudio in Freiburg - Werden Sie Teil unseres Teams. ✓Individuelle Looks ✓Typgerechte Beratung. Jetzt bewerben!"
        },
      ],
    };
  },
};
</script>

<style>
.nuxt-content h1 {
  @apply font-serif text-4xl md:text-7xl font-bold mb-2;
}

.nuxt-content h2 {
  @apply font-serif text-2xl md:text-4xl font-bold mb-4;
}

.nuxt-content h3 {
  @apply font-serif text-xl md:text-2xl font-bold mb-4;
}

.nuxt-content h4 {
  @apply font-serif text-lg md:text-xl font-bold mb-2;
}

.nuxt-content p,
.nuxt-content ul {
  @apply font-sans text-base md:text-lg mb-12;
}

.nuxt-content ul {
  @apply list-disc pl-8;
}

.nuxt-content a {
  @apply font-sans text-base md:text-lg text-gold-500 hover:text-gold-700;
}
</style>
