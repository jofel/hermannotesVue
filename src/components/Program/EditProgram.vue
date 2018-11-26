<template>
  <v-dialog v-model="dialog" persistent max-width="70%">
    <v-card>
      <v-toolbar card prominent color="primary" dark>
        <v-toolbar-title class="headline grey--white">Program szerkesztése...
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>done</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
       <v-form ref="form">
          <v-container fluid grid-list-xl>
            <v-layout row wrap ustify-space-between>
              <v-flex xs6 sm6 md3 lg3>
                <v-text-field
                  v-model="program.name"
                  id="programName"
                  :rules="[v => !!v || 'Item is required']"
                  label="Program neve"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs6 sm6 md3 lg3>
                <v-select
                  v-model="program.owner"
                  :items = "kbMembers"
                  item-value = "name"
                  item-text = "name"
                  id="name"
                  :rules="[v => !!v || 'Item is required']"
                  label="Főszervező"
                  required
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container fluid grid-list-xl>
            <v-layout align-end row wrap ustify-space-between> 
              <v-flex xs12 sm12 md10 lg10 >
              <v-textarea
                v-model="program.startText"
                :counter="250"
                label="Leírás"
                rows = "1"
                auto-grow
                required
              ></v-textarea>
            </v-flex>
            <v-flex xs12 sm12 md2 lg2>
                <v-text-field 
                  v-model="program.startCost"
                  :counter="10"
                  label="Kért támogatás"
                  required
                ></v-text-field>
            </v-flex>
          </v-layout>
          </v-container>
          <v-container fluid grid-list-xl>
            <v-layout align-end row wrap ustify-space-between> 
              <v-flex xs12 sm12 md10 lg10 >
              <v-textarea
                v-model="program.progressText"
                :counter="250"
                label="Döntés"
                rows = "1"
                auto-grow
                box
                required
              ></v-textarea>
            </v-flex>
            <v-flex xs12 sm12 md2 lg2>
                <v-text-field 
                  v-model="program.progressCost"
                  :counter="10"
                  label="Kapott támogatás"
                  box
                  required
                ></v-text-field>
            </v-flex>
          </v-layout>
          </v-container>
          <v-container fluid grid-list-xl>
            <v-layout align-end row wrap ustify-space-between> 
              <v-flex xs12 sm12 md10 lg10 >
                <v-textarea
                  v-model="program.closeText"
                  :counter="250"
                  label="Beszámoló"
                  rows = "1"
                  auto-grow
                  required
                ></v-textarea>
              </v-flex>
              <v-flex xs12 sm12 md2 lg2>
                  <v-text-field 
                    v-model="program.closeCost"
                    :counter="10"
                    label="Összes költség"
                    required
                  ></v-text-field>
              </v-flex>
            </v-layout>
            </v-container>
          <!-- <v-checkbox
            v-model="checkbox"
            label="Személyi kérdés?"
            required
          ></v-checkbox> -->

          <v-layout row ustify-space-between>
            <v-flex xs-6>
              <v-btn xs12 sm12 md8 lg8 @click="updateProgram(program)"
              >
                Mentés
              </v-btn>
            </v-flex>
            <v-flex xs-6 offset-lg6>
              <v-btn xs12 sm12 md8 lg8 to="/program"
              >
                Mégsem
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  data () {
    return {
      dialog: true
    }
  },
  methods: {
    updateProgram (program) {
      this.$store.dispatch('editProgram', program)
      this.$router.replace('/program')
    }
  },
  computed: {
    ...mapGetters(['kbMembers', 'programs']),
    program () {
      return this.$store.getters.programs.find((program) => {
        if (program.id === this.id) {
          return program
        }
      })
    }
  }
  // beforeCreate: {
  //   setProgram () {
  //     console.log('before created')
  //     this.program = this.$store.getters.programs.find((program) => {
  //       if (program.id === this.id) {
  //         return program
  //       }
  //     })
  //   }
  // }
}
</script>
