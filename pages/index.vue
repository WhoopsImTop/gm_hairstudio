<template>
  <main>
    <landingComponent />
    <customer-slider />
    <div class="container px-4 mx-auto mt-24">
      <!-- <client-only>
        <videoComponent />
      </client-only> -->
      <div
        id="ueber-uns"
        class="my-24 md:my-36 grid grid-cols-1 md:grid-cols-2 md:gap-32 items-center"
      >
        <div>
          <h2
            class="text-3xl md:text-4xl font-serif font-bold uppercase mb-4 reveal"
          >
            HAARE SIND <br />
            UNSERE PASSION!
          </h2>
          <p class="leading-relaxed reveal">
            Willkommen im GM Professional Hairstudio, Ihrem exklusiven
            Friseursalon am Güterbahnhof in Freiburg im Breisgau! Unser
            hochwertiger Service verkörpert Stil, Zeitlosigkeit und Modernität.
            Gülseren und ihr Team, Expertinnen mit Leidenschaft für Haare,
            bieten individuelle Beratung und perfekte Haarschnitte nach Ihren
            Wünschen. Erleben Sie die Kunst der Haarpflege in unserem stilvollen
            Salon. Termin vereinbaren und GM Professional Hairstudio entdecken!
          </p>
          <div class="flex items-center my-8">
            <nuxt-link
              class="px-4 py-2 bg-gold-500 hover:bg-gold-700 text-white reveal"
              to="/ueber-uns/guelseren"
              >Gülseren</nuxt-link
            >
          </div>
          <client-only>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <upcountingCard
                number="50"
                specialChar="M"
                content="geschnittene Haare"
                idProp="counted_hair"
              />
              <upcountingCard
                :number="reviewCount"
                specialChar="&#43;"
                content="Zufriedene Kunden"
                idProp="counterCustomers"
              />
            </div>
          </client-only>
          <div
            class="w-full border border-gold-500 rounded flex items-center justify-center mb-12"
          >
            <google-review-notice />
          </div>
        </div>
        <div>
          <img src="/guelseren_maria_martines.png" alt="Über uns" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <review-card
          v-for="review in reviews"
          :key="review.time"
          :author_name="review.author_name"
          :profile_photo_url="review.profile_photo_url"
          :rating="review.rating"
          :relative_time_description="review.relative_time_description"
          :text="review.text"
        ></review-card>
      </div>
    </div>
    <div class="mt-36 md:w-full h-96 md:h-auto">
      <img
        src="/gm_hairstudio_produkte.png"
        alt="Produkte von GM Professional Hairstudio"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="bg-gold-50 py-16 md:py-36">
      <div class="container px-4 mx-auto">
        <h2 class="font-serif text-3xl md:text-5xl font-bold reveal">
          Unser Anspruch
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div class="rounded bg-white p-6">
            <h3
              class="text-2xl md:text-2xl font-serif font-bold uppercase mb-4 reveal text-gold-500"
            >
              Professioneller Auftritt
            </h3>
            <p>
              Wir - bei GM Professional Hairstudio in Freiburg helfen Ihnen
              dabei, Ihrne perfekt auf Sie abgestimmten Stil zu finden und
              diesen in ihren Alltag zu integrieren.
            </p>
          </div>
          <div class="rounded bg-white p-6">
            <h3
              class="text-2xl md:text-2xl font-serif font-bold uppercase mb-4 reveal text-gold-500"
            >
              Höchste Qualität
            </h3>
            <p>
              Wir verwenden ausschließlich hochwertige Produkte, um Ihnen ein
              optimales Ergebnis zu garantieren. Unser Team in Freiburg nimmt
              regelmäßig an Schulungen teil, um stets auf dem neuesten Stand zu
              sein.
            </p>
          </div>
          <div class="rounded bg-white p-6">
            <h3
              class="text-2xl md:text-2xl font-serif font-bold uppercase mb-4 reveal text-gold-500"
            >
              Handwerkliche Perfektion
            </h3>
            <p>
              Unsere Friseure in Freiburg sind Experten auf ihrem Gebiet und
              beherrschen ihr Handwerk perfekt. Wir legen großen Wert auf
              typgerechte, individuelle Beratung.
            </p>
          </div>
          <div class="rounded bg-white p-6">
            <h3
              class="text-2xl md:text-2xl font-serif font-bold uppercase mb-4 reveal text-gold-500"
            >
              Zeit für Sie
            </h3>
            <p>
              Bei uns nehmen wir uns Zeit für Sie und Ihre Wünsche. Wir beraten
              Sie individuell und gehen auf Ihre Bedürfnisse ein. Lassen Sie
              sich von uns in unserem Salon in Freiburg verwöhnen!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 mx-auto mt-16 md:mt-24">
      <h2 class="font-serif text-3xl md:text-5xl text-center font-bold reveal">
        Unsere Leistungen
      </h2>

      <div
        class="my-24 md:my-36 grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center"
      >
        <div
          class="aspect-square flex items-center overflow-hidden w-full rounded my-8 md:my-0"
        >
          <img
            src="/gm_hairstudio_guelsisplace.jpg"
            alt="Mo's Place"
            class="w-full"
          />
        </div>
        <div>
          <h3
            class="text-2xl md:text-4xl font-serif font-bold uppercase mb-4 reveal"
          >
            Damen
          </h3>
          <p class="leading-relaxed reveal">
            Entdecken Sie die exklusiven Damen-Services im GM Professional
            Hairstudio in Freiburg. Wir bieten perfekte Haarschnitte und
            Stylings, individuelle Colorationen und Strähnen, sowie
            professionelle Behandlungen wie Balayage und Extensions. Unsere
            kosmetischen Angebote umfassen Augenbrauen- und Wimpernbehandlungen
            sowie Damenbartentfernung. Vereinbaren Sie Ihren Termin noch heute
            für einen neuen, strahlenden Look!
          </p>
          <nuxt-link
            class="px-4 py-2 bg-gold-500 hover:bg-gold-700 text-white inline-block mt-8 reveal mr-3"
            to="/leistungen/damen"
            >Mehr erfahren</nuxt-link
          >
          <a
            class="px-4 py-2 bg-gold-500 hover:bg-gold-700 text-white inline-block mt-8 reveal"
            href="https://www.studiobookr.com/gm-professional-hairstudio-67752?fbclid=PAAaacxS00Iiygaf2pJYMOxNU3ITaO9L6gxGmw2-jAIA4GXiw6rqmavZbfgxA#/"
            target="_blank"
            >Termin Buchen</a
          >
        </div>
      </div>
      <div
        class="my-12 md:my-36 flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center"
      >
        <div>
          <h3
            class="text-2xl md:text-4xl font-serif font-bold uppercase reveal"
          >
            Herren
          </h3>
          <h4
            class="text-lg md:text-2xl font-serif font-bold uppercase mb-4 reveal"
          >
            (auf unbestimmte Zeit geschlossen)
          </h4>
          <p class="leading-relaxed reveal">
            Tauchen Sie ein in die Welt des perfekten Stils im GM Professional
            Hairstudio in Freiburg! Unser Herrenbereich bietet eine Vielzahl
            exklusiver Dienstleistungen, darunter Herrenhaarschnitte wie den
            Classic Cut, Classic Cut & Beard Trim, Haircut, Beard Trim & Eyebrow
            Threading, Clipper Cuts in verschiedenen Längen, Fresh-ups,
            Haarkränze und Dauerwellen für den Oberkopf. Zudem bieten wir
            umfassende Bartpflege, einschließlich Konturenrasur, Bartpflege mit
            Hot Towel, Nassrasur, Augenbrauenschneiden und -zupfen sowie
            Entfernung von Ohren- und Nasenhaaren. Erforschen Sie auch unsere
            Kombi-Pakete für den perfekten Look!
          </p>
          <!-- <nuxt-link
            class="px-4 py-2 bg-gold-500 hover:bg-gold-700 text-white inline-block mt-8 reveal mr-3"
            to="/leistungen/herren"
            >Mehr erfahren</nuxt-link
          > -->
          <!-- <a
            class="px-4 py-2 bg-gold-500 hover:bg-gold-700 text-white inline-block mt-8 reveal"
            href="https://www.studiobookr.com/gm-professional-hairstudio-67752?fbclid=PAAaacxS00Iiygaf2pJYMOxNU3ITaO9L6gxGmw2-jAIA4GXiw6rqmavZbfgxA#/"
            target="_blank"
            >Termin Buchen</a
          > -->
        </div>
        <div
          class="aspect-square flex items-center overflow-hidden w-full rounded my-8 md:my-0"
        >
          <img
            src="/gm_hairstudio_mosplace.jpeg"
            alt="Mo's Place"
            class="w-full"
          />
        </div>
      </div>
      
      <div class="my-32 md:my-64">
        <h2
          class="font-serif text-3xl md:text-5xl text-center font-bold reveal"
        >
          Kundenbilder
        </h2>
        <div
          class="columns-2 md:columns-3 space-y-4 md:space-y-8 gap-4 md:gap-8 mt-12"
        >
          <img
            v-for="i in 13"
            :key="i"
            :src="'/gm_slider_' + i + '.jpeg'"
            alt="Kundenbilder"
            title="Kundenbilder"
            class="w-full rounded overflow-hidden reveal"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CustomerSlider from "../components/customerSlider.vue";
