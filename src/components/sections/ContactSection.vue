<template>
  <section id="contact" class="contact-section py-5">
    <div class="container text-center">
      <h2 class="fw-bold mb-4">Contact Me</h2>
      <p class="mb-4">
        I'm open to full-time opportunities, collaborations, or projects. Reach out
        anytime!
      </p>

      <div class="contact-info d-flex flex-column align-items-center gap-3">
        <div>
          <i class="fas fa-envelope text-primary me-2"></i>
          <a href="mailto:joeasewe@gmail.com">joeasewe@gmail.com</a>
        </div>
        <div>
          <i class="fas fa-phone text-success me-2"></i>
          <a href="tel:+254702907485">+254 702 907 485</a>
        </div>
        <div>
          <i class="fab fa-linkedin text-info me-2"></i>
          <a href="https://www.linkedin.com/in/joash-owaga" target="_blank"
            >LinkedIn Profile</a
          >
        </div>
        <div>
          <i class="fab fa-github text-info me-2"></i>
          <a href="https://www.linkedin.com/in/joash-owaga-662662360/" target="_blank">Git Hub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: #f8f9fa;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #333;
}

body.dark-mode .contact-section {
  background-color: #1e1e1e;
  color: #f1f1f1;
}

a {
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}
</style>
