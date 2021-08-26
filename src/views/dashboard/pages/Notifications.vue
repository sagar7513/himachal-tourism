<template>
  <v-container id="typography" fluid tag="section">
    <section class="mb-12 text-center mt-5">
      <h1 class="font-weight-dark mb-2 headline">System Feedback Guide</h1>
    </section>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <base-material-card color="maroblue !important">
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong>Notification Messages</strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                Notifications provide brief messages about app processes and performance at the top of the screen. Some of these notifications can include a CTA such as undo if they would like to revert back to their previous state. We’re using the following Notification styles as mentioned below.
                <div class="mt-4">
                  <strong>Notification Message Placement:</strong>
                  <p>All notifications are placed on top of the page in the centre.</p>
                </div>
                <div class="mt-4">
                  <strong>Notification Message Style:</strong>
                  <p>Colour and icon is used to signal different type of message so the user can identify each type of message at a glance.</p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <!-- SUCCESS -->
    <v-row align="center" justify="center">
      <v-col cols="12">
        <base-material-card color="maroblue !important">
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong>Success</strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 line-height">
              <v-col cols="12">
                <v-btn dark link @click="img_snackbar = true">Open Image Snackbar</v-btn>
                <v-snackbar
                  :timeout="10000"
                  v-model="img_snackbar"
                  class="success_status"
                  color="green lighten-4"
                  top
                >
                  <v-icon>mdi-check-circle-outline</v-icon>
                  <span class="black--text ml-3">Image has been successfully added</span>
                  <v-spacer />
                  <v-icon @click="img_snackbar=false" size="20">mdi-close</v-icon>
                </v-snackbar>
                <ViewHide section_type="Template" :code="notification[0].code"></ViewHide>
                <ViewHide section_type="Script" :code="notification[0].script"></ViewHide>
                <ViewHide section_type="Style" :code="notification[0].style"></ViewHide>
              <!-- IMAGE UNDO SNACKBAR -->
                <v-btn dark link @click="img_undo_snackbar= true" class="mt-5">
                  Open Image Undo Snackbar
                </v-btn>
                <v-snackbar
                  :timeout="10000"
                  v-model="img_undo_snackbar"
                  class="success_status"
                  color="green lighten-4"
                  top
                >
                  <v-icon>mdi-check-circle-outline</v-icon>
                  <span class="black--text ml-4">Image has been successfully deleted</span>
                  <v-spacer />
                  <v-btn
                    text
                    icon
                    color="#716563"
                    class="btn-st black--text"
                    @click="img_undo_snackbar=false"
                  >
                    <strong>UNDO</strong>
                  </v-btn>
                  <v-icon @click="img_undo_snackbar=false" size="20" class="ml-5">mdi-close</v-icon>
                </v-snackbar>
                <ViewHide section_type="Template" :code="notification[1].code"></ViewHide>
                <ViewHide section_type="Script" :code="notification[1].script"></ViewHide>
                <ViewHide section_type="Style" :code="notification[1].style"></ViewHide>
              <!-- Table -->
                <v-row align="center" class="mt-4">
                  <v-col cols="3">
                    <div class="pa-8 white--text cls-maroblue">Definition</div>
                  </v-col>
                  <v-col cols="4">
                    <div class="pa-8 white--text cls-maroblue">Example</div>
                  </v-col>
                  <v-col cols="3">
                    <div class="pa-8 white--text cls-maroblue">Behaviour</div>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="3">
                    <div
                    class="py-12 px-8 div-color"
                    >A message communicating successful completion of an action initiated by the user.
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="py-9 px-4 div-color">
                      <ul>
                        <li class="mb-2">Image successfully uploaded</li>
                        <li class="mb-2">Segment refresh complete</li>
                        <li class="mb-2">List deleted successfully</li>
                        <li>Payment method successfully added</li>
                      </ul>
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <div
                    class="py-12 px-4 div-color"
                    >Message will appear and stay for 20 second duration with ”x” action to allow user to dismiss the message.</div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <!-- CRITICAL INFORMATION -->
    <v-row align="center" justify="center">
      <v-col cols="12">
        <base-material-card color="maroblue !important">
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong>Critical Information</strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 line-height">
              <v-col cols="12">
                <v-btn dark link @click="seg_snackbar= true">Open Segment Snackbar</v-btn>
                <v-snackbar :timeout="10000" v-model="seg_snackbar" class="success_status"        color="green lighten-4" top>
                  <v-icon>mdi-information-outline</v-icon>
                  <span class="black--text ml-4">
                    Segment refresh count just started. It may take some time to refresh the count.
                  </span>
                  <v-spacer />
                  <v-icon @click="seg_snackbar=false" size="20" class="ml-5">mdi-close</v-icon>
                </v-snackbar>
                <ViewHide section_type="Template" :code="notification[2].code"></ViewHide>
                <ViewHide section_type="Script" :code="notification[2].script"></ViewHide>
                <ViewHide section_type="Style" :code="notification[2].style"></ViewHide>
              <!-- Temporary Suspension Snackbar -->
                <v-btn dark link @click="susp_snackbar= true">Open Temporary Suspension Snackbar</v-btn>
                <v-snackbar
                  :timeout="10000"
                  v-model="susp_snackbar"
                  class="black--text mt-6 success_status"
                  color="green lighten-4"
                  top
                >
                  <v-icon
                  class="mr-2"
                  size="20"
                  >mdi-information-outline</v-icon>
                  {{ suspTextHead }}
                  <br />
                  {{ suspText }}
                  <v-icon
                    @click="susp_snackbar=false"
                    size="20"
                    class="ml-3"
                    >mdi-close
                  </v-icon>
                </v-snackbar>
                <ViewHide section_type="Template" :code="notification[3].code"></ViewHide>
                <ViewHide section_type="Script" :code="notification[3].script"></ViewHide>
                <ViewHide section_type="Style" :code="notification[3].style"></ViewHide>
              <!-- Table -->
                <v-row align="center" class="mt-4">
                  <v-col cols="3">
                    <div class="pa-8 white--text cls-maroblue">Definition</div>
                  </v-col>
                  <v-col cols="4">
                    <div class="pa-8 white--text cls-maroblue">Example</div>
                  </v-col>
                  <v-col cols="4">
                    <div class="pa-8 white--text cls-maroblue">Behaviour</div>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="3">
                    <div class="py-12 px-4 div-color">
                      A message providing information to the user about an action initiated by the user or the system.</div>
                  </v-col>
                  <v-col cols="4">
                    <div class="py-12 px-4 div-color">
                      <ul>
                        <li class="mb-2">Segment refresh in progress</li>
                        <li class="mb-2">Payment is being processed</li>
                        <li class="mb-2">Cleansing Rules in progress</li>
                      </ul>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="py-0 px-8 div-color">
                      <ul>
                        <li class="mb-2">Depends on the criticality of the message.</li>
                        <li class="mb-2">Non-Critical Message will appear and stay for 20 second duration with ”x” action to allow user to dismiss the message. </li>
                        <li>Critical messages will appear and stay until the user dismisses it by clicking on ”x”</li>
                      </ul>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <!-- WARNING -->
    <v-row align="center" justify="center">
      <v-col cols="12">
        <base-material-card color="maroblue !important">
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong>Warning & Error</strong>
            </div>
          </template>
          <v-card-text>
            <v-row
            align="center"
            class="ml-5 pr-12 line-height"
            >
              <v-col cols="12">
                Critical warning notifications are used for any kind of urgent/error/warning notifications that require the utmost attention of a customer. This approach can also be used by marketing when payment gets integrated to the online platform. Also is being used for JetSend email usage alerts.
              </v-col>
            </v-row>
            <v-row align="center" class="ml-5">
              <v-col cols="12">
                <v-btn dark link @click="acc_snackbar= true">Open Account Suspension Snackbar</v-btn>
                <v-snackbar
                  :timeout="10000"
                  v-model="acc_snackbar"
                  class="error_status black--text"
                  color="red lighten-4"
                  top
                >
                  <v-icon class="mr-2">mdi-alert-outline</v-icon>
                  {{ accTextHead }}
                  <br />
                  {{ accText }}
                  <v-spacer />
                  <v-icon @click="acc_snackbar=false" size="20" class="ml-5">mdi-close</v-icon>
                </v-snackbar>
                <ViewHide section_type="Template" :code="notification[4].code"></ViewHide>
                <ViewHide section_type="Script" :code="notification[4].script"></ViewHide>
                <ViewHide section_type="Style" :code="notification[4].style"></ViewHide>
              <!-- Server Error Snackbar     -->
                <v-btn dark link @click="ser_snackbar= true" class="mt-5">
                  Open Server Error Snackbar
                </v-btn>
                <v-snackbar
                :timeout="10000"
                v-model="ser_snackbar"
                class="error_status"
                color="red lighten-4"
                top
                >
                  <v-icon>mdi-alert-circle-outline</v-icon>
                  <span class="black--text ml-4">Server error. Image not uploaded</span>
                  <v-spacer />
                  <v-btn
                  text
                  icon
                  color="#716563"
                  class="btn-st black--text"
                  @click="ser_snackbar=false"
                  >
                    <strong>TRY AGAIN</strong>
                  </v-btn>
                  <v-icon @click="ser_snackbar=false" size="20" class="ml-5">mdi-close</v-icon>
                </v-snackbar>
                <ViewHide section_type="Template" :code="notification[5].code"></ViewHide>
                <ViewHide section_type="Script" :code="notification[5].script"></ViewHide>
                <ViewHide section_type="Style" :code="notification[5].style"></ViewHide>

              <!-- Table -->
                <v-row align="center" class="mt-4">
                  <v-col cols="3">
                    <div class="pa-8 white--text cls-maroblue">Definition</div>
                  </v-col>
                  <v-col cols="3">
                    <div class="pa-8 white--text cls-maroblue">Example</div>
                  </v-col>
                  <v-col cols="3">
                    <div class="pa-8 white--text cls-maroblue">Behaviour</div>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="3">
                    <div class="py-6 px-4 div-color">
                      A message that alerts the user of a condition that might cause a problem in the future.
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <div class="py-12 px-4 div-color">
                      <ul>
                        <li class="mb-2">Account suspension</li>
                      </ul>
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <div class="py-6 px-4 div-color">
                      Critical messages will appear and stay until the user dismisses it by clicking on ”x”.
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <!-- Update Notification -->
    <v-row align="center" justify="center">
      <v-col cols="12">
        <base-material-card color="maroblue !important">
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong>App Upgrade Notifications</strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
              To ensure the user has the latest version of the app, we’ve used different pattern for this message so the user can see it right away.
              </v-col>
            </v-row>
            <v-row align="center" class="ml-5">
              <v-col cols="12">
                <v-btn dark link @click="openUpdate()">Open New Update</v-btn>
                <ViewHide section_type="Template" file_type='Tag and in main Dashboard for positioning purpose' :code="notification[6].code"></ViewHide>
                <ViewHide section_type="Script" :code="notification[6].script"></ViewHide>
                <ViewHide section_type="Style" :code="notification[6].style"></ViewHide>
              </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ViewHide from '../../../components/base/ViewHide'
