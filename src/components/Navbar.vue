<template>
  <div class="main-navbar">
    <nav class="navbar" role="navigation">
      <h4 v-if="user" class="navbar-item greet">{{ user.alias }}</h4>
      <router-link to="/" v-if="user" >Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/form" v-if="user" >Form</router-link>
      <router-link to="/login" v-if="!user" >Login</router-link>
      <router-link to="/signup" v-if="!user" >Signup</router-link>
      <a v-if="user" @click="logOut" class="logout">Log Out</a>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data () {
    return {
      user: null
    }
  },
  methods: {
    logOut () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }
}
</script>

<style scoped>
.main-navbar {
  font-family: 'Orbitron', sans-serif;
}

a {
  margin: 0 10px;
  text-decoration: none;
}

.logout {
  cursor: pointer;
}

@media screen and (max-width: 1023px) {
  .navbar-menu {
    box-shadow: none;
  }

  .greet,
  .logout {
    margin: 0;
  }
}

@media screen and (max-width: 534px) {
  .navbar-menu {
    flex-direction: column;
    justify-content: center;
  }

  .greet,
  .logout {
    margin: 0;
  }
}

</style>
