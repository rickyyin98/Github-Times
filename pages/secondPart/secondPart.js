import * as echarts from '../../ec-canvas/echarts';

Page({
  data: {
    type: '收起',
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
      url: '/pages/firstPart/firstPart',
    })
  },

  go: function () {
    wx.navigateTo({
      url: '/pages/thirdPart/thirdPart',
    })
  },

  toggle: function(e) {
    var that = this;
    var type = that.data.type === '打开' ? '收起' : '打开';
    that.setData({
        type: type
    });
}
});


function getBarOption() {
  return {
    tooltip: {
      trigger: 'item',
showDelay: 10,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
      hideDelay: 10,            // 隐藏延迟，单位ms
      transitionDuration : 10,  // 动画变换时间，单位s
backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
      
shadowStyle : {                       // 阴影指示器样式设置
          width: 'auto',                   // 阴影大小
          color: '#D3D3D3'  // 阴影颜色
  }
  },
  },
legend: {
      data: [ '组织用户数（万人）','用户总数（万人）']
  },
grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
xAxis: [
      {
          type: 'category',
          data: ['2016', '2017', '2018', '2019']
      }
  ],
yAxis: [
      {
          type: 'value'
      }
  ],
series: [

      {
          name: '组织用户数（万人）',
          type: 'bar',
          barWidth:40,
          stack: '搜索引擎',
          data: [105,150,210,290],
  color:'	#FFD700	'
      },
      {
          name: '用户总数（万人）',
          type: 'bar',
          stack: '搜索引擎',
          data: [1625,2250,2890,3710],
  color:'	#FF6347	'
  }
]
  };
}

function getPieOption() {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} {b} : {c} ({d}%)'
  },
  legend: {
      left: 'center',
      top: 'bottom',
      data: ['亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲（万人）']
  },
  series: [
      {
          name: '',
          type: 'pie',
          radius: [20, 110],
          center: ['50%', '50%'],
          roseType: 'radius',
          label: {
              show: false
          },
          emphasis: {
              label: {
                  show: true
              }
          },
          data: [
              {value: 384.4, name: '亚洲'},
              {value: 309.7, name: '欧洲'},
              {value: 303.1, name: '北美洲'},
              {value: 63.6, name: '南美洲'},
              {value: 24.8, name: '非洲'},
              {value: 22.1, name: '大洋洲（万人）'}
             
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
                           '#ffb96d','#f79558','#f07143','#e84d2f','#e1291a','#d90505'
                 ];
                 return colorList[params.dataIndex]
              }
         }
       }

      },
      
  ]
  };
}

function getAsiaOption() {
  return {
    tooltip: {
        trigger: 'item',
        formatter: '{a} {b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: ['中国', '亚洲其他国家']
  },
    series: [
        {
            name: '用户数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
               
                {value: 119.1, name: '中国'},
                {value: 265.3, name: '亚洲其他国家'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
              normal:{
                color:function(params) {
                //自定义颜色
                var colorList = [           
                              '#f07143'
                    ];
                    return colorList[params.dataIndex]
                 }
            }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
}
}