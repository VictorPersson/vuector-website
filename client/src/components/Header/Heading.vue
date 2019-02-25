<template>
  <v-container grid-list-md text-xs-center class="headerBox">
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="mainH1 mainH1--1">Victor 
          <span class="mainH1--dot">Persson</span>
        </h1>
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
  animation: slide-in-left;

  &--1 {
    font-size: 8rem;
  }

  &--2 {
    font-size: 6rem;
  }

  &--3 {
    font-size: 10rem;
    color: $greyDark;
  }

  &--dot {
    color: $greyDark;
  }
}

</style>
