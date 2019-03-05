<template>
  <div>
        <h1 class="mainH1 mainH1--1">Welcome 
          <span class="mainH1--2">to my own handly crafed page</span>
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
@import '../../sass/mixins.scss';


.mainH1 {
  text-align: center;
  font-family: $fontTest1;
  color: $greenMedium;
  text-transform: uppercase;
  font-weight: 800;
  animation: slide-in-top .8s;

  &--1 {
    font-size: 10rem;
  }

  &--2 {
    font-size: 5vw;
    color: $greyLight;
    display: block;
  }
}

</style>
