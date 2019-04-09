import React from 'react';
import '../scss/ItemIcon.scss';

export default (props) => {
  return (
    <i className={ "item__icon" + (props.size ? " item__icon--" + props.size : '') } style={ { backgroundImage: "url(/img/icon/" + props.icon + ".jpg)" } }></i>
  );
}