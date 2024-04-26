<template>
  <div class="container px-4 mx-auto mt-12 md:mt-24">
    <h1
      class="font-serif text-4xl md:text-6xl text-center font-bold reveal reveal-instant uppercase"
    >
      GM Professional Hairstudio <br> Ihr Friseur in Freiburg
    </h1>
    <p class="md:w-1/2 mx-auto text-center mt-4 reveal reveal-delayed">
      Herzlich Willkommen bei GM Professional Hairstudio.
      <span class="text-gold-500"
        >Wir laden Sie ein, unser einzigartiges Ambiente in Freiburg am
        Güterbahnhof kennenzulernen. Als geschultes Team verleihen wir Ihnen den
        LOOK der zu Ihnen passt.</span
      >
      Wir sind Detailverliebt, und legen großen Wert auf typgerechte,
      individuelle Beratung.
    </p>
    <div class="flex justify-center mt-8 reveal reveal-delayed">
      <a
        class="px-4 py-2 bg-gold-500 hover:bg-gold-700 text-white mx-2"
        href="https://www.studiobookr.com/gm-professional-hairstudio-67752?fbclid=PAAaacxS00Iiygaf2pJYMOxNU3ITaO9L6gxGmw2-jAIA4GXiw6rqmavZbfgxA#/"
        traget="_blank"
        >Termin Buchen</a
      >
      <nuxt-link
        class="hidden md:block px-4 py-2 text-gold-500 hover:text-gold-700 mx-2"
        to="/leistungen"
        >Unsere Leistungen</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Animation für den Titel
    this.$gsap.from(".reveal-instant", {
      y: 100,
      opacity: 0,
      duration: 1,
    });

    // Animation für den Text
    this.$gsap.from(".reveal-delayed", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.35,
    });
  },
};
</script>

<style></style>
