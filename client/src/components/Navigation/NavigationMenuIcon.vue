<template>
    <div>
        <div class="menuBackground"></div>
        <a href="#" @click="toggleMenu" v-bind:class="{iconActive: isMenuActive == true, 'menuActive': isMenuActive == true}" class="menuBox">
                <span class="menuBar menuBar--1"></span>
                <span class="menuBar menuBar--2"></span>
                <span class="menuBar menuBar--3"></span>
        </a>
    </div>
</template>

<script>

export default {
  data() {
    return {
        isMenuActive: false,
        isIconActive: false

    }
  },

  methods: {
      toggleMenu: function() {
          this.isMenuActive = !this.isMenuActive
      },
  }
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';

.menuBackground {
    background: linear-gradient( to right, #18ECC0, #00b894);
    transform: rotate(20deg);
    position: fixed;
    top: -2.5rem;
    right: -2rem;
    padding: 5rem;
    transition: all 1s;

    &.menuActive {
        transform: rotate(0deg);
        z-index: 1;
        padding: 100%;

    }
}

.menuBox {
    z-index: 10;
    height: 3rem;
    width: 3rem;
    position: fixed;
    display: block;
    top: 2rem;
    right: 2rem;


.menuBar {
    left: 0;
    position: absolute;
    display: block;
    height: .3rem;
    background: $greyDark;
    border-radius: 1rem;
    transition: all 2s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;

    &--1 {
        top: 0;
        width: 2.8rem;
    }

    &--2 {
        top: 25%;
        width: 2.4rem;
    }

    &--3 {
        top: 50%;
        width: 2rem;
    }
 }

    &:hover {
        .menuBar {
        }
        .menuBar--1 {
        width: 2rem;
        }
        .menuBar--3 {
        width: 2.8rem;
        }
    }

    &.iconActive {

        .menuBar--1 {
            transform: translateY(.4rem) translateX(0) rotate(45deg);
            width: 2.6rem
        }
        .menuBar--2 {
            transform: translateX(10rem);
        }
        .menuBar--3 {
            transform: translateY(-1rem) translateX(0) rotate(-45deg);
            width: 2.6rem;
        }
    }
}



</style>
