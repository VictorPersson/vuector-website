<template>
  <div id="app">
    <SplashScreen v-if="splashScreenShow"/>
    <Navigation v-if="splashScreenHidden"/>
    <Header v-if="splashScreenHidden"/>
    <Section1 v-if="splashScreenHidden"/>
    <Footer v-if="splashScreenHidden"/>
  </div>
</template>

<script>
import SplashScreen from './components/SplashScreen/SplashScreen.vue'
import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation/Navigation.vue'
import Footer from './components/Footer/Footer.vue'
import Section1 from './components/Section1/Section1.vue'

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
    Section1,
    Footer
  },

  methods: {
    splashScreenTimer: function() {
      setTimeout(() => {
        this.splashScreenShow = false;
        this.splashScreenHidden = true;
        console.log("Splash done")
      }, 1700*2);
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

