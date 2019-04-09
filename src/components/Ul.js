import React from 'react';

export default (props) => {
  return (
    <ul {...props}>
      { props.children.map((item, i) => <li key={ i }>{item}</li>) }
    </ul>
  );
};