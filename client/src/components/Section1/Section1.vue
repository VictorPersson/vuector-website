<template>
  <div class="section1">
    <div class="sectionContainer">
          <section-1-image />
          <section-1-text />
    </div>
          <section-1-icons />
  </div>
</template>

<script>
import Section1Text from'./Section1Text'
import Section1Image from'./Section1Image'
import Section1Icons from'./Section1Icons'

export default {
  data() {
    return {
    }
  },

  components:{
      Section1Text,
      Section1Image,
      Section1Icons
  },
};
</script>

<style lang="scss">
@import '../../sass/variables.scss';

.section1 {
  min-height: 100vh;
}

.sectionContainer {
  display: flex;
}

@media screen and (max-width: 480px) {
  .sectionContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
}
</style>