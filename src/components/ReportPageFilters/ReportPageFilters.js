import React, { Component } from 'react';
import { getCountriesPopulation } from '../../api/countriesPopulation';
import  FilterableTable  from 'react-filterable-table';

class ReportPageFilters extends Component {
  state = {
    isLoaded: false,
    items: []
  }

  fields = [
    { name: 'country', displayName: 'Country', inputFilterable: true, sortable: true },
    { name: 'total', displayName: 'Population', inputFilterable: true, exactFilterable: true, sortable: true }
  ];

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
        <h1>Report Page </h1>  
        { isLoaded ? <FilterableTable
            namespace="Countries"
            initialSort="total"
            className="hr-table hr-table-filter"
            data={items}
            fields={this.fields}
            noRecordsMessage="There are no people to display"
            noFilteredRecordsMessage="No people match your filters!"
        /> :  <div>Loading...</div> }
          
      </div>
    );
  }
}

export default ReportPageFilters;