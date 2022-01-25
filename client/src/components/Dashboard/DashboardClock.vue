<template>
  <div class="dashboardClock">
    <div class="dashboardClockContainer">
      <h1 class="betaBanner">BETA <i class="fas fa-tools"></i></h1>
      <h3 class="dashboardClockHeader">
        {{ this.currTime }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currTime: "00:00:00",
    };
  },
  mounted() {
    setInterval(this.clock, 1);
  },
  methods: {
    clock() {
      const now = new Date();
      const seconds = now
        .getSeconds()
        .toString()
        .padStart(2, 0);
      const minutes = now
        .getMinutes()
        .toString()
        .padStart(2, 0);
      const hours = now.getHours().toString();
      this.currTime = `${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/variables.scss";

.dashboardClockContainer {
  display: flex;
}

.dashboardClockHeader {
  font-size: 8rem;
  color: $greenLight;
  font-family: $fontMain;
}

.betaBanner {
  position: absolute;
  padding: 0.5rem 4rem;
  left: -50px;
  top: 18px;
  transform: rotate(-36deg);
  background: $redLight;
  font-family: $fontMain;
  color: $white;
}
</style>
