<template>
  <v-container grid-list-md text-xs-center class="footerBox">
    <v-layout row wrap>
      <v-flex xs12>
          <ul class="footerList">
              <li class="footerList--item">  <a href=""></a> GitHub</li>
              <li class="footerList--item">Facebook</li>
              <li class="footerList--item">LinkedIn</li>
              <li class="footerList--item">Instagram</li>
          </ul>
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
    height: 100vh;
    max-width: 100%;
    background: linear-gradient($greenLight, $greenDark);
}

.footerList {
    list-style: none;
    font-size: 3rem;
    color: $white;
    font-family: $fontTest1;
    text-transform: uppercase;
    font-weight: 400;

    &--item {
        float: left;
        margin-left: 1.5rem;
    }

    
}






</style>
