<template>
    <div>
        <navigation-list v-on:menuOptionMade='redirectPage()' v-show="showMenu"/>
        <navigation-menu-icon v-on:navIconClicked='toggleMenu()' v-if="isMenuOptionMade"/>
    </div>
</template>

<script>
import NavigationMenuIcon from'./NavigationMenuIcon'
import NavigationList from'./NavigationList'

export default {
  data() {
    return {
      showMenu: false,
      isMenuOptionMade: true
    }
  },

  methods: {

    toggleMenu: function() {
      this.showMenu = !this.showMenu
      this.$emit('navMenuActive');
    },

    redirectPage: function() {
      this.showMenu = !this.showMenu
      this.isMenuOptionMade = false
      
      this.$nextTick(() => {
        this.isMenuOptionMade = true
      });
      
      this.$emit('menuOptionActive');
    }
  },

  components:{
      NavigationList,
      NavigationMenuIcon
  },
};
</script>

<style lang="scss">
@import '../../sass/variables.scss';

</style>