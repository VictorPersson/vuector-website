<template>
  <div class="headerBox">
      <heading-title />
      <heading-logo />
      <down-button />
  </div>
</template>

<script>
import DownButton from './DownButton.vue'
import HeadingTitle from './HeadingTitle.vue'
import HeadingLogo from './HeadingLogo.vue'

export default {
  data() {
    return {
    }
  },
  
  components: {
    HeadingTitle,
    DownButton,
    HeadingLogo
  }
  
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/animations.scss';


.headerBox {
  height: 100vh;
}

</style>
