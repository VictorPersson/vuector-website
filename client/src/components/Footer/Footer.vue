<template>
  <div class="footerBox">
    <footer-links />
    <footer-images />
  </div>
</template>

<script>
import FooterLinks from './FooterLinks.vue'
import FooterImages from './FooterImages.vue'

export default {
  data() {
    return {

    }
  },
  
  components: {
    FooterLinks,
    FooterImages
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
