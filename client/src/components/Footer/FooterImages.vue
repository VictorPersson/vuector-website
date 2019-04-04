<template>
    <div class="footerImages">
        <div class="footerImages__1">
            <i class="fab fa-vuejs footerImages__icons"></i>
            <!-- <p class="footerImages__text">Vue.js</p> -->
        </div>
        <div class="footerImages__2">
            <i class="fab fa-sass footerImages__icons"></i>
            <!-- <p class="footerImages__text">Syntactically Awesome Stylesheets Sass</p> -->
        </div>
        <div class="footerImages__3">
            <i class="fas fa-brain footerImages__icons"></i>
            <!-- <p class="footerImages__text">Devine intellect</p> -->
        </div>
    </div>
</template>

<script>
export default {
  
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";

.footerImages {
    position: relative;
    margin-top: 7rem;
    margin-right: 7.5rem;

    &__1 {
        text-align: center;
        padding-right: 35rem;
    }


    &__2 {
        text-align: center;
    }


    &__3 {
       text-align: center;
       padding-left: 35rem;
    }

  &__text {
      position: absolute;
      color: $white;
        text-align: center;
       padding-left: 35rem;
  }  
  
  &__icons {
    position: absolute;
    color: $white;
    font-size: 7rem;
    transition: all .5s;

    &:hover {
        transform: translateY(-2rem);

    }
  }
 }

</style>