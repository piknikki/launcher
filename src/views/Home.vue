<template>
  <div class="home">
    <img class="logo" alt="Launcher logo" src="../assets/launcher.png">
    <h1 class="header">Launcher Interviews</h1>
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

.header {
  margin: 30px;
}
</style>
