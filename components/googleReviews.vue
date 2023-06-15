<template>
  <div style="margin: 100px 0">
    <h2 style="margin-bottom: 50px">Kundenmeinungen</h2>
    <div class="review-slider">
      <div class="review" v-for="(review, index) in reviews" :key="index">
        <div class="reviewHeader">
          <div>
            <h4 style="margin: 0">{{ review.name }}</h4>
            <div class="starRow">
              <img
                v-for="star in review.rating"
                :key="star"
                src="/img/star.svg"
                width="20"
                alt="stern"
              />
            </div>
          </div>
          <img src="/img/google_icon.png" width="30" height="30" alt="google" />
        </div>
        <div class="reviewContent" :class="showContent ? 'open' : 'closed'">
          <p>{{ review.comment }}</p>
        </div>
        <div class="showMore" @click="showContent = !showContent">{{ showContent ? 'weniger anzeigen' : 'mehr anzeigen'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reviews"],
  data() {
    return {
      showContent: false,
    };
  },
};
</script>

<style>
.review-slider {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: auto;
  overflow-x: scroll;
  /* style scrollbars */
  margin-bottom: 50px;
  padding-bottom: 20px;
}

.review {
  min-width: 280px;
  background: #f8f8f8;
  border: 2px solid #efefef;
  border-radius: 5px;
  box-shadow: 0px 0px 20px #35353516;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  transition: height .5s ease-in-out;
  position: relative;
}

.reviewHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}

.starRow {
  display: flex;
  align-items: center;
}

.reviewContent {
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height .5s ease-in-out;
}

.reviewContent.closed {
  max-height: 200px;
}

.reviewContent.open {
  max-height: 100%;
  margin-bottom: 40px;
}

.showMore {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 10px;
  background: linear-gradient(rgba(255, 255, 255, 0.847), #f8f8f8);
  text-align: center;
}
</style>