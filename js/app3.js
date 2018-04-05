$(function() {
    $.ajax({

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data.php',
        type: 'GET',
        success: function(data) {
            chartData = data;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "University",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'UNI2016',
                width: '100%',
                height: '400',
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

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data2.php',
        type: 'GET',
        success: function(data2) {
            chartData2 = data2;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "University",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'UNI2015',
                width: '100%',
                height: '400',
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

       url: 'https://educationstats.azurewebsites.net/unidata/chart_data3.php',
        type: 'GET',
        success: function(data3) {
            chartData3 = data3;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "University",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'UNI2014',
                width: '100%',
                height: '400',
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

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data4.php',
        type: 'GET',
        success: function(data4) {
            chartData4 = data4;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "University",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'UNI2013',
                width: '100%',
                height: '400',
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

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data5.php',
        type: 'GET',
        success: function(data5) {
            chartData5 = data5;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'line',
                renderAt: 'UNITOTAL',
                width: '100%',
                height: '400',
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

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data6.php',
        type: 'GET',
        success: function(data6) {
            chartData6 = data6;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'line',
                renderAt: 'trinitytotal',
                width: '100%',
                height: '400',
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

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data7.php',
        type: 'GET',
        success: function(data7) {
            chartData7 = data7;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'line',
                renderAt: 'ucdtotal',
                width: '100%',
                height: '400',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData7
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data8.php',
        type: 'GET',
        success: function(data8) {
            chartData8 = data8;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'line',
                renderAt: 'ucctotal',
                width: '100%',
                height: '400',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData8
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data9.php',
        type: 'GET',
        success: function(data9) {
            chartData9 = data9;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'line',
                renderAt: 'dcutotal',
                width: '100%',
                height: '400',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData9
                }
            });
            apiChart.render();
        }
    });

    $.ajax({

        url: 'https://educationstats.azurewebsites.net/unidata/chart_data10.php',
        type: 'GET',
        success: function(data10) {
            chartData10 = data10;
            var chartProperties = {
                "caption": "Undergrad Entrants Statistics",
                "xAxisName": "Year",
                "yAxisName": "Entrants",
                "rotatevalues": "1",
                "plotspacepercent": "0",
                "chartLeftMargin": "0",
                "chartRightMargin": "10",
                "theme": "zune"
            };

            apiChart = new FusionCharts({
                type: 'line',
                renderAt: 'ultotal',
                width: '100%',
                height: '400',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData10
                }
            });
            apiChart.render();
        }
    });

});
