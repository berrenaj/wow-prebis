import React from 'react';
import { NavLink } from 'react-router-dom';
import ClassSpecLinks from './ClassSpecLinks';

class Class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavLink 
          to={ { pathname: '/' + this.props.class.name.toLowerCase() } } 
          className={ ['classlist__class', 'classlist__class--' + this.props.class.name.toLowerCase()].join(' ') } 
          activeClassName="active"
        >
          {this.props.class.name}
        </NavLink>
        <ul className="classlist__class__specs">
          <ClassSpecLinks class={ this.props.class } />
        </ul>
      </React.Fragment>
    );
  }
};

export default Class;