<template>
  <v-container
  id="typography"
  fluid
  tag="section"
  >
    <section class="mb-12 text-center mt-5">
      <h1
        class="font-weight-dark mb-2 headline"
      >
        Upcoming Road Trips - Kullu
      </h1>
    </section>
  </v-container>
</template>

<script>
import ViewHide from '../../../components/base/ViewHide'
  export default {
    components : {
      ViewHide,
    },
    data (){
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .line-height {
    line-height: 1.5;
  }
  .v-btn:before {
      background-color: transparent;
    }
  .v-btn--text {
  font-weight: 600!important;
  letter-spacing: 0.55px;
  font-size: 13px !important;
  }
  .v-btn {
  font-weight: bold;
  color: rgba(0,0,0,.54);
  font-family: "Montserrat", sans-serif!important;
  }
  .title {
    font-size: 1.25rem !important;
      font-weight: 500 !important;
      letter-spacing: 0.0125em !important;
      line-height: 2rem;
      font-family: "Roboto" , sans-serif !important;
  }
  .v-list-item__title{
      font-weight: 500 !important;
      line-height: 1rem !important;
  }
  .body-2{
      font-size: 0.875rem !important;
      font-weight: 400;
      letter-spacing: 0.0178571429em !important;
      line-height: 1.25rem;
  }
  .list-item{
    cursor: pointer;
  }
  .v-picker{
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
</style>