<template>
  <div class="tech-about-view">
    <!-- Tech-themed header -->
    <div class="tech-page-header">
      <div class="circuit-grid"></div>
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" lg="10" class="text-center">
            <h1 class="tech-title">
              <span class="code-bracket">&lt;</span>
              {{ uiText.sections.about_title }}
              <span class="code-bracket">/&gt;</span>
            </h1>
            <p class="tech-subtitle">{{ uiText.sections.about_subtitle }}</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Main content -->
    <div class="about-content">
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" lg="10">
            <!-- About Me Section -->
            <div class="about-section mb-8">
              <div class="section-header">
                <h2 class="section-title">
                  <span class="title-decorator"></span>
                  My Story
                  <span class="title-decorator"></span>
                </h2>
              </div>
              
              <div class="story-card">
                <div class="story-content">
                  <div class="story-icon">
                    <v-icon size="48" color="primary">mdi-account-circle</v-icon>
                  </div>
                  <div class="story-text">
                    <p class="story-description">{{ profileData.about_me }}</p>
                  </div>
                </div>
                <div class="story-glow"></div>
              </div>
            </div>

            <!-- Education & Personal Info Grid -->
            <v-row class="mt-8">
              <!-- Education -->
              <v-col cols="12" md="6">
                <div class="info-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <v-icon size="36" color="primary">mdi-school</v-icon>
                    </div>
                    <h3 class="card-title">Education</h3>
                  </div>
                  
                  <div class="education-details">
                    <div class="education-item">
                      <div class="education-icon">
                        <v-icon color="secondary">mdi-university</v-icon>
                      </div>
                      <div class="education-content">
                        <h4 class="education-title">{{ profileData.education.university }}</h4>
                        <p class="education-subtitle">{{ profileData.education.degree }}</p>
                      </div>
                    </div>
                    
                    <div class="education-item">
                      <div class="education-icon">
                        <v-icon color="secondary">mdi-book-open-variant</v-icon>
                      </div>
                      <div class="education-content">
                        <h4 class="education-title">{{ profileData.education.major }}</h4>
                        <p class="education-subtitle">{{ profileData.education.period }}</p>
                      </div>
                    </div>
                    
                    <div class="education-item">
                      <div class="education-icon">
                        <v-icon color="secondary">mdi-star</v-icon>
                      </div>
                      <div class="education-content">
                        <h4 class="education-title">GPA: {{ profileData.education.gpa }}</h4>
                        <p class="education-subtitle">Academic Performance</p>
                      </div>
                    </div>
                    
                    <div class="education-item">
                      <div class="education-icon">
                        <v-icon color="secondary">mdi-translate</v-icon>
                      </div>
                      <div class="education-content">
                        <h4 class="education-title">Languages</h4>
                        <p class="education-subtitle">
                          English: {{ profileData.education.languages.english }}<br>
                          Vietnamese: {{ profileData.education.languages.vietnamese }}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card-glow"></div>
                </div>
              </v-col>
              
              <!-- Personal Information -->
              <v-col cols="12" md="6">
                <div class="info-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <v-icon size="36" color="primary">mdi-account-details</v-icon>
                    </div>
                    <h3 class="card-title">Personal Information</h3>
                  </div>
                  
                  <div class="personal-details">
                    <div class="personal-item">
                      <div class="personal-icon">
                        <v-icon color="secondary">mdi-account</v-icon>
                      </div>
                      <div class="personal-content">
                        <h4 class="personal-title">{{ profileData.personal_information.name }}</h4>
                        <p class="personal-subtitle">{{ profileData.personal_information.role }}</p>
                      </div>
                    </div>
                    
                    <div class="personal-item">
                      <div class="personal-icon">
                        <v-icon color="secondary">mdi-email</v-icon>
                      </div>
                      <div class="personal-content">
                        <h4 class="personal-title">{{ profileData.personal_information.email }}</h4>
                        <p class="personal-subtitle">Email Address</p>
                      </div>
                    </div>
                    
                    <div class="personal-item">
                      <div class="personal-icon">
                        <v-icon color="secondary">mdi-phone</v-icon>
                      </div>
                      <div class="personal-content">
                        <h4 class="personal-title">{{ profileData.personal_information.phone }}</h4>
                        <p class="personal-subtitle">Phone Number</p>
                      </div>
                    </div>
                    
                    <div class="personal-item">
                      <div class="personal-icon">
                        <v-icon color="secondary">mdi-map-marker</v-icon>
                      </div>
                      <div class="personal-content">
                        <h4 class="personal-title">{{ profileData.personal_information.address }}</h4>
                        <p class="personal-subtitle">Location</p>
                      </div>
                    </div>
                    
                    <div class="personal-item">
                      <div class="personal-icon">
                        <v-icon color="secondary">mdi-cake-variant</v-icon>
                      </div>
                      <div class="personal-content">
                        <h4 class="personal-title">{{ formatDate(profileData.personal_information.date_of_birth) }}</h4>
                        <p class="personal-subtitle">Date of Birth</p>
                      </div>
                    </div>
                    
                    <div class="personal-item">
                      <div class="personal-icon">
                        <v-icon color="secondary">mdi-github</v-icon>
                      </div>
                      <div class="personal-content">
                        <a :href="profileData.personal_information.github" target="_blank" class="github-link">
                          <h4 class="personal-title">GitHub Profile</h4>
                          <p class="personal-subtitle">View my code repositories</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card-glow"></div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import profileData from '../data/data.json'

