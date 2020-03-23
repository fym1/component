$(function() {
  var data = [
    ['Java', '1', '降', '-0.01%'],
    ['C', '2', '升', '+2.44%'],
    ['Python', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#', '5', '升', '+2.07%'],
    ['Visual Basic .NET', '6', '降', '-1.17%'],
    ['JavaScript', '7', '降', '-0.85%']
  ];
  var container = $('.handsontable');
  var myChart = echarts.init(document.getElementById('main'));
  var xData = [2000,2005,2010,2015,2020];
      yData = [6,9,8,8,7];
  var option = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {
      trigger:'axis',
      formatter: '&nbsp&nbsp{a}<br/>{b0}: {c0}'
    },
    // legend: {
    //     data:['排名']
    // },
    xAxis: {
        data: xData,
        minorSplitLine:{
          show:true
        }
    },
    yAxis: {},
    series: [{
        name: '排名',
        type: 'line',
        smooth:false,
        data: yData
    }]
  };
  myChart.setOption(option);
  myChart.on('mouseover',function(){
    console.log('111')
  })
  /* global Handsontable: true */
  var hot = new Handsontable(container.get(0), {
    data: data,
    contextMenu: true,          // 启用快捷菜单
    manualRowResize : true,     // 允许行拖动  
    manualColumnResize : true,  // 允许列拖动 
    rowHeaders: false,
    className:'htCenter htMiddle',
    colWidths: 200,
    rowHeights:50,
    //colHeaders: true
    colHeaders: [
      '语言名称',
      '排名',
      '升或降',
      '变化幅度'
    ]
  });

  return hot;
});
