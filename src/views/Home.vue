<template>
  <div class="portfolio-content">
    <!-- Hero Section -->
    <section class="tech-hero">
      <div class="matrix-bg"></div>
      <div class="code-lines"></div>
      
      <v-container fluid class="hero-content">
        <v-row justify="center" align="center" class="fill-height">
          <v-col cols="12" lg="10" class="position-relative">
            <v-row>
              <v-col cols="12" md="6" class="d-flex align-center">
                <div class="hero-text">
                  <div class="typing-container">
                    <span class="typing-text">Hello World! I'm</span>
                  </div>
                  
                  <h1 class="hero-name">
                    <span class="text-gradient">{{ personalInfo.name }}</span>
                  </h1>
                  
                  <div class="role-badge">
                    <span class="badge-icon">&#60;/&#62;</span>
                    <span class="badge-text">{{ personalInfo.role }}</span>
                  </div>
                  
                  <p class="bio-text">
                    <span class="code-comment">// {{ profileData.about_me ? profileData.about_me.substring(0, 150) + '...' : 'Passionate developer focused on creating modern web applications' }}</span>
                  </p>
                  
                  <div class="hero-buttons">
                    <v-btn
                      class="tech-button primary-btn"
                      elevation="0"
                      to="/contact"
                    >
                      <span class="btn-text">Get In Touch</span>
                      <v-icon right class="btn-icon">mdi-arrow-right</v-icon>
                    </v-btn>
                    
                    <v-btn
                      class="tech-button secondary-btn ml-4"
                      elevation="0"
                      to="/projects"
                    >
                      <v-icon left class="btn-icon">mdi-code-tags</v-icon>
                      <span class="btn-text">View Projects</span>
                    </v-btn>
                  </div>
                  
                  <div class="tech-stats">
                    <div class="stat-item">
                      <div class="stat-value">2+</div>
                      <div class="stat-label">Years Experience</div>
                    </div>
                    
                    <div class="stat-item">
                      <div class="stat-value">10+</div>
                      <div class="stat-label">Projects</div>
                    </div>
                    
                    <div class="stat-divider"></div>
                    
                    <div class="stat-item">
                      <div class="stat-value">5+</div>
                      <div class="stat-label">Technologies</div>
                    </div>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div class="hero-graphic">
                  <div class="code-editor">
                    <div class="editor-header">
                      <div class="editor-btn"></div>
                      <div class="editor-btn"></div>
                      <div class="editor-btn"></div>
                      <div class="filename">profile.json</div>
                    </div>
                    <div class="editor-content">
                      <div class="line-numbers">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
                      </div>
                      <pre><code><span class="code-punctuation">{</span>
  <span class="code-property">"name"</span><span class="code-punctuation">:</span> <span class="code-string">"{{ personalInfo.name }}"</span><span class="code-punctuation">,</span>
  <span class="code-property">"role"</span><span class="code-punctuation">:</span> <span class="code-string">"{{ personalInfo.role }}"</span><span class="code-punctuation">,</span>
  <span class="code-property">"email"</span><span class="code-punctuation">:</span> <span class="code-string">"{{ personalInfo.email }}"</span><span class="code-punctuation">,</span>
  <span class="code-property">"github"</span><span class="code-punctuation">:</span> <span class="code-string">"{{ personalInfo.github }}"</span><span class="code-punctuation">,</span>
  <span class="code-property">"location"</span><span class="code-punctuation">:</span> <span class="code-string">"{{ personalInfo.location || 'Vietnam' }}"</span><span class="code-punctuation">,</span>
  <span class="code-property">"skills"</span><span class="code-punctuation">:</span> <span class="code-punctuation">[</span>
    <span class="code-string">"{{ skillsList[0] || 'Java' }}"</span><span class="code-punctuation">,</span>
    <span class="code-string">"{{ skillsList[1] || 'Spring Boot' }}"</span><span class="code-punctuation">,</span>
    <span class="code-string">"{{ skillsList[2] || 'Node.js' }}"</span>
  <span class="code-punctuation">]</span>
<span class="code-punctuation">}</span></code></pre>
                      <div class="editor-cursor"></div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- About Summary -->
    <section class="tech-about">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="10">
            <div class="section-header">
              <h2 class="section-title">
                <span class="title-decorator"></span>
                Why Hire Me
                <span class="title-decorator"></span>
              </h2>
            </div>
            
            <v-row class="mt-8">
              <v-col v-for="(feature, index) in features" :key="index" cols="12" md="4">
                <div class="feature-card">
                  <div class="card-header">
                    <div class="feature-icon">
                      <v-icon size="36">{{ feature.icon }}</v-icon>
                    </div>
                    <h3 class="feature-title">{{ feature.title }}</h3>
                  </div>
                  
                  <p class="feature-description">{{ feature.description }}</p>
                  
                  <div class="card-glow"></div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Skills Preview -->
    <section class="tech-skills">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="10">
            <div class="section-header">
              <h2 class="section-title">
                <span class="title-decorator"></span>
                Technical Skills
                <span class="title-decorator"></span>
              </h2>
            </div>
            
            <div class="skills-grid mt-8">
              <div v-for="(skill, index) in mainSkills" :key="index" class="skill-item">
                <div class="skill-icon">
                  <v-icon size="32">{{ skill.icon }}</v-icon>
                </div>
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-glow"></div>
              </div>
            </div>
            
            <div class="text-center mt-10">
              <v-btn class="tech-button view-all-btn" to="/skills">
                <span class="btn-text">View All Skills</span>
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import profileData from '../data/data.json'
import { computed } from 'vue'

