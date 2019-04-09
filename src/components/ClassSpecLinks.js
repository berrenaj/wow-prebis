import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  if (!props.class || !props.class.specs) {
    return null;
  }

  return  Object.keys(props.class.specs).map((s, i) => {
    return (
      <li key={ i }>
        <NavLink 
          to={ { pathname: ['/', props.class.name, '/', s].join('').toLowerCase() } }
          activeClassName="active"
          className={ ['c-wcl__spec', 'c-wcl__spec--' + s.toLowerCase()].join(' ') }
        >
          {s}
        </NavLink>
      </li>
    );
  });
}