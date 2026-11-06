<template>
  <el-menu :default-active="activeMenu" class="side-menu" router>
    <div class="logo">
      <img src="/logo.png" alt="logo" />
    </div>
    <el-menu-item index="/members">
      <el-icon><User /></el-icon>
      会员列表
    </el-menu-item>
    <el-menu-item index="/points">
      <el-icon><Coin /></el-icon>
      积分管理
    </el-menu-item>
    <el-menu-item index="/tags">
      <el-icon><CollectionTag /></el-icon>
      标签查询
    </el-menu-item>
    <el-menu-item index="/system">
      <el-icon><Setting /></el-icon>
      系统管理
    </el-menu-item>
    <el-menu-item index="/dashboard">
      <el-icon><PieChart /></el-icon>
      数据看板
    </el-menu-item>
    <el-menu-item index="/workbench">
      <el-icon><Briefcase /></el-icon>
      工作台
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue';
import { User, Coin, CollectionTag, Setting, Briefcase, PieChart } from '@element-plus/icons-vue';
const activeMenu = ref('/members');
</script>

<style scoped>
.side-menu {
  width: 180px;
  min-height: 100vh;
  background: #f7f9fb;
  border-right: 1px solid #e6e8ec;
  box-shadow: 2px 0 12px 0 rgba(0,0,0,0.04);
  padding: 0;
  margin: 0;
  border-radius: 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 18px 0 10px 0;
  border-bottom: 1px solid #e6e8ec;
  margin-bottom: 8px;
}
.logo img {
  height: 32px;
  max-width: 110px;
  object-fit: contain;
}
.el-menu-item {
  border-radius: 6px;
  margin: 2px 8px;
  height: 36px;
  font-size: 15px;
  color: #2d3a4b;
  transition: background 0.2s;
}
.el-menu-item.is-active,
.el-menu-item:hover {
  background: #e6f0fa;
  color: #1976d2;
}
.el-icon {
  margin-right: 8px;
}
</style> 