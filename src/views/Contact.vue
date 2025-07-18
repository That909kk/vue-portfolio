<template>
  <div class="tech-contact-view">
    <!-- Header Section -->
    <div class="tech-page-header">
      <div class="circuit-grid"></div>
      <v-container class="header-content">
        <h1 class="tech-title text-center">
          <span class="code-bracket">&lt;</span>
          Contact
          <span class="code-bracket">/&gt;</span>
        </h1>
        <p class="tech-subtitle text-center">
          Let's connect! I'm always open to discussing new opportunities and collaborations.
        </p>
      </v-container>
    </div>

    <!-- Contact Content -->
    <div class="contact-content">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8">
            <v-row>
              <!-- Contact Form -->
              <v-col cols="12" md="7">
                <div class="contact-form-card">
                  <div class="form-header">
                    <h2 class="form-title">
                      <v-icon class="mr-2">mdi-message-text</v-icon>
                      Send Message
                    </h2>
                    <div class="form-glow"></div>
                  </div>
                  
                  <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="formData.name"
                          label="Full Name *"
                          variant="outlined"
                          :rules="nameRules"
                          required
                          prepend-inner-icon="mdi-account"
                          class="tech-input"
                        ></v-text-field>
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="formData.email"
                          label="Email Address *"
                          variant="outlined"
                          type="email"
                          :rules="emailRules"
                          required
                          prepend-inner-icon="mdi-email"
                          class="tech-input"
                        ></v-text-field>
                      </v-col>
                      
                      <v-col cols="12">
                        <v-text-field
                          v-model="formData.subject"
                          label="Subject *"
                          variant="outlined"
                          :rules="subjectRules"
                          required
                          prepend-inner-icon="mdi-tag"
                          class="tech-input"
                        ></v-text-field>
                      </v-col>
                      
                      <v-col cols="12">
                        <v-textarea
                          v-model="formData.message"
                          label="Your Message *"
                          variant="outlined"
                          rows="6"
                          :rules="messageRules"
                          required
                          prepend-inner-icon="mdi-message"
                          class="tech-input"
                        ></v-textarea>
                      </v-col>
                      
                      <v-col cols="12">
                        <v-btn
                          type="submit"
                          color="primary"
                          size="large"
                          :loading="loading"
                          :disabled="!valid"
                          block
                          class="tech-submit-btn"
                        >
                          <v-icon left>mdi-send</v-icon>
                          Send Message
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </div>
              </v-col>
              
              <!-- Contact Info -->
              <v-col cols="12" md="5">
                <div class="contact-info-card">
                  <div class="info-header">
                    <h2 class="info-title">
                      <v-icon class="mr-2">mdi-information</v-icon>
                      Contact Information
                    </h2>
                    <div class="info-glow"></div>
                  </div>
                  
                  <div class="contact-details">
                    <div v-for="(contact, index) in contactInfo" :key="index" class="contact-item">
                      <div class="contact-icon">
                        <v-icon :color="contact.color">{{ contact.icon }}</v-icon>
                      </div>
                      <div class="contact-text">
                        <h4 class="contact-title">{{ contact.title }}</h4>
                        <p class="contact-value">{{ contact.value }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="social-section">
                    <h3 class="social-title">Connect with me</h3>
                    <div class="social-links">
                      <v-btn
                        v-for="(social, index) in socialLinks"
                        :key="index"
                        :color="social.color"
                        :href="social.url"
                        target="_blank"
                        class="social-btn"
                        size="large"
                        icon
                      >
                        <v-icon>{{ social.icon }}</v-icon>
                      </v-btn>
                    </div>
                  </div>
                  
                  <div class="availability-section">
                    <h3 class="availability-title">Availability</h3>
                    <div class="availability-status">
                      <div class="status-indicator"></div>
                      <span class="status-text">Available for new projects</span>
                    </div>
                    <div class="working-hours">
                      <div v-for="(schedule, index) in workingHours" :key="index" class="schedule-item">
                        <span class="schedule-day">{{ schedule.day }}</span>
                        <span class="schedule-hours">{{ schedule.hours }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Success Snackbar -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="4000"
      top
    >
      {{ snackbar.message }}
      
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import profileData from '../data/data.json'

const form = ref()
const valid = ref(false)
const loading = ref(false)

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const snackbar = reactive({
  show: false,
  message: '',
  color: 'success'
})

const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length >= 2) || 'Name must be at least 2 characters'
]

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const subjectRules = [
  (v: string) => !!v || 'Subject is required',
  (v: string) => (v && v.length >= 5) || 'Subject must be at least 5 characters'
]

const messageRules = [
  (v: string) => !!v || 'Message is required',
  (v: string) => (v && v.length >= 10) || 'Message must be at least 10 characters'
]

