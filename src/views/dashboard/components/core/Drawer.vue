<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    :mini-variant="
      $vuetify.breakpoint.mdAndUp && $store.state.drawer
    "
    :mini-variant-width="60"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :absolute="$vuetify.breakpoint.smAndDown"
    :temporary="$vuetify.breakpoint.smAndDown"
    hide-overlay
    class="background-nav vertical-stretch seconday--font left-menu"
    width="260"
    height="100%"
    style="overflow:hidden"
    :class="$store.state.drawer? 'min-drawer' : 'open-navigation'"
    :right="$vuetify.rtl"
    mobile-break-point="960"
    app
    touchless
    color="#1e2533"
  >
    <v-list
      dense
      class="float-left pa-0"
      :width="$store.state.drawer ? '' : '100%'"
    >
      <div
        v-for="(item, index) in menu_items"
        :key="index"
      >
        <template v-if="item.subitems">
          <v-list-group
            :id="item.id"
            :key="item.title"
            v-model="item.active"
            class="white--text"
            :class="highlight_tab[index] ? 'highlight_group': ''"
            no-action
            color
            @click="openSubItems()"
          >
            <template v-slot:activator>
              <v-list-item-icon class="mr-3 my-4">
                <v-icon
                  id="menuIcon"
                  class="white--text"
                >
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="body-2 text-uppercase font-weight-bold"
                >
                  <span class="secondary--font"> {{ item.title }} </span>
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <template
              v-for="subItem in item.subitems"
            >
              <v-list-item
                :key="subItem.title"
                :to="subItem.path"
                exact
                class="pl-12"
                :class="subItem.path === $route.path ? 'v-list-item--active highlight' : ''"
              >
                <v-list-item-content>
                  <v-list-item-title
                    class="white--text pl-2 secondary--font"
                    v-text="subItem.title"
                  />
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
        </template>

        <template v-if="!item.subitems">
          <v-list-item
            :key="item.title"
            v-model="item.active"
            :class="
              (highlight_tab[index] ? 'highlight' : '') +
                ' ' +
                (item.path === $route.path ? 'v-list-item--active' : '')
            "
            link
            :to="item.path"
            exact
            :href="item.href"
          >
            <v-list-item-icon
              v-if="item.newBadge && $store.state.drawer"
              class="mr-3 my-4"
            >
              <v-badge
                overlap
                color="green"
                class="small-badge d-none d-md-flex"
              >
                <template v-slot:badge>
                  <span
                    class="d-none d-md-flex"
                  />
                </template>
                <v-icon
                  align="center"
                >
                  {{ item.icon }}
                </v-icon>
              </v-badge>
              <v-icon
                class="d-md-none"
                align="center"
              >
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-icon
              v-else
              class="mr-3 my-4"
            >
              <v-icon
                id="menuIcon"
                class="white--text"
              >
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="body-2 font-weight-bold text-uppercase">
                <span class="secondary--font"> {{ item.title }} </span>
                <v-chip
                  v-if="item.newBadge"
                  class="ml-6 green white--text text-capitalize px-1 greenchip"
                  label
                  small
                >
                  New
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </div>
    </v-list>
    <template v-slot:append v-if="!$store.state.drawer">
      <v-list
        dense
        class="float-left mb-10 pb-10 px-3"
      >
        <v-list-item-group color="primary">
              <v-list-item-title
                class="body-2 font-weight-bold">
               <div><span class="secondary--font">Version : {{ appVersion }}</span></div>
               <div>Updated On: {{ updatedAt }}</div>
              </v-list-item-title>
        </v-list-item-group>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
