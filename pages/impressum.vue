<template>
  <div class="container px-4 mx-auto relative py-24">
    <h1
      class="font-serif text-4xl md:text-6xl text-center font-bold reveal reveal-instant uppercase"
    >
      Impressum
    </h1>
    <h2 class="font-serif text-2xl md:text-4xl font-bold mt-12 mb-4">
      Angaben gemäß § 5 TMG
    </h2>
    <p>
      Gülseren Maria Martines<br />
      Ellen-Gottlieb-Straße 15<br />
      79106 Freiburg
    </p>
    <h2 class="font-serif text-2xl md:text-4xl font-bold mt-12 mb-4">
      Kontakt
    </h2>
    <p>
      Telefon: 0761 51463046<br />
      E-Mail: info@gmhairstudio.de
    </p>
    <h2 class="font-serif text-2xl md:text-4xl font-bold mt-12 mb-4">
      Redaktionell verantwortlich
    </h2>
    <p>Gülseren Maria Martines</p>
    <h2 class="font-serif text-2xl md:text-4xl font-bold mt-12 mb-4">
      EU-Streitschlichtung
    </h2>
    <p>
      Die Europäische Kommission stellt eine Plattform zur
      Online-Streitbeilegung (OS) bereit:
      <a
        href="https://ec.europa.eu/consumers/odr/"
        target="_blank"
        rel="noopener noreferrer"
        >https://ec.europa.eu/consumers/odr/</a
      >.<br />
      Unsere E-Mail-Adresse finden Sie oben im Impressum.
    </p>
    <h2 class="font-serif text-2xl md:text-4xl font-bold mt-12 mb-4">
      Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
    </h2>
    <p>
      Wir nehmen an einem Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teil. Zuständig ist die
      Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger
      Straße 8, 77694 Kehl am Rhein (<a
        href="https://www.verbraucher-schlichter.de"
        rel="noopener noreferrer"
        target="_blank"
        >https://www.verbraucher-schlichter.de</a
      >).
    </p>
  </div>
</template>

<script>
export default {
  layout: "main",
  head() {
    return {
      title: "Impressum",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Impressum von GM Professional Hairstudio in Freiburg.",
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
