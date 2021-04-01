<template>
<v-app>
    <div>
      <h1> Welcome back. You can login below.</h1>
    </div> 
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
              <v-btn class="login-btn" type="submit" rounded color="white" dark>
                Create Account
              </v-btn>
            </div>
    </v-app>  
</template>

<script>
export default {
    name: 'loginPage',
    componets: {
    },
    data: () => ({
    }),
    methods: {
    }
}
</script>
