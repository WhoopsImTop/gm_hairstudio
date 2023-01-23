<template>
  <div>
    <Header></Header>
    <div class="content-container" style="margin-top: 130px">
      <main-header></main-header>
      <divider></divider>
      <about-us id="ueber-uns"></about-us>
      <unsere-preise id="unsere-preise"></unsere-preise>
    </div>
    <unsere-produkte id="unsere-produkte"></unsere-produkte>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import MainHeader from "../components/mainHeader.vue";
import Divider from "../components/divider.vue";
import AboutUs from "../components/aboutUs.vue";
import UnserePreise from "../components/unserePreise.vue";
import UnsereProdukte from "../components/unsereProdukte.vue";
export default {
  components: {
    Header,
    Footer,
    MainHeader,
    Divider,
    AboutUs,
    UnserePreise,
    UnsereProdukte,
  },
};
</script>

<style>
/* poppins-200 - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 200;
  src: url("/fonts/poppins-v20-latin-200.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-200.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-200.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-200.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-200.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/poppins-v20-latin-200.svg#Poppins")
      format("svg"); /* Legacy iOS */
}
/* poppins-300 - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  src: url("/fonts/poppins-v20-latin-300.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-300.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-300.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-300.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-300.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/poppins-v20-latin-300.svg#Poppins")
      format("svg"); /* Legacy iOS */
}
/* poppins-300italic - latin */
@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 300;
  src: url("/fonts/poppins-v20-latin-300italic.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-300italic.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-300italic.woff2")
      format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-300italic.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-300italic.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("/fonts/poppins-v20-latin-300italic.svg#Poppins") format("svg"); /* Legacy iOS */
}
/* poppins-regular - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  src: url("/fonts/poppins-v20-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-regular.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("/fonts/poppins-v20-latin-regular.svg#Poppins") format("svg"); /* Legacy iOS */
}
/* poppins-500 - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  src: url("/fonts/poppins-v20-latin-500.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-500.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-500.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-500.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/poppins-v20-latin-500.svg#Poppins")
      format("svg"); /* Legacy iOS */
}
/* poppins-600 - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  src: url("/fonts/poppins-v20-latin-600.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-600.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-600.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-600.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-600.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/poppins-v20-latin-600.svg#Poppins")
      format("svg"); /* Legacy iOS */
}
/* poppins-700 - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  src: url("/fonts/poppins-v20-latin-700.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-700.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-700.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-700.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/poppins-v20-latin-700.svg#Poppins")
      format("svg"); /* Legacy iOS */
}
/* poppins-800 - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  src: url("/fonts/poppins-v20-latin-800.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-800.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-800.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-800.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-800.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/poppins-v20-latin-800.svg#Poppins")
      format("svg"); /* Legacy iOS */
}
/* poppins-900 - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  src: url("/fonts/poppins-v20-latin-900.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/poppins-v20-latin-900.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/poppins-v20-latin-900.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/poppins-v20-latin-900.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/poppins-v20-latin-900.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/poppins-v20-latin-900.svg#Poppins")
      format("svg"); /* Legacy iOS */
}

/* noto-serif-regular - latin */
@font-face {
  font-family: "Noto Serif";
  font-style: normal;
  font-weight: 400;
  src: url("/fonts/noto-serif-v21-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/noto-serif-v21-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/noto-serif-v21-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */ url("/fonts/noto-serif-v21-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/noto-serif-v21-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("/fonts/noto-serif-v21-latin-regular.svg#NotoSerif") format("svg"); /* Legacy iOS */
}
/* noto-serif-700 - latin */
@font-face {
  font-family: "Noto Serif";
  font-style: normal;
  font-weight: 700;
  src: url("/fonts/noto-serif-v21-latin-700.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/noto-serif-v21-latin-700.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/noto-serif-v21-latin-700.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/noto-serif-v21-latin-700.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/noto-serif-v21-latin-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("/fonts/noto-serif-v21-latin-700.svg#NotoSerif") format("svg"); /* Legacy iOS */
}

* {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
}

body {
  box-sizing: border-box;
  margin: 0px;
  background-color: #222222;
}

:root {
  --text-dark: #000000;
  --orange-color: #a48242;
  --orange-color-hover: #e6bb6a;
  --green-color: #539e33;
  --menu-bg-color: #fff5ec;
  --menu-border-color: #000000;
}

h1 {
  font-size: 80px;
  line-height: 90px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Noto Serif", serif;
  margin: 0;
  color: #ffffff;
}

h2 {
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  font-family: "Noto Serif", serif;
  margin-bottom: 10px;
  color: #ffffff;
}

h3 {
  font-size: 40px;
  line-height: 50px;
  color: #ffffff;
}

p {
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
}

.content-container {
  max-width: 1440px;
  padding: 0 50px;
  margin: 0 auto;
}

.button {
  padding: 10px 20px;
  background-color: var(--orange-color);
  color: #ffffff;
  text-transform: uppercase;
  width: max-content;
}

.menu {
  position: relative;
  padding: 30px;
  background-color: var(--menu-bg-color);
  border: 2px solid var(--menu-border-color);
}

.menu-floating-contaier {
  position: absolute;
  right: -25px;
  height: 96%;
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

  .menu-floating-contaier {
    display: none;
  }

  .loading img {
    width: 30px;
    height: 30px;
    animation: rotate 1s infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
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