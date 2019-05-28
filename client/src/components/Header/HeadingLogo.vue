<template>
  <div class="logoBox">
    <img class="logoBox--image" src="../../assets/green.png" alt>
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

.logoBox {
  &--image {
    width: 63rem;
    margin-left: 40vw;
    opacity: 0.2;
    filter: alpha(opacity=50);
  }
}

@media screen and (max-width: 480px) {

  .logoBox {

    &--image {
      margin-top: 14.2rem;
      width: 27rem;
      margin-left: 1.5vw;
      opacity: 0.2;
      filter: alpha(opacity=50);
    }
  }
}
</style>
