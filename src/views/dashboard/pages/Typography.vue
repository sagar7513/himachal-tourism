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
        Upcoming Treks - Indrahar Pass
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
    data: () => ({
    }),
  }
</script>

<style lang="scss" scoped>
  .line-height {
    line-height: 1.5;
  }
    .subtitle-1 {
    font-size: 16px !important;
    font-weight: 400;
    letter-spacing: .15 !important;
    // line-height: 1.75rem;
    font-family:Roboto,sans-serif!important;
}
    .subtitle-3 {
    font-size: 14px !important;
    font-weight: 400;
    letter-spacing: .10 !important;
    // line-height: 1.375rem;
    font-family:Roboto,sans-serif!important;
}
    .b1 {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 700;
    font-size:0.875rem;
    letter-spacing: .0892857143em;
    }
    .caption {
    font-size: 12px !important;
    font-weight: 400 !important;
    letter-spacing: .4px;
    font-family: Roboto,sans-serif!important;
    }
    .overline {
    font-size: 12px !important;
    font-weight: 400;
    letter-spacing: .2 !important;
    // line-height: 1rem;
    // text-transform: uppercase;
    font-family: Montserrat,sans-serif !important;
    }
h2 h3 h4 h5 h6 {
    font-weight: 600 !important;
    font-size: 34px !important;
    font-family: Montserrat,sans-serif !important;
    letter-spacing: .0073529412em !important;
  }
  body{
    font-weight: 400 !important;
    font-size: 16px !important;
    font-family: Roboto,sans-serif !important;
    letter-spacing: 0.55px !important;
  }
   hr{
       color: #F0F0F0;
   }
  .q1{
    width: 90%;
  }
  </style>