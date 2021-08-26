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
              <strong>Modal</strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                <p>Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.</p>
                <div class="mt-5">
                  <strong>Error Modal</strong>
                </div>
                <v-btn class="mt-5" dark link @click="dialog=true">
                  Click here to see Error Modal
                </v-btn>
                <v-dialog v-model="dialog" persistent max-width="480">
                  <v-card class="text-center">
                    <v-icon class="mb-4 mt-4" color="red darken-2" size="50px">mdi-alert-circle-outline</v-icon>
                    <h2>Card Declined</h2>
                    <p class="px-8">
                    Uh Oh! Something went wrong. Your card could not be added successfully. Please try again</p>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn text @click="dialog = false">Try Again</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row class="ml-5">
              <v-col cols="12">
                <ViewHide section_type="Template" :code="error_modal[0].code"></ViewHide>
                <ViewHide section_type="Script" :code="error_modal[0].script"></ViewHide>
                <ViewHide section_type="Style" :code="error_modal[0].style"></ViewHide>
              </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <!-- Delete Modal -->
    <v-row align="center" justify="center">
      <v-col cols="12">
        <base-material-card color="maroblue !important">
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong>Error Prevention Modal</strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                <p>Error Prevention Modal allows the user to confirm if they want to complete an action.</p>
                <v-btn
                class="mt-5"
                dark
                link
                @click="deletePrompt=true"
                >Click here to see Delete Modal
                </v-btn>
                <v-dialog v-model="deletePrompt" max-width="390">
                  <v-card>
                    <v-card-title
                      class="headline"
                      >Are you sure you want to delete the campaign ?
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn text @click="deletePrompt = false">NO</v-btn>
                      <v-btn text @click="deletePrompt = false">YES</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row class="ml-5">
              <v-col cols="12">
                <ViewHide section_type="Template" :code="error_modal[1].code"></ViewHide>
                <ViewHide section_type="Script" :code="error_modal[1].script"></ViewHide>
                <ViewHide section_type="Style" :code="error_modal[1].style"></ViewHide>
              </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <!-- Confirmation Modal -->
    <v-row align="center" justify="center">
      <v-col cols="12">
        <base-material-card color="maroblue !important">
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong>Confirmation Modal</strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                <p>Confirmation Modals are used to confirm with the user that their action has successfully been completed.</p>
                <v-btn
                class="mt-5"
                dark
                link
                @click="campaignSuccess=true"
                >Click here to see Confirmation Modal
                </v-btn>
                <v-row justify="center">
                  <v-dialog v-model="campaignSuccess" width="590">
                    <v-row no-gutters>
                      <v-col cols="6" />
                      <v-col cols="6" class="plane_img" justify="center" align="center"></v-col>
                      <v-col cols="12">
                        <v-card class="mx-auto" max-width="565">
                          <v-row>
                            <v-col cols="12" class="pt-5" justify="center" align="center">
                              <v-img
                              src="@/assets/Congratulations_Message.png"
                              height="204px"
                              width="240px"
                              />
                            </v-col>
                            <v-col cols="12">
                              <span>
                                <h4 class="seconday--font text-center">Congratulations!</h4>
                              </span>
                            </v-col>
                            <v-col class="text-center" cols="12">
                              <p class="text-center"
                              >Your campaign has been successfully scheduled .
                              </p>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-dialog>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="ml-5">
              <v-col cols="12">
                <ViewHide section_type="Template" :code="error_modal[2].code" :downloads="downloads"></ViewHide>
                <ViewHide section_type="Script" :code="error_modal[2].script"></ViewHide>
                <ViewHide section_type="Style" :code="error_modal[2].style"></ViewHide>
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
  // computed: {
  //   downloads() {
  //     return [{
  //       name: "Congratulations_Message.png",
  //       link: "https://storage.googleapis.com/design_system/attachements/Congratulations_Message.png"
  //     }]
  //   }
  // },
  data: () => ({
    downloads: [{
        name: "Congratulations_Message.png",
        link: "https://storage.googleapis.com/design_system/attachements/Congratulations_Message.png"
      },
      ],
    dialog: false,
    deletePrompt: false,
    campaignSuccess: false,
    error_modal: [
      {
        code:
          '<v-dialog\nv-model="dialog"\npersistent\nmax-width="480"\n>\n<v-card class="text-center">\n<v-icon\ncolor="red darken-2"\nsize="50px"\n>\nerror_outline\n</v-icon>\n<h2 >\nCard Declined\n</h2>\n<p class="px-8">\nUh Oh! Something went wrong. Your card could not be added successfully. Please try again\n</p>\n<v-card-actions>\n<v-spacer />\n<v-btn\ntext\n@click="dialog = false"\n>\nTry Again\n</v-btn>\n</v-card-actions>\n</v-card>\n</v-dialog>',
        script: "dialog: false,",
        style:
          '.v-btn {\nfont-family: "Montserrat", sans-serif !important;\nfont-weight: 700;\nfont-size:0.875rem;\nletter-spacing: .0892857143em;\n}\n.v-btn--text {\nfont-weight: 600 !important;\nletter-spacing: .55px;\nfont-size: 13px;\n}\n.v-dialog{\nbox-shadow: none !important;\n-webkit-box-shadow: none !important;\n}'
      },
      {
        code:
          '<v-dialog\nv-model="deletePrompt"\nmax-width="390"\n>\n<v-card>\n<v-card-title class="headline text-left">\nAre you sure you want to delete the campaign ?\n</v-card-title>\n<v-card-actions>\n<v-spacer />\n<v-btn\ntext\n@click="deletePrompt = false"\n>\nNO\n</v-btn>\n<v-btn\ntext\n@click="deletePrompt = false"\n>\nYES\n</v-btn>\n</v-card-actions>\n</v-card>\n</v-dialog>',
        script: "deletePrompt: false,",
        style:
          '.v-btn {\nfont-family: "Montserrat", sans-serif !important;\nfont-weight: 700;\nfont-size:0.875rem;\nletter-spacing: .0892857143em;\n}\n.v-btn--text {\nfont-weight: 600 !important;\nletter-spacing: .55px;\nfont-size: 13px;\n}\n.v-dialog{\nbox-shadow: none !important;\n-webkit-box-shadow: none !important;\n}\n.headline {\nfont-weight: 500 !important;\nline-height: 2rem !important;\nfont-family: "Roboto", sans-serif !important;\nfont-size: 24px !important;\nletter-spacing: normal !important;\n}\n.v-dialog .v-card .v-card__title {\npadding: 16px 24px 10px;\n}\n.v-card .v-card__actions {\npadding-top: 8px;\n}'
      },
      {
        code:
          '<v-dialog\nv-model="campaignSuccess"\nwidth="590"\n>\n<v-row\nno-gutters\n>\n<v-col cols="6" />\n<v-col\ncols="6"\nclass="plane_img"\njustify="center"\nalign="center"\n>\n</v-col>\n<v-col\ncols="12"\n>\n<v-card\nclass="mx-auto"\nmax-width="565"\n>\n<v-row>\n<v-col\ncols="12"\nclass="pt-5"\njustify="center"\nalign="center"\n>\n<v-img\nsrc="@/assets/Congratulations_Message.png"\nheight="204px"\nwidth="240px"\n/>\n</v-col>\n<v-col\ncols="12"\n>\n<span>\n<h4 class="seconday--font text-center">Congratulations!</h4>\n</span>\n</v-col>\n<v-col\ncols="12"\nclass="text-center"\n>\n<p class="text-center">\nYour campaign has been successfully scheduled .\n</p>\n</v-col>\n</v-row>\n</v-card>\n</v-col>\n</v-row>\n</v-dialog>',
        script: "campaignSuccess: false,",
        style:
          '.v-btn {\nfont-family: "Montserrat", sans-serif !important;\nfont-weight: 700;\nfont-size:0.875rem;\nletter-spacing: .0892857143em;\n}\n.v-btn--text {\nfont-weight: 600 !important;\nletter-spacing: .55px;\nfont-size: 13px;\n}\n.v-dialog{\nbox-shadow: none !important;\n-webkit-box-shadow: none !important;\n}\n.plane_img{\nposition: relative;\nz-index: -1;\nmargin-bottom: -52px;\npadding-left: 100px !important;\n}\n.secondary--font{\nfont-family: "Montserrat", sans-serif !important;\n}'
      }
    ]
  }),

};
</script>

<style scoped>
.line-height {
  line-height: 1.5;
}
.v-btn {
  font-family: "Montserrat", sans-serif !important;
  font-size: 0.875rem;
  letter-spacing: 0.0892857143em;
}
.v-btn--text {
  font-weight: 600 !important;
  letter-spacing: 0.55px;
  font-size: 13px;
}
.plane_img {
  position: relative;
  z-index: -1;
  margin-bottom: -52px;
  padding-left: 100px !important;
}
.v-dialog {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}
.secondary--font {
  font-family: "Montserrat", sans-serif !important;
}
.headline {
  font-weight: 500 !important;
  line-height: 2rem !important;
  font-family: "Roboto", sans-serif !important;
  font-size: 24px !important;
  letter-spacing: normal !important;
}
.v-dialog .v-card .v-card__title {
    padding: 16px 24px 10px;
}
.v-card .v-card__actions {
    padding-top: 8px;
}
</style>
