<template>
  <div class="contactBox">
    <h1 class="mainHeader">Contact me</h1>
    <div class="emailOptionBox">
      <a class="links__effect links__text" href="https://github.com/VictorPersson" target="_blank">
        <span class="footer-links__span">GitHub <i class="fab fa-github-square"></i></span>
      </a>
      <a
        class="links__effect links__text"
        href="https://www.linkedin.com/in/vpersson"
        target="_blank"
      >
        <span class="footer-links__span">Linkedin <i class="fab fa-linkedin"></i></span>
      </a>
      <a
        class="links__effect links__text"
        href="https://www.facebook.com/victor.persson.3"
        target="_blank"
      >
        <span class="links__span">Facebook <i class="fab fa-facebook-square"></i></span>
        
      </a>
      <a
        class="links__effect Links__text"
        href="https://www.instagram.com/victorperzzon/"
        target="_blank"
      >
        <span class="links__span">Instagram <i class="fab fa-instagram"></i></span>
      </a>
      <h3 class="emailOptionBox--header">Or email me</h3>
      <a class="links__effect links__text" href="mailto:victor.persson7@gmail.com">
        <span class="form-mail__span">victor.persson7@gmail.com</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {}
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";
@import "../../sass/mixins.scss";

.mainHeader {
  animation: fall-down 1.4s;
  text-align: center;
  font-size: 5rem;
  color: $greenMedium;
  font-family: $fontHeader;
  text-transform: uppercase;
  font-weight: 100;

  @include responsive(phone) {
    padding-top: 5rem;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border-bottom: 1px solid $greenLight;
  -webkit-text-fill-color: $greenLight;
  -webkit-box-shadow: 0 0 0px 1000px none inset;
  transition: background-color 5000s ease-in-out 0s;
}

.emailOptionBox {
  display: flex;
  align-items: center;
  flex-direction: column;

  &--header {
    font-size: 3rem;
    color: $greyLight;
    font-family: $fontHeader;
    text-transform: uppercase;
    margin-bottom: 1rem;
    margin-top: 5rem;
  }

  .links__effect,
  .linnks__effect > .form-mail__span {
    animation: fade-in 2s;
    font-size: 2.5rem;
    padding: 1rem;
    font-family: $fontMain;
    font-weight: 100;
    position: relative;
    color: $greyLight;
    text-decoration: none;
    line-height: 3rem;
    transition: all 0.7s;

    @include responsive(phone) {
        font-size: 1.8rem;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: transform 0.5s ease;
    }

    &:hover {
      color: $white;
    }
  }

  .links__effect {
    display: inline-block;
    overflow: hidden;
    &:before,
    &:after {
      right: 0;
      bottom: 0;
      background-color: $greenLight;
      transition: transform 0.3s ease;
    }
    &:before {
      // On it's way back, after however stops
      width: 100%;
      height: 0.1rem;
      transform: translateX(-100%);
      transition-delay: 0.1s;
    }

    > .links__span {
      display: block;
      padding: 0.2rem;
      &:before,
      &:after {
        left: 0;
        top: 0;
        background-color: $white;
        transition: transform 0.3s ease;
      }
    }
    &:hover:before,
    &:hover:after,
    &:hover > span:before,
    &:hover > span:after {
      transform: translate(0, 0);
    }
    &:hover:before {
      transition-delay: 0s;
    }
    &:hover:after {
      transition-delay: 0.3s;
    }
  }
}

</style>