const uiText = profileData.ui_text

// Function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('vi-VN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date)
}
</script>

<style scoped>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

.tech-about-view {
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
.about-content {
  padding: 3rem 0;
  width: 100vw;
  max-width: 100%;
  margin: 0;
}

.about-section {
  margin-bottom: 3rem;
}

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

.story-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(16, 110, 190, 0.1);
  transition: all 0.3s ease;
}

.story-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(16, 110, 190, 0.15);
}

.story-card:hover .story-glow {
  opacity: 1;
}

.story-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.story-icon {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 110, 190, 0.1);
  border-radius: 50%;
}

.story-text {
  flex: 1;
}

.story-description {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  letter-spacing: 0.01em;
}

.story-glow {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(15, 252, 190, 0.3) 0%, rgba(15, 252, 190, 0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Info cards */
.info-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(16, 110, 190, 0.1);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(16, 110, 190, 0.15);
}

.info-card:hover .card-glow {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.card-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 110, 190, 0.1);
  border-radius: 50%;
  margin-right: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #106EBE;
  margin: 0;
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

/* Education details */
.education-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(16, 110, 190, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.education-item:hover {
  background: rgba(16, 110, 190, 0.1);
  transform: translateX(5px);
}

.education-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 252, 190, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.education-content {
  flex: 1;
}

.education-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #106EBE;
  margin: 0 0 0.25rem 0;
}

.education-subtitle {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

/* Personal details */
.personal-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.personal-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(16, 110, 190, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.personal-item:hover {
  background: rgba(16, 110, 190, 0.1);
  transform: translateX(5px);
}

.personal-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 252, 190, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.personal-content {
  flex: 1;
}

.personal-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #106EBE;
  margin: 0 0 0.25rem 0;
}

.personal-subtitle {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

.github-link {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.github-link:hover {
  color: #0FFCBE;
}

.github-link:hover .personal-title {
  color: #0FFCBE;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .tech-title {
    font-size: 2.5rem;
  }
  
  .story-content {
    flex-direction: column;
    text-align: center;
  }
  
  .story-icon {
    align-self: center;
  }
}

@media (max-width: 600px) {
  .tech-title {
    font-size: 2rem;
  }
  
  .story-card {
    padding: 1.5rem;
  }
  
  .info-card {
    padding: 1.5rem;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
  }
  
  .card-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
