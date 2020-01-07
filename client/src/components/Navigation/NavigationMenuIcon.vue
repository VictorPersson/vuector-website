<template>
    <div>
        <div class="menuBackground"></div>
        <button @click="toggleMenu" 
            v-bind:class="{
                iconActive: isIconActive == true
                }" class="menuBox">
            <span class="menuBar menuBar--1"></span>
            <span class="menuBar menuBar--2"></span>
            <span class="menuBar menuBar--3"></span>
        </button>
    </div>
</template>

<script>

export default {
  data() {
    return {
        isIconActive: false,
    }
  },

  methods: {
      toggleMenu: function() {
          this.isIconActive = !this.isIconActive
          this.$emit('navIconClicked');
      },

      mounted() {
          this.$root.$on('eventing', data => {
              this.isIconActive = !this.isIconActive
              console.log("De sker nock")
          })
      }
  }
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/animations.scss';


.menuBox {
    z-index: 11;
    height: 3rem;
    width: 3rem;
    position: fixed;
    display: block;
    top: 2rem;
    right: 2rem;
    animation: slide-in-right 2s;
    outline: none;

.menuBarActive {
    background: $redDark !important;
}

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
        background: $greenMedium;
        }
        .menuBar--1 {
        width: 2rem;
        }
        .menuBar--3 {
        width: 2.8rem;
        }
    }

    &.iconActive {

        &:hover {
            .menuBar--1 {
                background-color: $redLight; 
            }

            .menuBar--3 {
                background-color: $redLight; 
            }
        }

        

        .menuBar--1 {
            transform: translateY(.5rem) translateX(0) rotate(45deg);
            width: 2.6rem;
            background-color: $greenDark;  
        
        }
        .menuBar--2 {
            transform: translateX(10rem);
        }
        
        .menuBar--3 {
            transform: translateY(-1rem) translateX(0) rotate(-45deg);
            width: 2.6rem;
            background-color: $greenDark;
 
        }
    }
}



</style>
