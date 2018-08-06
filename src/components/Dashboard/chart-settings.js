
export var chartData = { 
  labels: [],
  datasets: [
    {
      label: 'Female',
      fillColor: "rgba(255,192,203,0.5)",
      strokeColor: "rgba(255,192,203,0.8)",
      highlightFill: "rgba(255,192,203,0.75)",
      highlightStroke: "rgba(255,192,203,1)",
      data: []
    },
    {
      label: "Male",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: []
    }
  ]
};

export var chartOptions = {
  scales: {
    xAxes: [{
      stacked: true
    }],
    yAxes: [{
      stacked: true
    }]
  }
};