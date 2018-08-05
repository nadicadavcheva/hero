import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs';
import { getCountriesPopulation }  from '../ReportPage/api/index';

class Dashboard extends Component {
  state = {
    chartData: {
      labels: [],
      datasets: [
        {
          label: 'Female',
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
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
    },
    chartOptions: {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  }

  componentDidMount() {
    getCountriesPopulation(new Date().getFullYear(), 18).subscribe(response => {
      this.normalizeChartData(response);
    });
  }



  normalizeChartData(data) {
    let chartData = {
      labels: [],
      datasets: [
        {
          label: "Female",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
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
    var chartOptions = {
      responsive:true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero:true
          }
        }]
      }
    };

    data
    .slice(0, 10)
    .forEach(element => {
      chartData.labels.push(element.country);
      chartData.datasets[0].data.push(element.females);
      chartData.datasets[1].data.push(element.males);
    });
    this.setState({ chartData: chartData,  chartOptions: chartOptions});
  }


  render() {
    return ( 
      <div className="container">
        <BarChart data={this.state.chartData} options={this.state.chartOptions } /> 
      </div> 
    );
  }
}

export default Dashboard;