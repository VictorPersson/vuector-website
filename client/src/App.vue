<template>
  <div id="app">
    <SplashScreen v-if="splashScreenShow"/>
    <router-view></router-view>
    <Header v-show="splashScreenHidden" v-if="!$route.meta.hideContent"/>
    <Navigation 
                v-on:menuOptionActive="hideContent()"
                v-on:navMenuActive="menuActive()" 
                v-if="splashScreenHidden"
                />
    <Section1 v-show="splashScreenHidden && menuOptionActive" />
    <Footer v-show="splashScreenHidden"/>
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
      navMenuActive: null,
      menuOptionActive: true
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
      }, 1700 * 2);
    },

    menuActive: function() {
      this.navMenuActive = !this.navMenuActive
    },

    hideContent: function() {
      this.menuOptionActive = !this.menuOptionActive
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

