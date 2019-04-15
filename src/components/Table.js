import React from 'react';

export default (props) => {
  const rows = props.rows || [];
  const headers = props.headers || [];
  const footers = props.footers || [];

  if (!rows.length && !headers.length) {
    return null;
  }

  const createTableCells = (data, cellType) => {
    return data.map((d, i) => {
      var props = {};//typeof d === 'string' ? {} : (d.props || {});
      props.key = i;
      props.children = null;
      
      // Check primitive object
      if (d !== Object(d)) {
        props.children = d;

      // Or check that data is part of a vanilla object
      } else if (typeof d === 'function') {
        props.children = d();
      } else if (d.constructor === Object && d.data) {
        props.children = d.data;
      } else {
        props.children = d;
      }

      return React.createElement(cellType, props);
    });
  };

  const createTableRows = (data, cellType) => {
    return data.filter((d) => {
      // Test that each row is a vanilla js object
      return d instanceof Object && (d.constructor === Object) && d.data;
    }).map((d, i) => {
      const props = d.props || {};
      props.key = i;
      return (
        <tr {...props}>{ createTableCells(d.data, cellType)}</tr>
      );
    });
  };

  return (
    <table className={ props.className }>
      { headers.length > 0 && <thead><tr>{ createTableCells(headers, 'th') }</tr></thead> }
      { rows.length > 0 && <tbody>{ createTableRows(rows, 'td') }</tbody> }
      { footers.length > 0 && <tfoot><tr>{ createTableCells(footers, 'td') }</tr></tfoot> }
    </table>
  );
}