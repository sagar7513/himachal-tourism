<template>
  <v-footer  id="dashboard-core-footer" absolute>
    <v-container class="px-md-0 mx-md-0">
      <v-row no-gutters>
        <v-spacer class="hidden-sm-and-down"/>
        <v-col :cols="$store.state.mobileView ? '12':''" :class="$store.state.mobileView ? 'text-center':''" md="auto" class="text-xs-center text-sm-center text-md-right text-lg-right text-xl-right pr-md-2 mr-md-0">
          <div class="pr-0 mr-0 body-1 font-weight-light pt-2 pt-md-0">
            &copy; 2021, Any Questions? Call Us : +91 7027279077
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',
    data: () => ({
    }),
  }
</script>

<style lang="sass" scoped>
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
<style scoped>
  .container {
    background: #e7e7e7;
  }
  .text-decoration-none{
    text-decoration: none;
  }
  .v-footer {
    padding: 0px 2px 0px 2px !important;
    top: 100%;
    bottom: 0%;
    right: 0%;
  }
  @media screen and (min-width: 320px){
  .container {
    max-width: 5000px;
    margin-right: 0px !important;
    padding-right: 0px !important;
  }
  }
</style>