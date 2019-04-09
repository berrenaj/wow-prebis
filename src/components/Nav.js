import React from 'react';
import Ul from './Ul';

export default (props) => {
  return (
    <nav className={props.className}>
      <Ul>
        {props.children}
      </Ul>
    </nav>
  );
};