<template>
  <div class="navigation-background">
    <div class="navigation-content-container">
      <nuxt-link to="/">
        <img
          class="logo-img"
          src="/img/gm_hairstudio_logo.svg"
          alt="GM Professional Hairstudio"
        />
      </nuxt-link>
      <div
        class="burger"
        @click="active = !active"
        :class="active ? 'active' : ''"
      >
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
      </div>
      <div class="navigation-content" :class="active ? 'active' : ''">
        <div class="nav-links">
          <!-- <div class="dropdown">
            <nuxt-link class="nav-link" to="/#leistungen"
              >Leistungen</nuxt-link
            >
            <div class="dropdown-content">
              <nuxt-link
                class="nav-link thin"
                to="/damen"
                @click="active = false"
                >Damen</nuxt-link
              >
              <nuxt-link
                class="nav-link thin"
                to="/herren"
                @click="active = false"
                >Herren</nuxt-link
              >
              <nuxt-link
                class="nav-link thin"
                to="/schulungen"
                @click="active = false"
                >Schulungen</nuxt-link
              >
            </div>
          </div> -->
          <nuxt-link class="nav-link" to="/#unsere-preise" @click="active = false"
            >Preise</nuxt-link
          >
          <nuxt-link class="nav-link" to="/#ueber-uns" @click="active = false"
            >Über uns</nuxt-link
          >
          <nuxt-link
            class="nav-link"
            to="/jobs"
            @click="active = false"
            >Jobs</nuxt-link
          >
          <a
            class="nav-link"
            href="https://www.studiobookr.com/VoucherOrders/gm-professional-hairstudio-67752"
            >Gutscheine</a
          >
          <a
            class="nav-link button"
            href="https://www.studiobookr.com/en/gm-professional-hairstudio-67752?fbclid=PAAaacxS00Iiygaf2pJYMOxNU3ITaO9L6gxGmw2-jAIA4GXiw6rqmavZbfgxA"
            >Termin Buchen</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      active: false,
    };
  },
};
</script>

<style>
.thin {
  margin-top: 0px;
}

.navigation-background {
  background-color: var(--menu-bg-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
}

.navigation-content-container {
  max-width: 1440px;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
}

.nav-links {
  display: flex;
  align-items: center;
}

hr {
  margin: 30px 0;
  border: 1px solid #000;
}

.nav-link {
  text-transform: uppercase;
  font-size: 20px;
  line-height: 30px;
  margin: 0px 15px;
  color: var(--orange-color);
  transition: 0.3s ease-in-out;
}

.nav-link:hover {
  color: var(--orange-color-hover);
  transition: 0.3s ease-in-out;
}

a {
  text-decoration: none;
  color: var(--text-dark);
}

.burger {
  display: none;
}

.line-1,
.line-2,
.line-3 {
  width: 30px;
  height: 3px;
  background-color: var(--orange-color);
  margin: 3px 0;
  transition: 0.3s ease-in-out;
}

a:hover {
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--menu-bg-color);
  padding: 5px 0px;
  border-radius: 10px;
  border: 1px solid var(--orange-color);
  z-index: 2;
}

.dropdown-content a {
  color: var(--orange-color);
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media (max-width: 1349px) {
  .navigation-content-container {
    display: flex;
    justify-content: space-between;
  }

  .navigation-content {
    position: absolute;
    display: none;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: var(--menu-bg-color);
    top: 100px;
    transition: 0.5s ease-in-out;
  }

  .burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .active .line-1 {
    transform: rotate(45deg) translate(6.25px, 6.5px);
  }

  .active .line-2 {
    width: 0px;
  }

  .active .line-3 {
    transform: rotate(-45deg) translate(6.25px, -6.5px);
  }

  .navigation-content.active {
    opacity: 1;
    top: 100px;
    transition: height 0.5s ease-in-out;
    height: 100vh;
    overflow: hidden;
    display: block;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  .nav-link {
    margin: 20px 0px;
  }
}

@media (max-width: 1000px) {
  .logo-img {
    width: 200px;
  }

  .navigation-background {
    height: auto;
  }

  .navigation-content.active {
    top: 83px;
  }
}
</style>
