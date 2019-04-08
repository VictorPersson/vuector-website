<template>
    <div class="menuBox">
      <ul class="list">
        <router-link to="/contact" tag="li" active-class="active" class="list"><a class="list__items">Contact</a> </router-link>
        <router-link to="/contact" tag="li" active-class="active" class="list"><a class="list__items">Contact</a> </router-link>
        <router-link to="/contact" tag="li" active-class="active" class="list"><a class="list__items">Contact</a> </router-link>
        <router-link to="/contact" tag="li" active-class="active" class="list"><a class="list__items">Contact</a> </router-link>
      </ul>
    </div>
</template>

<script>

export default {

  data() {
    return {
    }
  },

  methods: {
      
  }
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';

.menuBox {
  background-color: $greyMedium;
  height: 100vh;
}

.list {
    list-style: none;
    text-align: center;

  &__items {
      color: $white;
      text-decoration: none;
      font-size: 4rem;
      font-family: $fontHeader;
      text-transform: uppercase;
      transition: all .5s;

      &:hover {
        color: $greenLight;
      }
  }
}

</style>
