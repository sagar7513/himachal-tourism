<template>
<v-dialog width="0%" transition="none" v-model="side_drawer">
    <aside class="v-navigation-drawer1" v-if="side_drawer">
  <div>
  <div class="contact-info-wrapper">
    <v-list
      class="pt-0"
      two-line
    >
      <div class="fixed-header ml-2 mt-3 ">
        <v-row class="px-5 ">
          <v-col cols="10">
            <h2>Edit Contact Fields</h2>
          </v-col>
          <v-col cols="2" class="d-flex justify-end pr-0">
            <v-btn
              class="text-right"
              icon
              @click.stop="$store.commit('SET_SIDE_DRAWER', !side_drawer)"
            >
              <v-icon medium>
                mdi-close
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="px-5 ">
          <v-col cols="12" class="subtitle-2 pt-0 font-weight-regular text--black" style="opacity:0.6">
            If you rearrange the order of contact fields, the new display order is applied to all the contacts.
          </v-col>
        </v-row>
        <v-row class="px-5 ">
          <v-col class="mb-2" cols="11"> 
            <v-btn
              class="btn1"
              outlined
              @click.stop="$store.commit('SET_SIDE_DRAWER', !side_drawer)"
            >
              SAVE
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <v-tabs
        color="#03B6FC"
        height="30px"
        class="ml-2 mr-2 info-drawer"
      >
        <v-tab
        class="v-tab-slider"
        >
          <span
            class="ml-1 body-2 font-weight-regular"
          >
            Default fields
          </span>
        </v-tab>
        <v-tab class="v-tab-slider">
          <span
            class="body-2 font-weight-regular"
          >
            Custom fields
          </span>
        </v-tab>
        <v-tab-item>
          <v-row class= "ml-8 mt-10 mr-10">
            <v-col>
              <v-text-field
                id="first_name"
                label="first_name"
                outlined
                required
                v-model="first_name"
                color="#AAA6A6"
              />
          </v-col>
          </v-row>
          <v-row class= "ml-8 mr-10">
            <v-col>
              <v-text-field
                id="last_name"
                label="last_name"
                outlined
                required
                v-model="last_name"
                color="#AAA6A6"
              />
          </v-col>
          </v-row>
          <v-row class= "ml-8 mr-10">
            <v-col>
          <v-text-field
          id="email"
          v-model="email"
          outlined
          label="email"
          type="text"
          />
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class= "ml-8 mr-10 mt-10">
            <v-col>
              <v-text-field
                id="custom_field_1"
                label="custom field 1"
                outlined
                required
                v-model="custom_field_1"
                color="#AAA6A6"
              />
          </v-col>
          </v-row>
          <v-row class= "ml-8 mr-10">
            <v-col>
              <v-text-field
                id="custom_field_2"
                label="custom field 2"
                outlined
                required
                v-model="custom_field_2"
                color="#AAA6A6"
              />
          </v-col>
          </v-row>
          <v-row class= "ml-8 mr-10">
            <v-col>
              <v-text-field
                id="custom_field_3"
                label="custom field 3"
                outlined
                required
                v-model="custom_field_3"
                color="#AAA6A6"
              />
          </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-list>
  </div>
  </div>
</aside>
</v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import moment from 'moment'
  export default {
    name: "DashboardCoreSideDrawer",
    components: {
    },
    data () {
      return {
        first_name: '',
        last_name: '',
        email: '',
        custom_field_1: '',
        custom_field_2: '',
        custom_field_3: '',
      }
    },
    computed: {
    ...mapState(["barColor"]),
    side_drawer: {
      get() {
        return this.$store.state.side_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDE_DRAWER", val);
      }
    },
  },
}
</script>
<style lang = "scss">
.theme-blue>input{
    height: 50px;
    width: 100%;
    padding: 5px 10px;
}
.contact-info-wrapper .v-tab{
  color: #424242 !important;
  &--active{
    color:#03B6FC!important;
  }
}
.v-navigation-drawer1 {
  border-right: 3px solid #FFFFFF !important; 
  width: 500px !important;
  background-color: #FFFFFF;
  position: fixed;
  left: auto !important;
	right: 0 !important;
  height: 100%;
	top: 0px;
	transform: translateX(0%);
  height: calc(100% - 64px) !important;
	top: 64px !important;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}
.v-navigation-drawer-content1 {
  height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
  display: block;
}
.btn1 {
  font-weight: bold;
  font-family: "Montserrat", sans-serif !important;
  background-color: transparent;
  box-shadow: none !important;
  border-radius: 4px;
  letter-spacing: 0.0892857143em !important;
  text-transform: uppercase;
  height: 36px !important;
  width: 64px !important;
}
.font-weight-regular {
  font-weight: 600 !important;
}
.body-2 {
  font-size: 0.875rem !important;
	letter-spacing: 0.0178571429em !important;
	line-height: 1.25rem !important;
}
</style>