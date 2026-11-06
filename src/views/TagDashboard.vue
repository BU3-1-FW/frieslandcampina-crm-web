<template>
  <div class="dashboard-container">
    <el-card class="dashboard-card">
      <div class="dashboard-title">标签使用情况 Dashboard</div>
      <div class="dashboard-charts">
        <div class="pie-section">
          <div class="chart-title">平台分布</div>
          <v-chart :option="platformPieOption" class="pie-chart" />
        </div>
        <div class="pie-section">
          <div class="chart-title">标签名称分布</div>
          <v-chart :option="tagPieOption" class="pie-chart" />
        </div>
      </div>
      <div class="trend-section">
        <div class="chart-title">标签使用趋势</div>
        <el-row :gutter="12" class="trend-filters">
          <el-col :span="6">
            <el-select v-model="trendPlatform" placeholder="选择平台" clearable>
              <el-option v-for="item in platforms" :key="item" :label="item" :value="item" />
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="trendTag" placeholder="选择标签" clearable>
              <el-option v-for="item in tags" :key="item" :label="item" :value="item" />
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="trendTimeType" placeholder="时间分组" clearable>
              <el-option label="年" value="year" />
              <el-option label="季度" value="quarter" />
              <el-option label="月" value="month" />
              <el-option label="日" value="day" />
              <el-option label="最近24小时" value="hour" />
            </el-select>
          </el-col>
        </el-row>
        <v-chart :option="trendOption" class="trend-chart" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElCard, ElRow, ElCol, ElSelect, ElOption } from 'element-plus';
import VChart from 'vue-echarts';

const platforms = ['小程序', '公众号', 'APP', 'H5'];
const tags = ['新客', '高活跃', '高价值', '沉睡', '流失预警'];

// 饼图mock数据
const platformPieOption = {
  tooltip: { trigger: 'item' },
  legend: { top: 'bottom' },
  series: [
    {
      name: '平台',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
      label: { show: false, position: 'center' },
      emphasis: { label: { show: true, fontSize: 18, fontWeight: 'bold' } },
      data: [
        { value: 1048, name: '小程序' },
        { value: 735, name: '公众号' },
        { value: 580, name: 'APP' },
        { value: 484, name: 'H5' },
      ],
    },
  ],
};
const tagPieOption = {
  tooltip: { trigger: 'item' },
  legend: { top: 'bottom' },
  series: [
    {
      name: '标签',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
      label: { show: false, position: 'center' },
      emphasis: { label: { show: true, fontSize: 18, fontWeight: 'bold' } },
      data: [
        { value: 800, name: '新客' },
        { value: 600, name: '高活跃' },
        { value: 400, name: '高价值' },
        { value: 300, name: '沉睡' },
        { value: 200, name: '流失预警' },
      ],
    },
  ],
};

// 趋势图相关
const trendPlatform = ref('');
const trendTag = ref('');
const trendTimeType = ref('month');

const trendOption = computed(() => {
  // mock数据，实际可根据trendPlatform、trendTag、trendTimeType动态生成
  let xData = [];
  let yData = [];
  if (trendTimeType.value === 'year') {
    xData = ['2021', '2022', '2023', '2024'];
    yData = [200, 400, 600, 800];
  } else if (trendTimeType.value === 'quarter') {
    xData = ['Q1', 'Q2', 'Q3', 'Q4'];
    yData = [120, 300, 450, 700];
  } else if (trendTimeType.value === 'month') {
    xData = ['1月', '2月', '3月', '4月', '5月', '6月'];
    yData = [50, 80, 120, 160, 200, 240];
  } else if (trendTimeType.value === 'day') {
    xData = ['5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07'];
    yData = [10, 20, 30, 40, 50, 60, 70];
  } else if (trendTimeType.value === 'hour') {
    xData = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    yData = Array.from({ length: 24 }, () => Math.floor(Math.random() * 20 + 10));
  }
  return {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: xData, boundaryGap: false },
    yAxis: { type: 'value' },
    series: [
      {
        name: '标签使用量',
        type: 'line',
        smooth: true,
        data: yData,
        areaStyle: { color: '#e6f0fa' },
        lineStyle: { color: '#1976d2', width: 3 },
        symbol: 'circle',
        symbolSize: 8,
      },
    ],
    grid: { left: 30, right: 30, top: 40, bottom: 30 },
  };
});
</script>

<style scoped>
.dashboard-container {
  padding: 32px 0 0 0;
  display: flex;
  justify-content: center;
  background: #f4f6fa;
  min-height: 100vh;
}
.dashboard-card {
  width: 100%;
  max-width: 1440px;
  border-radius: 16px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  background: #fff;
  border: none;
  padding: 32px 24px 24px 24px;
}
.dashboard-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #2d3a4b;
}
.dashboard-charts {
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
}
.pie-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pie-chart {
  width: 320px;
  height: 240px;
}
.trend-section {
  margin-top: 12px;
}
.chart-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #1976d2;
}
.trend-filters {
  margin-bottom: 12px;
}
.trend-chart {
  width: 100%;
  height: 320px;
}
</style> 