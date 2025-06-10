<template>
  <section
    id="home"
    :class="`hero-section text-center text-md-start d-flex align-items-center`"
  >
    <div class="container py-5">
      <div class="row align-items-center">
        <!-- Avatar -->
        <div class="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            :src="`/assets/avatar.jpeg`"
            alt="Joash Owaga"
            class="img-fluid rounded-circle shadow"
            style="width: 180px; height: 180px; object-fit: cover"
          />
        </div>

        <!-- Text + Button -->
        <div class="col-12 col-md-8">
          <h1 class="display-5 fw-bold mb-2">Hi, I'm Joash</h1>
          <p class="lead mb-3">
            Full Stack Developer focused on MEVN stack (MongoDB, Express.js, Vue.js,
            Node.js) and clean digital experiences.
          </p>
          <a
            href="/assets/Joash Owaga _ Full Stack Dev CV.pdf"
            target="_blank"
            class="btn btn-primary btn-lg"
          >
            <i class="fas fa-file-alt me-2"></i> View Resume
          </a>
        </div>
      </div>

      <!-- Scroll-down icon -->
      <div class="text-center mt-5">
        <a href="#projects" class="scroll-down">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f7fa, #f0f0ff);
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #333;
}

body.dark-mode .hero-section {
  background: #1e1e1e;
  color: #f1f1f1;
}

body.dark-mode .btn-primary {
  background-color: #00c9a7;
  border-color: #00c9a7;
}

.scroll-down {
  font-size: 1.5rem;
  color: #333;
  animation: bounce 2s infinite;
  display: inline-block;
}

body.dark-mode .scroll-down {
  color: #ccc;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>
