<template>
  <div class="content header-content">
    <div class="text-content">
      <h1>
        Haare sind <br />
        unsere passion!
      </h1>
      <p style="max-width: 800px">
        Willkommen bei GM Professional Hairstudio. Wir sind ein professionelles
        Team von Frisören und Top-Stylisten, die sich auf Pflege und das Styling
        ihrer Haare spezialisiert hat. Buchen Sie jetzt einen Termin und lassen
        Sie sich von uns verwöhnen.
      </p>
      <nuxt-link class="button" to="/#unsere-preise">Unser Angebot</nuxt-link>
    </div>
    <img class="headerImg" src="/img/headerImg.png" alt="Haare" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20vh 0 38vh 0;
  position: relative;
}

.headerImg {
  animation: fadeup 2s ease-in-out;
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
  top: 0;
}

/* make fadeup animation for image */
@keyframes fadeup {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-content p {
  margin-bottom: 50px;
}

@media (max-width: 1200px) {
  .header-content {
    position: unset;
    flex-direction: column-reverse;
    padding: 0;
  }

  .header-content img {
    position: unset;
    max-height: 50vh;
    object-fit: cover;
  }
}

@media (max-width: 1000px) {
    .text-content h1 {
        margin-top: 20px
    }
    .text-content p {
        margin-top: 20px;
    }
}
</style>