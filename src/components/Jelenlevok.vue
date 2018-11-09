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
        Jelenlévők
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
            <v-toolbar-title class="body-2 grey--text">Kollégium Bizottság</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon :class="{'blue_lighten-3--text': isAllKBMembersChecked}" @click="onCheckAllKBMembers">{{isAllKBMembersChecked ? "reply_all" : "done_all"}}</v-icon>
            </v-btn>

          </v-toolbar>

          <v-divider></v-divider>
            
          <v-card-text>
             <v-layout xs2 justify-start row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="(member, index) in kbMembers" :index="index" :key="member.name">
                  <v-chip :class="[{'blue-grey lighten-4': member.present},{'grey lighten-1': !member.present}]"  @click="member.present = !member.present">
                    <v-avatar>
                      <v-img 
                        :gradient="!member.present ? 'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)' : ''" 
                        :src="member.img + member.gender + '\\' +  index + '.jpg'" alt="trevor">
                      </v-img>
                    </v-avatar>
                    {{ member.name }}
                    <v-icon v-if="member.present" right>done</v-icon>
                  </v-chip>
                </v-flex>
            </v-layout>
          </v-card-text>
          <!-- <v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              right=""
              fab
            >
              <v-icon>add</v-icon>
            </v-btn> -->
        </v-card>

        <v-spacer></v-spacer>

        <v-card class="card mb-5">
          <v-toolbar card prominent class="grey lighten-4">
            <v-toolbar-title class="body-2 grey--text">Seniorok</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon :class="{'blue_lighten-3--text': isAllSeniorMembersChecked}" @click="onCheckAllSeniorMembers">{{isAllSeniorMembersChecked ? "reply_all" : "done_all"}}</v-icon>
            </v-btn>

          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text>
            <v-layout xs2 justify-start row wrap>
              <v-flex xs12 sm6 md4 lg3 v-for="(member, index) in seniorMembers" :key="member.name">
                <v-chip :class="[{'blue-grey lighten-4': member.present},{'grey lighten-1': !member.present}]" @click="member.present = !member.present">
                  <v-avatar>
                    <v-img 
                      :gradient="!member.present ? 'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)' : ''"
                      :src="member.img + member.gender + '\\1' +  index + '.jpg'" alt="trevor">
                    </v-img>
                  </v-avatar>
                  {{ member.name }}
                </v-chip>
              </v-flex>
            </v-layout>
          </v-card-text>
          <!-- <v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              right=""
              fab
            >
              <v-icon>add</v-icon>
            </v-btn> -->
        </v-card>
      </v-flex>
    </v-layout>
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
    }
  },
  computed: {
    ...mapGetters(['kbMembers', 'isAllKBMembersChecked', 'seniorMembers', 'isAllSeniorMembersChecked'])
  },
  methods: {
    onCheckAllKBMembers () {
      this.$store.commit('checkAllKBMembers')
    },
    onCheckAllSeniorMembers () {
      this.$store.commit('checkAllSeniorMembers')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
