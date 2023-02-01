<template>
  <div class="about-us-content">
    <h2 style="margin-bottom: 50px">Über Uns</h2>

    <div class="image-text-row">
      <div class="img-col">
        <div class="mo">
          <img src="img/mo.png" alt="Mohammad" />
          <div class="hovercontent">
            <p>
              <strong>Spitzname: Mo</strong><br /><br />
              Ich bin seit dem 14. Lebensjahr begeistert davon was ein
              Haarschnitt ausmachen kann, Meine besonderen Fähigkeiten habe ich
              im Herren / Barberbereich . Mich begeistern Klassische wie auch
              moderne und ausgefallene . Qualität statt Quantität wird bei mir
              großgeschrieben!
            </p>
          </div>
        </div>
        <div class="guelsi">
          <img src="img/gülsi.png" alt="Gülsi" />
          <div class="hovercontent">
            <p>
              <strong>Spitzname: Gülsi</strong><br /><br />
              Meine Stärken liegen darin, meiner Kreativität im Colour Bereich
              freien Lauf zu lassen. Klassische Strähnen, Farbveredelungen,
              Farbkorrekturen, Extensions, Stylings oder aufwendige Balayge
              Techniken gehören zu meinem Alltag,den ich mit bravur bewältige.
              Meine Liebe ins Detail sorgt für individuelle Looks, die dich zum
              strahlen bringen.
            </p>
          </div>
        </div>
        <img src="img/logo_about.svg" alt="logo" class="logo-img" />
      </div>
      <div class="text-col">
        <p>
          Wir sind Gülseren und Mohammad, Diplom Coloristin und Friseurmeister.
          Wir werden Ihnen den perfekten, auf ihre Wünsche angepassten Look
          bieten.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.image-text-row p {
  text-align: left;
  padding: 0 40px;
}

.img-col {
  position: relative;
  min-width: 700px;
  width: 50%;
  height: 500px;
}

.mo {
  border-top-left-radius: 170px;
  border-top-right-radius: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
}

.hovercontent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: 0.5s ease;
  padding: 10px 0;
  display: flex;
  align-items: flex-end;
}

.guelsi .hovercontent {
  align-items: center;
}

.mo:hover .hovercontent,
.guelsi:hover .hovercontent {
  opacity: 1;
  z-index: 999;
}

.hovercontent p {
  color: #fff !important;
  font-size: 14px;
}

.mo img,
.guelsi img {
  width: 320px;
  object-fit: cover;
}

.guelsi {
  border-bottom-left-radius: 170px;
  border-bottom-right-radius: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
}

.about-us-content .logo-img {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
}

.about-us-content img.logo-img {
  width: 250px;
}

/* .person-1 {
  position: absolute;
  bottom: -70px;
  left: 130px;
}

.person-2 {
  position: absolute;
  bottom: -70px;
  right: 140px;
} */

@media (max-width: 1200px) {
  .image-text-row {
    flex-direction: column;
  }

  .image-text-row img {
    max-width: 100%;
  }

  .image-text-row p {
    margin-top: 50px;
    padding: 0;
  }
}

@media (max-width: 775px) {
  .img-col {
    min-width: unset;
    width: 100%;
    height: 250px;
  }

  .mo img,
  .guelsi img {
    width: 140px;
    object-fit: cover;
  }
  .about-us-content img.logo-img {
    width: 150px;
  }
}
</style>