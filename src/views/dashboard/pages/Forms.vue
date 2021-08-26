<template>
    <v-container>
      <section class="mb-12 text-center mt-5">
        <h1
          class="font-weight-dark mb-2 headline"
        >
          Upcoming Road Trips - Kangra
        </h1>
      </section>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  export default {
    mixins: [validationMixin],

    data: () => ({
    }),
    validations: {
  },
  methods: {
      //
  }
}
</script>

<style lang="scss" scoped>
.secondary--font, h2, .v-btn {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px !important;
}
.display-1 {
    font-size: 2.125rem !important;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;

}
 .subtitle-1 {
    font-size: 1rem !important;
    font-weight: 400 !important;
    letter-spacing: 0.009375em !important;
    line-height: 1.75rem;
 }
 .v-btn {
   font-weight: bold;
   height: 36px !important;
   min-width: 64px !important;
   font-size: 0.85rem !important;
   letter-spacing: 0.0892857143em !important;
   border-radius: 4px !important;
 }
 .line-height {
   line-height: 1.5 !important;
 }
 .caption {
    font-size: 0.75rem !important;
    letter-spacing: 0.5px !important;
    line-height: 1.25rem !important;
    font-family: "Roboto", sans-serif !important;
 }
 .font-weight-regular {
    font-weight: 400 !important;
    font-size: 12px !important;
 }
 .v-alert {
    display: block;
    font-size: 16px !important;
    margin-bottom: 10px;
    padding: 10px;
 }
 .bck-color {
   background-color: #fafafa;
 }
 .py-0 {
   padding-top: 0px !important;
   padding-bottom: 0px !important;
   margin-top: 0px !important;
   margin-bottom: 0px !important;
 }
</style>
