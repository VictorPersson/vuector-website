<template>
  <div class="section1Icons">
      <h3 class="section1Icons--header">Things I hate to love</h3>
      <div class="section1Icons--positive">
        <i class="fas fa-graduation-cap"></i>
        <i class="fas fa-code"></i>
        <i class="fas fa-skiing"></i>
      </div>
  </div>

</template>


<script>

export default {
  data() {
    return {

    }
  },

  methods: {
      
  },
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/animations.scss';

.section1Icons {
    font-size: 6rem;
    color: $greyMedium;
    margin-top: 4rem;
    margin-bottom: 14rem;

&--header {
    font-size: 3.5rem;
    text-align: center;
    text-transform: uppercase;
    font-family: $fontHeader;
    margin-bottom: 1rem;
}

 &--positive {
    margin-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    margin-bottom: 5rem;
    transition:cubic-bezier(0.075, 0.82, 0.165, 1) 1s;

    &:hover {
        color: $greenMedium;
    }
 }

}

@media screen and (max-width: 480px) {

 }




</style>
