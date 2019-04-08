<template>
  <div class="contactBox">
      <h1>CONTACT ME</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  
  components: {

  }
};
</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';

.contactBox {
  height: 65vh;
  max-width: 100%;
  background: linear-gradient($greenLight, $greenDark);
}

h1 {
    font-size: 6rem;
}


</style>
