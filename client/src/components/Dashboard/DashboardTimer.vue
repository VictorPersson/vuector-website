<template>
  <div class="dashboardTimer">
    <div class="dashboardTimerContainer">
      <input type="number" class="dashboardTimerInput" min="1" v-model="time" />
      <button class="dashboardTimerStartButton" v-on:click="startTimer">
        Start
      </button>
      <button class="dashboardTimerStartButton" v-on:click="stopTimer">
        Stop
      </button>
      <audio id="myAudio">
        <source src="src\assets\sound\hl2_alarm_sound.mp3" type="audio/ogg" />
        <source src="src\assets\sound\hl2_alarm_sound.mp3" type="audio/mpeg" />
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 60,
      timerActive: false,
    };
  },
  methods: {
    startTimer() {
      if (this.time > 0 || typeof this.time === "number") {
        const interval = setInterval(() => {
          !this.time ? this.stopInterval(interval) : this.time--;
        }, 1000);
      } else {
        alert("Not valid numb");
      }
    },
    stopTimer() {
      this.timerActive = false;
      var x = document.getElementById("myAudio");
      x.pause();
    },
    stopInterval(interval) {
      var x = document.getElementById("myAudio");
      x.play();
      clearInterval(interval);
      this.time = 0;
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/variables.scss";

.dashboardTimerContainer {
  display: flex;
  justify-content: center;
}

.dashboardTimerHeader {
}

.dashboardTimerInput {
  width: 6rem !important;
  font-size: 2.5rem;
  font-family: $fontMain;
}
</style>
