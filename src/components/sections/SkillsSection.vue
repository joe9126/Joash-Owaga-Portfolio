<template>
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <h2 class="text-center fw-bold mb-4">Skills</h2>

      <!-- Category Tabs -->
      <div class="d-flex justify-content-center flex-wrap gap-2 mb-4">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="btn"
          :class="selectedTab === tab ? 'btn-primary' : 'btn-outline-primary'"
          @click="selectedTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Skill Pills with Proficiency Bars -->
      <transition name="fade" mode="out-in">
        <div :key="selectedTab">
          <div class="row gy-4">
            <div
              class="col-md-6"
              v-for="(skill, index) in skills[selectedTab]"
              :key="index"
            >
              <div class="d-flex align-items-center mb-2">
                <i :class="[skill.icon, 'me-2']"></i>
                <span class="badge bg-secondary text-light px-3 py-2 me-auto">
                  {{ skill.name }}
                </span>
                <span class="ms-2">{{ skill.level }}%</span>
              </div>
              <div class="progress" style="height: 8px">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  :style="{ width: skill.level + '%' }"
                  :aria-valuenow="skill.level"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import skillsData from "@/assets/data/skills.js";

const tabs = ["Frontend", "Backend", "Database", "Tools"];
const selectedTab = ref("Frontend");

const skills = skillsData;
</script>

<style scoped>
.skills-section {
  background: #f8f9fa;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #333;
}

body.dark-mode .skills-section {
  background: #1e1e1e;
  color: #f1f1f1;
}

.badge {
  font-size: 0.9rem;
}

.progress {
  background-color: #e9ecef;
}

body.dark-mode .progress {
  background-color: #3a3a3a;
}

.progress-bar {
  transition: width 0.6s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
