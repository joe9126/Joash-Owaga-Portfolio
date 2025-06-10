<template>
  <section id="about" class="about-section py-5">
    <div class="container">
      <h2 class="text-center fw-bold mb-4">About Me</h2>

      <div class="row align-items-center">
        <div class="col-12 col-md-8 mx-auto text-center text-md-start">
          <p class="lead">
            I'm Joash Owaga, a Full Stack Developer from Nairobi, Kenya. I specialize in
            building fast, user-friendly web applications using Vue.js, Node.js, and
            MongoDB. My journey started with a degree in Mathematics & Computer Science
            from Multimedia University and evolved into a passion for solving real-world
            problems through code.
          </p>
          <p>
            Over the past 3+ years, I've built systems that simplify payments, automate
            workflows, and improve user experience for businesses and individuals. I value
            clean code, continuous learning, and collaboration.
          </p>

          <!-- Soft Skills -->
          <div class="row text-center text-md-start mt-4">
            <div class="col-6 col-md-4 mb-3">
              <i class="fas fa-users me-2 text-primary"></i> Team Player
            </div>
            <div class="col-6 col-md-4 mb-3">
              <i class="fas fa-lightbulb me-2 text-warning"></i> Problem Solver
            </div>
            <div class="col-6 col-md-4 mb-3">
              <i class="fas fa-laptop-code me-2 text-success"></i> Clean Coder
            </div>
            <div class="col-6 col-md-4 mb-3">
              <i class="fas fa-comments me-2 text-info"></i> Communicator
            </div>
            <div class="col-6 col-md-4 mb-3">
              <i class="fas fa-rocket me-2 text-danger"></i> Self-Starter
            </div>
          </div>

          <!-- Timeline -->
          <h4 class="mt-5 mb-4 text-center text-md-start">Developer Journey</h4>
          <ul :class="`timeline list-unstyled ps-0`">
            <li class="mb-4">
              <div class="timeline-icon"><i class="fas fa-graduation-cap"></i></div>
              <div>
                <h6 class="mb-1 fw-bold">2016 – Graduated Multimedia University</h6>
                <p class="mb-0">BSc. in Mathematics & Computer Science</p>
              </div>
            </li>
            <li class="mb-4">
              <div class="timeline-icon"><i class="fas fa-briefcase"></i></div>
              <div>
                <h6 class="mb-1 fw-bold">2017–2023 – Symphony Technologies</h6>
                <p class="mb-0">
                  Worked on service portals, MPESA integration, and internal tools.
                </p>
              </div>
            </li>
            <li class="mb-4">
              <div class="timeline-icon"><i class="fas fa-rocket"></i></div>
              <div>
                <h6 class="mb-1 fw-bold">2022 – Completed ALX Backend Web Dev</h6>
                <p class="mb-0">
                  Gained hands-on experience with Node.js, Express, and REST APIs.
                </p>
              </div>
            </li>
            <li>
              <div class="timeline-icon"><i class="fas fa-code"></i></div>
              <div>
                <h6 class="mb-1 fw-bold">2023–2024 – Influx Inc. (Remote)</h6>
                <p class="mb-0">
                  Built scalable Vue.js dashboards and REST APIs for client ops.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: #f8f9fa;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #333;
}

body.dark-mode .about-section {
  background: #1e1e1e;
  color: #f1f1f1;
}

.timeline {
  border-left: 3px solid #007bff;
  position: relative;
  padding-left: 2rem;
}

.timeline-icon {
  width: 20px;
  height: 20px;
  background-color: #007bff;

  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  font-size: 0.75rem;
  position: absolute;
  left: -31px;
  top: 0.25rem;
}
.timeline li {
  position: relative;
  padding-left: 2rem;
}
body.dark-mode .timeline {
  border-left: 3px solid #00c9a7;
}

body.dark-mode .timeline-icon {
  background-color: #00c9a7;
}
</style>
