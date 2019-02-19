<template>
  <div id="app">
    <Navigation />
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation/Navigation.vue'
import Footer from './components/Footer/Footer.vue'



export default {
  name: 'app',
  components: {
    Header,
    Navigation,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import 'sass/variables.scss';


</style>

