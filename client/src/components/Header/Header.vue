<template>
  <div>
      <heading />
      <down-button />
  </div>
</template>

<script>
import DownButton from './DownButton.vue'
import Heading from './Heading.vue'

export default {
  data() {
    return {

    }
  },
  
  components: {
    DownButton,
    Heading
  }
};

</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';


</style>
