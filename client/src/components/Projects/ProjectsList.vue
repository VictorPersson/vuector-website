<template>
    <div class="wishListListBox">
        <h1 class="MainHeader">Projects</h1>
        <div class="loader" v-if="isLoading"></div>
        <div class="test2">
          <ul class="ul" v-if="!isLoading"> 
              <li class="listItem" v-for="(item, index) in items" v-bind:key="item.id">
                  <p class="listItem--header"> {{ item.name }} </p>
                  <p class="listItem--linkLanguage"> {{ item.language }} </p>
                  <p class="listItem--linkText"> {{ item.description }} </p>
                  <a class="listItem--linkButton" v-bind:href="item.html_url" target="_blank">Read more</a>
              </li>
          </ul>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            isLoading: true,
            headerText: "Name",
            items: []
        }
    },

    methods: {
    },

    created() {
        axios.get("https://api.github.com/users/VictorPersson/repos").then(response => {
            this.items = response.data
            this.items = this.items.filter((i) => i.fork !== true && i.name !== "politweet");
                     
            this.isLoading = false
            console.log(this.items)
        
        }).catch(error => {
            console.log(error)
        })
    }
}

</script>

<style lang="scss">

@import '../../sass/variables.scss';
@import '../../sass/animations.scss';

.wishListListBox {
    min-height: 75vh;
}

.MainHeader {
    color: $greyDark;
    font-family: $fontHeader;
    font-size: 5rem;
    text-align: center;
    margin-top: 1rem;
}

.ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 4rem;
    padding-top: 2rem;
}

.listItem {
    color: $greyMedium;
    font-family: $fontMain;
    padding: 3rem;
    font-size: 1.5rem;
    list-style: none;
    box-shadow: $boxShadow;
    margin: 2rem;
    transition: all .5s;
    cursor: pointer;
    max-width: 28rem;
    min-width: 30rem;

    &:hover {
         box-shadow: $boxShadowMoved;
         transform: translateY(-1rem);
    }

    &--header {
        font-family: $fontHeader;
        font-size: 2rem;
    }

    &--linkText {
        margin-bottom: 3rem;
        font-size: 1.2rem;
        min-height: 5rem;
    }

    &--linkLanguage {
        color: $greenDark;
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
        }
    }
}

// ---------- Loading animations ----------


.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: $greenLight;
  font-size: 1rem;;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>

</style>