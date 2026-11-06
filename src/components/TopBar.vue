<template>
  <div class="top-bar">
    <div class="left"></div>
    <div class="right">
      <el-avatar size="medium" src="/avatar.png" />
      <span class="username">yuki.z</span>
    </div>
  </div>
</template>

<script setup>
// 可根据需要引入 props 或接口
</script>

<style scoped>
.top-bar {
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  padding: 0 32px;
  border-radius: 0 0 12px 12px;
  z-index: 10;
  margin-bottom: 24px;
}
.right {
  display: flex;
  align-items: center;
}
.username {
  margin-left: 12px;
  font-size: 16px;
  color: #2d3a4b;
  font-weight: 500;
}
</style> 