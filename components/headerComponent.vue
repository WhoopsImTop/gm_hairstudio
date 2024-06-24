<template>
  <nav class="bg-white sticky top-0 z-20">
    <div
      class="container flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <nuxt-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <gmLogo
          class="w-auto h-12 md:h-16"
          alt="GM Professional Hairstudio in Freiburg"
        />
      </nuxt-link>
      <button
        data-collapse-toggle="navbar-default"
        @click="toggle"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gold-500 rounded-lg lg:hidden hover:bg-gold-50 focus:outline-none focus:ring-2 focus:ring-gold-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Hauptmenü öffnen</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="w-full lg:block md:w-auto"
        id="navbar-default"
        :class="{ hidden: !active }"
      >
        <div
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gold-500 rounded-lg bg-white md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
        >
          <nuxt-link
            class="px-3 py-2 text-gold-500 hover:text-gold-700 hover:bg-gold-50 rounded"
            to="/leistungen/damen"
            @click="active = false"
            >Damen</nuxt-link
          >
          <nuxt-link
            class="px-3 py-2 text-gold-500 hover:text-gold-700 hover:bg-gold-50 rounded"
            to="/leistungen"
            @click="active = false"
            >Preise & Leistungen</nuxt-link
          >
          <nuxt-link
            class="px-3 py-2 text-gold-500 hover:text-gold-700 hover:bg-gold-50 rounded"
            to="/#ueber-uns"
            @click="active = false"
            >Über uns</nuxt-link
          >
          <nuxt-link
            class="px-3 py-2 text-gold-500 hover:text-gold-700 hover:bg-gold-50 rounded"
            to="/jobs"
            @click="active = false"
            >Jobs</nuxt-link
          >
          <a
            class="px-3 py-2 text-gold-500 hover:text-gold-700 hover:bg-gold-50 rounded"
            href="https://www.studiobookr.com/VoucherOrders/gm-professional-hairstudio-67752"
            >Gutscheine</a
          >
          <a
            class="px-3 py-2 text-gold-500 hover:text-gold-700 hover:bg-gold-50 rounded"
            href="https://www.studiobookr.com/gm-professional-hairstudio-67752?fbclid=PAAaacxS00Iiygaf2pJYMOxNU3ITaO9L6gxGmw2-jAIA4GXiw6rqmavZbfgxA#/"
            >Termin Buchen</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
  watch: {
    $route() {
      this.active = false;
    },
  },
};
</script>

<style scoped></style>
