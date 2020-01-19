<template>
    <div class="wishListListBox">
        <ul class="ul">
            <li class="listItem" @click="openLink" v-for="(item, index) in items" v-bind:key="item.id">
                <h3 class="listItem--header"> {{ headerText }} {{index + 1}} </h3>
                <p class="listItem--linkText"> {{ item.wish }} </p>
                <a class="listItem--linkButton" v-bind:href="item.link" target="_blank">Link</a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            headerText: "Önsking",
            items: [
                { wish: "Mobil", link: "https://www.netonnet.se/art/telefoner/mobiltelefoner/iphone/apple-iphone-8-64gb-space-grey/247707.9044/?showSubscriptionModal=false&pTab=standard" },
                { wish: "Tax", link: "https://www.skk.se/sv/kopahund/hundraser-valpkullar/tax/?show=breeders" },
                { wish: "Skateboard", link: "https://www.boardlife.se/produkt-kategori/skateboard/complete-skateboards/?v=f003c44deab6" }            
                ]
        }
    },

    methods: {
        openLink: function() {

        }
    }
    
}
</script>

<style lang="scss">

@import '../../sass/variables.scss';
@import '../../sass/animations.scss';


.ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 4rem;
}

.listItem {
    color: $greyMedium;
    font-family: $fontMain;
    padding: 3rem;
    font-size: 2rem;
    list-style: none;
    box-shadow: $boxShadow;
    margin: 2rem;
    transition: all .5s;
    cursor: pointer;

    &:hover {
         box-shadow: $boxShadowMoved;
         transform: translateY(-1rem);
    }

    &--header {
        font-family: $fontHeader;
    }

    &--linkText {
        margin-bottom: 3rem;
        font-size: 3rem;
    }
    
    &--linkButton {
        color: white;
        text-decoration: none;
        background: $greenLight;
        padding: 1rem;
        border-radius: 1rem;
        padding-left: 5rem;
        padding-right: 5rem;
        transition: .4s;

        &:hover {
            background: $greyDark;
            animation: fall-down;
        }
    }
}
</style>


Kan 