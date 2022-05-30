<template>
  <div class="dashboard">
    <div class="dashboardContainer">
      <dashboard-clock />
      <dashboard-timer />
      <dashboard-links />
    </div>
  </div>
</template>

<script>
import DashboardClock from "./DashboardClock";
import DashboardLinks from "./DashboardLinks";
import DashboardTimer from "./DashboardTimer";

export default {
  data() {
    return {};
  },

  components: {
    DashboardClock,
    DashboardTimer,
    DashboardLinks,
  },
};
</script>

<style lang="scss">
.dashboardContainer {
  display: flex;
  flex-direction: column;
}
</style>
