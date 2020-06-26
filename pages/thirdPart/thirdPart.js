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
    ecPie: {
      onInit: function (canvas, width, height, dpr) {
        const pieChart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(pieChart);
        pieChart.setOption(getPieOption());

        return pieChart;
      }
    },
    ecAsia: {
      onInit: function (canvas, width, height, dpr) {
        const pieAsia = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(pieAsia);
        pieAsia.setOption(getAsiaOption());

        return pieAsia;
      }
    },
  },

  onReady() {
  },

  back: function () {
    wx.navigateTo({
      url: '/pages/secondPart/secondPart',
    })
  },

  go: function () {
    wx.navigateTo({
      url: '/pages/forthPart/forthPart',
    })
  }
});


function getPieOption() {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['category','账号活跃度','世界Top500项目数','世界Top10000项目数']
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
      type: 'category',
      data: ['小米','京东','360','微众银行','Deepin','华为','腾讯','PingCAP','百度','阿里']
  },
  series: [
      {
          name: '账号活跃度',
          type: 'bar',
          data: [5.26,6.70,6.90,7.28,10.12,10.43,26.01,33.31,37.95,110.49],
    color:'#FF0132'
      },
      {
          name: '世界Top500项目数',
          type: 'bar',
          data: [0,2,0,0,0,1,0,2,4,6],
    color:'#FF8C00'
      },
      {
          name: '世界Top10000项目数',
          type: 'bar',
          data: [2,4,2,0,2,4,18,16,15,65],
    color:'#FFD700'
      }
  ]
  };
}

function getBarOption() {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['项目活跃度','项目讨论数']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
},
xAxis: {
  type: 'value',
  boundaryGap: [0, 0.01],
  splitNumber:1
},
  yAxis: {
      type: 'category',
      data: ['tweakCompatible（IOS越狱工具）' , 'ansible（python类）', 'DefinitelyTyped（代码库）', 'tensorflow（谷歌）', 'kubernetes（谷歌）', 'first-contributions（新手指南）' , 'flutter（谷歌）' , 'azure-docs（微软）' , '996.ICU（中国）' , 'vscode（微软）']
  },
  series: [
      {
          name: '项目活跃度',
          type: 'bar',
          data: [18104,18330,19824,21984,22311,25695,30437,33600,34201,34371],
    color:'#FF4500'
      },
      {
          name: '项目讨论数',
          type: 'bar',
          data: [54975,77312,44571,53492,238964,9471,85735,96327,26279,83592],
    color:'#F5DEB3'
      }
  ]
  };
}

function getAsiaOption() {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} {b}% : {c} ({d}%)'
  },
  legend: {
      left: 'center',
      top: 'bottom',
      data: ['中国', '亚洲其他国家（万人）']
  },
  toolbox: {
      show: true,
      feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {
              show: true,
              type: ['pie', 'funnel']
          },
          restore: {show: true},
          saveAsImage: {show: true}
      }
  },
  series: [
     
      {
          name: '',
          type: 'pie',
          radius: [70, 120],
          center: ['50%', '50%'],
          roseType: 'area',
          data: [
              {value: 119.1, name: '中国'},
              {value: 265.3, name: '亚洲其他国家（万人）'}
          ],
    itemStyle: {
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
         },
               normal:{
            color:function(params) {
            //自定义颜色
            var colorList = [           
                      '#FF0000','#90EE90'
                ];
                return colorList[params.dataIndex]
             }
        }
    }
    
      }
  ]
}
}