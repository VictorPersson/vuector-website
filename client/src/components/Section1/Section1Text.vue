<template>
  <div class="section1Box">
    <h3 class="section1Header">About</h3>
    <p class="headerText">
      My name is Victor Persson, I'm a {{this.age}}-year-old Web Developer && Bachelor of Computer Science.
      History buff and tech-lover, front-end in general and web development in particular.
    </p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      age: 0
    };
  },

  methods: {
    getCurrentAge() {
      let currentDate = new Date();
      const dob = new Date('February 9, 1996');

      if (currentDate.getDate() < 9 && currentDate.getMonth() <= 1) {
              this.age = currentDate.getFullYear() - dob.getFullYear() - 1;
      } else {
              this.age = currentDate.getFullYear() - dob.getFullYear();
      }
    }
  },

  created() {
    this.getCurrentAge()
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";
@import '../../sass/mixins.scss';

.section1Header {
  font-size: 5vw;
  color: $greyMedium;
  font-family: $fontHeader;
  margin-left: 2rem;

  @include responsive(phone) {
    font-size: 3.8rem;
    text-align: center;
    margin: 0;
  }
}

.headerText {
  font-family: $fontMain;
  font-size: 2rem;
  margin: 0rem 10rem 4rem 2rem;
  
  @include responsive(tab-normal) {
    font-size: 1.78em;
    margin: 1.2rem 1.2rem 1.2rem 1.2rem;
  }

  @include responsive(phone) {
    margin: 1rem 1.5rem 1.5rem 1.5rem;
  }
}
</style>
