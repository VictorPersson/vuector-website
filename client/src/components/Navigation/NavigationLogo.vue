<template>
    <div class="logoBox">
        Logo
    </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },

  methods: {
      
  }
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/animations.scss';

.logoBox {
    position: fixed;
    left: 1rem;
    top: 1rem;
    animation: slide-in-left 1.5s;
}


</style>
