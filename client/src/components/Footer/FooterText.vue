<template>
    <div class="footerText">
        <p class="footerText__para">Made with love, by Victor Persson - &copy; {{ currentYear }}. <br>Using Vue, SASS/SCSS and a touch of my divine intellect</p>
    </div>
</template>

<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        } 
    }
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";


.footerText {
    &__para {
        color: $white;
        text-align: center;
        font-family: $fontMain;
        text-transform: lowercase;
        font-size: 1.3rem;
        font-weight: 400;
        margin-bottom: 0rem;
        margin-top: 4rem;
        padding-bottom: 1rem;
    }
}


</style>