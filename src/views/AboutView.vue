<template>
  <NavBar></NavBar>
  <div class="container">
    <br/>
    <h1>{{ $t(21) }}</h1>
    <br/>
    <p><b>{{ $t(62) }}</b></p>
    <p>{{ $t(61) }}</p>
    <p><b>{{ $t(63) }}</b></p>
    <ul>
      <li><p>{{ $t(65) }}</p></li>
      <li><p>{{ $t(66) }}</p></li>
      <li><p>{{ $t(67) }}</p></li>
      <li><p>{{ $t(68) }}</p></li>
    </ul>
    <p><b>{{ $t(54) }}</b></p>
    <p>{{ $t(55) }}</p>
    <a href="https://www.sciencedirect.com/science/article/pii/S2468067223000196">
      An open-source biaxial tensile tester with automated pre-tensioning for mechanical studies of canvas paintings</a>
    <p>{{ $t(56) }}</p>
    <a href="https://github.com/asgarde95/app-biaxial">
      App-Biaxial</a>
    <p><b>{{ $t(58) }}</b></p>
    <p>{{ $t(59) }}</p>
    <p>{{ $t(60) }}</p>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped></style>