import upcountingCard from "../components/upcountingCard.vue";
import axios from "axios";
import GoogleReviewNotice from "../components/googleReviewNotice.vue";
import GoogleReviewComponent from "../components/googleReviewComponent.vue";

export default {
  components: {
    upcountingCard,
    CustomerSlider,
    GoogleReviewNotice,
    GoogleReviewComponent,
  },
  name: "IndexPage",
  layout: "main",
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "GM Professional Hairstudio in Freiburg - Ihr Friseur für Damen und Herren. ► Wir bieten exklusive Haarschnitte, Stylings und Colorationen.",
        },
      ],
    };
  },
  data() {
    return {
      reviewCount: 414,
      reviews: [],
    };
  },
  async mounted() {
    if (
      sessionStorage.getItem("reviewCount") &&
      sessionStorage.getItem("reviews")
    ) {
      this.reviewCount = sessionStorage.getItem("reviewCount");
      this.reviews = JSON.parse(sessionStorage.getItem("reviews"));
      //check how many reviews have text
      const reviewsWithText = this.reviews.filter(
        (review) => review.text !== ""
      );
      //if there are less than 3 reviews with text fill up with reviews without text
      if (reviewsWithText.length < 3) {
        const reviewsWithoutText = this.reviews.filter(
          (review) => review.text === ""
        );
        this.reviews = reviewsWithText.concat(
          reviewsWithoutText.slice(0, 3 - reviewsWithText.length)
        );
      } else {
        this.reviews = reviewsWithText.slice(0, 3);
      }
    } else {
      await axios
        .get("https://api.eliasenglen.de/google-reviews")
        .then((response) => {
          this.reviewCount = response.data.user_ratings_total;
          this.reviews = response.data.reviews;
          //check how many reviews have text
          const reviewsWithText = this.reviews.filter(
            (review) => review.text !== ""
          );
          //if there are less than 3 reviews with text fill up with reviews without text
          if (reviewsWithText.length < 3) {
            const reviewsWithoutText = this.reviews.filter(
              (review) => review.text === ""
            );
            this.reviews = reviewsWithText.concat(
              reviewsWithoutText.slice(0, 3 - reviewsWithText.length)
            );
          } else {
            this.reviews = reviewsWithText.slice(0, 3);
          }

          sessionStorage.setItem("reviewCount", this.reviewCount);
          sessionStorage.setItem("reviews", JSON.stringify(this.reviews));
        });
    }
  },
};
</script>
