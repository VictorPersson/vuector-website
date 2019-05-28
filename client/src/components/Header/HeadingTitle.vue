<template>
  <div>
    <h1 class="mainH1 mainH1--1">
      Welcome
      <p class="comma">,</p>
      <span class="mainH1--2">to my own handcrafted page</span>
      <span class="mainH1--3">
        <a
          href="https://github.com/VictorPersson/vuector-website/tree/master/client"
          target="_blank"
          class="betaText"
        >live beta 1.0</a> - don't HESITATE to
        <a
          href="https://github.com/VictorPersson/vuector-website/issues"
          target="_blank"
          class="betaText"
        >report any bugs</a> you might come across.
      </span>
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

  &--1 {
    animation: slide-in-top 0.8s;
    font-size: 10vw;
  }

  &--2 {
    font-size: 5vw;
    color: $greyMedium;
    display: block;
  }

  &--3 {
    font-size: 2rem;
    font-family: $fontHeader;
    color: $greyMedium;
    display: block;
  }
}

.comma {
  display: inline-block;
  color: $greyMedium;
}

.betaText {
  color: $greenMedium;
}

@media screen and (max-width: 480px) {
  .mainH1 {
    margin-left: 0.7rem;

    &--1 {
      font-size: 5rem;
    }

    &--2 {
      font-size: 2.2rem;
    }

    &--3 {
      font-size: 1.5rem;
      margin: 0rem 3rem 0rem 0rem;
  }
  }
}
</style>
