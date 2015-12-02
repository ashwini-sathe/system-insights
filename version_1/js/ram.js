$(document).ready(function () {    
           
            RenderPieChart('container-RamUsage', [
                      ['Firefox', 45.0],
                      ['IE', 26.8],
                      ['Chrome',  12.8],                         
                      ['Safari', 8.5],
                      ['Opera', 6.2],
                      ['Others', 0.7]
                  ]);     
     
     $('#btnPieChart').live('click', function(){ 
         var data = [
                      ['Firefox', 42.0],
                      ['IE', 26.8],
                      {
                          name: 'Chrome',
                          y: 14.8,
                          sliced: true,
                          selected: true
                      },
                      ['Safari', 6.5],
                      ['Opera', 8.2],
                      ['Others', 0.7]
                  ];
             
            RenderPieChart('container-RamUsage', data);
     });
     
            function RenderPieChart(elementId, dataList) {
                new Highcharts.Chart({
                    chart: {
                        renderTo: elementId,
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    }, title: {
                        text: 'Browser market shares at a specific website, 2010'
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                color: '#000000',
                                connectorColor: '#000000',
                                formatter: function () {
                                    return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Browser share',
                        data: dataList
                    }]
                });
            };
        });
// JavaScript Document