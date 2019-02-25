<template>
    <div>
        <navigation-list />
        <navigation-logo />
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
      show: false
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