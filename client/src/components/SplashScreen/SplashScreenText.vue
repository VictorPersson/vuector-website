<template>
  <div class="headerBox">
    <h1 class="headerText headerText--1"> {{ h1 }} </h1>
    <h1 class="headerText headerText--2"> {{ h2 }} </h1>
    <h1 class="headerText headerText--3"> {{ h3 }} </h1>
    <h1 class="headerText headerText--4"> {{ h4 }} </h1>
    <h1 class="headerText headerText--5"> {{ h5 }} </h1>
  </div>
</template>


<script>

export default {
  data() {
    return {
      h1: 'Software',
      h2: 'Front end',
      h3: 'Web',
      h4: 'design',
      h5: 'JS'
    }
  },

  methods: {
      
  }
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/animations.scss';
@import '../../sass/mixins.scss';

.headerBox {
 background: $greyDark;
 height: 100vh;
 animation: transistion-top 1s;
 animation-delay: 2s;
 animation-fill-mode: forwards;
}

.headerText {
  font-family: $fontHeader;
  color: $greenMedium;
  text-transform: uppercase;
  font-weight: 800;
  opacity: 0;
  animation: fall-down 1s;
  animation-fill-mode: forwards;

  &--1 {
    font-size: 15rem;
    position: fixed;
    bottom: 0;
    left: 2rem;
    color: $white;
    animation-delay: .4s;

    @include responsive(tab-normal) {
        font-size: 13rem;
    }

      @include responsive(phone) {
        font-size: 6rem;
      }
  }

  &--2 {
    font-size: 11.5rem;
    position: fixed;
    bottom: 13rem;
    left: 2rem;
    animation-delay: .6s;

      @include responsive(phone) {
        font-size: 4.5rem;
        bottom: 6rem;
        
        
    }
  }

  &--3 {
    font-size: 8rem;
    position: fixed;
    bottom: 24rem;
    left: 2rem;
    color: $white;
    animation-delay: .8s;

    @include responsive(phone) {
        font-size: 3rem;
        bottom: 11rem;
    }
  }

    &--4 {
    font-size: 8rem;
    position: fixed;
    bottom: 24rem;
    left: 15rem;
    animation-delay: 1s;

    @include responsive(phone) {
      font-size: 3rem;
      bottom: 11rem;
      left: 7rem;
    }
  }

    &--5 {
    font-size: 5rem;
    position: fixed;
    bottom: 31.5rem;
    left: 2rem;
    animation-delay: 1.2s;

    @include responsive(phone) {
      font-size: 2rem;
      bottom: 14.5rem;
      
    }
  }
}

</style>
