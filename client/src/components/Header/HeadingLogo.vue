<template>
  <div class="logoBox">
    <div class="triangleBackground-1"></div>
    <div class="triangleBackground-2"></div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";


.triangleBackground-1 {
  height: 110vh;
  background-color: $greenMedium;
  clip-path: polygon(10% 0, 50% 50%, 0 100%, 0 0);
  transform: rotate(1deg);
  margin-left: -5rem;
  position: absolute;
  width: 100%;
  
}

.triangleBackground-2 {
  margin-left: -5rem;
  height: 120vh;
  background-color: $greenLight;
  clip-path: polygon(10% 0, 50% 50%, 0 100%, 0 0);
  transform: rotate(2deg);
  opacity: .5;
}

.logoBox {
    position: relative;
}

</style>
