Highcharts.getJSON('assets/js/qroo.json', function (geojson) {

  let states = Highcharts.geojson(geojson, 'map'),
  cities = Highcharts.geojson(geojson, 'mappoint') ;
 /*  Highcharts.mapChart('mapa', {
        title: {
            text: 'Highmaps from geojson with multiple geometry types'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        series: [{
            name: 'States and territories',
            data: states,
            color: Highcharts.getOptions().colors[2],
            states: {
                hover: {
                    color: Highcharts.getOptions().colors[4]
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    width: '80px' // force line-wrap
                }
            },
            tooltip: {
                pointFormat: '{point.name}'
            }
        }, {
            name: 'Rivers',
            type: 'mapline',
            data: rivers,
            states: {
                hover: {
                    lineWidth: 3
                }
            },
            color: Highcharts.getOptions().colors[0],
            tooltip: {
                pointFormat: '{point.properties.NAME}'
            }
        }, {
            name: 'Cities',
            type: 'mappoint',
            data: cities,
            color: 'black',
            marker: {
                radius: 2
            },
            dataLabels: {
                align: 'left',
                verticalAlign: 'middle'
            },
            animation: false,
            tooltip: {
                pointFormat: '{point.name}'
            }
        }]
    });
    */
  /*  Highcharts.mapChart('mapa', {

      chart: {
        type: 'Map',
        borderColor:"#FAFAFA",
        backgroundColor: '#FAFAFA'
      },
      title: {
        text: ' '
      },
      credits: {
        enabled: false
      },
      mapNavigation: {
        enabled: true
      },
      tooltip: {
        useHTML: true,
        headerFormat: '',
        borderColor: "#000",
        backgroundColor: "#000",
        color: "#ffffff",
        formatter: function(){
            return '<div style="color:#fff!important; font-weight:400px;"> '+this.key+'</div>';
        }
      },
      enableMouseTracking: true,
      showInLegend: false,
      plotOptions: {
        series: {
          borderColor: '#707070',
          states: {
            hover: {
              color: '#c3207e'
            }
          },
          color:"#FAFAFA",
          showInLegend: false,
          animation: true
          /*events: {
            mouseOver: function (event) {
            var distritos = $('#mapa').highcharts();
            console.log(distritos.series);
            },
						mouseOut: function(event) {
						 console.log("Salid region");
						}
					}
        }
      },
      series: [{
        type: "map",
        mapData: states,
        borderColor: '#707070',
        nullColor: 'rgba(200, 200, 200, 0.2)',
        showInLegend: false,
        name: 'Votos',
        data: states,
        keys: ['name'],
        joinBy: ['name', 'name'],
        point: {
          events: {
            mouseOver: function() {
              var point = this,
                state = point.name,
                series = this.series;
              Highcharts.each(series.data, function(p, i) {
                if (p.name === state) {
                  p.setState('')
                  p.setState('hover')
                } else {
                  p.setState('')
                }
              })
            }
          }
        }
      }]
    });

    */
    states.forEach(function (state) {

      //console.log(state);

    });
    Highcharts.mapChart('mapa', {
      chart: {
        borderColor:"#FAFAFA",
        backgroundColor: '#FAFAFA'
      },
      title: {
        text: ' '
      },
      credits: {
        enabled: false
      },
      exporting: { enabled: false },
      mapNavigation: {
        enabled: false
      },
      tooltip: {
        useHTML: true,
        headerFormat: '',
        borderColor: "#000",
        backgroundColor: "#000",
        color: "#ffffff",
        formatter: function(){
            return '<div style="color:#fff!important; font-weight:400px;"> </div>';
        }
      },
       enableMouseTracking: false,
       showInLegend: false,

       plotOptions: {
        series: {
          borderColor: '#707070',
          states: {
            hover: {
              color: '#c3207e'
            }
          },
          color:"#FAFAFA",
          showInLegend: false,
          animation: true,
          events: {
            mouseOver: function (event) {
              console.log();
            }
					}
        }
      },
       series: [{
           name: '',
           type: "map",
           borderColor: '#707070',
           nullColor: 'rgba(200, 200, 200, 0.2)',
           data: states,
           /*mapData: cities,*/
           keys: ['name'],
        joinBy: ['name', 'name'],
           color: Highcharts.getOptions().colors[2],
           states: {
               hover: {
                   color: Highcharts.getOptions().colors[4]
               }
           },
           dataLabels: {
               enabled: true,
               format: '{point.Name}',
               style: {
                   width: '80px' // force line-wrap
               }
           },
           tooltip: {
               pointFormat: '{point.Name}'
           }
       }]
   });
});
