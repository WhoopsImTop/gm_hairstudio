<template>
  <div class="marquee">
    <div class="marquee__inner">
      <div class="marquee__item" v-for="image in images" :key="image.id">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGrid",
  data() {
    return {
      images: [
        {
          id: 1,
          src: "img/slider/gm_slider_01.jpeg",
          alt: "Image 1",
        },
        {
          id: 2,
          src: "img/slider/gm_slider_02.jpeg",
          alt: "Image 2",
        },
        {
          id: 3,
          src: "img/slider/gm_slider_03.jpeg",
          alt: "Image 3",
        },
        {
          id: 4,
          src: "img/slider/gm_slider_04.jpeg",
          alt: "Image 4",
        },
        {
          id: 5,
          src: "img/slider/gm_slider_05.jpeg",
          alt: "Image 5",
        },
        {
          id: 6,
          src: "img/slider/gm_slider_06.jpeg",
          alt: "Image 6",
        },
        {
          id: 7,
          src: "img/slider/gm_slider_07.jpeg",
          alt: "Image 7",
        },
        {
          id: 8,
          src: "img/slider/gm_slider_08.jpeg",
          alt: "Image 8",
        },
        {
          id: 9,
          src: "img/slider/gm_slider_09.jpeg",
          alt: "Image 9",
        },
        {
          id: 10,
          src: "img/slider/gm_slider_10.jpeg",
          alt: "Image 10",
        },
        {
          id: 11,
          src: "img/slider/gm_slider_11.jpeg",
          alt: "Image 11",
        },
        {
          id: 12,
          src: "img/slider/gm_slider_12.jpeg",
          alt: "Image 12",
        },
        {
          id: 13,
          src: "img/slider/gm_slider_13.jpeg",
          alt: "Image 13",
        },
        {
          id: 14,
          src: "img/slider/gm_slider_14.jpeg",
          alt: "Image 14",
        },
        {
          id: 15,
          src: "img/slider/gm_slider_15.jpeg",
          alt: "Image 15",
        },
        {
          id: 16,
          src: "img/slider/gm_slider_16.jpeg",
          alt: "Image 16",
        },
        {
          id: 17,
          src: "img/slider/gm_slider_17.jpeg",
          alt: "Image 17",
        },
        {
          id: 18,
          src: "img/slider/gm_slider_18.jpeg",
          alt: "Image 18",
        },
        {
          id: 19,
          src: "img/slider/gm_slider_19.jpeg",
          alt: "Image 19",
        },
        {
          id: 20,
          src: "img/slider/gm_slider_20.jpeg",
          alt: "Image 20",
        },
        {
          id: 21,
          src: "img/slider/gm_slider_21.jpeg",
          alt: "Image 21",
        },
        {
          id: 22,
          src: "img/slider/gm_slider_22.jpeg",
          alt: "Image 22",
        },
        {
          id: 23,
          src: "img/slider/gm_slider_23.jpeg",
          alt: "Image 23",
        },
      ],
    };
  },
};
</script>

<style>
.marquee {
  margin-top: 150px;
  overflow: hidden;
  position: relative;
  height: 480px;
}

.marquee__inner {
  display: flex;
  position: absolute;
  white-space: nowrap;
  top: 0;
  bottom: 0;
  animation: marquee 60s linear infinite;
}

.marquee__item {
  display: inline-block;
  width: 320px;
  height: 100%;
  margin: 0 10px;
}

.marquee__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-80%);
  }
}

@media (max-width: 900px) {
    .marquee {
        margin-top: 0;
        height: 250px;
    }

    .marquee__item {
        width: 180px;
    }
}
</style>