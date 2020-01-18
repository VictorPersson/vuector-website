<template>
    <div class="wishListListBox">
        <ul class="ul">
            <li class="listItem">1 ett</li>
            <li class="listItem">2 två</li>
            <li class="listItem">3 två</li>
            <li class="listItem">4 två</li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {


        }
    }
    
}
</script>

<style lang="scss">
@import '../../sass/variables.scss';


.ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 4rem;

}

.listItem {
    font-style: $fontHeader;
    padding: 5rem;
    font-size: 2rem;
    list-style: none;
    box-shadow: $boxShadow;
    margin: 2rem;
    transition: all .5s;
    cursor: pointer;

    &:hover {
         box-shadow: $boxShadowMoved;
         transform: translateY(-2rem);

    }
}
</style>


Kan 