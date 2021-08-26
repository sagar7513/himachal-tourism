<template>
  <v-app-bar
    id="app-bar"
    class="py-0 blue-top-outline pl-0"
    color="#ffffff"
    app
    text
    height="55px"
  >
    <v-btn
      color="transparent"
      elevation="-2"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>
      <v-icon size="24px" height="24px" width="24px" color="#616161" v-else>
        mdi-menu
      </v-icon>
    </v-btn>
    <v-toolbar-title>
      <v-row>
        <v-col cols="2" class="column-4">
          <router-link to="/" class="logo-text">
            <v-img
            class="ml-5 screen-margin"
            height="60px"
            contain
            src="@/assets/maropostlogo.png"/>
          </router-link>
        </v-col>
        <v-col cols="1" class="column-1">
          <router-link to="/" class="logo-text">         
            <div class="vertical-line"></div>         
          </router-link>
        </v-col>
        <v-col cols="3" class="column-3">
          <router-link to="/" class="logo-text">          
            <span class="text--secondary fs text-center">HIMACHAL CULTURE AND TRADITION</span>          
          </router-link>
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="1" class="column-10">
          <router-link to="/login" class="logo-text">          
            <v-btn dark link width="100px">LOGIN</v-btn>          
          </router-link>
        </v-col>
        <v-col cols="1" class="column-10">
          <router-link to="/sign-up" class="logo-text">          
            <v-btn dark link width="100px">SIGN UP</v-btn>          
          </router-link>
        </v-col>
      </v-row>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',
    components: {
    },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
    }),
    created: function () {
      this.$root.$emit('collapseSidebarNav')
    },
    computed: {
      ...mapState(['drawer']),
    },
    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>

<style scoped>
  @media only screen and (min-width: 320px) and (max-width: 430px){
  .screen-margin {
    margin-left: 30px !important;
    margin-right: 10px;
    margin-top: -1px;
  }
  .fs {
    font-weight: 400 !important;
  }
  }
  .logo-text {
    text-decoration: none !important;
  }
  .v-btn {
    margin-right: 0px !important;
  }
  .fs {
    font-size: 0.875rem;
    letter-spacing: 0.078125rem;
    font-weight: 500;
  }
  .v-btn--fab {
    width: 0px !important;
  }
  .column-4 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .column-1 {
    max-width: 0px !important;
    padding-left: 1px !important;
    padding-right: 1px !important;
    padding-bottom: 0px !important;
    padding-top: 28px !important;
    margin: 0px !important;
  }
  .column-3 {
    padding-top: 27px !important;
  }
  .column-10{
    padding-top: 20px !important;
    padding-right: 0px !important;
    margin-right: 0px !important;
    float: right;
  }
  .blue-top-outline {
    border-top: solid 3px #26BEFE !important;
  }
  .vertical-line {
    border: solid 1px #D3D3D3 !important;
    height: 30px;
    margin: 0px !important;
  }
  #app-bar {
    left: 0 !important;
    /* z-index: 1000; */
  }
  .v-toolbar__content {
    padding: 0px 15px 0px 0px !important;
    color: rgba(0,0,0,0.87);
    width: 100vw;
  }
  .v-toolbar__title {
    width: 100vw;   
  }
</style>