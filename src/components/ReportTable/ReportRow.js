import React from 'react';

const ReportRow = ({ country, total }) => (
  <tr>
    <td>{country}</td>
    <td>{total}</td>
  </tr>
);

export default ReportRow;