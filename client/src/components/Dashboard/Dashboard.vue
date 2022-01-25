<template>
  <div class="dashboard">
    <div class="dashboardContainer">
      <dashboard-clock />
    </div>
  </div>
</template>

<script>
import DashboardClock from "./DashboardClock";

export default {
  data() {
    return {};
  },

  components: {
    DashboardClock,
  },
};
</script>

<style lang="scss">
.dashboardContainer {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
