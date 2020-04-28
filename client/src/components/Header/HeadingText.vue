<template>
  <div class="section1Box">
    <p class="headerText">
      
    </p>
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
@import '../../sass/mixins.scss';

.section1Box {
  display: flex;
  justify-content: center;

}

.headerText {
  justify-content: center;
  font-family: $fontMain;
  font-size: 2rem;
  margin: 0rem 40rem 4rem 2rem;
  margin-top: 10rem;

  @include responsive(phone) {
    margin: 1rem 1.5rem 1.5rem 1.5rem;
  }
}

</style>
