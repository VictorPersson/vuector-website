<template>
  <div class="dashboardTimer">
    <div class="dashboardTimerContainer">
      <input type="number" class="dashboardTimerInput" min="1" v-model="time" />
      <button
        v-if="!timerActive"
        class="dashboardTimerStartButton"
        v-on:click="startTimer"
      >
        Start
      </button>
      <button
        v-if="timerActive"
        class="dashboardTimerStartButton"
        @click="stopTimer"
      >
        {{ stopText }}
      </button>
      <audio id="myAudio">
        <source src="src\assets\sound\hl2_alarm_sound.ogg" type="audio/ogg" />
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
      interval: setInterval,
      stopText: "Stop",
      soundEl: document.getElementById("myAudio"),
    };
  },
  methods: {
    startTimer() {
      if (this.time > 0 || typeof this.time === "number") {
        this.timerActive = !this.timerActive;
        this.interval = setInterval(() => {
          !this.time ? this.timerComplete() : this.time--;
        }, 1000);
      } else {
        alert("Not valid numb");
      }
    },
    stopTimer() {
      if (this.time <= 0) {
        this.soundEl.pause();
      } else {
        clearInterval(this.interval);
      }
      this.timerActive = !this.timerActive;
    },
    timerComplete() {
      this.soundEl.play();
      clearInterval(this.interval);
      // Make red
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
