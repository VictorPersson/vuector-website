<template>
    <div class="footerImages">
        <div class="footerImages__1">
            <i class="fab fa-vuejs footerImages__icons"></i>
        </div>
        <div class="footerImages__2">
            <i class="fab fa-sass footerImages__icons"></i>
        </div>
        <div class="footerImages__3">
            <i class="fas fa-brain footerImages__icons"></i>
        </div>
    </div>
</template>

<script>
export default {
  
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";

.footerImages {
    position: relative;
    margin-top: 7rem;
    margin-right: 7.5rem;

    &__1 {
        text-align: center;
        padding-right: 35rem;
    }


    &__2 {
        text-align: center;
    }


    &__3 {
       text-align: center;
       padding-left: 35rem;
    }
  
  &__icons {
    position: absolute;
    color: $white;
    font-size: 7rem;
    transition: all .5s;
    

    &:hover {
        font-size: 9rem;
    }
  }
 }

</style>