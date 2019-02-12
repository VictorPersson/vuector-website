<template>
  <v-container grid-list-md text-xs-center class="headerBox">
    <v-layout row wrap>
      <v-flex xs6>
        <h1 class="mainH1 mainH1--1">Web design</h1>
      </v-flex>
      <v-flex xs6>
        <h1 class="mainH1 mainH1--2">UX</h1>
      </v-flex>
    </v-layout>
        <v-layout row wrap>
      <v-flex xs12>
        <h1 class="mainH1 mainH1--3">JS</h1>
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
  font-family: $fontTest1;
  color: $greenMedium;
  text-transform: uppercase;
  font-weight: 800;

  &--1 {
    font-size: 8rem;
  }

  &--2 {
    font-size: 6rem;
    color: $greyDark;
  }

  &--3 {
    font-size: 10rem;
  }
}

</style>
