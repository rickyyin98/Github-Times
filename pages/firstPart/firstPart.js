import * as echarts from '../../ec-canvas/echarts';

Page({
  data: {
    ecBar: {
      onInit: function (canvas, width, height, dpr) {
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(barChart);
        barChart.setOption(getBarOption());

        return barChart;
      }
    },
  },

  onReady() {
  },

  back: function () {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  go: function () {
    wx.navigateTo({
      url: '/pages/secondPart/secondPart',
    })
  }
});


function getBarOption() {
  return {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['贡献(contributions)', '复制(fork)', '新事件(new issues)', '星标(star)', '关注(watch)']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1.27', '2.3', '2.10', '2.17', '2.24', '3.2', '3.9', '3.16', '3.23', '3.30', '4.6', '4.13', '4.20', '4.27', '5.4', '5.11', '5.18', '5.25']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '贡献(contributions)',
        type: 'line',
        stack: '总量',
        data: [18, 30, 35, 39, 40, 40, 40, 11, 11, 43, 43, 43, 43, 43, 43, 43, 43, 15]
      },
      {
        name: '复制(fork)',
        type: 'line',
        stack: '总量',
        data: [174, 664, 790, 863, 878, 896, 906, 913, 913, 937, 937, 937, 937, 937, 937, 937, 944, 944]
      },
      {
        name: '新事件(new issues)',
        type: 'line',
        stack: '总量',
        data: [65, 138, 40, 13, 0, 4, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1]
      },
      {
        name: '星标(star)',
        type: 'line',
        stack: '总量',
        data: [830, 4628, 5422, 5902, 6004, 6135, 4740, 5580, 5580, 6302, 6302, 6302, 6302, 6302, 6302, 6302, 5080, 4840]
      },
      {
        name: '关注(watch)',
        type: 'line',
        stack: '总量',
        data: [56, 204, 237, 246, 243, 242, 243, 247, 247, 252, 252, 252, 252, 252, 252, 252, 253, 253]
      }
    ]
  };
}






