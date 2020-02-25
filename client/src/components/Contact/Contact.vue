<template>
  <div class="contactBox">
    <h1 class="mainHeader">Contact me</h1>
    <form action class="form">

      <div class="form--userInformation">
        <label class="form--userInformation__nameLabel" for="fname">Name</label> 
        <input autocomplete="false" class="form--userInformation__nameInput" v-model="title" placeholder="Name" />

        <label class="form--userInformation__emailLabel" for="femail">Email</label>
        <input autocomplete="off" class="form--userInformation__emailInput" id="femail" v-model="femail" placeholder="Email" />
      </div>

    <div class="form--userText">
      <label class="form--userText__textLabel" for="ftext">Message</label>
      <textarea autocomplete="off" class="form--userText__textInput" v-model="message" placeholder="Message">Message</textarea>
    </div>
    </form>

    <div class="formButtonBox">
        <a htef="#" class="formButtonBox--sendButton">Send</a>
    </div>


    <div class="emailOptionBox">
      <h3 class="emailOptionBox--header">Or email me</h3>
          <a
      class="mailLinks__effect mailLinks__text"
      href="mailto:victor.persson7@gmail.com">
      <span class="form-mail__span">victor.persson7@gmail.com</span>
    </a>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {}
};
</script>

<style scoped lang="scss">
@import "../../sass/variables.scss";


.contactBox {
  min-height: 100vh;
  max-width: 100%;
  background: $greyMedium;
}

.mainHeader {
  text-align: center;
  font-size: 5rem;
  color: $greenMedium;
  font-family: $fontHeader;
  text-transform: uppercase;
  font-weight: 100;
}

.form {
  margin: 2rem;
  color: $greyLight;
  font-family: $fontMain;
  text-transform: uppercase;
  margin-right: 10rem;
  margin-left: 10rem;

  &--userInformation {
      display: flex;
      justify-content: space-around;
      margin-top: 4rem;
      position: relative;

  &__nameLabel {
    font-size: 1.2rem;
    position: absolute;
    left: 0rem;
    bottom: .5rem;
    opacity: 0;
  }

  &__nameInput {
      font-size: 1.5rem;
      border-bottom: .1rem solid $greyLight;
      width: 50%;
      z-index: 1;
      transition: all .5s;

      &:focus {
        border-bottom: .1rem solid $greenLight;

      &::placeholder {
        color: $greenLight;
        }
      }

  }

  &__emailLabel {
    font-size: 1.5rem;
    position: relative;
    left: 3.4rem;
    opacity: 0;
  }

  &__emailInput {
      font-size: 1.5rem;
      border-bottom: .1rem solid $greyLight;
      width: 50%;
      z-index: 1;
      transition: all .5s;

      &:focus {
        border-bottom: .1rem solid $greenLight;

      &::placeholder {
        color: $greenLight;
        } 
    } 
  }

 }


  .form--userText {
    margin-top: 5rem;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    
    &__textLabel {
      font-size: 1.2rem;
      position: absolute;
      left: 0;
      opacity: 0;
  }

    &__textInput {
      font-size: 1.5rem;
      border-bottom: .1rem solid $greyLight;
      width: 100%;
      z-index: 1;
      transition: all .5s;

      &:focus {
        border-bottom: .1rem solid $greenLight;

      &::placeholder {
        color: $greenLight;
        }
      }
    }
  }

  input:focus {
      outline: none;
    }

  textarea:focus {
      outline: none;
    }
 }

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid none;
  -webkit-text-fill-color: $greenLight;
  -webkit-box-shadow: 0 0 0px 1000px none inset;
  transition: background-color 5000s ease-in-out 0s;
}


 .formButtonBox {
   margin-bottom: 5rem;
   display: flex;
   justify-content: center;

   &--sendButton {
     text-transform: uppercase;
     font-family: $fontMain;
     color: white;
     background: $greyMedium;
     text-decoration: none;
     background: $greyDark;
     padding: 1rem;
     border-radius: 1rem;
     padding-left: 5rem;
     padding-right: 5rem;
     transition: .5s;
     cursor: pointer;

        &:hover {
            background: $greenDark;
            animation: fall-down;
        }

   }
 }


  .emailOptionBox {
    display: flex;
    align-items: center;
    flex-direction: column;

    &--header {
      font-size: 2.8rem;
      color: $greyLight;
      font-family: $fontHeader;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

  .mailLinks__effect,
  .mailLinnks__effect > .form-mail__span {
    font-size: 2rem;
    font-family: $fontMain;
    font-weight: 100;
    position: relative;
    color: $greyLight;
    text-decoration: none;
    line-height: 3rem;
    transition: all .7s;
    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: transform 0.5s ease;
    }

    &:hover {
      color: $white;
    }
  }

  .mailLinks__effect {
    display: inline-block;
    overflow: hidden;
    &:before,
    &:after {
      right: 0;
      bottom: 0;
      background-color: $greenLight;
      transition: transform 0.3s ease;
    }
    &:before {
      // On it's way back, after however stops
      width: 100%;
      height: 0.1rem;
      transform: translateX(-100%);
      transition-delay: 0.1s;
    }

    > .mail-links__span {
      display: block;
      padding: 0.2rem;
      &:before,
      &:after {
        left: 0;
        top: 0;
        background-color: $white;
        transition: transform 0.3s ease;
      }
    }
    &:hover:before,
    &:hover:after,
    &:hover > span:before,
    &:hover > span:after {
      transform: translate(0, 0);
      
    }
    &:hover:before {
      transition-delay: 0s;
    }
    &:hover:after {
      transition-delay: 0.3s;
      }
    }
  }
  

  @media screen and (max-width: 480px) {

  .form {
    margin: 2rem;
  }

  .mainHeader {
    font-size: 3.6rem;
  }

  .form--userInformation {
    flex-direction: column;
    text-align: center;

    &__nameInput {
      width: 100%;
    }

    &__emailInput {
      margin-top: 1.5rem;
      width: 100%;
    }
  }

  .form--userText {
    flex-direction: column;
    text-align: center;
    } 
  }
</style>
