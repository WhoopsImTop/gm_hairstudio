<template>
  <div class="about-us-content">
    <h2 style="margin-bottom: 50px;">Über Uns</h2>

    <div class="image-text-row">
      <div class="img-col">
        <img src="img/about.png" alt="about" />
        <!-- <div class="person-1">
          <span class="name"><strong>Spitzname: Mo</strong></span><br>
          <span class="position">Frisörmeister</span>
        </div> -->
        <!-- <div class="person-2">
          <span class="name"><strong>Spitzname: Gülsi</strong></span><br>
          <span class="position">Diplome Coloristin</span>
        </div> -->
      </div>
      <div class="text-col">
        <p>
          Wir sind Gülseren und Mohammad, Diplom Coloristin und Friseurmeister. Wir werden Ihnen den perfekten, auf ihre
          Wünsche angepassten Look bieten.
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
</style>