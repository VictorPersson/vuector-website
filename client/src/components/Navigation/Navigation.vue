<template>
    <div>
        <navigation-logo />
        <navigation-list />
        <transition name="slide-in-right">
          <navigation-menu-icon />
        </transition>
    </div>
</template>

<script>
import NavigationLogo from'./NavigationLogo'
import NavigationMenuIcon from'./NavigationMenuIcon'
import NavigationList from'./NavigationList'

export default {
  data() {
    return {
    }
  },

  components:{
      NavigationLogo,
      NavigationList,
      NavigationMenuIcon
  },

  methods: {
      
  }
};
</script>

<style lang="scss">
@import '../../sass/variables.scss';



.slide-in-right-enter-active {
  animation: slide-in-right 1s;
}

@keyframes slide-in-right {
  0% {
    transform: translateX(10rem);
  }
  50% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0rem);
  }
}

</style>