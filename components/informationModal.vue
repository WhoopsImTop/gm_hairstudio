<template>
  <div class="bg-black/50 fixed inset-0 z-50 flex items-center justify-center p-2">
    <div class="bg-neutral-50 rounded-lg p-4 w-full max-w-[700px] max-h-[90dvh] overflow-y-auto">
      <p class="text-lg font-bold">Kundeninformationen - 
          Vorübergehende Schließung unseres Salons</p>
      <hr class="my-2" />
      <div class="mb-4">
        <p class="mb-2">
          Liebe Kundinnen und Kunden,<br />
          unser Friseursalon GM PROFESSIONAL HAIRSTUDIO bleibt vom <b>20. August
          2025</b> bis einschließlich <b>20. November 2025</b> aufgrund einer intensiven
          Weiterbildung <b>geschlossen</b>.
        </p>
        <p class="mb-2">
          In diesem Zeitraum sind wir weder telefonisch noch über unser
          Onlineportal erreichbar. Für dringende Anfragen dürfen Sie uns jedoch
          gerne per E-Mail unter <a class="text-gold-500 underline" href="mailto:info@gmhairstudio.de">info@gmhairstudio.de</a> kontaktieren.
        </p>
        <p class="mb-2">
          Auch wenn unser Betrieb pausiert, freuen wir uns weiterhin über
          Bewerbungen! Wenn Sie Interesse haben, Teil unseres Teams zu werden,
          senden Sie uns Ihre Unterlagen gern per E-Mail zu – wir freuen uns
          darauf, nach der Weiterbildung neue Mitarbeiterinnen und Mitarbeiter
          willkommen zu heißen.
        </p>
        <p class="mb-2">
          Ich freue mich sehr, Sie ab Ende November 2025 wieder persönlich im
          Salon begrüßen zu dürfen – mit frischem Wissen, neuen Ideen und
          gewohnter Leidenschaft für Ihr Haar!
        </p>
        <p>Herzliche Grüße</p>
        <p>GM PROFESSIONAL HAIRSTUDIO</p>
      </div>
      <hr class="my-2" />
      <button
        class="bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 mt-2"
        @click="$emit('close')"
      >
        Schließen
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
