<template>
  <div id="app">
    <SplashScreen v-if="splashScreenShow"/>
    <Navigation v-on:navMenuActive="menuActive()" v-if="splashScreenHidden"/>
    <Header v-if="splashScreenHidden && !navMenuActive"/>
    <Section1 v-if="splashScreenHidden && !navMenuActive" />
    <Footer v-if="splashScreenHidden && !navMenuActive"/>
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
      splashScreenHidden: false,
      navMenuActive: null
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
    },

    menuActive: function() {
      this.navMenuActive = !this.navMenuActive
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

