<template>
  <div id="main-div">
    <div id="askLogIn" >
      <h1>Welcome To The Account Page</h1>
      <h3>
        Create an account or Sign In if you already have one!
      </h3>
      <div id="btn-container">
        <v-btn
          width="200"
          outlined
          class="signup"
          v-on:click="showSignUpForm = !showSignUpForm"
        >
          Create Account
        </v-btn>
        <v-btn
          width="200"
          outlined
          class="signup"
          v-on:click="showSignInForm = !showSignInForm"
        >
          Sign In
        </v-btn>

        <small>---- or connect with ----</small>
        <a id="facebook-link">
          <v-icon color="blue"> mdi-facebook</v-icon> Facebook</a
        >
        <a id="google-link"><v-icon color="red"> mdi-google</v-icon> Google</a>

        <a id="apple-link"><v-icon color="white"> mdi-apple</v-icon> Apple</a>
      </div>
      <!-- form for creating an account -->
      <v-dialog v-model="showSignUpForm" max-width="640">
        <v-card dark id="signup-form">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="signUpEmail"
                    :error-messages="errors"
                    label="Email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="signUpUsername"
                    :error-messages="errors"
                    label="Username"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="signUpPassword"
                    :error-messages="errors"
                    label="Password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    required
                    @click:append="showPass = !showPass"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-on:click="register"
              class="createAccount-btn"
              type="submit"
              color="red darken-1"
              text
              @click="showSignUpForm = false"
            >
              Create Account
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- form for signing in -->
      <v-dialog v-model="showSignInForm" max-width="640">
        <v-card dark id="signin-form">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="signInEmail"
                    :error-messages="errors"
                    label="Email"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="signInPassword"
                    :error-messages="errors"
                    label="Password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    required
                    @click:append="showPass = !showPass"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-on:click="login"
              class="login-btn"
              type="submit"
              color="red darken-1"
              text
            >
              Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
const db = firebase.firestore();
export default {
  name: "accountPage",
  components: {
  },
  props: ["visiting", "loggedIn", "profileDetails"],
  data: function() {
    return {
      errors: "",
      signInEmail: "",
      signInUsername: "",
      signInPassword: "",
      signUpEmail: "",
      signUpUsername: "",
      signUpPassword: "",
      password: "",
      showSignInForm: false,
      showSignUpForm: false,
      showPass: false,
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.signUpEmail, this.signUpPassword)
        .then(
          (user) => {
            alert("Account created for " + this.signUpEmail);
            this.$router.push("/");
            console.log(user);
            db.collection("users").doc(user.user.uid).set({
              bio: "",
              contribs: 0,
              scePlayed: 0,
              score: 0,
              userName: this.signUpUsername
            })
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
    login: function(e) {
      console.log(this.signInEmail);
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      firebase
        .auth()
        .signInWithEmailAndPassword(this.signInEmail, this.signInPassword)
        .then(
          () => {
            alert("You are logged in as " + this.signInEmail);
            this.showSignInForm = false;
            this.$root.loggedIn = true; 
             this.$router.push(`profile/${this.signInEmail}`);
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
#main-div {
  padding: 0%;
  margin: 0%;
  min-height: 100vh;
  background-color: rgb(22, 22, 22);
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
#askLogIn {
  padding: 0%;
  margin: 0%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h3 {
  width: 55%;
  margin: 60px 0 10px 0;
}
.signup {
  color: red;
  font-size: 15px !important;
  margin: 10px 0 10px 0;
  border-radius: 5%;
}
#btn-container {
  background-color: #0000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 40px 0 0 0;
}
a {
  margin: 5px 0 5px 0;
}
#facebook-link {
  color: #2196f3;
}
#google-link {
  color: #f34336;
}
#apple-link {
  color: white;
}
</style>
