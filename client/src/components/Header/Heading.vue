<template>
  <div class="headerBox">
        <h1 class="mainH1 mainH1--1">Victor 
          <span class="mainH1--dot">Persson</span>
        </h1>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },

  methods: {
      
  },

};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/animations.scss';

.headerBox {
 height: 100vh;

}

.mainH1 {
  text-align: center;
  font-family: $fontTest1;
  color: $greenMedium;
  text-transform: uppercase;
  font-weight: 800;
  animation: slide-in-top .8s;

  &--1 {
    font-size: 8rem;
  }

  &--2 {
    font-size: 6rem;
  }

  &--3 {
    font-size: 10rem;
    color: $greyDark;
  }

  &--dot {
    color: $greyDark;
  }
}

</style>
