<template>
  <div class="underConstruction">
    <h1 class="underConstruction__header--1">Excuse moi,</h1>
    <h2 class="underConstruction__header--2">my life, resume & this page is currently under construction</h2>
    <div class="underConstruction__images__box">
    <div class="underConstruction__images">
      <i class="fas fa-paint-roller underConstruction__icons--1"></i>
    </div>
    <div class="underConstruction__images">
      <i class="fas fa-hammer underConstruction__icons--2"></i>
    </div>
    <div class="underConstruction__images">
      <i class="fas fa-tools underConstruction__icons--3"></i>
    </div>
    <div class="underConstruction__images">
      <i class="fas fa-ruler-combined underConstruction__icons--4"></i>
    </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }
  },
  
  components: {

  }
  
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/animations.scss';


.underConstruction {
  height: 100vh;

  &__header--1 {
      margin-top: 3rem;
      text-align: center;
      color: $greyDark;
      font-family: $fontHeader;
      font-size: 4rem;
  }
  
  &__header--2 {
      text-align: center;
      color: $greyMedium;
      font-family: $fontMain;
      font-size: 3rem;
      font-weight: 100;
      text-transform: uppercase;
  }

  &__images__box {
      display: flex;
      justify-content: space-evenly;
      margin-top: 25vh;
  }

  &__images {
      font-size: 10rem;
      color: $greenLight;
  }

  &__icons--1 {
       animation: fall-down 1s;
  }
  &__icons--2 {
       animation: fall-down 2s;
  }
  &__icons--3 {
       animation: fall-down .5s;
  }
  &__icons--4 {
       animation: fall-down 3s;
  }
}

@media screen and (max-width: 480px) {

    .underConstruction__images {
      font-size: 4rem;
  }

 }



</style>
