/* eslint-disable */
import { mapGetters } from 'vuex';

<template>
  <v-card flat>
    <v-toolbar
      color="primary"
      dark
      extended
      flat
    >
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

      <h2> 
        Programok
      </h2> 

      <v-btn
        color="teal lighten-1"
        large
        dark
        bottom
        right
        fab
        absolute
        
      ><v-icon v-on:click="todo()">done</v-icon></v-btn>
    </v-toolbar>

    <v-layout row v-for="(program, index) in programs" :key=program.id>
      <v-flex xs8 offset-xs2>
        <router-view></router-view>
        <v-card v-if="index != 0" :class="[{'card--flex-toolbar' : index === 1},{'mb-5' : true}]">
          <v-toolbar color="grey lighten-3" card prominent>
            <v-progress-circular
              :rotate="-90"
              :size="60"
              :width="5"
              :value="program.procent"
              color="primary"
            >
              {{ program.procent }}
            </v-progress-circular>
            <v-toolbar-title class="body-2 grey_lighten-1--text ">{{ program.name }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-btn icon>
              <v-icon>done</v-icon>
            </v-btn> -->
             <v-speed-dial
            v-model="fab[index]"
            bottom
            right
            direction = "left"
            open-on-hover
            transition ="slide-x-reverse-transition"
            absolute
            fab
          >
            <v-btn
              slot="activator"
              v-model="fab[index]"
              color="blue darken-2"
              dark
              fab
            >
              <v-icon>settings</v-icon>
              <v-icon>close</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="blue"
              @click="onEdit(program)"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="teal"
            >
              <v-icon>add</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="red"
            >
              <v-icon>delete</v-icon>
            </v-btn>
          </v-speed-dial>
          </v-toolbar>
          <v-divider></v-divider>                               
          <v-card-text>
            <h2> {{ program.id }}</h2>
          </v-card-text>
            <!-- <v-btn
              color="pink"
              small
              dark
              absolute
              bottom
              right
              fab
              to="/program/new"
            >
              <v-icon>add</v-icon>
            </v-btn> -->

            <!-- <v-btn
              color="blue"
              dark
              absolute
              bottom
              right=""
              fab
              @click="onEdit(program)"
            >
              <v-icon>edit</v-icon>
            </v-btn> -->
         

        </v-card>
      </v-flex>
    </v-layout>
    
    <v-btn
      color="pink"
      large
      dark
      fixed
      bottom
      right=""
      fab
      to="/program/new"
    >
      <v-icon>add</v-icon>
    </v-btn>

  </v-card>
</template>

<style>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>


<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      activeDialog: 0,
      dialog: false,
      fab: false
    }
  },
  methods: {
    todo () {
      alert('TODO...')
    },
    onDetails (index) {
      this.activeDialog = index
      this.dialog = true
    },
    onPlus () {
      this.activeDialog = 0
      this.dialog = true
    },
    onEdit (program) {
      this.$router.push('program/' + program.id)
    },
    addNewProgram (program) {
      this.$store.commit('addNewProgram', program)
      this.dialog = false
    }
  },
  computed: {
    ...mapGetters(['kbMembers', 'programs'])
  }
}
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>
