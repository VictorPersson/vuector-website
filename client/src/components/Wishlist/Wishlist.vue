<template>
    <div class="wishListBox">
        <wishlist-countdown />
        <wishlist-list />
    </div>
</template>

<script>

import WishlistCountdown from'./WishlistCountdown'
import WishlistList from'./WishlistList'

export default {
    data() {
        return {

        }
    },


    components:{
        WishlistCountdown,
        WishlistList
  },
    
}
</script>

<style lang="scss">
@import '../../sass/variables.scss';

.wishListBox {
    min-height: 55vh;
}

</style>
