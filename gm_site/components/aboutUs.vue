<template>
  <div class="about-us-content">
    <h2 style="margin-bottom: 50px;">Über Uns</h2>

    <div class="image-text-row">
      <div class="img-col">
        <img src="img/about.png" alt="about" />
      </div>
      <div class="text-col">
        <p>
          Unter dem Aspekt "stilvoll - zeitlos - modern" werden Sie bei uns
          individuell und typgerecht beraten! Wir sind Gülseren und Mohammad,
          Haare sind unsere Leidenschaft. Wir werden Ihnen den perfekten, auf
          ihre wünsche angepassten Haarschnitt bieten.
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