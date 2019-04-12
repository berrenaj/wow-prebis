import React from 'react';
import ItemIcon from './ItemIcon';

export default (props) => {
  return (
    <React.Fragment>
      <ItemIcon {...props } />
      { props.name }
  	</React.Fragment>
  );
}