<template>
  <div id="app">
    <SplashScreen v-if="splashScreenShow"/>
    <Navigation v-if="splashScreenHidden"/>
    <Header v-if="splashScreenHidden"/>
    <Footer v-if="splashScreenHidden"/>
  </div>
</template>

<script>
import SplashScreen from './components/SplashScreen/SplashScreen.vue'
import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation/Navigation.vue'
import Footer from './components/Footer/Footer.vue'

export default {
    data() {
    return {
      splashScreenShow: true,
      splashScreenHidden: false
    }
  },

  name: 'app',

  components: {
    SplashScreen,
    Header,
    Navigation,
    Footer
  },

  methods: {
    splashScreenTimer: function() {
      setTimeout(() => {
        this.splashScreenShow = false;
        this.splashScreenHidden = true;
        console.log("Splash done")
      }, 200*2);
    }
  },

  created() {
    this.splashScreenTimer()
  }
}
</script>

<style scoped lang="scss">
@import 'sass/variables.scss';


</style>

