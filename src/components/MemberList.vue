<template>
  <div class="member-list-container">
    <!-- 搜索栏 -->
    <el-card class="search-card">
      <el-form :inline="true" :model="searchForm" class="search-form">
        <el-form-item label="手机号">
          <el-input v-model="searchForm.phone" placeholder="请输入手机号" clearable />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name" placeholder="请输入姓名" clearable />
        </el-form-item>
        <el-form-item label="openid">
          <el-input v-model="searchForm.openid" placeholder="请输入openid" clearable />
        </el-form-item>
        <el-form-item label="unionid">
          <el-input v-model="searchForm.unionid" placeholder="请输入unionid" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 会员表格 -->
    <el-card class="table-card">
      <el-table :data="tableData" border stripe class="member-table" height="calc(100vh - 348px)">
        <el-table-column prop="index" label="序号" width="60" align="center" />
        <el-table-column prop="phone" label="手机号" width="120" />
        <el-table-column prop="unionid" label="微信unionid" width="220" />
        <el-table-column prop="open_id" label="公众号open_id" width="220" />
        <el-table-column prop="name" label="姓名" width="100" />
        <el-table-column prop="is_member" label="是否会员" width="100" align="center" />
        <el-table-column prop="register_channel" label="首次注册渠道" width="200" />
        <el-table-column prop="register_time" label="注册时间" width="130" />
        <el-table-column label="操作" width="110" align="center">
          <template #default="scope">
            <el-button type="primary" link @click="viewDetail(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrapper">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :total="total"
          :page-size="pageSize"
          v-model:current-page="currentPage"
          @current-change="onPageChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const searchForm = ref({ phone: '', name: '', openid: '', unionid: '' });
const tableData = ref([
  { index: 1, phone: '185****5839', unionid: 'oeA830jtqIwvfjZZiLuL3G...', open_id: 'oSG6NjvvsTvePrGhCdg...', name: 'yuki', is_member: 'N', register_channel: '京东-美素佳儿京...', register_time: '2025-04-30' },
  { index: 2, phone: '178****3616', unionid: 'oeA830jtqIwvfjZZiLuL3G...', open_id: 'oSG6NjvvsTvePrGhCdg...', name: 'andy', is_member: 'N', register_channel: '菲常美妈', register_time: '2021-03-29' },
  { index: 3, phone: '139****2244', unionid: 'oeA830pSvzVxFw1xNC...', open_id: 'oSG6NjlDuq1P29tpySnl...', name: 'chen', is_member: 'N', register_channel: '美素佳儿官方网站', register_time: '2014-03-02' },
  { index: 4, phone: '153****9219', unionid: 'oeA830qSL9VazN83OM...', open_id: 'oSG6Njm96I3HMHuv5O...', name: 'tim', is_member: 'N', register_channel: '美素佳儿公众号', register_time: '2024-04-14' },
  { index: 5, phone: '130****2586', unionid: '', open_id: '', name: 'yuki', is_member: 'N', register_channel: '历史线下', register_time: '2015-12-05' },
  { index: 6, phone: '139****2423', unionid: '', open_id: '', name: 'andy', is_member: 'N', register_channel: '美素佳儿公众号', register_time: '2017-08-27' },
  { index: 7, phone: '137****3969', unionid: '', open_id: '', name: 'tim', is_member: 'N', register_channel: '天猫-皇家美素佳...', register_time: '2024-10-07' },
  { index: 8, phone: '178****3676', unionid: 'oeA830lThtt60zz9zGH...', open_id: '', name: 'chen', is_member: 'N', register_channel: '美素佳儿微商城', register_time: '2021-12-13' },
  { index: 9, phone: '130****4197', unionid: '', open_id: '', name: '', is_member: 'N', register_channel: '历史线下', register_time: '2014-09-20' },
  { index: 10, phone: '178****3982', unionid: 'oeA830iR8obhlhmWd4...', open_id: '', name: '', is_member: 'N', register_channel: '美素佳儿微商城', register_time: '2022-07-08' },
]);
const total = ref(33199740);
const pageSize = ref(10);
const currentPage = ref(1);

function onSearch() {
  // 这里后续可对接接口
}
function onPageChange(page) {
  currentPage.value = page;
  // 这里后续可对接接口
}
function viewDetail(row) {
  // 这里可弹窗或跳转详情页
  alert('查看详情：' + JSON.stringify(row));
}
</script>

<style scoped>
.member-list-container {
  padding: 0;
  display: flex;
  flex-direction: column;
}
.search-card {
  margin-bottom: 12px;
  border-radius: 14px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  background: #f7f9fb;
  border: none;
}
.search-form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
.search-form .el-input__wrapper {
  border-radius: 8px;
  background: #f4f6fa;
  border: none;
  box-shadow: none;
  min-height: 32px;
  padding: 0 8px;
}
.search-form .el-input__inner {
  background: transparent;
  border: none;
  box-shadow: none;
  height: 32px;
  font-size: 14px;
}
.search-form .el-input.is-focus .el-input__wrapper {
  box-shadow: 0 0 0 2px #e6f0fa;
  background: #fff;
}
.search-form .el-form-item {
  margin-bottom: 0;
}
.table-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  background: #fff;
  border: none;
  padding-bottom: 12px;
}
.member-table {
  border-radius: 10px;
  overflow: hidden;
  font-size: 14px;
  --el-table-row-height: 36px;
  height: 100%;
}
.el-table th, .el-table td {
  background: #f7f9fb;
  color: #2d3a4b;
  padding: 6px 0;
}
.el-table th {
  font-weight: 600;
  background: #e6f0fa;
}
.el-button--primary.is-link {
  color: #1976d2;
  font-weight: 500;
}
.el-button--primary.is-link:hover {
  color: #125ea7;
  text-decoration: underline;
}
.pagination-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.el-pagination {
  --el-pagination-bg-color: #f7f9fb;
  --el-pagination-border-radius: 8px;
  --el-pagination-button-bg-color: #e6f0fa;
  --el-pagination-hover-color: #1976d2;
}
</style> 