<template>
  <div class="tech-projects-view">
    <!-- Tech-themed header -->
    <div class="tech-page-header">
      <div class="circuit-grid"></div>
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" lg="10" class="text-center">
            <h1 class="tech-title">
              <span class="code-bracket">&lt;</span>
              Projects
              <span class="code-bracket">/&gt;</span>
            </h1>
            <p class="tech-subtitle">A showcase of my technical work and coding projects</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Filter system -->
    <div class="filter-bar">
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" lg="10">
            <div class="filter-chips">
              <div 
                v-for="filter in filters" 
                :key="filter" 
                class="filter-chip"
                :class="{ active: selectedFilter === filter }"
                @click="selectedFilter = filter"
              >
                {{ filter }}
                <span class="filter-glow"></span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    
    <!-- Project grid -->
    <div class="projects-section">
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" lg="10">
            <div class="projects-grid">
              <div v-for="(project, index) in filteredProjects" :key="index" class="project-card">
                <div class="card-inner">
                  <div class="project-header">
                    <div class="project-type">{{ project.type }}</div>
                    <div class="project-period">{{ project.period }}</div>
                  </div>
                  
                  <h3 class="project-title">{{ project.title }}</h3>
                  
                  <p class="project-description">{{ project.description }}</p>
                  
                  <div class="tech-stack">
                    <div v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="tech-tag">
                      {{ tech }}
                    </div>
                  </div>
                  
                  <div class="project-links">
                    <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="project-link github-link">
                      <v-icon>mdi-github</v-icon>
                      <span>GitHub</span>
                    </a>
                    <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="project-link demo-link">
                      <v-icon>mdi-web</v-icon>
                      <span>Demo</span>
                    </a>
                  </div>
                  
                  <div class="card-glow"></div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    
    <!-- GitHub Stats panel -->
    <div class="github-panel">
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" lg="10">
            <div class="github-card">
              <div class="github-header">
                <h2 class="github-title">
                  <v-icon class="mr-2">mdi-github</v-icon>
                  GitHub Activity
                </h2>
                <div class="github-subtitle">Check out my open source contributions</div>
              </div>
              
              <div class="github-stats">
                <div v-for="(stat, index) in githubStats" :key="index" class="stat-item">
                  <div class="stat-icon">
                    <v-icon size="32">{{ stat.icon }}</v-icon>
                  </div>
                  <div class="stat-value">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                  <div class="stat-glow"></div>
                </div>
              </div>
              
              <div class="github-action">
                <a :href="profileData.personal_information.github" target="_blank" class="github-profile-link">
                  <span>View GitHub Profile</span>
                  <v-icon>mdi-arrow-right</v-icon>
                </a>
              </div>
              
              <div class="github-bg-decoration"></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import profileData from '../data/data.json'

const selectedFilter = ref('All')

// Extract unique technologies from all projects to use as filters
const getUniqueFilters = () => {
  const allTechs: string[] = []
  profileData.projects.forEach(project => {
    project.tech_stack.forEach((tech: string) => {
      if (!allTechs.includes(tech)) {
        allTechs.push(tech)
      }
    })
  })
  return ['All', ...allTechs]
}

const filters = getUniqueFilters()

// Transform projects to match the component structure
const projectsData = profileData.projects.map(project => ({
  title: project.name,
  type: project.role,
  description: project.description,
  technologies: project.tech_stack,
  image: '/assets/project-placeholder.jpg', // Placeholder image
  githubUrl: project.github,
  demoUrl: '', // Can be added to data.json if needed
  period: project.period,
  category: project.tech_stack[0] // Use first tech as default category
}))

// GitHub stats (can be updated based on actual data)
const githubStats = [
  { icon: 'mdi-source-repository', value: '10+', label: 'Repositories' },
  { icon: 'mdi-star', value: '50+', label: 'Stars' },
  { icon: 'mdi-source-fork', value: '15+', label: 'Forks' },
  { icon: 'mdi-account-multiple', value: '5+', label: 'Contributors' }
]

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'All') {
    return projectsData
  }
  return projectsData.filter(project => 
    project.technologies.includes(selectedFilter.value)
  )
})
</script>

<style scoped>
/* Tech theme styling */
.tech-projects-view {
  min-height: 100vh;
  background-color: #f5f9fc;
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Header styling */
.tech-page-header {
  background-color: #0d1117;
  padding: 5rem 0 3rem;
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
  margin: 0;
}

.circuit-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(15, 252, 190, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(15, 252, 190, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 1;
}

.circuit-grid::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(16, 110, 190, 0.2) 0%, transparent 70%);
  top: -150px;
  right: 10%;
  z-index: 0;
}

