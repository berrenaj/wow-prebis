import React from 'react';
import ItemIcon from './ItemIcon';

export default (props) => {
  return (
    <p className="item">
      <ItemIcon size="large" {...props } />{props.name}
    </p>
  );
}