const personalInfo = profileData.personal_information

// Extract skills for the code editor display
const skillsList = computed(() => {
  const programming = profileData.technical_skills.programming_frameworks || []
  const devops = profileData.technical_skills.devops_tools || []
  return [...programming, ...devops]
})

const features = [
  {
    icon: 'mdi-rocket-launch',
    title: 'Fast Learner',
    description: 'Able to quickly grasp and apply new technologies efficiently and effectively.'
  },
  {
    icon: 'mdi-puzzle',
    title: 'Problem Solver',
    description: 'Strong logical thinking, capable of analyzing and finding optimal solutions for complex problems.'
  },
  {
    icon: 'mdi-account-group',
    title: 'Team Player',
    description: 'Good communication skills, can work effectively in diverse team environments.'
  }
]

// Extract main skills from the JSON data
const programmingSkills = profileData.technical_skills.programming_frameworks.map(skill => {
  const iconMap: Record<string, string> = {
    'Java': 'mdi-language-java',
    'Spring Boot': 'mdi-leaf',
    'Node.js': 'mdi-nodejs',
    'React Native': 'mdi-react',
    'Python': 'mdi-language-python'
  }
  
  return {
    name: skill,
    icon: iconMap[skill] || 'mdi-code-tags'
  }
})

const devopsSkills = profileData.technical_skills.devops_tools.map(skill => {
  const iconMap: Record<string, string> = {
    'Docker': 'mdi-docker',
    'Git': 'mdi-git',
    'GitHub': 'mdi-github',
    'MCP Server': 'mdi-server'
  }
  
  return {
    name: skill,
    icon: iconMap[skill] || 'mdi-wrench'
  }
})

const mainSkills = [...programmingSkills, ...devopsSkills]
</script>

<style scoped>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

.portfolio-content {
  width: 100%;
  overflow-x: hidden;
  background-color: #0d1117;
}

/* Tech Hero Section */
.tech-hero {
  position: relative;
  min-height: 100vh;
  background-color: #0d1117;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(13, 17, 23, 0.95) 0%, rgba(16, 110, 190, 0.1) 100%);
  z-index: 1;
}

.code-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(15, 252, 190, 0.03) 0px,
    rgba(15, 252, 190, 0.03) 1px,
    transparent 1px,
    transparent 30px
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 5;
}

.hero-text {
  position: relative;
  z-index: 10;
  max-width: 90%;
  margin: 0 auto;
}

.typing-container {
  display: inline-block;
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #0FFCBE;
}

.typing-text {
  position: relative;
}

