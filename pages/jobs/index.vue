<template>
  <div class="content-container" style="margin: 150px auto; min-height: 40vh">
    <h2>Akutelle Stellenaus&shy;schreibungen</h2>
    <div class="jobListings">
      <nuxt-link
        v-for="job in jobs"
        :key="job.title"
        class="jobListing"
        :to="'/jobs/' + job.slug"
      >
        <h3 style="margin: 0 0 10px 0">{{ job.title }}</h3>
        <h4 style="margin: 0">{{ job.worktime }}</h4>
        <img
          class="watermark"
          src="/img/gm_hairstudio_logo_about.svg"
          width="200"
          alt="watermark"
        />
      </nuxt-link>
    </div>
  </div>
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
      title: "Stellenangebote - GM Professional Hairstudio in Freiburg",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Aktuelle Stellenausschreibungen bei GM Professional Hairstudio in Freiburg im Breisgau",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://gmhairstudio.de/jobs/",
            },
            headline: "Stellenangebote - GM Professional Hairstudio",
            image: "https://gmhairstudio.de/path/to/your/image.jpg", // Bild-URL hinzufügen
            author: {
              "@type": "Organization",
              name: "GM Professional Hairstudio",
              url: "https://gmhairstudio.de/jobs/",
            },
            publisher: {
              "@type": "Organization",
              name: "GM Professional Hairstudio", // Publisher-Name hinzufügen
              logo: {
                "@type": "ImageObject",
                url: "https://gmhairstudio.de/path/to/logo.jpg", // Logo-URL hinzufügen
              },
            },
            datePublished: "2024-01-25", // Veröffentlichungsdatum hinzufügen
          },
        },
      ],
    };
  },
};
</script>

<style>
.jobListings {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.jobListing {
  background-color: var(--menu-bg-color);
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
}

.watermark {
  position: absolute;
  right: 0;
  top: -20px;
  transform: rotate(-45deg);
  opacity: 0.3;
  transition: 0.5s ease-in-out;
}

.jobListing:hover {
  box-shadow: 0px 20px 20px #a4824220;
}

.jobListing:hover .watermark {
  opacity: 0.5;
  transform: rotate(-25deg) scale(1.1);
}
</style>
