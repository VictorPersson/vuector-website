<template>
  <div class="dashboardLinks">
    <div class="dashboardLinksContainer">
      <div class="dashboardLinkCard">
        <a href="#" class="dashboardLink">Google 1</a>
      </div>
      <div class="dashboardLinkCard">
        <a href="#" class="dashboardLink">Google 1</a>
      </div>
      <div class="dashboardLinkCard">
        <a href="#" class="dashboardLink">Google 1</a>
      </div>
      <div class="dashboardLinkCard">
        <a href="#" class="dashboardLink">Google 1</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss">
@import "../../sass/variables.scss";

.dashboardLinksContainer {
  display: flex;
  justify-content: center;
}

.dashboardLinkCard {
  background: chocolate;
  min-height: 5rem;
  min-width: 5rem;
  margin: 1rem;
}
</style>
