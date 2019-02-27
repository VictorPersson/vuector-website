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

.headerBox {
 background: $greyDark;
 height: 100vh;
 animation: transistion-top 1s;
 animation-delay: 2s;
 animation-fill-mode: forwards;
}

.headerText {
  font-family: $fontTest1;
  color: $greenMedium;
  text-transform: uppercase;
  font-weight: 800;
  opacity: 0;
  animation: fall-down 1s;
  animation-fill-mode: forwards;

  &--1 {
    font-size: 12rem;
    position: fixed;
    bottom: 0;
    left: 2rem;
    color: $white;
    animation-delay: .2s;
  }

  &--2 {
    font-size: 8rem;
    position: fixed;
    bottom: 12rem;
    left: 2rem;
    animation-delay: .4s;
  }

  &--3 {
    font-size: 6rem;
    position: fixed;
    bottom: 20rem;
    left: 2rem;
    color: $white;
    animation-delay: .6s;
  }

    &--4 {
    font-size: 6rem;
    position: fixed;
    bottom: 20rem;
    left: 12rem;
    animation-delay: .8s;
  }

    &--5 {
    font-size: 3.2rem;
    position: fixed;
    bottom: 26rem;
    left: 2rem;
    animation-delay: 1s;
  }


}

</style>
