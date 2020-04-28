<template>
  <div class="contactBox">
    <contact-links />
    <contact-background />
    <!-- <contact-form /> -->
  </div>
</template>

<script>
//import ContactForm from './ContactForm.vue'
import ContactLinks from './ContactLinks.vue'
import ContactBackground from './ContactBackground.vue'


export default {
  data() {
    return {

    }
  },
  
  components: {
    //ContactForm,
    ContactLinks,
    ContactBackground
  }
};
</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';

.contactBox {
  background: $greyMedium;
  min-height: 100vh;
}


</style>
