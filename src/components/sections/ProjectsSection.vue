<template>
  <section id="projects" class="projects-section py-5">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold">Projects</h2>
      <div v-if="loading" class="text-center">
        <div class="spinner-border text-primary" role="status"></div>
      </div>
      <div v-else class="row gy-4">
        <div class="col-md-6" v-for="repo in visibleRepos" :key="repo.id">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">{{ repo.name }}</h5>
              <p class="card-text">{{ repo.description }}</p>
              <p class="text-muted mb-2">
                <i class="fas fa-code me-1"></i> {{ repo.language || "N/A" }}
              </p>
              <div class="d-flex flex-wrap gap-3 justify-content-center mb-2">
                <span
                  class="badge bg-light text-dark border"
                  v-for="topic in repo.topics"
                  :key="topic"
                >
                  <i class="fas fa-code me-1"></i> {{ topic || "N/A" }}
                </span>
              </div>

              <a
                :href="repo.html_url"
                target="_blank"
                class="btn btn-outline-dark btn-sm me-2"
              >
                <i class="fab fa-github me-1"></i> GitHub
              </a>
              <a
                v-if="repo.homepage"
                :href="repo.homepage"
                target="_blank"
                class="btn btn-outline-primary btn-sm"
              >
                <i class="fas fa-external-link-alt me-1"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Load more button-->
      <div class="text-center mt-4" v-if="visibleCount < repos.length">
        <button
          type="button"
          class="btn btn-outline-primary w-auto mx-auto"
          @click="loadMore"
        >
          Load More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const loading = ref(true);
const repos = ref([]);
const visibleCount = ref([6]);
const username = "joe9126"; //Github username

const visibleRepos = computed(() => repos.value.slice(0, visibleCount.value));
const loadMore = () => {
  visibleCount.value += 3;
};
onMounted(async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }
    );
    const data = await response.json();
    repos.value = data.filter(
      (repo) => (!repo.fork && repo.description) || repo.topics.includes("portfolio")
    ); // only show tagged projects);
    console.log(repos.value);
  } catch (err) {
    console.error("Error fetching repos:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.projects-section {
  background: #f8f9fa;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #333;
}

body.dark-mode .projects-section {
  background: #1e1e1e;
  color: #f1f1f1;
}

.card {
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.card-header {
  background: #ffffff;
  cursor: pointer;
  padding: 1rem;
}

body.dark-mode .card-header {
  background: #2a2a2a;
}

.card-body {
  background: #fff;
  padding: 1rem;
  border-top: 1px solid #eee;
}

body.dark-mode .card-body {
  background: #2a2a2a;
  border-top: 1px solid #444;
  color: #f1f1f1;
}

.card-header h5 {
  margin: 0;
}
body.dark-mode .card-header h5,
body.dark-mode .card-header i {
  color: #f1f1f1;
}
body.dark-mode .card .card-body p {
  color: rgb(252 253 253 / 75%) !important;
}
</style>
