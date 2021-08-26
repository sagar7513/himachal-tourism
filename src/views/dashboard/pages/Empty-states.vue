<template>
  <v-container
  id="typography"
  fluid
  tag="section"
  >
    <section class="mb-12 text-center mt-5">
 <h1
 class="font-weight-dark mb-2 headline">
 System Feedback Guide</h1>
 </section>
    <v-row
    align="center"
    justify="center"
    >
      <v-col cols="12">
        <base-material-card
        color="maroblue !important"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong> Empty States </strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                Should always prompt a user to complete a task unless no action is required to populate the page.
                <ul class="mt-2">
                  <li class="mb-2">Include main navigation and footer</li>
                  <li class="mb-2">CTA button and instructions if applicable</li>
                  <li>Incorporate illustration if possible</li>
                </ul>
              </v-col>
            </v-row>
            <v-img
              src="@/assets/Empty State for Search Function Copy.jpg" height="70vh" contain class="mt-5" />
            <v-img
              src="@/assets/Campaigns Empty.jpg" height="70vh" contain class="mt-7" />
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>

<style scoped>
.line-height {
  line-height: 1.5;
}
</style>