<script>
// Utilities
  import { mapState } from 'vuex'
  import config from '../../../../../config.js'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: String,
        default: '',
      },
    },

    created() {
      this.$store.state.mobileView = window.innerWidth <= 960;
    },

    data: () => ({
      drawer_val: null,
      highlight_tab: [],
      hover: false,
      subitemsList: null,
      appVersion: config.APP.version,
      updatedAt: config.APP.updatedAt,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Upcoming Treks',
          id: 'upcoming-treks',
          subitems: [
            {
              title: 'Bir Billing',
              path: '/upcoming-treks/bir-billing',
            },
            {
              title: 'Bhrigu Lake',
              path: '/upcoming-treks/bhrigu-lake',
            },
            {
              title: 'Indrahar Pass',
              path: '/upcoming-treks/indrahar-pass',
            },
            {
              title: 'Prashar Lake',
              path: '/upcoming-treks/prashar-lake',
            },
            {
              title: 'Triund',
              path: '/upcoming-treks/triund',
            },
          ],
        },
        {
          title: 'Upcoming Road Trips',
          icon: 'mdi-table-large',
          id: 'upcoming-road-trips',
          subitems: [
            {
              title: 'Chamba',
              path: '/upcoming-road-trips/chamba',
            },
            {
              title: 'Kangra',
              path: '/upcoming-road-trips/kangra',
            },
            {
              title: 'Kinnaur',
              path: '/upcoming-road-trips/kinnaur',
            },
            {
              title: 'Kullu',
              path: '/upcoming-road-trips/kullu',
            },
            {
              title: 'Mandi',
              path: '/upcoming-road-trips/mandi',
            }
          ],
        },
        {
          title: 'Plan Your Trip',
          icon: 'mdi-clipboard-check',
          id: 'plan_your_trip',
          path: '/plan-your-trip',
        },
      ],
    }),
    computed: {
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
      menu_items () {
        const a = this.items.map((item) => {
          if (item.subitems) {
            item.subitems = item.subitems.map((subitem) => {
              return subitem
            })
          }
          return item
        })
        return a
      },
    },
    watch: {
      $route (path, from) {
        this.checkIsActive(path)
      },
    },
    mounted () {
      this.checkIsActive(this.$route)
      this.collapseItems()
    },
    methods: {
      openSubItems () {
        if (this.$store.state.drawer === true && !this.$store.state.mobileView) {
          this.$store.commit('SET_DRAWER', false)
        }
      },
      checkIsActive (to) {
        this.items.forEach((ele, index) => {
          if (ele.path) {
            if (ele.path === to.path) {
              this.highlight(index, true)
            } else if (to.name === "Dashboard") {
              this.highlight(index, false)
            }
          } else {
            ele.subitems.forEach(subele => {
              if (subele.path === to.path) {
                this.highlight(index, true)
              }
            })
          }
        })
      },
      highlight(index, highlight) {
        this.highlight_tab = []
        this.highlight_tab[index] = highlight
      },
      collapseItems () {
        this.items.forEach(item => {
          if (item.active) {
            _.delay(function () { item.active = false }, 300)
            return false
          }
        })
      },
    },
  }
</script>
<style lang="scss">
  $green-color: #41ce65 !important;
  $left-menu-background: #1e2533 !important;
  $primary-blue-color: #03b6fc;
  $menu-active-color: #464c56;
  $menu-active-icon: #fff !important;

  @mixin box-shadow {
    box-shadow: 5px 0px 0px $primary-blue-color inset;
    background-color: #4f555b;
    color: $menu-active-icon;
  }
  @mixin hover-only {
    @media not all and (pointer: coarse) {
      &:hover {
        @content;
      }
    }
  }
  .highlight_group {
    background: #2e3543;
  }
  .secondary--font {
    font-size: 1em;
  }
  #mySidenav {
    .highlight {
      @include box-shadow;
      .v-list-item__content,
      .v-icon {
        color: $menu-active-icon;
      }
      color: $menu-active-icon;
    }
    .open-navigation,
    .v-navigation-drawer--is-mobile {
      .v-list-group {
        &__header {
          @include hover-only() {
            background: #2e3543;
          }
        }
        a.v-list-item {
          min-height: 40px !important;
          text-transform: uppercase;
          &:hover,
          &--active {
            background-color: #2e3543;
            .v-list-item__content .v-list-item__title {
              font-weight: bold;
            }
          }
          &--active {
            box-shadow: 5px 0px 0px $primary-blue-color inset;
          }
        }
      }
    }

    .v-list-item--link:before {
      background-color: transparent;
    }

    .background-nav {
      background-color: $left-menu-background;
    }
    .background-nav .v-list {
      background-color: inherit !important;
    }
    .v-list-item,
    .v-icon {
      color: #aaacb1 !important;
    }
    .v-list-item {
      @include hover-only() {
        background: #4f555b;
      }
    }
    .green {
      background-color: $green-color;
    }
    .greenchip {
      height: 18px;
      font-size: 11px;
    }
    .v-badge--overlap .v-badge__badge {
      top: -12px !important;
      left: 15px !important;
      bottom: auto !important;
    }
    .v-list-group__header > .v-list-group__header__append-icon .v-icon {
      transition: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
    }
    .v-list-group--active
      > .v-list-group__header
      > .v-list-group__header__append-icon
      .v-icon {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    .v-list-item__title,
    .v-list-item__subtitle {
      white-space: normal;
    }
    .v-navigation-drawer--is-mobile .v-list {
      width: 100% !important;
    }
    .v-list-item__title {
      font-size: 14px !important;
      //font-family: Montserrat,sans-serif!important;
    }
    .v-list-item__content {
      font-size: 14px !important;
      //font-family: Montserrat,sans-serif!important;
    }
    .v-list-group__items .v-list-item {
      margin-bottom: 0 !important;
    }
    .v-list--dense .v-list-item .v-list-item__title {
      line-height: 1.5rem;
    }
  }

</style>
