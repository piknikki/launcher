<template>
  <div class="home">
    <img class="logo" alt="Launcher logo" src="../assets/launcher.png">
    <h1>Launcher Interviews</h1>
    <p>all interviews go here in a table maybe</p>
    <Interviews />
  </div>
</template>

<script>
import Interviews from '../components/Interviews'

export default {
  name: 'Home',
  components: {
    Interviews
  }
}
</script>

<style>
.logo {
  width: 75px;
}
</style>
