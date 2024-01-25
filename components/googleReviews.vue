<template>
  <div style="margin: 100px 0">
    <h2 style="margin-bottom: 50px">Kundenmeinungen</h2>
    <div class="review-slider">
      <div class="review" v-for="(review, index) in reviews" :key="index">
        <div class="reviewHeader">
          <div>
            <h4 style="margin: 0">{{ review.name }}</h4>
            <div class="starRow">
              <img
                v-for="star in review.rating"
                :key="star"
                src="/img/gm_hairstudio_star.svg"
                width="20"
                alt="stern"
              />
            </div>
          </div>
          <img
            src="/img/gm_hairstudio_google_icon.png"
            width="30"
            height="30"
            alt="google"
          />
        </div>
        <div class="reviewContent" :class="showContent ? 'open' : 'closed'">
          <p>{{ review.comment }}</p>
        </div>
        <div class="showMore" @click="showContent = !showContent">
          {{ showContent ? "weniger anzeigen" : "mehr anzeigen" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
      reviews: [
        {
          slug: "review_01",
          name: "Jordana Mar",
          rating: 5,
          comment:
            "Heute war ich zum ersten Mal im Salon von der lieben Gülsi. Das Ambiente, sowie die Atmosphäre ist sehr einladend und modern. Gülsi und Mo arbeiten gut als Team miteinander und trotzdem, hat jeder seinen eigenen Arbeitsplatz, so dass man in Ruhe entspannen kann. Ich wurde sehr fachlich und ausführlich über die nächsten Schritte und die Produkte aufgeklärt. Immer wieder wurde ich gefragt, ob ich noch etwas Trinken möchte und ob ich soweit zufrieden bin. Man merkt deutlich die Liebe zum Detail, sowie die Liebe zu ihren Kunden. Ich werde auf jeden Fall wiederkommen!",
          toc: [],
          body: {
            type: "root",
            children: [],
          },
          dir: "/googleReviews",
          path: "/googleReviews/review_01",
          extension: ".md",
          createdAt: "2024-01-25T07:56:19.644Z",
          updatedAt: "2024-01-25T07:56:19.644Z",
        },
        {
          slug: "review_02",
          name: "Lina Biegert",
          rating: 5,
          comment:
            "Ich denke das Bild spricht für sich! Einfach die Beste, wenn es um ein natürliches Ergebnis geht. Ein wunderschöner Salon zum Wohlfühlen.",
          toc: [],
          body: {
            type: "root",
            children: [],
          },
          dir: "/googleReviews",
          path: "/googleReviews/review_02",
          extension: ".md",
          createdAt: "2024-01-25T07:56:19.644Z",
          updatedAt: "2024-01-25T07:56:19.644Z",
        },
        {
          slug: "review_03",
          name: "Julia K.",
          rating: 5,
          comment:
            "Ich hatte heute den entspanntesten Tag bei Gülsi mit meiner besten Freundin zusammen :) wir sind beide extrem zufrieden mit dem Ergebnis! Schon bei der Beratung hat man das Gefühl, dass sie versteht, was man will. Sie gibt einem auch ehrliche Rückmeldung zu den Vorstellungen die man hat und macht auch Vorschläge, damit man mit dem Ergebnis glücklich ist. Der Salon ist außerdem wunderschön, die Atmosphäre locker und man fühlt sich einfach wohl. Vielen lieben Dank nochmal für den schönen Vormittag und bis zum nächsten Mal! :)",
          toc: [],
          body: {
            type: "root",
            children: [],
          },
          dir: "/googleReviews",
          path: "/googleReviews/review_03",
          extension: ".md",
          createdAt: "2024-01-25T07:56:19.644Z",
          updatedAt: "2024-01-25T07:56:19.644Z",
        },
        {
          slug: "review_07",
          name: "Hares Az",
          rating: 5,
          comment:
            "Mit Abstand der beste Friseur, den ich in der letzten Zeit besucht habe. Er arbeitet in einem guten Tempo und führt seine Arbeit präzise und ordentlich aus. Der Service lässt sich ebenfalls mit 5 von 5 Sternen auszeichnen. Empfehlenswert ist der Friseur meinerseits in jedem Fall.",
          toc: [],
          body: {
            type: "root",
            children: [],
          },
          dir: "/googleReviews",
          path: "/googleReviews/review_07",
          extension: ".md",
          createdAt: "2024-01-25T07:56:19.645Z",
          updatedAt: "2024-01-25T07:56:19.645Z",
        },
        {
          slug: "review_06",
          name: "Dasha Kovach",
          rating: 5,
          comment:
            "Ich habe lange Zeit nach einem professionellen Friseur in Freiburg gesucht, es war schwer, aber ich habe gefunden! Es ist sehr wichtig, dass ein Salon eine angenehme Atmosphäre mit Professionalität verbindet. In diesem Salon ist es genau so! Ich bin sehr zufrieden mit dem Ergebnis, wie meine Haare aussehen, und ich konnte mich auch entspannen, weil der Salon gemütlich und sauber ist und schöne Musik läuft. Ich empfehle es jedem! Toller Service!",
          toc: [],
          body: {
            type: "root",
            children: [],
          },
          dir: "/googleReviews",
          path: "/googleReviews/review_06",
          extension: ".md",
          createdAt: "2024-01-25T07:56:19.644Z",
          updatedAt: "2024-01-25T07:56:19.645Z",
        },
        {
          slug: "review_05",
          name: "Pavel Gerasimov",
          rating: 5,
          comment:
            "Ich war heute das erste Mal in dem Salon und bin wirklich begeistert. Sehr professioneller Umgang, sehr gute Beratung und faire Preise. Ich habe nun meinen Friseur auf dem Areal gefunden, zu Mo komme ich bestimmt wieder",
          toc: [],
          body: {
            type: "root",
            children: [],
          },
          dir: "/googleReviews",
          path: "/googleReviews/review_05",
          extension: ".md",
          createdAt: "2024-01-25T07:56:19.644Z",
          updatedAt: "2024-01-25T07:56:19.644Z",
        },
        {
          slug: "review_04",
          name: "Fatlind Himaj",
          rating: 5,
          comment:
            "heute war ich zum sechsten Mal da und ich muss echt sagen, ich bin von Mal zu Mal mehr begeistert von diesem Salon/ Konzept! ja besuchen lohnt sich einfach immer. Die Beratung ist super und die Getränkeauswahl ist sehr vielfältig. Ich komme gerne wieder .",
          toc: [],
          body: {
            type: "root",
            children: [],
          },
          dir: "/googleReviews",
          path: "/googleReviews/review_04",
          extension: ".md",
          createdAt: "2024-01-25T07:56:19.644Z",
          updatedAt: "2024-01-25T07:56:19.644Z",
        },
      ],
    };
  },
};
</script>

<style>
.review-slider {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: auto;
  overflow-x: scroll;
  /* style scrollbars */
  margin-bottom: 50px;
  padding-bottom: 20px;
}

.review {
  min-width: 280px;
  background: #f8f8f8;
  border: 2px solid #efefef;
  border-radius: 5px;
  box-shadow: 0px 0px 20px #35353516;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  transition: height 0.5s ease-in-out;
  position: relative;
}

.reviewHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}

.starRow {
  display: flex;
  align-items: center;
}

.reviewContent {
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.5s ease-in-out;
}

.reviewContent.closed {
  max-height: 200px;
}

.reviewContent.open {
  max-height: 100%;
  margin-bottom: 40px;
}

.showMore {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 10px;
  background: linear-gradient(rgba(255, 255, 255, 0.847), #f8f8f8);
  text-align: center;
}
</style>
