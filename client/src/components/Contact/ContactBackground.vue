<template>
  <div class="backgroundBox">
      <!---
    <div class="triangleBackground-1"></div>
    <div class="triangleBackground-2"></div>
    Needs correct CSS implementation
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {}
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../sass/animations.scss";
@import "../../sass/mixins.scss";

.backgroundBox {
    position: relative;
    background: black;
}

.triangleBackground-1 {
  height: 100vh;
  background-color: $greenMedium;
  clip-path: polygon(81% 66%, 0% 100%, 100% 100%);
  margin-left: -5rem;
  position: absolute;
  width: 100%;
}

.triangleBackground-2 {
  margin-left: -5rem;
  height: 100vh;
  background-color: $greenLight;
  clip-path: polygon(13% 62%, 0% 100%, 100% 100%);
  opacity: .5;
}

</style>
