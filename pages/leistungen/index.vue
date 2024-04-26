<template>
  <div class="container px-4 mx-auto mt-12 md:mt-24">
    <h1 class="font-serif text-4xl md:text-7xl text-center font-bold">
      Unsere Leistungen
    </h1>

    <div class="my-12 md:my-24">
      <preisComponent />
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  head() {
    return {
      title: "Preise und Leistungen Frieseur Freiburg",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "GM Professional Hairstudio in Freiburg - Ihr Friseur für ✓individuelle Looks und ✓typgerechte Beratung. Jetzt Termin vereinbaren!",
        },
      ],
    };
  },
};
</script>

<style></style>
