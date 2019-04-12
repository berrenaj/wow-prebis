import React from 'react';

export default (props) => {
  let rows = props.rows || [];
  let headers = props.headers || [];
  let footers = props.footers || [];

  if (!rows.length && !headers.length) {
    return null;
  }

  return (
    <table className={ props.className }>
      { headers.length > 0 && <thead><tr>{ headers.map((h, i) => <th {...h.props} key={ i }>{ h.data }</th>) }</tr></thead> }
      { rows.length > 0 && <tbody>{ rows.map((r, i) => <tr key={ i } {...r.props}>{ r.data.map((td, j) => <td key={j}>{td}</td>) }</tr>) }</tbody> }
      { footers.length > 0 && <tfoot><tr>{ rows.map((f, i) => <td {...f.props} key={ i }>{ f.data }</td>) }</tr></tfoot> }
    </table>
  );
}