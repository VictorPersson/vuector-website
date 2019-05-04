<template>
  <div class="menuBox">
    <ul class="list">
      <router-link @click="toggleMenu" to="/contact" tag="li" active-class="active" class="list">
        <a class="list__items">TBA...</a>
      </router-link>
      <router-link to="/contact" tag="li" active-class="active" class="list">
        <a class="list__items">TBA...</a>
      </router-link>
      <router-link to="/contact" tag="li" active-class="active" class="list">
        <a class="list__items">TBA...</a>
      </router-link>
      <router-link to="/contact" tag="li" active-class="active" class="list">
        <a class="list__items">TBA...</a>
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
    toggleMenu: function() {
      console.log("Close menu")
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";

.menuBox {
  background-color: $greyMedium;
  height: 100vh;
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
    }
  }
}
</style>
