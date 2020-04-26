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
}


@media screen and (max-width: 480px) {
  .section1Header {
    font-size: 3.8rem;
    text-align: center;
    margin: 0;
  }

  .headerText {
    margin: 1rem 1.5rem 1.5rem 1.5rem;
  }
}
</style>
