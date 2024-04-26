<template>
  <div class="my-0 lg:my-24">
    <div class="container px-4 mx-auto relative py-12 md:py-24">
      <h1
        class="font-serif text-4xl md:text-6xl text-center font-bold reveal reveal-instant uppercase"
      >
        Ihr Damenfriseur <br />
        in Freiburg
      </h1>
      <p class="w-full lg:w-1/2 mx-auto text-center mt-4 reveal reveal-delayed">
        Herzlich Willkommen bei GM Professional Hairstudio in Freiburg.
        <span class="text-gold-500"
          >Im Bereich von
          <a href="https://www.instagram.com/guelseren_maria/" target="_blank"
            >@guelseren_maria</a
          >
          sorgen wir für einen auffallend guten Look!</span
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
      </div>
      <div class="w-full flex items-center justify-center mt-12 reveal reveal-delayed">
        <google-review-component class="mx-auto" />
      </div>
      <div class="grid grid-cols-2 gap-12 mt-12 mb-4 md:mb-24">
        <video
          class="xl:w-64 xl:mt-8 rounded -rotate-3 xl:absolute xl:top-0"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="/damen_video_01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          class="xl:w-64 xl:mt-8 rounded rotate-3 xl:absolute xl:top-0 xl:right-0"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="/damen_video_02.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="bg-gold-50 py-12 md:py-24">
      <div class="container px-4 mx-auto">
        <h2 class="font-serif text-3xl md:text-5xl font-bold reveal">
          Unser Anspruch
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="rounded bg-white p-6">
            <h3
              class="text-2xl md:text-2xl font-serif font-bold uppercase mb-4 reveal text-gold-500"
            >
              Maßgeschneiderte Stilberatung
            </h3>
            <p>
              In unserem Friseursalon in Freiburg setzen wir all unsere
              Leidenschaft und Expertise ein, um Ihren persönlichen Stil zu
              definieren. Jeder Mensch ist einzigartig und verdient einen Look,
              der das widerspiegelt. Lassen Sie sich von uns beraten!
            </p>
          </div>
          <div class="rounded bg-white p-6">
            <h3
              class="text-2xl md:text-2xl font-serif font-bold uppercase mb-4 reveal text-gold-500"
            >
              Exzellenz durch Fachkompetenz
            </h3>
            <p>
              Unser Engagement für höchste Qualität zeigt sich darin, dass
              unsere Friseurinnen und Friseure in Freiburg stets die neuesten
              Schnitt-, Färbe- und Frisiertechniken beherrschen. Wir setzen auf
              kontinuierliche Weiterbildung und Fachkenntnisse, um Ihnen ein
              erstklassiges Erlebnis zu bieten.
            </p>
          </div>
          <div class="rounded bg-white p-6">
            <h3
              class="text-2xl md:text-2xl font-serif font-bold uppercase mb-4 reveal text-gold-500"
            >
              Individuelle Styling-Beratung
            </h3>
            <p>
              In unserem Friseursalon in Freiburg legen wir großen Wert darauf,
              Sie umfassend zu den Bereichen Schnitt, Farbe und Styling zu
              beraten. Unser Ziel ist es, Ihre individuellen Wünsche und
              Anforderungen bestmöglich zu verstehen und umzusetzen, damit Sie
              mit einem strahlenden Auftritt begeistern können!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 mx-auto mt-12 md:mt-24">
      <h2 class="font-serif text-3xl md:text-5xl font-bold text-center reveal">
        Unsere Leistungen
      </h2>
      <div class="my-12 md:my-24">
        <preisComponent
          :sections="[
            'Damen',
            'Coloration',
            'Balayage',
            'Extensions',
            'Kosmetische Behandlungen',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  head() {
    return {
      title: "Damenfriseur in Freiburg",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "GM Professional Hairstudio in Freiburg - Ihr Damenfriseur für ✓individuelle Looks und ✓typgerechte Beratung. Jetzt Termin vereinbaren!",
        },
      ],
    };
  },
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
