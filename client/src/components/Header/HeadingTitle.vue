<template>
  <div>
    <h1 class="mainH1 mainH1--1">
      Welcome
      <span class="mainH1--2">to my own handly crafed page</span>
    </h1>
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
@import "../../sass/mixins.scss";

.mainH1 {
  z-index: 10;
  position: absolute;
  margin-left: 2rem;
  font-family: $fontHeader;
  color: $greenMedium;
  text-transform: uppercase;
  font-weight: 800;
  animation: slide-in-top 0.8s;

  &--1 {
    font-size: 10vw;
  }

  &--2 {
    font-size: 5vw;
    color: $greyMedium;
    display: block;
  }
}

@media screen and (max-width: 480px) {
  .mainH1 {
    margin-left: 0.7rem;

    &--1 {
      font-size: 5rem;
    }

    &--2 {
      font-size: 1.7rem;
    }
  }
}
</style>
