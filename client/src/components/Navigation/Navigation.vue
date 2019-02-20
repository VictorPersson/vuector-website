<template>
    <div>
        <navigation-logo />
        <navigation-list />
        <navigation-menu-icon />
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


</style>