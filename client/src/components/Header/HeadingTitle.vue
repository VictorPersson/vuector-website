<template>
  <div>
    <h1 class="mainH1 mainH1--1">
    
    Victor
      
    <p class="comma">,</p>
      <span class="mainH1--2">Web dev, design & UX</span>
    
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
  margin-top: 7rem;
  margin-left: 49rem;
  text-transform: uppercase;
  font-weight: 100;

  &--1 {
    color: $greyMedium;
    animation: slide-in-top 0.8s;
    font-size: 10vw;
    font-family: $fontHeader;
  }

  &--2 {
    color: $greyMedium;
    font-size: 3vw;
    display: block;
    font-family: $fontMain;
    margin-top: -2rem;
  }

}

.comma {
  display: inline-block;
  font-family: $fontHeader;
  color: $greenMedium;
}

.betaText {
  font-family: $fontHeader;
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
