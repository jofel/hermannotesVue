<template>
  <v-container>
    <v-layout row v-for="(program, index) in programs" :key="program.id">
      <v-flex xs-12 v-if="program.procent <= 30 && column === '1' 
          || program.procent > 30 && program.procent <= 60 && column === '2' 
          || program.procent > 60 && column === '3' ">
        <v-card
          class="mb-5"
          
        >
          <v-toolbar color="grey lighten-3" card prominent>
            <v-progress-circular
              :rotate="-90"
              :size="60"
              :width="15"
              :value="program.procent"
              :color="program.procent <= 30 ? startColor : ( program.procent > 60 ? closeColor : progressColor)"
            >{{ program.procent }}</v-progress-circular>
            <v-toolbar-title class="body-2 grey_lighten-1--text">{{ program.name }} {{index}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-speed-dial
              v-model="program.menu"
              bottom
              right
              direction="left"
              open-on-hover
              transition="slide-x-reverse-transition"
              absolute
              fab
            >
              <v-btn
                slot="activator"
                v-model="program.menu"
                :color="program.procent <= 30 ? startColor : ( program.procent > 60 ? closeColor : progressColor)"
                dark
                fab
              >
                <v-icon>settings</v-icon>
                <v-icon>close</v-icon>
              </v-btn>
              <v-btn fab dark small color="blue" @click="onEdit(program.id)">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn fab dark small color="blue-grey">
                <v-icon>remove_red_eye</v-icon>
              </v-btn>
              <v-btn fab dark small color="red" @click="onDelete(program.id)">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-speed-dial>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text>{{ program.startText }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      x: 0,
      startColor: 'green',
      progressColor: 'orange',
      closeColor: 'red'
    }
  },
  name: 'ProgramsContainer',
  props: ['column'],
  computed: {
    ...mapGetters(['programs'])
  },
  methods: {
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
    }
  }
}
</script>
