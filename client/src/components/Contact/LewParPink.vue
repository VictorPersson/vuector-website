<template>
  <div class="lewParPinkBox">
      <h1 class="headerH1"><i class="far fa-heart"></i> Hi there my darlng <i class="far fa-heart"></i> </h1>
      <p class="para1">I made this virtual palace of love on the world wide web for us, a little piece of pink heaven for you to always remember the true love between us. Now star my repo and give me powers on your server.</p>
      <br>
      <img class="viapImage" src="https://i.imgur.com/YpaxlJM.png" alt="PinkViap">
      <p class="para1">Yours, Viap <i class="fas fa-joint"></i> </p>
      <img class="lewImg" src="https://i.imgur.com/Hr6Ud3C.png" alt="">
      <img class="lewImg" src="https://i.imgur.com/5dcZfSD.png" alt="">
      <img class="lewImg" src="https://i.imgur.com/rllPpyS.png" alt="">
      <br>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  
  components: {

  }
};
</script>

<style scoped lang="scss">
@import '../../sass/variables.scss';

.lewParPinkBox {
  z-index: 100000;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;   
  background-color: #e899dc;
  background-image: linear-gradient(315deg, #ff7ceb 0%, #ff3d98 74%);
}

.headerH1 {
    text-align: center;
    font-family: $fontHeader;
    font-size: 8rem;
    color: white;
}

.para1 {
    text-align: center;
      font-family: $fontMain;
    font-size: 2.8rem;
    color: white;
}


.viapImage {
  animation: rotation 2s infinite linear;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10rem;
}

.lewImg {
    margin-left: 18rem;
    width: 9rem;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}


</style>
