<template>
  <div>
        <h1 class="mainH1 mainH1--1">Victor 
          <span class="mainH1--2">Persson</span>
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


.mainH1 {
  text-align: center;
  font-family: $fontTest1;
  color: $greenMedium;
  text-transform: uppercase;
  font-weight: 800;
  animation: slide-in-top .8s;

  &--1 {
    font-size: 6rem;
  }

  &--2 {
    font-size: 6rem;
    color: $greyLight;
  }
}

</style>
