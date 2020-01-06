<template>
  <div class="menuBox">
    <!--<h3 class="navHeader">More pages coming soon...</h3> -->
    <ul class="list">
      <router-link to="/contact" tag="li" active-class="active" class="list">
        <a class="list__items">Home</a>
      </router-link>
      <router-link to="/contact" tag="li" active-class="active" class="list">
        <a class="list__items">About</a>
      </router-link>
      <router-link to="/contact" tag="li" active-class="active" class="list">
        <a class="list__items">Projects</a>
      </router-link>
      <router-link to="/contact" tag="li" active-class="active" class="list">
        <a class="list__items">Wishlist</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";

.menuBox {
  z-index: 10;
  background-color: $greyMedium;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
}

.navHeader {
    font-size: 4rem;
    font-family: $fontHeader;
    color: $greenMedium;
    text-align: center;
  }

.list {
  list-style: none;
  text-align: center;
  padding-top: 3rem;

  &__items {
    color: $white;
    text-decoration: none;
    font-size: 6rem;
    font-family: $fontHeader;
    text-transform: uppercase;
    transition: all 0.5s;

    &:hover {
      color: $greenLight;
      animation: transistion-top 0.8s;
    }
  }
}
</style>
