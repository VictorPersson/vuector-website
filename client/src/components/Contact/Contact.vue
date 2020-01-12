<template>
  <div class="contactBox">
      <span>Message Title</span>
      <input v-model="title" placeholder="Title">

      <span>Message Content</span>
      <textarea v-model="message" placeholder="Content..."></textarea>
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
  min-height: 65vh;
  max-width: 100%;
}

h1 {
    font-size: 6rem;
}


</style>