.typing-text::after {
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-name {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-align: left;
}

.text-gradient {
  background: linear-gradient(90deg, #106EBE 0%, #0FFCBE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(15, 252, 190, 0.1);
  border: 1px solid rgba(15, 252, 190, 0.3);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
}

.badge-icon {
  color: #0FFCBE;
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.badge-text {
  color: #fff;
  font-weight: 500;
}

.bio-text {
  color: #8b949e;
  font-family: 'Fira Code', monospace;
  margin: 1.5rem 0;
  line-height: 1.6;
  max-width: 95%;
  letter-spacing: 0.03em;
}

.code-comment {
  color: #8b949e;
}

.hero-buttons {
  display: flex;
  margin: 2rem 0;
}

.tech-button {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-btn {
  background: linear-gradient(90deg, #106EBE 0%, #0FFCBE 100%);
  color: #0d1117;
  border: none;
}

.primary-btn:hover {
  box-shadow: 0 5px 15px rgba(15, 252, 190, 0.4);
  transform: translateY(-2px);
}

.secondary-btn {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(15, 252, 190, 0.5);
}

.secondary-btn:hover {
  background: rgba(15, 252, 190, 0.1);
  border-color: #0FFCBE;
}

.btn-text {
  position: relative;
  z-index: 2;
}

.btn-icon {
  position: relative;
  z-index: 2;
}

.tech-stats {
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  background: rgba(16, 110, 190, 0.1);
  border-radius: 12px;
  padding: 1rem;
}

.stat-item {
  text-align: center;
  padding: 0 1rem;
}

.stat-value {
  color: #0FFCBE;
  font-size: 1.8rem;
  font-weight: 700;
}

.stat-label {
  color: #8b949e;
  font-size: 0.9rem;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(15, 252, 190, 0.2);
  margin: 0 1rem;
}

/* Code Editor */
.hero-graphic {
  position: relative;
  z-index: 10;
}

.code-editor {
  width: 100%;
  max-width: 500px;
  background: #0d1117;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  border: 1px solid rgba(15, 252, 190, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.code-editor:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 15px rgba(15, 252, 190, 0.3);
}

.editor-header {
  background: #161b22;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(15, 252, 190, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.editor-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
}

.editor-btn:nth-child(1) {
  background-color: #ff5f57;
}

.editor-btn:nth-child(2) {
  background-color: #febc2e;
}

.editor-btn:nth-child(3) {
  background-color: #28c840;
}

.filename {
  margin-left: 10px;
  color: #8b949e;
  font-size: 0.9rem;
  font-family: 'Fira Code', monospace;
}

.editor-content {
  padding: 1.2rem 1.5rem 1.2rem 1rem;
  position: relative;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #c9d1d9;
  display: flex;
  width: 100%;
  align-items: flex-start;
}

.line-numbers {
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: 0.8rem;
  margin-right: 1rem;
  color: #6e7681;
  font-size: 0.85rem;
  user-select: none;
  border-right: 1px solid rgba(15, 252, 190, 0.3);
  min-width: 35px;
  line-height: 1.8;
}

.code-property {
  color: #79c0ff;
  font-weight: 500;
  margin-right: 2px;
}

pre {
  margin: 0;
  width: 100%;
  overflow-x: visible;
  margin-left: -5px;
  padding-top: 0;
}

.line-numbers span {
  padding-top: 0;
  padding-bottom: 0;
  height: 1.8em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

code {
  font-family: 'Fira Code', monospace;
  white-space: pre;
  line-height: 1.8;
  letter-spacing: 0.03em;
  display: block;
  width: 100%;
}

code span {
  transition: background-color 0.2s ease;
}

code:hover span:hover {
  background-color: rgba(15, 252, 190, 0.05);
}

.code-string {
  color: #a5d6ff;
  font-weight: 400;
  padding-left: 2px;
  padding-right: 2px;
}

.code-punctuation {
  color: #c9d1d9;
  font-weight: 600;
}

.editor-cursor {
  position: absolute;
  bottom: 2rem;
  left: calc(1rem + 16ch);
  width: 2px;
  height: 16px;
  background-color: #0FFCBE;
  animation: blink 1s infinite;
}

/* Section Styling */
.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
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

/* Tech About Section */
.tech-about {
  padding: 6rem 0;
  background-color: #f5f9fc;
  position: relative;
  width: 100%;
}

.tech-about::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, transparent, #f5f9fc);
}

.feature-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(16, 110, 190, 0.1);
  box-shadow: 0 10px 25px rgba(16, 110, 190, 0.08);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(16, 110, 190, 0.15);
}

.feature-card:hover .card-glow {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.feature-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 110, 190, 0.1);
  border-radius: 12px;
  margin-right: 1rem;
  color: #106EBE;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #106EBE;
}

.feature-description {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
}

.card-glow {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(15, 252, 190, 0.3) 0%, rgba(15, 252, 190, 0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Tech Skills Section */
.tech-skills {
  padding: 6rem 0;
  background-color: #0d1117;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.tech-skills::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, #f5f9fc, #0d1117);
  z-index: 1;
}

.tech-skills .section-title {
  color: #fff;
  position: relative;
  z-index: 2;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 90%;
  margin: 0 auto;
}

.skill-item {
  background: rgba(16, 110, 190, 0.1);
  border: 1px solid rgba(15, 252, 190, 0.2);
  border-radius: 10px;
  padding: 1.5rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  background: rgba(16, 110, 190, 0.2);
}

.skill-item:hover .skill-glow {
  opacity: 1;
}

.skill-icon {
  color: #0FFCBE;
  margin-bottom: 0.5rem;
}

.skill-name {
  color: #fff;
  font-weight: 500;
}

.skill-glow {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(15, 252, 190, 0.3) 0%, rgba(15, 252, 190, 0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.view-all-btn {
  background: rgba(15, 252, 190, 0.1);
  color: #0FFCBE;
  border: 1px solid rgba(15, 252, 190, 0.3);
  padding: 0.8rem 1.5rem;
}

.view-all-btn:hover {
  background: rgba(15, 252, 190, 0.2);
  box-shadow: 0 5px 15px rgba(15, 252, 190, 0.3);
}

/* Add matrix animation effect to hero section */
@keyframes matrix-fall {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(1000%);
    opacity: 0;
  }
}

.matrix-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 20px,
    rgba(15, 252, 190, 0.05) 20px,
    rgba(15, 252, 190, 0.05) 21px
  );
  animation: matrix-fall 25s linear infinite;
  z-index: 0;
}

/* Responsive Adjustments */
@media (max-width: 960px) {
  .hero-name {
    font-size: 2.5rem;
  }
  
  .tech-stats {
    flex-wrap: wrap;
  }
  
  .stat-divider {
    display: none;
  }
  
  .stat-item {
    width: 50%;
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .hero-buttons {
    flex-direction: column;
  }
  
  .tech-button {
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .secondary-btn {
    margin-left: 0 !important;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}
</style>