.circuit-grid::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(15, 252, 190, 0.2) 0%, transparent 70%);
  bottom: -100px;
  left: 10%;
  z-index: 0;
}

.tech-title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.code-bracket {
  color: #0FFCBE;
  font-family: 'Fira Code', monospace;
}

.tech-subtitle {
  position: relative;
  z-index: 2;
  color: #8b949e;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Filter bar styling */
.filter-bar {
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  position: sticky;
  top: 64px; /* Match your app bar height */
  z-index: 10;
  width: 100vw;
  max-width: 100%;
  margin: 0;
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.filter-chip {
  padding: 0.6rem 1.2rem;
  background-color: rgba(16, 110, 190, 0.05);
  border-radius: 50px;
  font-size: 0.9rem;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.filter-chip:hover {
  color: #106EBE;
  background-color: rgba(16, 110, 190, 0.1);
}

.filter-chip.active {
  background-color: rgba(16, 110, 190, 0.15);
  color: #106EBE;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(16, 110, 190, 0.1);
}

.filter-glow {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(15, 252, 190, 0.4) 0%, rgba(15, 252, 190, 0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.filter-chip.active .filter-glow {
  opacity: 1;
}

/* Projects grid styling */
.projects-section {
  padding: 3rem 0;
  width: 100vw;
  max-width: 100%;
  margin: 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.project-card {
  height: 100%;
}

.card-inner {
  background-color: #fff;
  border-radius: 12px;
  height: 100%;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(16, 110, 190, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card-inner:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(16, 110, 190, 0.15);
}

.card-inner:hover .card-glow {
  opacity: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-type {
  font-size: 0.85rem;
  background-color: rgba(16, 110, 190, 0.1);
  color: #106EBE;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-weight: 500;
}

.project-period {
  font-size: 0.85rem;
  color: #64748b;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0d1117;
  margin-bottom: 1rem;
}

.project-description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  background-color: rgba(15, 252, 190, 0.1);
  color: #106EBE;
  border-radius: 4px;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
}

.github-link {
  background-color: #0d1117;
  color: #fff;
}

.github-link:hover {
  background-color: #161b22;
  transform: translateY(-2px);
}

.demo-link {
  background-color: rgba(16, 110, 190, 0.1);
  color: #106EBE;
}

.demo-link:hover {
  background-color: rgba(16, 110, 190, 0.2);
  transform: translateY(-2px);
}

.card-glow {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(15, 252, 190, 0.3) 0%, rgba(15, 252, 190, 0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* GitHub panel styling */
.github-panel {
  padding: 3rem 0 5rem;
  background-color: #0d1117;
  width: 100vw;
  max-width: 100%;
  margin: 0;
}

.github-card {
  background-color: rgba(22, 27, 34, 0.7);
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(15, 252, 190, 0.2);
}

.github-header {
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 2;
}

.github-title {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.github-subtitle {
  color: #8b949e;
  font-size: 1.1rem;
}

.github-stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 2;
}

.stat-item {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(15, 252, 190, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.08);
}

.stat-item:hover .stat-glow {
  opacity: 1;
}

.stat-icon {
  color: #0FFCBE;
  margin-bottom: 0.5rem;
}

.stat-value {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #8b949e;
  font-size: 0.9rem;
}

.stat-glow {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(15, 252, 190, 0.3) 0%, rgba(15, 252, 190, 0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.github-action {
  text-align: center;
  position: relative;
  z-index: 2;
}

.github-profile-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(90deg, #106EBE 0%, #0FFCBE 100%);
  color: #0d1117;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.github-profile-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(15, 252, 190, 0.3);
}

.github-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(16, 110, 190, 0.15) 0%, transparent 20%),
    radial-gradient(circle at 80% 70%, rgba(15, 252, 190, 0.15) 0%, transparent 20%);
  z-index: 1;
}

.github-bg-decoration::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: 
    linear-gradient(45deg, transparent 90%, rgba(15, 252, 190, 0.1) 90%, rgba(15, 252, 190, 0.1) 91%, transparent 91%),
    linear-gradient(135deg, transparent 90%, rgba(15, 252, 190, 0.1) 90%, rgba(15, 252, 190, 0.1) 91%, transparent 91%);
  background-size: 60px 60px;
  z-index: 0;
}

/* Responsive Adjustments */
@media (max-width: 960px) {
  .tech-title {
    font-size: 2.5rem;
  }
  
  .filter-chips {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .github-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .tech-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .github-stats {
    grid-template-columns: 1fr;
  }
  
  .github-card {
    padding: 1.5rem;
  }
}
</style>
