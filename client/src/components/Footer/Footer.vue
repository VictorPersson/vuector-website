<template>
  <v-container grid-list-md text-xs-center class="footerBox">
    <v-layout row wrap>
      <v-flex xs12>
          <h1 class="px-0 mainHeader">Footer</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';

.footerBox {
    height: 50vh;
    max-width: 100%;
    bottom: 0;
    //position: fixed;
    
}


</style>
