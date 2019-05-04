<template>
  <div class="section1Box">
    <h3 class="section1Header">Who dis</h3>
    <p class="headerText">
      My name is Victor Persson, I'm a 23-year-old information architecture student Malmö University.
      History buff and tech-lover, front-end in general and web development in particular. I have proficient knowledge of HTML, CSS and SASS. Intermediate knowledge of Python and JavaScript.
      If you are interested in a website of your own, or if you simply have a question or two, don't hesitate to contact me!
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

.section1Header {
  font-size: 5vw;
  color: $greyMedium;
  font-family: $fontHeader;
  margin-left: 2rem;
}

.headerText {
  font-family: $fontMain;
  font-size: 2rem;
  margin: 0rem 10rem 4rem 2rem;
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
