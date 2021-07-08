<template>
  <div class="home">
    <h1 class="header">Launcher Interviews</h1>
    <p class="explore">Green background indicates the interviewee got the job, but some of the best learning
      experiences come from failure. Make sure you explore what worked for some and what didn't work for others.</p>
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

.explore {
  width: 50%;
  margin: 20px auto 40px;
}
</style>
