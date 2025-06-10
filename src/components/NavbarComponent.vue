<script setup>
import { ref, computed, watch } from "vue";

const title = ref("Joe Owaga");
const darkMode = ref(false);
const bgColor = computed(() =>
  darkMode.value ? "bg-dark btn-outline-light" : "bg-light btn-outline-dark"
);

const changeMode = () => {
  darkMode.value = !darkMode.value;
};

watch(darkMode, (isDark) => {
  document.body.classList.toggle("dark-mode", isDark);
});
</script>
<template>
  <nav :class="`navbar navbar-expand-sm navbar-light ${bgColor}`">
    <div class="container">
      <a href="#home" class="navbar-brand">{{ title }}</a>

      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a href="#home" class="nav-link active" aria-current="page">
              Home <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link" aria-current="page"> Projects </a>
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link" aria-current="page"> Skills </a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link" aria-current="page"> About </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link" aria-current="page"> Contact Me </a>
          </li>
          <li class="nav-item">
            <a
              href="/assets/Joash Owaga _ Full Stack Dev CV.pdf"
              target="_blank"
              class="nav-link"
            >
              My Resume
            </a>
          </li>
        </ul>
        <div class="d-flex my-2 my-lg-0">
          <button
            :class="`btn ${bgColor} my-2 my-sm-0 toggleBg`"
            type="submit"
            @click="changeMode"
          >
            <span v-if="darkMode"><i class="fas fa-sun"></i></span>
            <span v-else><i class="fas fa-moon"></i></span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
body .navbar .container .collapse ul li a {
  color: #333 !important;
}
body .navbar .container .collapse ul li a:hover {
  color: #fff !important;
  width: fit-content;
  height: fit-content;
  background-color: #333;
  border-radius: 5px;
}

body.dark-mode .navbar .container .collapse ul li a {
  color: #fff !important;
}
body.dark-mode .navbar .container .collapse ul li a:hover {
  color: #333 !important;
  width: fit-content;
  height: fit-content;
  background-color: aliceblue;
  border-radius: 5px;
}
.toggleBg {
  border: none;
}
body.dark-mode .toggleBg{
color: #ccc;
border: 1px solid #ccc;
}
</style>
