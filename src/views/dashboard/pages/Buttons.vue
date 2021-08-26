<template>
  <v-container id="typography" fluid tag="section">
    <section class="mb-12 text-center mt-5">
      <h1 class="font-weight-dark mb-2 headline">
        Upcoming Road Trips - Chamba
      </h1>
    </section>
  </v-container>
</template>
<script>
import ViewHide from "../../../components/base/ViewHide";
export default {
  components: {
    ViewHide
  },
  data: () => ({
  }),
  methods: {
  }
};
</script>

<style lang="scss" scoped>
$primary-font-size: 14px !important;
.tim-note {
  bottom: 10px;
  color: #c0c1c2;
  display: block;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  left: 0;
  margin-left: 20px;
  width: 260px;
}
.v-btn {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.0892857143em;
}
.v-btn--text {
  font-weight: 600 !important;
  letter-spacing: 0.55px;
  font-size: $primary-font-size;
}
.v-checkbox label {
  color: black;
}
.line-height {
  line-height: 1.5;
}
</style>
