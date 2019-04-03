<template>
    <div class="logoBox">
        <img class="logoBox--image" src="../../assets/green.png" alt="">
        <h1 class="logoBox--header logoBox--h1">Victor Persson</h1>
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
@import '../../sass/animations.scss';

.logoBox {

    &--image {
      left: .5rem;
      top: 1rem;
      position: fixed;
      display: inline-block;
      width: 5rem;
      z-index: 1000;
    }

    &--header {
      font-family: $fontMain;
      text-transform: uppercase;
      font-weight: 100;
      margin-left: 4.3rem;
      margin-top: 3.7rem;
      animation: slide-in-left 1.5s;
      font-size: 1.2rem;
    }
}


</style>
