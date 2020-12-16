
$(document).ready(function() {

  init_dataChart();


});

function init_dataChart() {
  chartConfig = {
    chart: {
      type: 'solidgauge',
      backgroundColor:'rgba(255, 255, 255, 0.0)'
    },
    credits: {
      enabled: false
    },
    exporting: { enabled: false },
    //title:{text:this.informacionJSON.actasCapturadas.porcentaje+"%",y:180,style:{fontSize:"32px",color:"#e73a8c"}},
    title: {
      text: "",
      y: 180,
      style: {
        fontSize: "32px",
        color: "#000"
      }
    },
    tooltip: {
      enabled: !1,
      borderWidth: 0,
      backgroundColor: "none",
      shadow: !1,
      style: {
        fontSize: "16px"
      },
      pointFormat:  ''
    
    },
    pane: {
      
      center: ['50%', '70%'],
      size: '100%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        innerRadius: '70%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
      labels: {
        y: 16
      }
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: !0,
          format:'',
          y: -60,
          borderWidth: 0,
          useHTML:!0
        },
        linecap: "round",
        stickyTracking: !1,
        rounded: false
      },
      series: {
        animation: true
      }
    },
    series: [ {
      name: "Lista Nominal",
      colorByPoint: !0,
      data: [{
        color: "#e73a8c",
        radius: "95%",
        innerRadius: "75%",
        y: 50
      }],
      dataLabels: {
        format: '<span  data-z-index="1" style="position: absolute; font-size: 11px; white-space: nowrap; color: rgb(0, 0, 0); font-weight: bold; margin-left: 0px; margin-top: 0px; left: 5px; top: 5px;"><div style="text-align:right; position:absolute; top: -200px;left: 92px"><span class="font-bold px13">Lista Nominal de <br>Actas Contabilizadas</span><br> <span class="font-medium px18" style="color:#D1308A">0</span></div></span> <div class="row dis-flex flex-column solidRobot"><p class="px18 htt">Lista Nominal Ofical</p> <p class="px22 txRosaIne">790,100</p></div>',
      }
    }]
  };
  solidChart   =  Highcharts.chart("graficaEstadisticaEscritorio",chartConfig);
  $("#label_esp").addClass("classSolidLabel");

}
