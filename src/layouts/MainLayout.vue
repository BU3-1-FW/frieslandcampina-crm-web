<template>
  <div class="main-layout">
    <SideMenu />
    <div class="main-content">
      <div class="main-inner">
        <TopBar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideMenu from '../components/SideMenu.vue'
import TopBar from '../components/TopBar.vue'
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
  background: #f4f6fa;
}
.main-content {
  flex: 1;
  height: 100vh;
  background: #f4f6fa;
  display: flex;
  flex-direction: column;
}
.main-inner {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px 32px 16px;
  box-sizing: border-box;
}
</style> 