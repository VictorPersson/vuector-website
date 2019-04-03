<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="footerLinks">
          <a class="footerLinks__effect footerLinks__text" href="https://github.com/VictorPersson" target="_blank">
            <span class="footer-links__span">GitHub</span>
          </a>
          <a class="footerLinks__effect footerLinks__text" href="https://www.linkedin.com/in/victor-persson-755952171/" target="_blank">
            <span class="footer-links__span">LiknedIN</span>
          </a>
          <a class="footerLinks__effect footerLinks__text" href="https://www.facebook.com/victor.persson.3" target="_blank">
            <span class="footer-links__span">Facebook</span>
          </a>
          <a class="footerLinks__effect footerLinks__text" href="https://www.instagram.com/victorperzzon/" target="_blank">
            <span class="footer-links__span">Instagram</span>
          </a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";

.footerLinks {
  line-height: 14px;
  margin-top: 6.5rem;
  

  &__text {
    text-align: center;
    font-size: 2.5rem;
    margin-right: 1rem;
    font-family: $fontHeader;
    text-transform: uppercase;
  }

  &__effect,
  &__effect > &__span {
    position: relative;
    color: $white;
    text-decoration: none;
    line-height: 24px;
    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: transform 0.5s ease;
    }
  }

  &__effect {
    display: inline-block;
    overflow: hidden;
    &:before,
    &:after {
      right: 0;
      bottom: 0;
      background-color: $white;
      transition: transform 0.3s ease;
    }
    &:before {
      // On it's way back, after however stops
      width: 100%;
      height: 0.1rem;
      transform: translateX(-100%);
      transition-delay: 0.1s;
    }

    > .footer-links__span {
      display: block;
      padding: .8rem;
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

