<template>
  <div class="cvBox">
    <h1 class="cvBox--mainHeader">Resume</h1>
    <img class="cvBox__cvImage" src="../../assets/cv.png" alt="Image of CV">
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
    methods: {

  },


  components: {}
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";
@import '../../sass/mixins.scss';

.cvBox {
  height: 100vh;

  &--mainHeader {
    color: $greyDark;
    font-family: $fontHeader;
    font-size: 6rem;
    text-align: center;
    margin-top: 1rem;
}

&__cvImage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  @include responsive(phone) {
    width: 100vw;
  }
}

}
</style>
