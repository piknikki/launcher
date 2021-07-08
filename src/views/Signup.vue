<template>
  <div class="signup block">
    <div class="box">
      <form @submit.prevent="signUp">
        <fieldset>
          <legend>Sign up for Launcher access</legend>
          <div class="field">
            <label class="label" for="email">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input id="email" v-model="email" class="input" type="text" placeholder="What is your email?" >
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label" for="alias">Alias</label>
            <div class="control has-icons-left has-icons-right">
              <input id="alias" v-model="alias" class="input" type="text" placeholder="What should we call you?" >
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <p class="help">{{ this.feedback }}</p>
          </div>

          <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input id="password" v-model="password" class="input" type="password" placeholder="Password" >
              <span class="icon is-small is-left">
                <i class="fas fa-unlock-alt"></i>
              </span>
            </div>
          </div>

          <div class="button-wrapper">
            <button class="submit-btn">Submit</button>
            <button class="cancel-btn">Cancel</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
// import slugify from 'slugify'
// import db from '../firebase/init'
// import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      validAlias: true,
      validPassword: true,
      email: null,
      alias: null,
      password: null,
      slug: null,
      feedback: null
    }
  }
  // methods: {
  //   signUp () {
  // if (this.alias && this.password && this.email) {
  //   this.slug = slugify(this.alias, {
  //     replacement: '-',
  //     remove: /[$*_+~.()'"!?\-:@]/g,
  //     lower: true
  //   })
  //   let ref = db.collection('users').doc(this.slug)
  //   ref.get().then(doc => {
  //     if (doc.exists) {
  //       this.feedback = 'Sorry, that alias already exists. Pick another one.'
  //     } else {
  //       this.feedback = `Hey, ${this.alias}!`
  //       firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  //         .then(cred => {
  //           console.log(cred.user)
  //           ref.set({
  //             alias: this.alias,
  //             user_id: cred.user.uid
  //           })
  //         })
  //         .then(() => {
  //           this.$router.push({ name: 'Home' })
  //         })
  //         .catch(err => {
  //           console.log(err)
  //           this.feedback = err.message
  //         })
  //     }
  //   })
  // } else {
  //   this.feedback = 'You must complete all fields.'
  // }
  //   }
  // }
}
</script>

<style scoped>
.block {
  width: 80%;
  margin: 20px auto;
  text-align: left;
  font-size: 1.6rem;
}

form {
  width: 80%;
  margin: 0 auto;
}

legend {
  padding: 0 10px;
}

fieldset {
  padding: 20px;
}

input {
  font-size: 1.4rem;
  border: none;
  margin-left: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
}

input[type=text],
input[type=password]{
  width: 60%;
  padding: 5px;
}

.button-wrapper {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  align-items: center;
  background-color: white;
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
  -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-right: 2rem;
  width: 100px;
  font-size: 1.2rem;
}

.cancel-btn {
  background: #f8c2c2;
}

.submit-btn {
  background: #bdf3bd;
}

/*.submit-btn {*/
/*  background: #38445D;*/
/*  color: #E6676E;*/
/*}*/

/*.submit-btn:hover {*/
/*  border: 1px solid #E6676E;*/
/*  background: #38445D;*/
/*  color: white;*/
/*}*/

/*button.cancel-btn {*/
/*  border: 1px solid #93a4c6;*/
/*  background: white;*/
/*  color: #E6676E;*/
/*}*/

/*button.cancel-btn:hover {*/
/*  background: #E6676E;*/
/*}*/

</style>
