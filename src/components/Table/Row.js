import React from 'react';

const Row = ({ country, total }) => (
  <tr>
    <td>{country}</td>
    <td>{total}</td>
  </tr>
);

export default Row;