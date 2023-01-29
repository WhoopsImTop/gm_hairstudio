<template>
  <a
    href="https://www.studiobookr.com/gm-professional-hairstudio-67752?dcc=1"
    target="_blank"
    class="booking-btn"
  >
    <img class="booking-rotation" src="/img/btn-text.svg" alt="booking-btn" />
    <img class="booking-ticket" src="/img/ticket.svg" alt="ticket"
  /></a>
</template>

<script>
export default {
  mounted() {
    //make booking-rotation rotate on scroll
    window.addEventListener("scroll", () => {
      const bookingRotation = document.querySelector(".booking-rotation");
      bookingRotation.style.transform = `rotate(${window.scrollY / 10}deg)`;
    });
  },
};
</script>

<style>
.booking-btn {
  background-color: var(--orange-color);
  border: 2px solid #ffffff;
  border-radius: 50%;
  width: 170px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
}

.booking-rotation {
  position: absolute;
  width: 190px;
  height: 190px;
}

.booking-btn:hover {
  cursor: pointer;
}

@media (max-width: 900px) {
  .booking-btn {
    width: 100px;
    height: 100px;
    bottom: -25px;
    right: -25px;
  }

  .booking-rotation {
    width: 110px;
    height: 110px;
  }

  .booking-ticket {
    width: 30px;
    height: 30px;
  }
}
</style>