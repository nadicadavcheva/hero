import React, { Component } from 'react';
import { getCountriesPopulation }  from './api/index';
import Table from '../Table/Table';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    getCountriesPopulation(new Date().getFullYear(), 18).subscribe(response => {
      this.setState({
            isLoaded: true,
            items: response
          });
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className="container">
        {isLoaded ? <Table items={this.state.items} /> : <div>Loading...</div> }  
      </div>
    );
  }
}

export default ReportPage;