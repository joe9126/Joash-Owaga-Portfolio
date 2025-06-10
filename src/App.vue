<script setup>
import Navbar from "@/components/NavbarComponent";
</script>
<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body .dark-mode {
  background: linear-gradient(135deg, #121212, #1e1e1e);
  color: #f1f1f1;
}
html {
  scroll-behavior: smooth;
}
</style>
