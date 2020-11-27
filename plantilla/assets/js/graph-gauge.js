var estado;
var capturadas_total;
var esperadas_total;
var contabilizadas_total;
var capturadas_por;
var esperadas_por = '100%';
var contabilizadas_por;
var urbanas;
var noUranas;
var ultimo_corte;

var por_par_sesp_cesp;


var votos_casillas_sn_esp;
var votos_casillas_esp;

var listado_nominal_contabilizado;
var lista_nominal_por;
var lista_nominal_total;

var leyenda;
var chartConfig;
var solidChart;
$(document).ready(function() {

  init_dataChart();


});

function init_dataChart() {
  chartConfig = {
    chart: {
      type: 'solidgauge',
      marginTop: 0,
      backgroundColor: '#fff'
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
      pointFormat: '<div style="text-align:center"><br /><span style="font-size:20px; color: {point.color}; font-weight: bold">{point.y}%</span></div>'
    },
    pane: {
      startAngle: -90,
      endAngle: 90,
      background: [{
        outerRadius: "115%",
        innerRadius: "100%",
        backgroundColor: null,
        borderWidth: 0
      }, {
        outerRadius: "95%",
        innerRadius: "80%",
        backgroundColor: null,
        borderWidth: 0
      }, {
        outerRadius: "75%",
        innerRadius: "60%",
        backgroundColor: null,
        borderWidth: 0
      }]
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
          format: '<div style="text-align:center">Lista Nominal Ofical<br><span style="font-size:2em;  font-weight: bold">790,100</span></div>',
          y: -50,
          borderWidth: 0,
          useHTML: !0
        },
        linecap: "round",
        stickyTracking: !1,
        rounded: false
      },
      series: {
        animation: true
      }
    },
    series: [{
      name: "Lista Nominal",
      colorByPoint: !0,
      data: [{
        color: "#e6e6e6 ",
        radius: "78%",
        innerRadius: "55%",
        y: 100
      }],
      dataLabels: {  }
    }, {
      name: "Lista Nominal",
      colorByPoint: !0,
      data: [{
        color: "#e73a8c",
        radius: "74%",
        innerRadius: "60%",
        y: 5
      }],
      dataLabels: {}
    }]
  };
  solidChart   =  Highcharts.chart("graficaEstadisticaEscritorio",chartConfig);
  $("#label_esp").addClass("classSolidLabel");

}
