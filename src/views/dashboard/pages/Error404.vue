<template>
  <v-row style="min-height: calc(100vh - 64px)">
    <v-col align="center" align-self="center" justify="center" height="auto">
      <v-img src="@/assets/error-404.png" height="50vh" contain />
      <h3 class="mt-6">The page you are trying to reach doesn't exist.</h3>
      <p class="subtitle-1">Let's get you back.</p>
      <v-btn small color="dark" dark to="/full-page-errors">Back</v-btn>
    </v-col>
  </v-row>
</template>
 
<script>
export default {};
</script>