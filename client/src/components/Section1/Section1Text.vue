<template>
  <div class="section1Box">
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

.headerText {
    font-family: $fontMain;
    font-size: 2rem;
    
}

.section1Box {
    height: 100vh;
}


</style>
