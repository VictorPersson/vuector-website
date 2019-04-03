<template>
  <div class="imageBox">
    <img class="imageBox--image" src="../../assets/victor2.png" alt="Image of Victor"> 
  </div>
</template>


<script>

export default {
  data() {
    return {

    }
  },

  methods: {
      
  },

};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/animations.scss';

.imageBox {

    &--image  {
      //border-radius: 50%;
          width: 22rem;
          background-color: $greenDark;
          background-size: cover;
          background-position: -100px 0;
          background-repeat: no-repeat;
          -webkit-clip-path: ellipse(90% 70% at 0% 50%);
          clip-path: ellipse(90% 70% at 0% 50%);
          -webkit-shape-outside: ellipse(90% 70% at 0% 50%);
          shape-outside: ellipse(90% 70% at 0% 50%);
          -webkit-shape-margin: 2em;
          shape-margin: 2em;

    }
    
}



</style>
