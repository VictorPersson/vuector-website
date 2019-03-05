<template>
  <div class="headerBox">
      <heading-title />
      <heading-text />
      <down-button />
  </div>
</template>

<script>
import DownButton from './DownButton.vue'
import HeadingTitle from './HeadingTitle.vue'

export default {
  data() {
    return {
    }
  },
  
  components: {
    HeadingTitle,
    DownButton,
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
