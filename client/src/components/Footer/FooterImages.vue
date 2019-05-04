<template>
  <div class="footerImages">
    <div class="footerImages__1">
      <i class="fab fa-vuejs footerImages__icons"></i>
    </div>
    <div class="footerImages__2">
      <i class="fab fa-sass footerImages__icons"></i>
    </div>
    <div class="footerImages__3">
      <i class="fas fa-brain footerImages__icons"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";

.footerImages {
  display: flex;
  justify-content: space-evenly;
  margin-top: 4rem;

  &__icons {
    color: $white;
    font-size: 7rem;
    transition: all 0.5s;

    &:hover {
      transform: translateY(-2rem);
    }
  }
}

@media screen and (max-width: 480px) {
  .footerImages {
    &__icons {
      font-size: 4rem;
    }
  }
}
</style>