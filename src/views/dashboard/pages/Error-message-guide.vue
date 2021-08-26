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
              <strong> Error Messages </strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                <div>
                Even better than good error messages is a careful design which prevents a problem from occurring in the first place. Try to eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.
                </div>
                <div class="mt-4">Use these guidelines to ensure Maropost error messages follow user experiences best practices.
                </div>
                <div class="mt-5">
                  <h3>Types of errors that may occur:</h3>
                  <ol>
                    <li>The application does not understand user’s input.</li>
                    <li>The application fails to complete an expected action</li>
                    <li> The user may not be aware of the app’s process</li>
                  </ol>
                </div>
                <div class="mt-5">
                  <h3>User-friendly error messages need to clearly define what, why and how:</h3>
                  <ul>
                    <li>What the problem was.</li>
                    <li>Why it happened.</li>
                    <li>How to solve for it.</li>
                  </ul>
                </div>
                <div class="mt-5">
                  <h3>Messaging:</h3>
                  <ul>
                    <li>Do not blame the user</li>
                    <li>Error message copy is customized to the actual error that occurred, be very specific</li>
                    <li>Error recovery instruction are included</li>
                    <li>Embrace humour, be friendly and understanding</li>
                    <li>Do not use technical terms or jargons.</li>
                  </ul>
                </div>
              </v-col>
            </v-row>
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
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong> Types of error messages </strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                <h3>Inline error message</h3>
                <ul>
                  <li class="my-5">
                    <h4>Empty text field error</h4>
                  </li>
                  Label is highlighted in red along with the assistive text advising the user what is required to get out of the error state.
                  <v-text-field
                  class="width-50 mt-5"
                  outlined
                  v-model="name"
                  :error-messages="campaignNameErrors"
                  label="Campaign Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                  >
                  </v-text-field>
                </ul>
              </v-col>
            </v-row>
            <v-row align="center" class="ml-5">
              <v-col cols="12">
                <ViewHide section_type="Template" :code="error_code[0].code"></ViewHide>
                <ViewHide section_type="Script" :code="error_code[2].code"></ViewHide>
                <ViewHide section_type="Style" :code="error_code[4].code"></ViewHide>
              </v-col>
            </v-row>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                <ul>
                  <li class="my-5">
                    <h4>Filled text field error </h4>
                  </li>
                  Label is highlighted in red along with the assistive text advising the user what is required to get out of the error state.
                  <v-text-field
                  class="width-50 mt-5"
                  ref="email"
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  outlined
                  label="Contact Email Address"
                  type="text"
                  />
                </ul>
              </v-col>
            </v-row>
            <v-row align="center" class="ml-5">
              <v-col cols="12">
                <ViewHide section_type="Template" :code="error_code[1].code"></ViewHide>
                <ViewHide section_type="Script" :code="error_code[3].code"></ViewHide>
                <ViewHide section_type="Style" :code="error_code[4].code"></ViewHide>
              </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import ViewHide from '../../../components/base/ViewHide'
  export default {
    mixins: [validationMixin],
    components: {
      ViewHide,
    },
    data: () => ({
      error_code: [
        {
          name: 'name_error_html',
          code: '<v-text-field\nclass="width-50 mt-5"\noutlined\nv-model="name"\n:error-messages="campaignNameErrors"\nlabel="Campaign Name"\nrequired\n@input="$v.name.$touch()"\n@blur="$v.name.$touch()"\n>\n</v-text-field>',
        },
        {
          name1: 'email_error',
          code: '<v-text-field\nclass="width-50 mt-5"\nref="email"\nv-model="email"\n:rules="[rules.required, rules.email]"\noutlined\nlabel="Contact Email Address"\ntype="text"\n/>',
        },
        {
          name1: 'name_error_script',
          code: 'data: () => ({\nname: "",\nerror: "",\n}),\nvalidations: {\nname: { required },\n},\n   computed: {\ncampaignNameErrors () {\n const errors = []\nif (!this.$v.name.$dirty) return errors\n!this.$v.name.required && errors.push("Campaign Name is required.")\nreturn errors\n},\n}',
        },
        {
          name1: 'email_error_script',
          code: 'data: () => ({\nemail: "",\nrules: {\nrequired: value => !!value || "Required.",\nemail: value => {\nconst pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;\nreturn pattern.test(value) || "Invalid email.";\n}\n}',
        },
        {
          name1:'css',
          code: '.width-50 {\nwidth:50%;\n}',

        }
      ],
      name: "",
      error: "",
      email: "",
      rules: {
        required: value => !!value || "Required.",
        email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid email.";
        }
      }
    }),
    validations: {
    name: { required },
    },
    computed: {
      campaignNameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Campaign Name is required.')
      return errors
      },
    }
  }
</script>

<style lang="scss" scoped>
.line-height {
  line-height: 1.5;
}
  .width-50 {
  width:50%;
  }
  .n2 {
    width:95%;
  }
</style>
