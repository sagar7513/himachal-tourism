<template>
  <v-container
    id="typography"
    fluid
    tag="section"
  >
    <section class="mb-12 text-center mt-5">
 <h1
 class="font-weight-dark mb-2 headline">
 Dashboards and Widgets</h1>
 </section>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <base-material-card
        color="maroblue !important"
        class="mt-0"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
            <strong> Dashboards </strong>
            </div>
          </template>

          <v-card-text>
            <v-container
              class="pa-0"
              fluid
            >
              <v-row align="center" class="ml-2"> 
                  Dashboards contain card widgets that provide important overview metrics regarding their performance (campaigns, journeys, lists etc.) Dash boards are found on the home page, report sections and campaign sections.            
              </v-row>
              <v-img
              src="@/assets/Dashboard_for_Design_System.jpg" height="70vh" contain class="mt-5" />
              <v-img
              src="@/assets/email_db.jpg" height="70vh" contain class="mt-7" />
                <v-img
              src="@/assets/G&A_Dashboard.jpg" height="70vh" contain class="mt-7" />
            </v-container>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <base-material-card
        color="maroblue !important"
        class="mt-0"
        >
        <template v-slot:heading>
            <div class="display-2 font-weight-light">
            <strong> Widgets </strong>
            </div>
          </template>
          <v-card-text>
            <v-container
              class="pa-0"
              fluid
            >
              <v-row align="center" class="ml-2"> 
        <strong> Card Widgets </strong> are customizable widgets that a user can add, remove, or move on their dashboard. There are 3 different sizes of card widgets: 4 column, 8 column, and 12 column.
              </v-row>
              <v-img
              src="@/assets/Widget.png" height="70vh" contain class="mt-5" />
            </v-container>
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


