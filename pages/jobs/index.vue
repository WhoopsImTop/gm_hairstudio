<template>
  <main class="container px-4 mx-auto mt-12 md:mt-24">
    <h1 class="font-serif text-4xl md:text-7xl text-center font-bold">Unsere Stellenaus&shy;schreibungen</h1>
    <div class="flex flex-col my-12 md:my-24">
      <nuxt-link
        v-for="job in jobs"
        :key="job.title"
        class="flex flex-col border border-gold-500 rounded-lg p-8 mb-4 hover:bg-gold-50 transition-all duration-300 ease-in-out"
        :to="'/jobs/' + job.slug"
      >
        <h3 class="text-2xl font-serif font-bold text-black mb-0">{{ job.title }}</h3>
        <h4 class="text-gold-500 text-sans text-sm mb-0">{{ job.worktime }}</h4>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  layout: "main",
  async asyncData({ $content }) {
    const jobs = await $content("jobs").fetch();
    return { jobs };
  },
  head() {
    return {
      title: "Stellenausschreibungen Friseur Freiburg",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "GM Professional Hairstudio in Freiburg - Werden Sie Teil unseres Teams. ✓Individuelle Looks ✓Typgerechte Beratung. Jetzt bewerben!",
        },
      ],
    };
  },
};
</script>

<style></style>
