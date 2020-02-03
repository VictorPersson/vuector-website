<template>
    <div class="projectBox">
        <projects-list />
    </div>
</template>

<script>

import ProjectsList from'./ProjectsList'

export default {
    data() {
        return {

        }
    },


    components:{
        ProjectsList
  },
    
}
</script>

<style lang="scss">
@import '../../sass/variables.scss';

.wishListBox {
    min-height: 55vh;
}

</style>
