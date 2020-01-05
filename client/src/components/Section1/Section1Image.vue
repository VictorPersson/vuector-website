<template>
  <div class="imageBox">
    <img class="imageBox--image" src="../../assets/victor2.png" alt="Image of Victor">
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";

.imageBox {
  &--image {
    border-radius: 15%;
    width: 18rem;
    margin-left: 20rem;
  }
}

@media screen and (max-width: 480px) {
  .imageBox {
      //box-shadow: 50px 50px $boxGreenGlow;

    &--image {
      width: 15rem;
      margin-left: 0;
    }
  }
}
</style>
