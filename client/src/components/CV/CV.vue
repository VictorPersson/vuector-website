<template>
  <div class="cvBox">
    <h1 class="cvBox--mainHeader">Victor Persson</h1>
    <div class="cvBox--iconBox">
      <span><i id="el" class="fas fa-code cvBox--icon"></i>asdas</span>
      <i id="el" class="fas fa-user-graduate cvBox--icon"></i>
      <i id="el" class="fas fa-briefcase cvBox--icon"></i>
    </div>
    <div class="cvBox--timeLine"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolling: false,
      scrolled: 0,
      scroll1: false
    };
  },
    el: '#el',
    methods: {
    spinIcon: function() {
      if ((this.scrolled = window.scrollY > 100)) {
        el.classList.add('spinningIcon');

      } else if ((this.scrolled = window.scrollY < 5)) {
        el.classList.remove('spinningIcon');
      }
    },
  },

  created() {
    window.addEventListener("scroll", this.spinIcon);
  },
  destroyed() {
    window.removeEventListener("scroll", this.spinIcon);
  },

  components: {}
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";

.cvBox {
  height: 200vh;

  &--timeLine {
    margin-top: 5rem;
    margin-left: 10rem;
    height: 100%;
    width: .3rem;
    background: $greenMedium;
    position: relative;
  }

  &--iconBox {
    display: flex;
    flex-direction: column;
    position: absolute;
  }

  &--icon {
    margin-bottom: 15rem;
    margin-left: 2rem;
    font-size: 5rem;
    color: $greyMedium;
  }

  &--mainHeader {
    color: $greyDark;
    font-family: $fontHeader;
    font-size: 6rem;
    text-align: center;
    margin-top: 1rem;
}

  .spinningIcon {
    transform: rotate(35deg);
  }

}

@media screen and (max-width: 480px) {
  .underConstruction__images {
    font-size: 4rem;
  }
}
</style>
