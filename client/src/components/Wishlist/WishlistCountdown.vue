<template>
    <div>
        <h1 class="wishListHeader">Birthday</h1>
        <div class="countDownBox">
            <h2 class="countDownVariables"> 
                {{ days }}<span class="variableText">days</span>
                {{ hours }}<span class="variableText">hours</span>
                {{ minutes }}<span class="variableText">minutes</span>
                {{ seconds }}<span class="variableText">seconds</span>
            </h2>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            fetchDate: null,
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        }
    },

    methods: {
        birthdayTimer: function() {

            this.fetchDate = new Date("Feb 9, 2020 00:00:00");
            const countDownDate = this.fetchDate.getTime();

            setInterval(() => {
                const currentDate = new Date().getTime();
                const difference = countDownDate - currentDate;
                
                this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((difference % (1000 * 60)) / 1000);

            }, 1000);

        },
    },

    created() {
        this.birthdayTimer()
    }
    
}
</script>

<style lang="scss">
@import '../../sass/variables.scss';

.wishListHeader {
    font-size: 8rem;
    margin-top: .2rem;
    text-align: center;
    font-family: $fontHeader;
    text-transform: uppercase;
    color: $greyDark;
}

.countDownBox {
    display: flex;
    justify-content: center;
}

.countDownVariables {
    font-size: 6.5rem;
    margin-right: 2.5rem;
    font-family: $fontHeader;
    text-transform: uppercase;
    color: $greenMedium;
}

.variableText {
    font-size: 2rem;
    color: $greyDark;
    margin-left: .5rem;
    margin-right: 3rem;
}

</style>
