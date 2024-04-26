<template>
  <div class="preisliste">
    <div class="preisliste-header">
      <img src="/gm_hairstudio_cut.svg" alt="cut" />
      <h2 :id="preisliste.Titel">{{ preisliste.Titel }}</h2>
    </div>
    <div class="preisliste-content">
      <div
        class="preisliste-item"
        v-for="(item, index) in preisliste.leistungen"
        :key="index"
      >
        <div class="preisliste-item-header">
          <h3>{{ item.Leistung }}</h3>
        </div>
        <div class="preisliste-item-content">
          <!-- add subtitle if defined, draw a line and put a price at the end -->
          <p v-if="item.Leistungsgruppe" class="preisliste-item-subtitle text-gold-500">
            {{ item.Leistungsgruppe }}
          </p>
          <hr v-if="item.Preis" class="price-dashed-line" />
          <span class="text-gold-500 preisliste-item-price">{{
            item.Preis
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["preisliste"],

  methods: {
  },
};
</script>

<style>
.preisliste {
  margin: 50px 0px 100px;
}

.preisliste-header {
  @apply flex items-center;
  margin: 50px 0;
}

.preisliste-header img {
  margin-right: 20px;
}

.preisliste-header h2 {
  @apply text-3xl font-serif;
}

.preisliste-item {
  @apply flex flex-col;
  margin-bottom: 30px;
}

.preisliste-item-header {
  @apply flex items-center;
  margin-bottom: 10px;
}

.preisliste-item-header h3 {
  font-size: 1.2rem;
  line-height: 1rem;
  margin: 0px;
  font-weight: 500;
}

.preisliste-item-content {
  @apply flex items-baseline justify-between;
  margin-bottom: 10px;
}

.preisliste-item-subtitle {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  margin-right: 10px;
  min-width: max-content;
}

.preisliste-item-price {
  font-size: 1rem;
  font-weight: 500;
  margin-left: 10px;
  min-width: max-content;
}

.price-dashed-line {
  @apply border-t-2 border-dashed border-gold-500 w-full;
}

@media (max-width: 1000px) {
  .preisliste-item-content {
    align-items: flex-end;
  }
  .preisliste-header h2 {
    line-height: 1.5rem;
  }
  .preisliste-item-header h3 {
    font-size: 1rem;
    line-height: 1.3rem;
  }
  .preisliste-item-subtitle {
    min-width: unset;
    line-break: normal;
    max-width: 60%;
    width: 100%;
    /* dynamic width */
    flex-shrink: 0;
  }
  .price-dashed-line {
    flex-shrink: 1;
  }
}
</style>
