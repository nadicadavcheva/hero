import React, { Component } from 'react';
import Row from './Row'; 

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.items
    }
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row key={rowData.country} {...rowData} />);

    return (
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th onClick={() => this.sortBy('country')}>Country Name</th>
            <th onClick={() => this.sortBy('total')}>Population</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
    
  }
}

export default Table;