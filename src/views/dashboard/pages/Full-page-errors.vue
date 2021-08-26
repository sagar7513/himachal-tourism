<template>
  <v-container id="full-page-error" fluid tag="section">
    <section class="mb-12 text-center mt-5">
      <h1 class="font-weight-dark mb-2 headline">System Feedback Guide</h1>
    </section>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <base-material-card color="maroblue !important">
          <template v-slot:heading>
            <div class="display-2 font-weight-light ml-5">
              <strong>Full Page Errors</strong>
            </div>
          </template>
          <v-card-text>
            <v-row align="center" class="ml-5 pr-12 line-height">
              <v-col cols="12">
                A 404 error message means that a page is not found (e.g. deleted page, broken link, mistyped URL), customize your 404 error message text to include the following:
                <ul class="mt-5">
                  <li>A clear notification that the page cannot be found</li>
                  <li>Consistent header and footer from the main site (navigation especially!)</li>
                  <li>Links that may send users down an alternative path, or to the home page</li>
                  <li>A search bar to help users find something specific</li>
                </ul>
                <v-row align="start">
                  <v-col cols="2" class="mt-4">
                    <v-btn @click="clickError()" dark link>Click to see Full Page Error</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="ml-5">
              <v-col cols="12">
                <ViewHide section_type="router.js" file_type="file" :code="error_code[0].code" :downloads="downloads"></ViewHide>
                <ViewHide section_type="" title= 'Make a file named "Error404.vue" & Put the below code in' file_type="the same" :code="error_code[1].code"></ViewHide>
                 <ViewHide section_type="Script" :code="error_code[2].code"></ViewHide>
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
  components : {
      ViewHide,
  },
  data: () => ({

    downloads: [{
      name: 'error-404.png',
      link:'https://storage.googleapis.com/design_system/attachements/error-404.png',
    }],
    error_code: [
      {
        name: "err_router",
        code:
          "{\nname: 'Error Page',\npath: '/404',\ncomponent: () => import('@/views/dashboard/pages/Error404'),\n},"
      },
      {
        name: "err_code",
        code:
          '<template>\n<v-row style="min-height: calc(100vh - 64px)" >\n<v-col\nalign="center"\nalign-self="center"\njustify="center"\nheight="auto"\n>\n<v-img\nsrc="@/assets/error-404.png"\nheight="50vh"\ncontain\n/>\n<h3 class="mt-6">\nThe page you are trying to reach does not exist.\n</h3>\n<p class="subtitle-1">\nLets get you back.\n</p>\n<v-btn\nsmall\ncolor="dark"\ndark\nto="/"\n>\nBack\n</v-btn>\n</v-col>\n</v-row>\n</template>'
      },
      {
        name: "err_data",
        code:
          "methods: {\nclickError(){\nthis.$router.push({ path: '/404' })\n}\n},"
      }
    ]
  }),
  methods: {
    clickError() {
      this.$router.push({ path: "/404" });
    },
  }
};
</script>
<style scoped>
.text-decoration-none{
  text-decoration: none;
}
.line-height {
  line-height: 1.5;
}

</style>