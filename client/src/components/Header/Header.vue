<template>
  <div class="headerBox">
      <heading-title />
      <heading-logo />
      <heading-text />
      <down-button />
  </div>
</template>

<script>
import DownButton from './DownButton.vue'
import HeadingTitle from './HeadingTitle.vue'
import HeadingLogo from './HeadingLogo.vue'
import HeadingText from './HeadingText.vue'

export default {
  data() {
    return {
    }
  },
  
  components: {
    HeadingTitle,
    DownButton,
    HeadingLogo,
    HeadingText
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
