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
            color="success"
            dark
            flat
          >
            <h2>
              Regisztráció
            </h2>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignup">
                <v-layout>
                  <v-flex>
                    <v-text-field color="success" name="email" label="E-mail" id="mail" type="email" v-model="email" required>

                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field color="success" name="password" label="Jelszó" id="password" type="password" v-model="password"  required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field color="success" name="confirmPassword" label="Jelszó ismét" id="confirmPassword" type="password" v-model="confirmPassword" :rules="[comparePasswords]">
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-btn color="success" type="submit" :disabled="this.email.length === 0 || this.password.length < 6 || this.password !== this.confirmPassword || loading" :loading="loading"> Regisztráció
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
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        console.log('COMPARE: ' + this.password + ' and ' + this.confirmPassword)
        return this.password !== this.confirmPassword ? 'Nem egyezik a jelszó!' : ''
      },
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignup () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      },
      onDismissed () {
        console.log('Dismissed Alert!')
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
