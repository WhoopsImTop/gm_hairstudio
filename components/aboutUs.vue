<template>
  <div class="about-us-content">
    <h2 style="margin-bottom: 50px">Über Uns</h2>

    <div class="image-text-row">
      <div class="img-col">
        <img src="img/gm_hairstudio_about.webp" alt="about" />
      </div>
      <div class="text-col">
        <p>
          Unter dem Aspekt "stilvoll - zeitlos - modern" werden Sie bei uns
          individuell und typgerecht beraten! Wir sind Gülseren und Mohammad,
          Haare sind unsere Leidenschaft. Wir werden Ihnen den perfekten, auf
          ihre wünsche angepassten Haarschnitt bieten.
        </p>
        <div
          class="about-box"
          @click="moActive = !moActive"
          :class="moActive ? '' : 'collapsed'"
        >
          <div class="about-box-heading">
            <div>
              <p class="name hightlight">Mohammad Hakla</p>
              <p class="position">Frisörmeister</p>
            </div>
            <img
              src="img/gm_hairstudio_toggle-btn.svg"
              style="width: 25px"
              alt="toggle-btn"
            />
          </div>
          <p class="about-text">
            Ich bin seit dem 14. Lebensjahr begeistert davon, was ein Haarschnitt
            ausmachen kann, Meine besonderen Fähigkeiten habe ich im Herren /
            Barberbereich. Mich begeistern klassische wie auch moderne und
            ausgefallene Frisuren. <br />
            Qualität statt Quantität wird bei mir großgeschrieben!
          </p>
        </div>
        <div
          class="about-box"
          @click="guelsiActive = !guelsiActive"
          :class="guelsiActive ? '' : 'collapsed'"
        >
          <div class="about-box-heading">
            <div>
              <p class="name hightlight">Gülseren Maria Martines</p>
              <p class="position">Diplome Coloristin</p>
            </div>
            <img
              src="img/gm_hairstudio_toggle-btn.svg"
              style="width: 25px"
              alt="toggle-btn"
            />
          </div>
          <p class="about-text">
            Meine Stärken liegen darin, meiner Kreativität im Colour Bereich
            freien Lauf zu lassen. Klassische Strähnen, Farbveredelungen,
            Farbkorrekturen, Extensions, Stylings oder aufwendige Balayage
            Techniken gehören zu meinem Alltag,den ich mit Bravour bewältige.<br />
            Meine Liebe zum Detail sorgt für individuelle Looks, die dich zum
            Strahlen bringen.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      moActive: false,
      guelsiActive: false,
    };
  },
};
</script>

<style>
.about-us-content {
  padding: 50px 0;
  text-align: center;
}

.image-text-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-text-row img {
  width: 100%;
  object-fit: cover;
}

.image-text-row {
  text-align: left;
}

.text-col {
  padding: 0 40px;
  text-align: left;
}

.name {
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-top: 0;
}

.position {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
}

.about-box {
  border: 1px solid var(--orange-color);
  border-radius: 5px;
  padding: 0 20px;
  margin: 20px 0;
}

.about-box.collapsed {
  max-height: 80px;
  overflow: hidden;
}

.about-box-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.about-box-heading img {
  margin: 0;
}

@media (max-width: 1200px) {
  .image-text-row {
    flex-direction: column;
  }

  .image-text-row img {
    max-width: 100%;
  }

  .text-col {
    margin-top: 50px;
    padding: 0;
    text-align: left;
  }
}

@media (max-width: 900px) {
  .about-text {
    padding: 20px 0;
  }

  .about-box {
    padding: 10px 20px;
  }
}
</style>