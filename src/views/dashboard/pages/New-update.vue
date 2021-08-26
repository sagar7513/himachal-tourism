<template>
<v-container fluid tag="section">
                  <v-row align="center">
                <div class="text-center ma-6">
                  <div class="div-st">
                    <div class="elevation-4" id="new-update-available">
                      <div class="d-flex flex-column py-4 pr-4">
                        <h2 class="subtitle-1 black--text font-weight-bold">
                          New version of Maropost is available.</h2>
                        <p
                          class="mb-7 grey--text text--darken-2 body-2 ml-7 text-left"
                        >Update now to get the latest version.</p>
                        <div>
                          <v-btn
                            text
                            class="font-weight-bold subtitle-2"
                            to="/notifications"
                          >REMIND ME LATER</v-btn>
                          <v-btn outlined
                          to="/notifications"
                          >
                            UPDATE</v-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-row>
              </v-container>
</template>
<script>
export default {
}
</script>
<style scoped>
.div-st{
  position:relative; width: 130px; bottom: -350px;
}
#new-update-available {
  position: absolute;
  border-radius: 4px;
  left: -170%;
  border: 1px solid #d6dde0;
  z-index: 9999;
  background: white;
  border-top: 5px solid #03B6FC;
  animation-name: slideInUp;
  animation-duration: 0.5s;
}
@keyframes slideInUp {
  0% {
    bottom: -20px;
  }
  100% {
    bottom: 49px;
  }
}
.elevation-4 {
box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12) !important;
}
div {
display: block;
}
body {
  font-size: 16px;
  letter-spacing: 0.5px;
}
.v-btn {
  font-weight: bold;
  height: 36px;
}
.seconday--font,
.v-btn {
  font-family: "Montserrat", sans-serif !important;
}
.subtitle-1 {
    font-size: 1rem!important;
    font-weight: 600 !important;
    letter-spacing: .009375em!important;
    line-height: 1.75rem;
}

</style>