<template>
  <div class="dashboard">
    <div class="dashboardContainer">
      <dashboard-clock />
      <dashboard-timer />
    </div>
  </div>
</template>

<script>
import DashboardClock from "./DashboardClock";
import DashboardTimer from "./DashboardTimer";

export default {
  data() {
    return {};
  },

  components: {
    DashboardClock,
    DashboardTimer,
  },
};
</script>

<style lang="scss">
.dashboardContainer {
  display: flex;
  flex-direction: column;
}
</style>
