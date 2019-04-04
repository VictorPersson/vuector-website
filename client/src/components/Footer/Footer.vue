<template>
  <div class="footerBox">
    <footer-links />
    <footer-images />
    <footer-text />
  </div>
</template>

<script>
import FooterLinks from './FooterLinks.vue'
import FooterImages from './FooterImages.vue'
import FooterText from './FooterText.vue'

export default {
  data() {
    return {

    }
  },
  
  components: {
    FooterLinks,
    FooterImages,
    FooterText
  }
};
</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';

.footerBox {
  height: 65vh;
  max-width: 100%;
  background: linear-gradient($greenLight, $greenDark);
}


</style>
