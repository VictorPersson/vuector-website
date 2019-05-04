<template>
  <v-container grid-list-md text-xs-center class="buttonBox">
    <v-layout row wrap>
      <v-flex xs12>
        <transition name="downButtonAnimation">
          <button @click="scrollDown" v-if="isVisible" class="downButton">
            <i class="fas fa-angle-down downButton--icon"></i>
          </button>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      isVisible: true,
      scrolled: 0
    };
  },
  methods: {
    hideArrowIcon: function() {
      if ((this.scrolled = window.scrollY > 150)) {
        this.isVisible = false;
      } else {
        if ((this.scrolled = window.scrollY < 10)) {
          this.isVisible = true;
        }
      }
    },

    scrollDown() {
      window.scrollBy({
        top: 500,
        left: 0,
        behavior: "smooth"
      });
    }
  },

  created() {
    window.addEventListener("scroll", this.hideArrowIcon);
  },
  destroyed() {
    window.removeEventListener("scroll", this.hideArrowIcon);
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";

.buttonBox {
  position: fixed;
  bottom: 0;
  max-width: 100%;
  max-height: 500px;
  overflow-y: auto;
}

.downButton {
   outline: none;
   
  &--icon {
    font-size: 4rem;
    color: $greenMedium;
    cursor: pointer;
    display: bounce;
    transition: all .4s;
    
    &:hover {
      text-shadow: $textGreenGlow;
      transform: translateY(.3rem); 

    }
  }
}

.downButtonAnimation-enter-active {
  transition: all 2s ease;
}
.downButtonAnimation-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.downButtonAnimation-enter,
.downButtonAnimation-leave-to {
  transform: translateY(2rem);
  opacity: 0;
}


</style>
