<template>
    <div class="logoBox">
        <img class="logoBox--image" src="../../assets/beta_logo.png" alt="">
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
    position: fixed;
    left: 1rem;
    top: 1rem;
    animation: slide-in-left 1.5s;

    &--image {
      width: 8vw;
    }
}




</style>
