/* eslint-disable */
import { mapGetters } from 'vuex';

<template>
  <v-card flat>
    <v-toolbar color="primary" dark flat>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <h2>Programok</h2>

      <v-btn color="teal lighten-1" large dark absolute right fab>
        <v-icon v-on:click="todo()">done</v-icon>
      </v-btn>
    </v-toolbar>

    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <ProgramsContainer column="1"></ProgramsContainer>
      </v-flex>
      <v-flex xs12 sm12 md4>
        <ProgramsContainer column="2"></ProgramsContainer>
      </v-flex>
      <v-flex xs12 sm12 md4>
        <ProgramsContainer column="3"></ProgramsContainer>
      </v-flex>
    </v-layout>

    <v-btn color="teal" large dark fixed bottom right fab to="/program/new">
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
import ProgramsContainer from './ProgramsContainer.vue'

export default {
  data () {
    return {
      activeDialog: 0,
      dialog: false,
      fab: true,
      currentStep: 0,
      transition: 'slide-y-reverse-transition'
    }
  },
  components: {
    ProgramsContainer
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
    onEdit (id) {
      this.$router.push('program/' + id)
    },
    onDelete (id) {
      const r = confirm('Biztosan törli a kiválasztott elmeet?')
      if (r === true) {
        this.$store.dispatch('deleteProgram', id)
      }
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
