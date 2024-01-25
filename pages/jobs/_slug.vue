<template>
  <div class="content-container" style="margin: 150px auto">
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
      title: this.page.title + " - GM Professional Hairstudio in Freiburg",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            title: "Friseur/in (M/W/D)",
            description:
              "<h1 id='friseurin-mwd'>Friseur/in (M/W/D)</h1><h4 id='vollzeit'>Vollzeit</h4><p>Du bist ein/e leidenschaftliche/r Männer Friseur/in und hast ein Gespür für trendige Stylings und moderne Haarschnitte? Du möchtest Teil eines jungen und dynamischen Teams werden und in einem modernen Salon arbeiten? Dann suchen wir genau dich!</p><p>Unser renommiertes Friseurunternehmen in Freiburg im Breisgau (Güterbahnhof) sucht Verstärkung für unser Team. Wir legen großen Wert auf Kreativität, Fachkenntnisse und exzellenten Kundenservice. Als Männer Friseur/in bei uns hast du die Möglichkeit, deine Leidenschaft für Haare und Styling auszuleben und unsere anspruchsvollen Kunden zu begeistern.</p><h4 id='deine-benefits'>Deine Benefits</h4><ul><li>selbstständiges Arbeiten</li><li>gutes und faires Gehalt</li><li>Festanstellung</li><li>Wertschätzung</li><li>junges Team</li><li>Weiterbildungsmöglichkeiten</li><li>uvw.</li></ul><h4 id='vorraussetzungen'>Vorraussetzungen</h4><ul><li>Abgeschlossene Ausbildung zum/zur Friseur/in</li><li>Fachkenntnisse im Bereich Männerhaarschnitte und Bartpflege</li><li>Kreativität und Leidenschaft für Frisuren</li><li>Kundenorientierte Arbeitsweise</li><li>Teamfähigkeit und Zuverlässigkeit</li><li>Bereitschaft zur kontinuierlichen Weiterbildung und Entwicklung</li></ul><h2 id='interesse-geweckt'>Interesse geweckt?</h2><p>Dann schicke uns deine Bewerbung an:<a href='mailto:info@gmhairstudio.de'>info@gmhairstudio.de</a></p>",
            hiringOrganization: {
              "@type": "Organization",
              name: "GM Professional Hairstudio",
              sameAs: "https://gmhairstudio.de",
              logo: "https://gmhairstudio.de/img/gm_hairstudio_logo.svg",
            },
            industry: "Friseur",
            employmentType: "FULL_TIME",
            workHours: "9am-7pm",
            datePosted: "2024-01-25",
            validThrough: "2024-03-25", // Beispielsdatum für Gültigkeitsende
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ellen-Gottlieb-Straße 15",
                addressLocality: "Freiburg im Breisgau",
                postalCode: "79106",
                addressCountry: "DE",
              },
            },
          },
        },
      ],
    };
  },
};
</script>

<style></style>
