<template>
  <div class="content-container" style="margin-top: 130px">
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
    const page = await $content(params.slug).fetch();
    return { page };
  },

  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description,
        },
      ],
    };
  },
  
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "GM Professional Hairstudio",
      image: "https://gmhairstudio.de/img/logo.svg",
      "@id": "",
      url: "https://gmhairstudio.de",
      telephone: "+49 761 51463046",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ellen-Gottlieb-Straße 15",
        addressLocality: "Güterbahnhof, Freiburg im Breisgau",
        postalCode: "79106",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.014648,
        longitude: 7.848021,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/gm.professional.hairstudio",
        "https://www.instagram.com/gm.professional.hairstudio/",
        "https://www.studiobookr.com/en/gm-professional-hairstudio-67752?fbclid=PAAaacxS00Iiygaf2pJYMOxNU3ITaO9L6gxGmw2-jAIA4GXiw6rqmavZbfgxA#/",
      ],
    };
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
