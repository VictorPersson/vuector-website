<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Header/Header.vue'

export default {
  name: 'header',
  components: {
    Header
  }
}
</script>