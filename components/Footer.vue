<template>
  <div class="footer-container">
    <div class="content-container">
      <div class="row lined">
        <div class="col">
          <h4 style="text-transform: uppercase; margin-bottom: 0px;">Öffnungszeiten</h4>
          <p style="margin-top: 10px">Mo-Sa: 9:00 - 17:00 Uhr</p>
        </div>
        <div class="col">
          <h4 style="text-transform: uppercase; margin-bottom: 0px;">Kontakt</h4>
          <p style="margin: 10px 0 0 0;"><a style="text-decoration: none" href="mailto:info@gmhairstudio.de">info@gmhairstudio.de</a></p>
          <p style="margin-top: 5px"><a style="text-decoration: none" href="tel:0761 51463046">0761 51463046</a></p>
        </div>
        <div class="col">
          <h4 style="text-transform: uppercase; margin-bottom: 0px;">Adresse</h4>
          <p style="margin: 10px 0 0 0;">Ellen-Gottlieb-Straße 15</p>
          <p style="margin-top: 5px">79106 Freiburg im Breisgau</p>
        </div>
      </div>
      <div class="row">
        <div class="row">
          <a class="credencials" href="https://eliasenglen-grafikdesign.de" target="_blank"
            ><EliasEnglenLogo
              style="width: 30px; opacity: 0.5"
            ></EliasEnglenLogo
          ></a>
          <div class="link-container">
            <nuxt-link to="/impressum">Impressum</nuxt-link>
            <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
          </div>
        </div>
        <div class="copyright">
          <p>GM Professional Hairstudio © 2023</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EliasEnglenLogo from "./EliasEnglenLogo.vue";
export default {
  components: { EliasEnglenLogo },
};
</script>

<style scoped>
.footer-container {
  background-color: var(--menu-bg-color);
  padding: 20px;
  margin-top: 50px;
  z-index: 999
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link-container a,
.copyright {
  color: var(--text-color);
  text-decoration: none;
  padding: 10px 0;
  margin: 0px 10px;
}

a.credencials {
  width: max-content;
  margin-right: 30px;
}

.row.lined {
  margin-bottom: 20px;
  border-bottom: 1px solid #efefef;
  padding-bottom: 20px;
  align-items: flex-start;
}
@media (max-width: 900px) {
  .row {
    flex-direction: column;
  }

  .link-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .copyright {
    margin-top: 20px;
  }

  .copyright p {
    font-size: 12px;
  }

  a.credencials {
    margin-right: 0px;
  }
}
</style>