export default {
  components: {
    ViewHide,
  },
  data: () => ({
    img_snackbar: false,
    img_undo_snackbar: false,
    seg_snackbar: false,
    susp_snackbar: false,
    acc_snackbar: false,
    ser_snackbar: false,
    new_update: false,
    suspText:
      "On monday 11th May 2am. There will be a 5min suspension of select features",
    suspTextHead: "Planned Temporary Service Suspension",
    accTextHead: "Account Suspension Warning",
    accText:
      "Your Maropost commerce account had a payment failure. We will make two more attempts within the next few days using your selected payment method. If unsuccessful, your account will be suspended. Please contact support@maropost.com to fix the problem immediately.",
    notification: [
      {
        code:
          '<v-snackbar\n:timeout="10000"\nv-model="img_snackbar"\nclass="success_status"\ncolor="green lighten-4"\ntop\n>\n<v-icon>mdi-check-circle-outline</v-icon>\n<span class="black--text ml-3">Image has been successfully added</span>\n<v-spacer />\n<v-icon @click="img_snackbar=false" size="20">mdi-close</v-icon>\n</v-snackbar>',
        script: "img_snackbar: false",
        style:
          '.v-snack__content{\njustify-content: start !important;\nborder-width: 1px;\nborder-style: solid;\nborder-radius: 3px;\nfont-size: 14px;\nfont-family: "Montserrat", sans-serif !important;\n}\n.v-snack__content {\nborder-color: #41CE65;\n}\n.success_status .v-icon{\ncolor: #41ce65;\n}'
      },
      {
        code:
          '<v-snackbar\n:timeout="10000"\nv-model="img_undo_snackbar"\nclass="success_status"\ncolor="green lighten-4"\ntop\n>\n<v-icon>mdi-check-circle-outline</v-icon>\n<span class="black--text ml-4">Image has been successfully deleted</span>\n<v-spacer />\n<v-btn\ntext\nicon\ncolor="#716563"\nclass="btn-st black--text"\n@click="img_undo_snackbar=false"\n>\n<strong>UNDO</strong>\n</v-btn>\n<v-icon @click="img_undo_snackbar=false" size="20" class="ml-5">mdi-close</v-icon>\n</v-snackbar>',
        script: "img_undo_snackbar: false",
        style:
          '.v-snack__content{\njustify-content: start !important;\nborder-width: 1px;\nborder-style: solid;\nborder-radius: 3px;\nfont-size: 14px;\nfont-family: "Montserrat", sans-serif !important;\n}\n.v-snack__content {\nborder-color: #41CE65;\n}\n.btn-st {\nfont-family: "Montserrat", sans-serif !important;\nfont-weight: 700;\nfont-size:0.875rem;\nletter-spacing: .0892857143em;\n}\n.success_status .v-icon{\ncolor: #41ce65;\n}'
      },
      {
        code:
          '<v-snackbar\n:timeout="10000"\nv-model="seg_snackbar"\nclass="success_status"\ncolor="green lighten-4"\ntop\n>\n<v-icon>mdi-information-outline</v-icon>\n<span class="black--text ml-4">Segment refresh count just started. It may take some time to refresh the count.</span>\n<v-spacer />\n<v-icon @click="seg_snackbar=false" size="20" class="ml-5">mdi-close</v-icon>\n</v-snackbar>',
        script: "seg_snackbar: false",
        style:
          '.v-snack__content{\njustify-content: start !important;\nborder-width: 1px;\nborder-style: solid;\nborder-radius: 3px;\nfont-size: 14px;\nfont-family: "Montserrat", sans-serif !important;\n}\n.v-snack__content {\nborder-color: #41CE65;\n}\n.success_status .v-icon{\ncolor: #41ce65;\n}'
      },
      {
        code:
          '<v-snackbar\n:timeout="10000"\nv-model="susp_snackbar"\nclass="black--text mt-6 success_status"\ncolor="green lighten-4"\ntop\n>\n<v-icon size="20" class="mr-2">mdi-information-outline</v-icon>\n{{ suspTextHead }}\n<br>\n{{ suspText }}\n<v-icon @click="susp_snackbar=false" size="20" class="ml-3">mdi-close</v-icon>\n</v-snackbar>',
        script:
          'susp_snackbar: false,\nsuspTextHead: "Planned Temporary Service Suspension",\nsuspText: "On monday 11th May 2am. There will be a 5min suspension of select features"',
        style:
          '.v-snack__content{\njustify-content: start !important;\nborder-width: 1px;\nborder-style: solid;\nborder-radius: 3px;\nfont-size: 14px;\nfont-family: "Montserrat", sans-serif !important;\n}\n.v-snack__content {\nborder-color: #41CE65;\n}\n.success_status .v-icon{\ncolor: #41ce65;\n}'
      },
      {
        code:
          '<v-snackbar\n:timeout="10000"\nv-model="acc_snackbar"\nclass="error_status black--text"\ncolor="red lighten-4"\ntop\n>\n<v-icon class="mr-2">mdi-alert-outline</v-icon>\n{{ accTextHead }}\n<br>\n{{ accText }}\n<v-spacer />\n<v-icon @click="acc_snackbar=false" size="20" class="ml-5">mdi-close</v-icon>\n</v-snackbar>',
        script:
          'acc_snackbar: false,\naccTextHead: "Account Suspension Warning",\naccText: "Your Maropost commerce account had a payment failure. We will make two more attempts within the next few days using your selected payment method. If unsuccessful, your account will be suspended. Please contact support@maropost.com to fix the problem immediately."',
        style:
          '.v-snack__content{\njustify-content: start !important;\nborder-width: 1px;\nborder-style: solid;\nborder-radius: 3px;\nfont-size: 14px;\nfont-family: "Montserrat", sans-serif !important;\n}\n.error_status .v-snack__content {\nborder-color: #F39191;\n}\n.error_status .v-icon{\ncolor: #f39191;\n}'
      },
      {
        code:
          '<v-snackbar\n:timeout="10000"\nv-model="ser_snackbar"\nclass="error_status"\ncolor="red lighten-4"\ntop\n>\n<v-icon>mdi-alert-circle-outline</v-icon>\n<span class="black--text ml-4">Server error. Image not uploaded</span>\n<v-spacer />\n<v-btn\ntext\nicon\ncolor="#716563"\nclass="btn-st black--text"\n@click="ser_snackbar=false"\n>\n<strong>TRY AGAIN</strong>\n</v-btn>\n<v-icon @click="ser_snackbar=false" size="20" class="ml-5">mdi-close</v-icon>\n</v-snackbar>',
        script: "ser_snackbar: false",
        style:
          '.v-snack__content{\njustify-content: start !important;\nborder-width: 1px;\nborder-style: solid;\nborder-radius: 3px;\nfont-size: 14px;\nfont-family: "Montserrat", sans-serif !important;\n}\n.error_status .v-snack__content {\nborder-color: #F39191;\n}\n.btn-st {\nfont-family: "Montserrat", sans-serif !important;\nfont-weight: 700;\nfont-size:0.875rem;\nletter-spacing: .0892857143em;\n}\n.error_status .v-icon{\ncolor: #f39191;\n}'
      },
      {
        code:
          '<div\nstyle="position:relative"\nv-if="new_update"\n>\n<div class="elevation-4"\nid = "new-update-available">\n<div class = "d-flex flex-column pa-4">\n<h2 class = "subtitle-1 ">\nNew version of Maropost is available.\n</h2>\n<p class= "mb-7 grey--text text--darken-2 body-2">\nUpdate now to get the latest version.\n</p>\n<div class = "text-right">\n<v-btn text\nclass = "font-weight-bold mr-5 subtitle-2"\n@click="new_update=false">\nREMIND ME LATER</v-btn>\n<v-btn\noutlined\n@click="new_update=false">\nUPDATE\n</v-btn>\n</div>\n</div>\n</div>\n</div>',
        script: "new_update: false",
        style:
          '#new-update-available{\nposition: absolute;\nwidth: 130px;\nbottom: -350px;\nborder-radius: 4px;\nleft: -180%;\nborder: 1px solid #D6DDE0;\nz-index: 9999;\nbackground:white;\nborder-top: 5px solid #03B6Fc;\nanimation-name: slideInUp;\nanimation-duration: .5s;\n}\n@keyframes slideInUp {\n0%   {bottom: -20px;}\n100% {bottom: 49px;}\n}\nbody {\nfont-size: 16px;\nletter-spacing: 0.5px;\n}\n.v-btn--text {\nfont-weight: 600 !important;\nletter-spacing: 0.55px;\nfont-size:13px;\n}\n.v-btn {\nfont-weight: bold;\n}\n.seconday--font, h1, h2, h3, h4, h5, h6, .v-btn{\nfont-family: "Montserrat", sans-serif !important;\n}'
      }
    ]
  }),
  methods:{
    openUpdate() {
      this.$router.push({ path: "/new-update" });
    },
  }
};
</script>

<style lang="scss" scoped>
  .line-height {
    line-height: 1.5;
  }
  .v-snack__content {
    justify-content: start !important;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif !important;
  }

  .error_status .v-snack__content {
    border-color: #f39191;
  }
  .error_status .v-icon{
    color: #f39191;
  }
  .success_status .v-snack__content {
    border-color: #41ce65;
  }
  .success_status .v-icon{
    color: #41ce65;
  }
  .btn-st {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.0892857143em;
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

  body {
    font-size: 16px;
    letter-spacing: 0.55px;

  }
  .v-btn--text {
    font-weight: 600 !important;
    letter-spacing: 0.55px;
    font-size: 14px;
    color: #1E2533;
  }
  .v-btn {
    font-weight: bold;
    height: 36px;
  }
  .seconday--font,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .v-btn {
    font-family: "Montserrat", sans-serif !important;
  }
  .cls-maroblue {
    background-color: #03B6FC;
  }
  .div-color {
    background-color: #CDF0FE;
  }
</style>
