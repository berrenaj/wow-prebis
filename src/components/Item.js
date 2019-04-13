import React from 'react';
import ItemIcon from './ItemIcon';

export default (props) => {
  return (
    <a className={`item item--quality${props.quality}`} href={`https://classic.wowhead.com/item=${props.id}`} target="_blank" rel="noopener noreferrer">
      <ItemIcon {...props } />
      { props.name }
  	</a>
  );
}