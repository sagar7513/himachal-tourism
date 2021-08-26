<template>
  <v-container id="typography" fluid tag="section">
    <section class="mb-12 text-center mt-5">
      <h1 class="font-weight-dark mb-2 headline">
        Upcoming Treks - Triund
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
  })
};
</script>

<style lang="scss" scoped>
  .line-height {
    line-height: 1.5;
  }
  .outlinedBorder {
    border-width: 2px !important;
    cursor: pointer;
  }
  .outlinedBorder:hover {
    border-color: #03b6fc !important;
  }
  .outlinedBorder:hover .campaign-title {
    color: #006baf !important;
  }
  .m-20 {
    margin-top: 20px;
  }
  .text-decoration-none {
    text-decoration: none;
  }
  .m1 {
    transform: scale(1.2);
  }
  .c2 {
    transform: scale(1.3);
  }
</style>