<template>
  <div class="footerLinks">
    <a
      class="footerLinks__effect footerLinks__text"
      href="https://github.com/VictorPersson"
      target="_blank"
    >
      <span class="footer-links__span">GitHub</span>
    </a>
    <a
      class="footerLinks__effect footerLinks__text"
      href="https://www.linkedin.com/in/vpersson"
      target="_blank"
    >
      <span class="footer-links__span">Linkedin</span>
    </a>
    <a
      class="footerLinks__effect footerLinks__text"
      href="https://www.facebook.com/victor.persson.3"
      target="_blank"
    >
      <span class="footer-links__span">Facebook</span>
    </a>
    <a
      class="footerLinks__effect footerLinks__text"
      href="https://www.instagram.com/victorperzzon/"
      target="_blank"
    >
      <span class="footer-links__span">Instagram</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";

.footerLinks {
  padding-top: 3rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: center;

  &__text {
    font-size: 2.5rem;
    margin-right: 2.5rem;
    font-family: $fontHeader;
    text-transform: uppercase;
  }

  &__effect,
  &__effect > &__span {
    position: relative;
    color: $white;
    text-decoration: none;
    line-height: 2rem;
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
      padding: 0.8rem;
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

@media screen and (max-width: 480px) {
  .footerLinks {
    flex-direction: column;
    text-align: center;

    &__text {
          margin-right: 0;
          padding-bottom: .9rem;
    }
  }


 }
</style>

