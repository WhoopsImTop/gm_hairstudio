<template>
  <div>
    <div class="content-container" style="margin-top: 130px">
      <main-header></main-header>
      <divider></divider>
      <about-us id="ueber-uns"></about-us>
      <image-grid id="image-grid"></image-grid>
      <google-reviews id="google-reviews"></google-reviews>
      <unsere-preise id="unsere-preise"></unsere-preise>
    </div>
    <unsere-produkte id="unsere-produkte"></unsere-produkte>
  </div>
</template>

<script>
import MainHeader from "../components/mainHeader.vue";
import Divider from "../components/divider.vue";
import AboutUs from "../components/aboutUs.vue";
import UnserePreise from "../components/unserePreise.vue";
import UnsereProdukte from "../components/unsereProdukte.vue";
import GoogleReviews from "../components/googleReviews.vue";
export default {
  layout: "main",
  components: {
    MainHeader,
    Divider,
    AboutUs,
    UnserePreise,
    UnsereProdukte,
    GoogleReviews,
  },
  data: () => {
    return {};
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
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-entry h3 {
  font-size: 30px;
  line-height: 30px;
  margin: 0px;
  min-width: max-content;
}

.menu p {
  margin: 2px 0 10px 0;
  font-size: 20px;
  min-width: max-content;
}

.mb-60 {
  bottom: 60px;
}

.border {
  border-bottom: 2px dashed var(--text-dark);
  width: 100%;
  margin: 0px 20px 10px 20px;
}

.menu-entry {
  display: flex;
  flex-direction: row;
}

.smaller-font {
  font-size: 25px;
  line-height: 25px;
}

.menu {
  position: relative;
  padding: 30px;
  background-color: var(--menu-bg-color);
  border: 2px solid var(--menu-border-color);
}

.m-tb {
  margin-bottom: 50px;
  margin-top: 10px;
}

.m-b {
  margin-bottom: 40px;
}

.link {
  color: var(--green-color);
}

@media (max-width: 1349px) {
  .m-tb {
    margin-bottom: 85px;
    margin-top: 10px;
  }

  .m-b {
    margin-bottom: 40px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .grid-item-1 {
    grid-column: 1;
  }

  .grid-item-3 {
    grid-column: 1;
  }

  .row {
    flex-wrap: wrap;
  }
}

@media (max-width: 900px) {
  h1 {
    font-size: 40px;
    line-height: 40px;
  }

  h2 {
    font-size: 30px;
    line-height: 30px;
  }

  h3 {
    font-size: 20px;
    line-height: 35px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }

  .content-container {
    padding: 0 30px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .grid-item-1 {
    grid-column: 1;
  }

  .grid-item-3 {
    grid-column: 1;
  }

  .menu p {
    margin: 2px 0 10px 0;
    font-size: 20px;
    min-width: unset;
  }

  .menu-entry {
    align-items: baseline;
  }
  p.menu-price {
    min-width: max-content !important;
    font-weight: bold;
  }
}

@media (max-width: 1349px) {
  .menu {
    padding: 20px 30px 20px 20px;
  }

  .menu-entry h3 {
    padding-right: 5px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }

  .border {
    display: none;
  }

  .price {
    align-self: flex-end;
    margin: 0 0 0 20px;
  }

  .menu-entry {
    justify-content: space-between;
  }

  .menu-entry h3 {
    font-size: 20px;
    line-height: 30px;
    margin: 0px;
    min-width: auto;
  }
}
</style>