<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sx12 sm6 offset-sm3>
        <v-card>
           <v-toolbar
            color="primary"
            dark
            flat
          >
            <h2>
              Bejelentkezés
            </h2>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignin">
                <v-layout>
                  <v-flex>
                    <v-text-field name="email" label="E-mail" id="mail" type="email" v-model="email" required>

                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field name="password" label="Jelszó" id="password" type="password" v-model="password"  required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-btn type="submit" :disabled="this.email.length === 0 || this.password.length < 6 || loading" :loading="loading"> Bejelentkezés
                      <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
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
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapGetters(['user', 'error', 'loading'])
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed () {
        console.log('Dismissed Alert!')
        this.$store.dispatch('clearError')
      }
    }
  }
</script>