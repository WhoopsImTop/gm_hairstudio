<template>
  <footer class="bg-gold-50">
    <div class="container px-4 mx-auto py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-2xl font-sans text-gold-600 font-bold uppercase mb-4">
            Adresse
          </h3>
          <p class="leading-relaxed">
            GM Professional Hairstudio
            <br />
            Ellen-Gottlieb-Straße 15
            <br />
            79106 Freiburg im Breisgau
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-sans text-gold-600 font-bold uppercase mb-4">
            Kontakt
          </h3>
          <p class="leading-relaxed">
            Telefon:
            <a href="tel:0761 51463046" class="text-gold-600">0761 51463046</a>
            <br />
            E-Mail:
            <a href="mailto:info@gmhairstudio.de" class="text-gold-600"
              >info@gmhairstudio.de</a
            >
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-sans text-gold-600 font-bold uppercase mb-4">
            Öffnungszeiten
          </h3>
          <p class="leading-relaxed">
            Montag: Geschlossen
            <br />
            Di - Sa: 09:00 - 19:00
          </p>
        </div>
      </div>
      <div class="border-t border-gold-200 mt-6 pt-6 text-center"></div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <p class="text-gold-600 text-sm">
          &copy; 2024 GM Professional Hairstudio.
        </p>
        <div class="flex items-center md:justify-end mt-4 md:mt-0">
          <nuxt-link to="/impressum" class="text-gold-600 hover:text-gold-700 text-sm"
            >Impressum</nuxt-link
          >
          <div class="mx-4 text-gold-200">|</div>
          <nuxt-link to="/datenschutz" class="text-gold-600 hover:text-gold-700 text-sm"
            >Datenschutz</nuxt-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
