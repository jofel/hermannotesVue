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
                <v-select
                  v-model="programs[id].owner"
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
                v-model="programs[id].startText"
                :counter="250"
                label="Leírás"
                rows = "1"
                auto-grow
                required
              ></v-textarea>
            </v-flex>
            <v-flex xs12 sm12 md2 lg2>
                <v-text-field 
                  v-model="programs[id].startCost"
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
                v-model="programs[id].progressText"
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
                  v-model="programs[id].progressCost"
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
                  v-model="programs[id].closeText"
                  :counter="250"
                  label="Beszámoló"
                  rows = "1"
                  auto-grow
                  required
                ></v-textarea>
              </v-flex>
              <v-flex xs12 sm12 md2 lg2>
                  <v-text-field 
                    v-model="programs[id].closeCost"
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
  data () {
    return {
      dialog: true,
      id: this.$route.params.id,
      program: {
        // id: this.programs[this.id].id,
        // owner: this.programs[this.$route.params.id].owner,
        // name: this.programs[this.$route.params.id].name,
        // date: this.programs[this.$route.params.id].date,
        // id: this.id,
        owner: '',
        name: '',
        date: '',
        procent: 0,
        startText: '',
        startCost: 0,
        progressText: 'A bizottság a rendezvényt egyhangúan támogatja.',
        progressCost: 0,
        closeText: 'A rendezvényen X fő jelent meg. A költségvetést csatoltuk.',
        closeCost: 0
      }
    }
  },
  methods: {
    updateProgram (program) {
      this.$store.commit('updateProgram', this.programs[this.id])
      this.$router.replace('/program')
    }
  },
  computed: {
    ...mapGetters(['kbMembers', 'programs'])
  }
}
</script>
