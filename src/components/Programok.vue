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
        dark
        absolute
        bottom
        right=""
        fab
      ><v-icon>done</v-icon></v-btn>
    </v-toolbar>

    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar mb-5">
          <v-toolbar card prominent>
            <v-progress-circular
      :rotate="-90"
      :size="60"
      :width="5"
      :value="valueDeterminate"
      color="primary"
    >
      {{ valueDeterminate }}
    </v-progress-circular>

            <v-toolbar-title class="body-2 grey--text">Halloween-i Teaház
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>done</v-icon>
            </v-btn>

          </v-toolbar>

          <v-divider></v-divider>
            
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-select
                v-model="select"
                :items = "kbMembers"
                item-value = "name"
                item-text = "name"
                id="name"
                :rules="[v => !!v || 'Item is required']"
                :item-avatar="kbMembers.img"
                label="Főszervező"
                required
              ></v-select>
              <v-layout align-end row wrap>
                <v-flex xs12 sm12 md8 lg8 >
                  <v-textarea
                    v-model="startText"
                    :rules="nameRules"
                    :counter="250"
                    label="Leírás"
                    rows = "2"
                    auto-grow
                    required
                  ></v-textarea>
                </v-flex>
                <v-flex xs12 sm12 md4 lg4>
                  <v-text-field align-start
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    label="Támogatás"
                    required
                  ></v-text-field>
                  <v-layout >
                    <v-text-field 
                      v-model="name"
                      :rules="nameRules"
                      :counter="10"
                      label="Támogatás"
                      required
                    ></v-text-field>
                  </v-layout>
                </v-flex>
              </v-layout>
              <v-textarea
                v-model="progressText"
                :rules="emailRules"
                label="Döntés"
                rows = "2"
                auto-grow
                required
              ></v-textarea>
              <v-textarea
                placeholder=""
                v-model="closeText"
                :rules="emailRules"
                label="Beszámoló"
                rows = "2"
                auto-grow
                required
              ></v-textarea>
              <!-- <v-checkbox
                v-model="checkbox"
                label="Személyi kérdés?"
                required
              ></v-checkbox> -->

              <v-layout row>
                <v-flex xs-6>
                  <v-btn xs12 sm12 md8 lg8
                    :disabled="!valid"
                    @click="submit"
                  >
                    Mentés
                  </v-btn>
                </v-flex>
                <v-flex xs-6>
                  <v-btn xs12 sm12 md8 lg8
                    @click="clear"
                  >
                    Törlés
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
          
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              right=""
              fab
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
export default {
  data () {
    return {
      startText: 'Teaház megszervezésére szeretnénk támogatást kérni a bizottságtól. Ezen az alkalmon zöldhagymát is felszolgálnánk, így a költségek 500 Ft-al növekednek. Ezen kívül cukor elfogyott, és 2 csomag teafiltert is vásárolni kell az estére.',
      startCost: 5000,
      progressText: 'A rendezvényt egyhangúan támogatja a bizottság, azon kitétellel, hogy külsősöknek becsület kassza legyen kihelyeze a rendezvény során.',
      progressCost: 4500,
      closeText: 'Sikeres rendezvényen vagyunk túl. Teltház volt, éjfél után is bőven voltak még. A becsületkasszába 1000 Ft folyt be.',
      closeCost: 4000,
      valueDeterminate: 50,
      kbMembers: [
        {
          name: 'Gubics Flórián',
          present: false,
          img: 'https://randomuser.me/api/portraits/',
          gender: 'men'
        },
        {
          name: 'Papp Márk',
          present: false,
          img: 'https://randomuser.me/api/portraits/',
          gender: 'men'
        },
        {
          name: 'Krajcsik Dóra',
          present: false,
          img: 'https://randomuser.me/api/portraits/',
          gender: 'women'
        },
        {
          name: 'Stiaszni Alexandra',
          present: false,
          img: 'https://randomuser.me/api/portraits/',
          gender: 'women'
        },
        {
          name: 'Buzás Szilárd',
          present: false,
          img: 'https://randomuser.me/api/portraits/',
          gender: 'men'
        },
        {
          name: 'Dénes András',
          present: false,
          img: 'https://randomuser.me/api/portraits/',
          gender: 'men'
        },
        {
          name: 'Dobosi Gábor',
          present: false,
          img: 'https://randomuser.me/api/portraits/',
          gender: 'men'
        }
      ]
    }
  }
}
</script>