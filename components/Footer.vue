<template>
  <div class="footer-container">
    <div class="content-container">
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