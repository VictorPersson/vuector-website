<template>
    <div>
        <a href="#" class="menuBox">
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

    }
  },

  methods: {
      
  }
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';

.menuBox {
    height: 3rem;
    width: 3rem;
    position: fixed;
    display: block;
    top: 2rem;
    right: 3.5rem;

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
    
        .menuBar--1 {
        color: $textGreenGlow; 
        width: 2rem;
        }
        .menuBar--3 {
        width: 2.8rem;
        }
    }

    &:active {
        .menuBar--2 {
        transform: translateX(20rem); 
        }
    }
}



</style>
