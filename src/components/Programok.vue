/* eslint-disable */

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
        
      ><v-icon v-on:click="todo()">done</v-icon></v-btn>
    </v-toolbar>

    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar mb-5">
          <v-toolbar card prominent>
            <v-progress-circular
      :rotate="-90"
      :size="60"
      :width="5"
      :value="programs[0].procent"
      color="primary"
    >
      {{ programs[0].procent }}
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
            <v-form ref="form">
              <v-container fluid grid-list-xl>
                <v-layout row wrap ustify-space-between>
                  <v-flex xs6 sm6 md3 lg3>
                    <v-select
                      v-model="programs[0].owner"
                      :items = "kbMembers"
                      item-value = "name"
                      item-text = "name"
                      id="name"
                      :rules="[v => !!v || 'Item is required']"
                      :item-avatar="kbMembers.img"
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
                    v-model="programs[0].startText"
                    :counter="250"
                    label="Leírás"
                    rows = "1"
                    auto-grow
                    required
                  ></v-textarea>
                </v-flex>
                <v-flex xs12 sm12 md2 lg2>
                    <v-text-field 
                      v-model="programs[0].startCost"
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
                    v-model="programs[0].progressText"
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
                      v-model="programs[0].progressCost"
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
                      v-model="programs[0].closeText"
                      :counter="250"
                      label="Beszámoló"
                      rows = "1"
                      auto-grow
                      required
                    ></v-textarea>
                  </v-flex>
                  <v-flex xs12 sm12 md2 lg2>
                      <v-text-field 
                        v-model="programs[0].closeCost"
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
                  <v-btn xs12 sm12 md8 lg8
                  >
                    Mentés
                  </v-btn>
                </v-flex>
                <v-flex xs-6 offset-lg6>
                  <v-btn xs12 sm12 md8 lg8
                    
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
      startText:
        'Teaház megszervezésére szeretnénk támogatást kérni a bizottságtól. Ezen az alkalmon zöldhagymát is felszolgálnánk, így a költségek 500 Ft-al növekednek. Ezen kívül cukor elfogyott, és 2 csomag teafiltert is vásárolni kell az estére.',
      startCost: 5000,

      progressCost: 4500,
      closeText:
        'Sikeres rendezvényen vagyunk túl. Teltház volt, éjfél után is bőven voltak még. A becsületkasszába 1000 Ft folyt be.',
      closeCost: 4000,
      valueDeterminate: 50,
      programs: [
        {
          owner: 'Gubics Flórián',
          name: 'Halloween-i Teaház',
          date: '2018.11.01.',
          procent: 50,
          startText:
            'Teaház megszervezésére szeretnénk támogatást kérni a bizottságtól. Ezen az alkalmon zöldhagymát is felszolgálnánk, így a költségek 500 Ft-al növekednek. Ezen kívül cukor elfogyott, és 2 csomag teafiltert is vásárolni kell az estére.',
          startCost: 5000,
          progressText:
            'A rendezvényt egyhangúan támogatja a bizottság, azon kitétellel, hogy külsősöknek becsület kassza legyen kihelyeze a rendezvény során.',
          progressCost: 4500,
          closeText:
            'Sikeres rendezvényen vagyunk túl. Teltház volt, éjfél után is bőven voltak még. A becsületkasszába 1000 Ft folyt be.',
          closeCost: 4000
        },
        {
          owner: 'Krajcsik Dóra',
          name: 'Kolibuli',
          date: '2018.12.01.',
          procent: 60,
          startText:
            'Teaház megszervezésére szeretnénk támogatást kérni a bizottságtól. Ezen az alkalmon zöldhagymát is felszolgálnánk, így a költségek 500 Ft-al növekednek. Ezen kívül cukor elfogyott, és 2 csomag teafiltert is vásárolni kell az estére.',
          startCost: 5000,
          progressText:
            'A rendezvényt egyhangúan támogatja a bizottság, azon kitétellel, hogy külsősöknek becsület kassza legyen kihelyeze a rendezvény során.',
          progressCost: 4500,
          closeText:
            'Sikeres rendezvényen vagyunk túl. Teltház volt, éjfél után is bőven voltak még. A becsületkasszába 1000 Ft folyt be.',
          closeCost: 4000
        },
        {
          owner: 'Papp Márk',
          name: 'Herman ősz',
          date: '2018.11.20.',
          procent: 10,
          startText:
            'Teaház megszervezésére szeretnénk támogatást kérni a bizottságtól. Ezen az alkalmon zöldhagymát is felszolgálnánk, így a költségek 500 Ft-al növekednek. Ezen kívül cukor elfogyott, és 2 csomag teafiltert is vásárolni kell az estére.',
          startCost: 5000,
          progressText:
            'A rendezvényt egyhangúan támogatja a bizottság, azon kitétellel, hogy külsősöknek becsület kassza legyen kihelyeze a rendezvény során.',
          progressCost: 4500,
          closeText:
            'Sikeres rendezvényen vagyunk túl. Teltház volt, éjfél után is bőven voltak még. A becsületkasszába 1000 Ft folyt be.',
          closeCost: 4000
        }
      ],
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
  },
  methods: {
    todo () {
      console.log('Todo...')
      alert('TODO...')
    }
  }
}
</script>