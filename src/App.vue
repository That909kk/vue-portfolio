<template>
  <v-app class="tech-background">
    <!-- Circuit Lines Animation (Background) -->
    <div class="circuit-lines"></div>
    
    <!-- Navigation Bar -->
    <v-app-bar
      app
      color="transparent"
      dark
      elevation="0"
      :height="80"
      class="glass-navbar"
    >
      <v-container class="d-flex align-center px-6">
        <v-toolbar-title class="text-h5 font-weight-bold tech-logo">
          <v-icon left class="mr-2 tech-icon" color="secondary">mdi-code-braces</v-icon>
          <span class="logo-text">&lt;LeMinhThat/&gt;</span>
        </v-toolbar-title>
        
        <v-spacer></v-spacer>
        
        <!-- Desktop Navigation -->
        <div class="hidden-sm-and-down tech-nav">
          <v-btn
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            variant="text"
            class="nav-button mx-1"
            color="secondary"
          >
            <v-icon class="nav-icon">{{ item.icon }}</v-icon>
            <span class="nav-text">{{ item.title }}</span>
          </v-btn>
        </div>
        
        <!-- Mobile Navigation -->
        <v-app-bar-nav-icon
          class="hidden-md-and-up tech-nav-icon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="hidden-md-and-up tech-drawer"
      color="background"
      location="right"
    >
      <div class="drawer-header pa-4">
        <v-icon size="40" color="secondary" class="mb-2">mdi-code-tags</v-icon>
        <h3 class="text-primary">Dev Menu</h3>
      </div>
      
      <v-divider></v-divider>
      
      <v-list class="tech-list">
        <v-list-item
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.path"
          @click="drawer = false"
          class="tech-list-item"
        >
          <template v-slot:prepend>
            <v-icon color="secondary" class="tech-drawer-icon">{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title class="tech-drawer-title">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="tech-main">
      <div class="content-wrapper">
        <router-view />
      </div>
    </v-main>

    <!-- Footer -->
    <v-footer
      color="transparent"
      dark
      padless
      class="tech-footer"
    >
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center">
            <div class="terminal-window">
              <div class="terminal-header">
                <div class="terminal-button"></div>
                <div class="terminal-button"></div>
                <div class="terminal-button"></div>
              </div>
              <div class="terminal-content">
                <span class="terminal-prompt">$ </span>
                <span class="terminal-text">echo "&copy; {{ new Date().getFullYear() }} Le Minh That | Built with Vue.js & Vuetify"</span>
                <span class="terminal-cursor">_</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const drawer = ref(false)
const activeTab = ref(0)

const navItems = [
  { title: 'Home', path: '/', icon: 'mdi-home' },
  { title: 'About', path: '/about', icon: 'mdi-account' },
  { title: 'Skills', path: '/skills', icon: 'mdi-brain' },
  { title: 'Projects', path: '/projects', icon: 'mdi-folder-multiple' },
  { title: 'Contact', path: '/contact', icon: 'mdi-email' },
]
</script>

<style scoped>
/* Tech Theme Styles */
.tech-background {
  background-color: #050a18;
  color: #e5e7eb;
  position: relative;
  overflow: hidden;
}

/* Circuit Lines Animation */
.circuit-lines {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.1;
  background: 
    linear-gradient(90deg, rgba(16, 110, 190, 0.1) 1px, transparent 1px) 0 0 / 30px 30px,
    linear-gradient(rgba(16, 110, 190, 0.1) 1px, transparent 1px) 0 0 / 30px 30px,
    radial-gradient(rgba(15, 252, 190, 0.1) 2px, transparent 2px) 0 0 / 60px 60px;
  animation: circuit-move 15s linear infinite;
}

@keyframes circuit-move {
  0% {
    background-position: 0 0, 0 0, 0 0;
  }
  100% {
    background-position: 30px 30px, 30px 30px, 30px 30px;
  }
}

/* Glass Navbar */
.glass-navbar {
  background: rgba(5, 10, 24, 0.7) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(15, 252, 190, 0.2);
}

/* Logo Styling */
.tech-logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-family: 'Consolas', monospace;
  font-weight: 600;
  color: #0FFCBE;
  position: relative;
}

.tech-icon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
}

/* Navigation Styling */
.tech-nav {
  display: flex;
}

.nav-button {
  position: relative;
  margin: 0 5px;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid transparent;
}

.nav-button:hover {
  background: rgba(15, 252, 190, 0.1);
  border: 1px solid rgba(15, 252, 190, 0.3);
  box-shadow: 0 0 15px rgba(15, 252, 190, 0.3);
}

.nav-button:hover .nav-icon,
.nav-button:hover .nav-text {
  color: #0FFCBE !important;
}

.nav-button:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #0FFCBE;
  transition: width 0.3s ease;
}

.nav-button:hover:before {
  width: 100%;
}

.active-nav {
  background: rgba(15, 252, 190, 0.1);
  border: 1px solid rgba(15, 252, 190, 0.3);
}

.active-nav:before {
  width: 100%;
}

/* Mobile Nav */
.tech-nav-icon {
  color: #0FFCBE !important;
}

/* Drawer Styling */
.tech-drawer {
  background: linear-gradient(to bottom, #050a18, #0d1b3a) !important;
  border-left: 1px solid rgba(15, 252, 190, 0.3);
}

.drawer-header {
  text-align: center;
  padding: 20px 0;
}

.tech-list-item {
  margin: 8px 0;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.tech-list-item:hover {
  background: rgba(15, 252, 190, 0.1) !important;
}

.tech-drawer-icon {
  margin-right: 12px;
}

.tech-drawer-title {
  font-family: 'Consolas', monospace;
  color: #e5e7eb;
}

/* Main Content */
.tech-main {
  position: relative;
  z-index: 1;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Terminal Footer */
.tech-footer {
  background: transparent;
  padding: 20px 0;
}

.terminal-window {
  background: #1a1a1a;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}

.terminal-header {
  background: #2d2d2d;
  padding: 8px;
  display: flex;
  align-items: center;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: #ff5f56;
}

.terminal-button:nth-child(2) {
  background-color: #ffbd2e;
}

.terminal-button:nth-child(3) {
  background-color: #27c93f;
}

.terminal-content {
  padding: 16px;
  font-family: 'Consolas', monospace;
  font-size: 14px;
  color: #f1f1f1;
  text-align: left;
}

.terminal-prompt {
  color: #0FFCBE;
  font-weight: bold;
}

.terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 15px;
  background-color: #0FFCBE;
  animation: blink 1s step-end infinite;
  margin-left: 4px;
  vertical-align: middle;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