const contactInfo = [
  {
    icon: 'mdi-email',
    title: 'Email',
    value: profileData.personal_information.email,
    color: '#106EBE'
  },
  {
    icon: 'mdi-phone',
    title: 'Phone',
    value: profileData.personal_information.phone,
    color: '#0FFCBE'
  },
  {
    icon: 'mdi-map-marker',
    title: 'Address',
    value: profileData.personal_information.address,
    color: '#106EBE'
  },
  {
    icon: 'mdi-github',
    title: 'GitHub',
    value: profileData.personal_information.github,
    color: '#333'
  }
]

const socialLinks = [
  {
    icon: 'mdi-linkedin',
    color: '#0077B5',
    url: 'https://linkedin.com/in/yourprofile'
  },
  {
    icon: 'mdi-github',
    color: '#333',
    url: profileData.personal_information.github
  }
]

const workingHours = [
  { day: 'Monday - Friday', hours: '9:00 - 18:00' },
  { day: 'Saturday', hours: '10:00 - 16:00' },
  { day: 'Sunday', hours: 'By appointment' }
]

const submitForm = async () => {
  if (!valid.value) return
  
  loading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.assign(formData, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    form.value?.reset()
    
    snackbar.show = true
    snackbar.message = 'Your message has been sent successfully! I will respond as soon as possible.'
    snackbar.color = 'success'
    
  } catch (error) {
    snackbar.show = true
    snackbar.message = 'An error occurred while sending your message. Please try again!'
    snackbar.color = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

.tech-contact-view {
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

.header-content {
  position: relative;
  z-index: 2;
}

.tech-title {
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
  color: #8b949e;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Content styling */
.contact-content {
  padding: 4rem 0;
  width: 100vw;
  max-width: 100%;
  margin: 0;
}

/* Contact Form Card */
.contact-form-card {
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(16, 110, 190, 0.1);
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.form-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #106EBE;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.form-glow {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #0FFCBE, transparent);
  border-radius: 2px;
}

.tech-input {
  margin-bottom: 1rem;
}

.tech-input :deep(.v-field) {
  border-radius: 12px;
  border: 2px solid #e1e8ed;
  transition: all 0.3s ease;
}

.tech-input :deep(.v-field:hover) {
  border-color: #106EBE;
}

.tech-input :deep(.v-field--focused) {
  border-color: #0FFCBE;
  box-shadow: 0 0 0 3px rgba(15, 252, 190, 0.1);
}

.tech-submit-btn {
  background: linear-gradient(135deg, #106EBE 0%, #0FFCBE 100%);
  border-radius: 12px;
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.tech-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(16, 110, 190, 0.3);
}

/* Contact Info Card */
.contact-info-card {
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(16, 110, 190, 0.1);
  position: relative;
  overflow: hidden;
  height: 100%;
}

.info-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.info-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #106EBE;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.info-glow {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #0FFCBE, transparent);
  border-radius: 2px;
}

.contact-details {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-item:hover {
  background: rgba(16, 110, 190, 0.05);
  transform: translateX(5px);
}

.contact-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 110, 190, 0.1);
  margin-right: 1rem;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  background: rgba(16, 110, 190, 0.2);
  transform: scale(1.1);
}

.contact-text {
  flex: 1;
}

.contact-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #106EBE;
  margin-bottom: 0.25rem;
}

.contact-value {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

/* Social Section */
.social-section {
  padding: 1.5rem 0;
  border-top: 1px solid rgba(16, 110, 190, 0.1);
  border-bottom: 1px solid rgba(16, 110, 190, 0.1);
  margin-bottom: 2rem;
}

.social-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #106EBE;
  margin-bottom: 1rem;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-btn {
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Availability Section */
.availability-section {
  text-align: center;
}

.availability-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #106EBE;
  margin-bottom: 1rem;
}

.availability-status {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(15, 252, 190, 0.1);
  border-radius: 50px;
  border: 1px solid rgba(15, 252, 190, 0.3);
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0FFCBE;
  margin-right: 0.5rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.status-text {
  font-weight: 500;
  color: #106EBE;
}

.working-hours {
  background: rgba(16, 110, 190, 0.05);
  border-radius: 12px;
  padding: 1rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.9rem;
}

.schedule-day {
  font-weight: 600;
  color: #106EBE;
}

.schedule-hours {
  color: #666;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .tech-title {
    font-size: 2.5rem;
  }
  
  .contact-form-card,
  .contact-info-card {
    padding: 2rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
  }
  
  .contact-icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 600px) {
  .tech-title {
    font-size: 2rem;
  }
  
  .contact-form-card,
  .contact-info-card {
    padding: 1.5rem;
  }
  
  .social-links {
    flex-wrap: wrap;
  }
}
</style>
