<template>
    <div>
        <navigation-list v-if="showMenu"/>
        <navigation-logo />
        <navigation-menu-icon v-on:navIconClicked='toggleMenu()' />
    </div>
</template>

<script>
import NavigationLogo from'./NavigationLogo'
import NavigationMenuIcon from'./NavigationMenuIcon'
import NavigationList from'./NavigationList'

export default {
  data() {
    return {
      showMenu: false
    }
  },

  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu
      this.$emit('navMenuActive');
    }
  },

  components:{
      NavigationLogo,
      NavigationList,
      NavigationMenuIcon
  },
};
</script>

<style lang="scss">
@import '../../sass/variables.scss';


</style>