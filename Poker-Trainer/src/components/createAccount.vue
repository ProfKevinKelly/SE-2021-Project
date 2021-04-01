<template>
<v-app>
    <div>
      <h1> Here at Upper Hand we are always looking for new members! <br> Submit your details below to join us...</h1>
    </div> 
    <v-text-field
                v-model="email"
                :error-messages="errors"
                label="Email"
                required
                outlined
                dark
                filled
                dense
              ></v-text-field>
    <v-text-field
                v-model="username"
                :error-messages="errors"
                label="Username"
                required
                outlined
                dark
                filled
                dense
              ></v-text-field>
     <v-text-field
                v-model="password"
                :error-messages="errors"
                label="Password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                required
                outlined
                dense
                dark
                filled
                :type="showPass ? 'text' : 'password'"
              ></v-text-field>
   <div class="text-center">
              <v-btn class="createAccount-btn" type="submit" rounded color="white" dark>
                Create Account
              </v-btn>
            </div>
    </v-app>  
</template>

<script>
export default {
    name: 'createAccount',
    componets: {
    },
    data: () => ({
    }),
    methods: {
    }
}
</script>
