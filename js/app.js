$(function() {
    $.ajax({

        url: 'http://educationstats.azurewebsites.net/data/chart_data.php',
        type: 'GET',
        success: function(data) {
            chartData = data;
            var chartProperties = {
                "caption": "Entrants Statistics",
                "xAxisName": "Institute",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'total2016',
                width: '100%',
                height: '350',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'http://localhost/BootStrapChart/data/chart_data2.php',
        type: 'GET',
        success: function(data2) {
            chartData2 = data2;
            var chartProperties = {
                "caption": "Entrants Statistics",
                "xAxisName": "Institute",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "0",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'doughnut2d',
                renderAt: 'total2015',
                width: '100%',
                height: '350',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData2
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'http://localhost/BootStrapChart/data/chart_data3.php',
        type: 'GET',
        success: function(data3) {
            chartData3 = data3;
            var chartProperties = {
                "caption": "Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'line',
                renderAt: 'totalentrants',
                width: '100%',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData3
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'http://localhost/BootStrapChart/data/chart_data4.php',
        type: 'GET',
        success: function(data4) {
            chartData4 = data4;
            var chartProperties = {
                "caption": "Entrants Statistics",
                "xAxisName": "Institute",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'total2014',
                width: '100%',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData4
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'http://localhost/BootStrapChart/data/chart_data5.php',
        type: 'GET',
        success: function(data5) {
            chartData5 = data5;
            var chartProperties = {
                "caption": "Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'total2013',
                width: '100%',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData5
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'http://localhost/BootStrapChart/data/chart_data6.php',
        type: 'GET',
        success: function(data6) {
            chartData6 = data6;
            var chartProperties = {
                "caption": "Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'total2012',
                width: '100%',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData6
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'http://localhost/BootStrapChart/data/chart_data7.php',
        type: 'GET',
        success: function(data7) {
            chartData7 = data7;
            var chartProperties = {
                "caption": "Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'total2011',
                width: '100%',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData7
                }
            });
            apiChart.render();
        }
    });


});
