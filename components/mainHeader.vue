<template>
  <div class="content header-content">
    <div class="text-content">
      <h1>
        Haare sind <br />
        unsere passion!
      </h1>
      <p class="landing-content">
        Herzlich Willkommen bei GM Professional Hairstudio. <br />
        <span class="hightlight">
          Wir laden Sie ein, unser einzigartiges Ambiente in Freiburg am
          Güterbahnhof kennenzulernen. Als geschultes Team verleihen wir Ihnen den
          LOOK der zu Ihnen passt.</span
        >
        Wir sind Detailverliebt, und legen großen Wert auf typgerechte,
        individuelle Beratung. Sie sind sich noch unsicher? <br />
        Buchen Sie jetzt einen Termin und verschaffe Sie sich ihr eigenes Bild.
      </p>
      <nuxt-link class="button" to="/#unsere-preise">Unser Angebot</nuxt-link>
    </div>
    <img class="headerImg left" src="/img/men.jpeg" alt="Haare" />
    <img class="headerImg right" src="/img/woman.jpeg" alt="Haare" />
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
  animation: fadeup;
  animation-timing-function: ease-in-out;
  position: absolute;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  height: auto;
  z-index: -1;
}

.hightlight {
  color: var(--orange-color);
}

.left {
  right: -50px;
  top: 50px;
  bottom: 0;
  animation-duration: 1.5s;
}

.right {
  top: 300px;
  bottom: 0px;
  right: 370px;
  animation-duration: 2s;
}

/* make fadeup animation for image */
@keyframes fadeup {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  40% {
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

.landing-content {
  max-width: 50%
}

@media (max-width: 1200px) {
  .header-content {
    position: relative;
    flex-direction: column-reverse;
    padding: 0;
  }

  .text-content {
    margin-top: 30vh;
  }

  .headerImg {
    position: absolute;
    width: 150px;
    object-fit: cover;
  }

  .right {
    transform: rotate(15deg);
    right: 10px;
    top: 0;
    transition: 0.5s;
  }

  .left {
    transform: rotate(5deg);
    right: 10px;
    top: 0;
    left: 10px;
    bottom: 0;
    transition: 0.5s;
  }

  @keyframes fadeup {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    40% {
      opacity: 0;
      transform: translateY(30px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (max-width: 1000px) {
  .text-content h1 {
    margin-top: 20px;
  }

  .text-content p {
    margin-top: 20px;
  }

  .landing-content {
    max-width: 100%
  }
}
</style>
