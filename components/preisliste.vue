<template>
  <div class="preisliste">
    <div class="preisliste-header">
      <img src="img/gm_hairstudio_cut.svg" alt="cut" />
      <h2>{{ preisliste.Titel }}</h2>
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
          <p v-if="item.Leistungsgruppe" class="preisliste-item-subtitle">
            {{ item.Leistungsgruppe }}
          </p>
          <hr v-if="item.Preis" class="price-dashed-line" />
          <span class="preisliste-item-price">{{
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
  display: flex;
  align-items: center;
  margin: 50px 0;
}

.preisliste-header img {
  margin-right: 20px;
}

.preisliste-header h2 {
  font-size: 1.5rem;
  line-height: 1rem;
  margin: 0;
  font-weight: 500;
}

.preisliste-item {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}

.preisliste-item-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.preisliste-item-header h3 {
  font-size: 1.2rem;
  line-height: 1rem;
  margin: 0px;
  font-weight: 500;
}

.preisliste-item-content {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}

.preisliste-item-subtitle {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  min-width: max-content;
  color: var(--orange-color);
}

.preisliste-item-price {
  font-size: 1rem;
  font-weight: 500;
  margin-left: 10px;
  min-width: max-content;
  color: var(--orange-color);
}

.price-dashed-line {
  border-top: 2px dashed var(--orange-color);
  border-bottom: 0px;
  width: 100%;
  margin: 0px 10px;
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
