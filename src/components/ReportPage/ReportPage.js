import React, { Component } from 'react';
import { getCountriesPopulation }  from '../../api/countriesPopulation';
import ReportTable from '../ReportTable/ReportTable';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    this.getPopulationData();
  }

  getPopulationData() {
    getCountriesPopulation(new Date().getFullYear(), 18).subscribe(response => {
      this.setState({
            isLoaded: true,
            items: response
          });
    });
  }

  render() {
    const { isLoaded, items } = this.state;
    return (
      <div className="container">
        <h1>Report Page Custom</h1>  
        {isLoaded ? <ReportTable items={items} /> : <div>Loading...</div> }  
      </div>
    );
  }
}

export default ReportPage;