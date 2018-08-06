import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs';
import { getCountriesPopulation }  from '../../api/countriesPopulation';
import { chartData, chartOptions } from './chart-settings';

class Dashboard extends Component {
  state = {
    chartData: { ...chartData },
    chartOptions: { ...chartOptions }
  };

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    getCountriesPopulation(new Date().getFullYear(), 18).subscribe(response => {
      this.normalizeChartData(response);
    });
  }

  normalizeChartData(data) {
    data.map((item) => {
      const sexRadio = (item.males / item.females) * 100;
      return { sexRadio: sexRadio, ...item }
    })
    .sort(function(obj1, obj2) {
      return obj1.sexRadio - obj2.sexRadio;
    })
    .slice(-10)
    .forEach(element => {
      chartData.labels.push(element.country);
      chartData.datasets[0].data.push(element.females);
      chartData.datasets[1].data.push(element.males);
    });
    this.setState({ chartData: chartData ,  chartOptions: chartOptions });
  }

  render() {
    return ( 
      <div className="container">
        <h1>Dashboard</h1>  
        <BarChart data={this.state.chartData} 
                  options={this.state.chartOptions } 
                  width="1200" height="800" redraw
                  className="hr-chart" /> 
      </div> 
    );
  }
}

export default Dashboard;