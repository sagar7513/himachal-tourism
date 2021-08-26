<template>
  <v-content>
    <router-view class="main_content" />
      <dashboard-core-footer />
  </v-content>
</template>

<script>
  export default {
    name: 'DashboardCoreView',
    components: {
      DashboardCoreFooter: () => import('./Footer'),
    },
  }
</script>

<style lang="scss">
  @media only screen and (max-width: 768px) {
    .main_content {
      padding-bottom: 7em;
    }
  }
</style>