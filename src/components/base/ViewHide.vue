<template>
  <section>
    <v-card :flat="true" class="card-color mr-5">
      <v-row @click="toggleCode()" class="cursor">
        <v-col cols="8">
          <div class="mt-1 ml-7">{{ title }} {{ section_type }} {{ file_type }}</div>
        </v-col>
        <v-col cols="3" />
        <v-col cols="1">
          <v-icon v-if="!showCode" size="30px" color="black">mdi-chevron-right</v-icon>
          <v-icon v-else size="30px" color="black">mdi-chevron-down</v-icon>
        </v-col>
      </v-row>
      <v-expand-transition>
        <v-row v-if="showCode" class="a-delay">
          <v-col cols="12" class="mt-5 mb-5">
            <code class="ml-7 width-90 pa-5 fs-15 box-shadow">{{ code }}</code>
            <v-btn text small icon color="maroblue">
              <v-icon v-clipboard="code" class="ml-2">mdi-content-copy</v-icon>
            </v-btn>
            <v-row v-if="showDownloadOption">
              <!-- v-for for downloads array -->
              <div :v-for="download in downloads">
                <div class="ml-7 mt-5">
                  Click to download {{ download.name }}
                  <a
                    class="text-decoration-none"
                    :href="download.link"
                  >
                    <v-icon size="25px">mdi-download</v-icon>
                  </a>
                </div>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-expand-transition>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "ViewHide",
  props: {
    title: {
      type: String,
      default: "Put the below code in "
    },
    section_type: {
      type: String,
      default: "",
    },
    file_type: {
      type: String,
      default: "Tag",
    },
    code: {
      type: String,
      default: "",
    },
    downloads: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    showDownloadOption() {
      return (
        this._props.downloads.length &&
        ["Template", "router.js", "store.js"].includes(this._props.section_type)
      );
    }
  },
  data: function() {
    return {
      showCode: false,
      download: '',
    };
  },
  methods: {
    toggleCode() {
      this.showCode = !this.showCode;
    }
  }
};
</script>
<style scoped>
.width-90 {
  width: 90%;
}
.fs-15 {
  font-size: 15px;
}
.t-delay {
  transition-duration: 0.5s;
  transition-delay: 0.2s;
}
.card-color {
  background-color: rgb(244, 244, 244);
}
.cursor {
  cursor: pointer;
}
.box-shadow {
  box-shadow: none;
}
.text-decoration-none {
  text-decoration: none;
}
</style>