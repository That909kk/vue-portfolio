<template>
  <div class="tech-skills-view">
    <!-- Tech-themed header -->
    <div class="tech-page-header">
      <div class="circuit-grid"></div>
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" lg="10" class="text-center">
            <h1 class="tech-title">
              <span class="code-bracket">&lt;</span>
              Technical Skills
              <span class="code-bracket">/&gt;</span>
            </h1>
            <p class="tech-subtitle">My technical expertise and proficiency in various technologies</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Skills content -->
    <div class="skills-content">
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" lg="10">
            
            <!-- Programming & Frameworks -->
            <div class="skills-section mb-8">
              <div class="section-header">
                <h2 class="section-title">
                  <span class="title-decorator"></span>
                  Programming & Frameworks
                  <span class="title-decorator"></span>
                </h2>
              </div>
              
              <div class="skills-grid">
                <div v-for="(skill, index) in profileData.technical_skills.programming_frameworks" 
                     :key="index" 
                     class="skill-card">
                  <div class="skill-icon">
                    <v-icon :color="getSkillColor(skill)" size="48">{{ getSkillIcon(skill) }}</v-icon>
                  </div>
                  <h3 class="skill-name">{{ skill }}</h3>
                  <div class="skill-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: getSkillLevel(skill) + '%', backgroundColor: getSkillColor(skill) }"></div>
                    </div>
                  </div>
                  <div class="skill-glow"></div>
                </div>
              </div>
            </div>

            <!-- DevOps Tools -->
            <div class="skills-section mb-8">
              <div class="section-header">
                <h2 class="section-title">
                  <span class="title-decorator"></span>
                  DevOps & Tools
                  <span class="title-decorator"></span>
                </h2>
              </div>
              
              <div class="skills-grid">
                <div v-for="(skill, index) in profileData.technical_skills.devops_tools" 
                     :key="index" 
                     class="skill-card">
                  <div class="skill-icon">
                    <v-icon :color="getSkillColor(skill)" size="48">{{ getSkillIcon(skill) }}</v-icon>
                  </div>
                  <h3 class="skill-name">{{ skill }}</h3>
                  <div class="skill-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: getSkillLevel(skill) + '%', backgroundColor: getSkillColor(skill) }"></div>
                    </div>
                  </div>
                  <div class="skill-glow"></div>
                </div>
              </div>
            </div>

            <!-- Cloud & Storage -->
            <div class="skills-section mb-8">
              <div class="section-header">
                <h2 class="section-title">
                  <span class="title-decorator"></span>
                  Cloud & Storage
                  <span class="title-decorator"></span>
                </h2>
              </div>
              
              <div class="skills-grid">
                <div v-for="(skill, index) in profileData.technical_skills.cloud_storage" 
                     :key="index" 
                     class="skill-card">
                  <div class="skill-icon">
                    <v-icon :color="getSkillColor(skill)" size="48">{{ getSkillIcon(skill) }}</v-icon>
                  </div>
                  <h3 class="skill-name">{{ skill }}</h3>
                  <div class="skill-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: getSkillLevel(skill) + '%', backgroundColor: getSkillColor(skill) }"></div>
                    </div>
                  </div>
                  <div class="skill-glow"></div>
                </div>
              </div>
            </div>

            <!-- Databases -->
            <div class="skills-section mb-8">
              <div class="section-header">
                <h2 class="section-title">
                  <span class="title-decorator"></span>
                  Databases
                  <span class="title-decorator"></span>
                </h2>
              </div>
              
              <div class="skills-grid">
                <div v-for="(skill, index) in profileData.technical_skills.databases" 
                     :key="index" 
                     class="skill-card">
                  <div class="skill-icon">
                    <v-icon :color="getSkillColor(skill)" size="48">{{ getSkillIcon(skill) }}</v-icon>
                  </div>
                  <h3 class="skill-name">{{ skill }}</h3>
                  <div class="skill-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: getSkillLevel(skill) + '%', backgroundColor: getSkillColor(skill) }"></div>
                    </div>
                  </div>
                  <div class="skill-glow"></div>
                </div>
              </div>
            </div>

            <!-- Other Skills -->
            <div class="other-skills-section">
              <div class="section-header">
                <h2 class="section-title">
                  <span class="title-decorator"></span>
                  Additional Skills
                  <span class="title-decorator"></span>
                </h2>
              </div>
              
              <div class="other-skills-grid">
                <!-- Architecture & Others -->
                <div class="other-skill-category">
                  <h3 class="category-title">
                    <v-icon color="secondary" class="mr-2">mdi-sitemap</v-icon>
                    Architecture & Others
                  </h3>
                  <div class="skill-tags">
                    <div v-for="(skill, index) in profileData.technical_skills.architecture_others" 
                         :key="index" 
                         class="skill-tag">
                      <v-icon size="20" class="mr-2">{{ getSkillIcon(skill) }}</v-icon>
                      {{ skill }}
                    </div>
                  </div>
                </div>
                
                <!-- AI Assisted Development -->
                <div class="other-skill-category">
                  <h3 class="category-title">
                    <v-icon color="secondary" class="mr-2">mdi-robot</v-icon>
                    AI Assisted Development
                  </h3>
                  <div class="skill-tags">
                    <div v-for="(skill, index) in profileData.technical_skills.ai_assisted_development" 
                         :key="index" 
                         class="skill-tag">
                      <v-icon size="20" class="mr-2">{{ getSkillIcon(skill) }}</v-icon>
                      {{ skill }}
                    </div>
                  </div>
                </div>
                
                <!-- Additional Skills -->
                <div class="other-skill-category">
                  <h3 class="category-title">
                    <v-icon color="secondary" class="mr-2">mdi-plus-circle</v-icon>
                    Support & Others
                  </h3>
                  <div class="skill-tags">
                    <div v-for="(skill, index) in profileData.technical_skills.additional_skills" 
                         :key="index" 
                         class="skill-tag">
                      <v-icon size="20" class="mr-2">{{ getSkillIcon(skill) }}</v-icon>
                      {{ skill }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import profileData from '../data/data.json'

// Function to get skill icon based on name
function getSkillIcon(skillName: string): string {
  const iconMap: Record<string, string> = {
    // Programming & Frameworks
    'Java': 'mdi-language-java',
    'Spring Boot': 'mdi-leaf',
    'Node.js': 'mdi-nodejs',
    'React Native': 'mdi-react',
    'Python': 'mdi-language-python',
    
    // DevOps Tools
    'Docker': 'mdi-docker',
    'Git': 'mdi-git',
    'GitHub': 'mdi-github',
    'MCP Server': 'mdi-server',
    
    // Cloud & Storage
    'AWS S3': 'mdi-aws',
    'EC2': 'mdi-cloud',
    
    // Databases
    'PostgreSQL': 'mdi-database',
    'MariaDB': 'mdi-database',
    'MongoDB': 'mdi-database',
    'DynamoDB': 'mdi-database',
    'Neo4j': 'mdi-graph',
    
    // Architecture & Others
    'Basic knowledge of Microservices': 'mdi-sitemap',
    'Kafka': 'mdi-message-processing',
    'Redis': 'mdi-database-lock',
    'Nginx': 'mdi-web',
    'Wordpress': 'mdi-wordpress',
    
    // AI Assisted Development
    'GitHub Copilot': 'mdi-github',
    'automation tools': 'mdi-robot',
    
    // Additional Skills
    'Able to support IT Help Desk roles': 'mdi-help-circle',
    'Provide basic technical support': 'mdi-account-wrench'
  }
  
  return iconMap[skillName] || 'mdi-code-tags'
}

// Function to get skill color based on name
function getSkillColor(skillName: string): string {
  const colorMap: Record<string, string> = {
    'Java': '#b07219',
    'Spring Boot': '#6DB33F',
    'Node.js': '#689F63',
    'React Native': '#61DAFB',
    'Python': '#3572A5',
    'Docker': '#2496ED',
    'Git': '#F05032',
    'GitHub': '#181717',
    'AWS S3': '#FF9900',
    'EC2': '#FF9900',
    'PostgreSQL': '#336791',
    'MongoDB': '#47A248',
    'DynamoDB': '#4053D6',
    'Neo4j': '#008CC1'
  }
  
  return colorMap[skillName] || '#106EBE'
}

// Function to get skill level (for progress bars)
function getSkillLevel(skillName: string): number {
  // Return 100% for all skills to show full progress bars
  return 100
}
</script>

<style scoped>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

.tech-skills-view {
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

/* Content styling */
.skills-content {
  padding: 3rem 0;
  width: 100vw;
  max-width: 100%;
  margin: 0;
}

.skills-section {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-title {
  display: inline-flex;
  align-items: center;
  color: #106EBE;
  font-size: 2.2rem;
  font-weight: 600;
  position: relative;
  letter-spacing: 0.02em;
}

.title-decorator {
  display: inline-block;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0FFCBE, transparent);
  margin: 0 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.skill-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(16, 110, 190, 0.1);
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(16, 110, 190, 0.15);
}

.skill-card:hover .skill-glow {
  opacity: 1;
}

.skill-icon {
  margin-bottom: 1.5rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #106EBE;
  margin-bottom: 1.5rem;
}

.skill-progress {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.skill-glow {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(15, 252, 190, 0.3) 0%, rgba(15, 252, 190, 0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Other skills section */
.other-skills-section {
  margin-top: 5rem;
}

.other-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.other-skill-category {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(16, 110, 190, 0.1);
  transition: all 0.3s ease;
}

.other-skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(16, 110, 190, 0.15);
}

.category-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #106EBE;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  background: rgba(16, 110, 190, 0.1);
  color: #106EBE;
  padding: 0.6rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(16, 110, 190, 0.2);
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .tech-title {
    font-size: 2.5rem;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .other-skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .tech-title {
    font-size: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-card {
    padding: 1.5rem;
  }
  
  .other-skill-category {
    padding: 1.5rem;
  }
}
</style>
