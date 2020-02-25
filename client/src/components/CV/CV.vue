<template>
  <div class="cvBox">
    <span>Computer</span>
    <i class="fas fa-user-graduate cvBox--icon"></i>
    <div class="cvBox--timeLine"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {}
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";

.cvBox {
  height: 100vh;

  &--timeLine {
    margin-top: 5rem;
    margin-left: 10rem;
    height: 100%;
    width: .3rem;
    background: $greenMedium;
    padding: relative;
  }

  &--icon {
    margin-top: 5.5rem;
    position: fixed;
    left: 12rem;
    font-size: 5rem;
    color: $greenLight;
  }

}

@media screen and (max-width: 480px) {
  .underConstruction__images {
    font-size: 4rem;
  }
}
</style>
