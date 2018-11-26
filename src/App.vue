<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
            <v-list-tile-action >
              <v-icon v-html="item.icon" @click="onItem(item)"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="item in menuItems" :key="item.title" class="hidden-sm-and-down">
        <v-btn flat :to="item.link">
          <v-icon dark>{{item.icon}}</v-icon> {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 - Fodor József Felicián</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'people', title: 'Jelenlévők', route: 'jelenlevok' },
        { icon: 'today', title: 'Programok', route: 'program' },
        { icon: 'description', title: 'Kérvények', route: 'kervenyek' },
        { icon: 'add_box', title: 'Egyéb', route: 'egyeb' },
        { icon: 'next_week', title: 'Következő ülés', route: 'kovetkezo' },
        { icon: 'send', title: 'Exportálás', route: 'exportalas' }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Herman Notesz'
    }
  },
  computed: {
    ...mapGetters(['user']),
    menuItems () {
      let menuItems = [
        {icon: 'face', title: 'Regisztráció', link: '/signup'},
        {icon: 'lock_open', title: 'Bejelentkezés', link: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'next_week', title: 'Ülés', link: '/meeting'},
          {icon: 'mail', title: 'Körlevél', link: '/mail'},
          {icon: 'add_box', title: 'Feladatok', link: '/todo'},
          {icon: 'account_circle', title: 'Felhasználó', link: '/account'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.user !== null && this.user !== undefined
    }
  },
  methods: {
    onItem: function (item) {
      this.$router.push(item.route)
    }
  },
  name: 'App'
}
</script>

