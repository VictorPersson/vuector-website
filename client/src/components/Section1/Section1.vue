<template>
  <v-container fluid grid-list-sm >
    <v-layout row class="section1Box">
      <v-flex v-flex grow pa-1>
          <section-1-image />
      </v-flex>
      <v-flex v-flex shrink pa-1>
          <section-1-text />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Section1Text from'./Section1Text'
import Section1Image from'./Section1Image'

export default {
  data() {
    return {
      show: false
    }
  },

  components:{
      Section1Text,
      Section1Image
  },
};
</script>

<style lang="scss">
@import '../../sass/variables.scss';

.section1Box {
    background-color: $greenDark;
}


</style>