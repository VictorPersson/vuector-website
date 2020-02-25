<template>
  <div class="menuBox">
    <div class="menuSplash-1">
      <div class="menuSplash-2">
    <!--<h3 class="navHeader">More pages coming soon...</h3> -->
     <ul class="list">
        <router-link @click.native="toggleMenu" to="/" tag="li" active-class="active" class="list">
         <a class="list__items">Home</a>
        </router-link>
        <router-link @click.native="toggleMenu" to="/cv" tag="li" active-class="active" class="list">
          <a class="list__items">Resume</a>
        </router-link>
        <router-link @click.native="toggleMenu" to="/projects" tag="li" active-class="active" class="list">
          <a class="list__items">Projects</a>
        </router-link>
        <router-link @click.native="toggleMenu" to="/contact" tag="li" active-class="active" class="list">
          <a class="list__items">Contact</a>
        </router-link>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {
    toggleMenu: function() {
      this.$emit('menuOptionMade');
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";


.menuBox {
  transition: ease-in;
  animation: menu-slide .6s;
  z-index: 10;
  background-color: $greyLight;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
}

.menuSplash-1 {
  animation: menu-slide .8s;
  transition: ease-in;
  background-color: $greyMedium;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
}

.menuSplash-2 {
  animation: menu-slide 1s;
  transition: ease-in;
  background-color: $greyDark;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
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


@media screen and (max-width: 480px) {
  
  .list__items {
      font-size: 5rem;
    }
  
  
   }


</style>
