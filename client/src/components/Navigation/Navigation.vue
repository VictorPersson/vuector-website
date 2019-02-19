<template>
    <div>
        <navigation-logo />
        <navigation-menu />
    </div>
</template>

<script>
import NavigationLogo from'./NavigationLogo'
import NavigationMenu from'./NavigationMenu'

export default {
  data() {
    return {

    }
  },

  components:{
      NavigationLogo,
      NavigationMenu
  },

  methods: {
      
  }
};
</script>

<style lang="scss">
@import '../../sass/variables.scss';


</style>