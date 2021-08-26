<template>
  <v-app>
    <dashboard-core-app-bar class="app-bar" />

    <dashboard-core-drawer class="left-menu" id="mySidenav" />

    <dashboard-core-view />

    <dashboard-core-side-drawer />

  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      DashboardCoreView: () => import('./components/core/View'),
      DashboardCoreSideDrawer: () => import('./pages/ContactInfoDrawer'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
<style scoped>
.left-menu {
  margin-top: 55px !important;
}
.app-bar {
  margin-left: 0px !important;
}
#mySidenav + div .theme--light.v-navigation-drawer {
 border-right: 3px solid #A0A3AA !important;
}
</style>