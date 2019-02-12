<template>
  <v-container grid-list-md text-xs-center class="headerBox">
    <v-layout row wrap>
      <v-flex xs12>
          <h1 class="px-0 mainH1">Victor Persson</h1>
      </v-flex>
    </v-layout>
  </v-container>
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

.headerBox {
 height: 100vh;
}

.mainH1 {
  font-size: 5rem;
  font-family: $fontCool;
  color: $greenMedium;
  text-transform: uppercase;
  font-weight: 400;
}

</style>
