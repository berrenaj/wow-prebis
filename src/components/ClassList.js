import React from 'react';
import Connect from './Connect';
import Class from './Class';
import Nav from './Nav';

class ClassList extends React.Component {
  render() {
    const Classes = Object.keys(this.props.Data.equipment);
    return (
      <Nav>
        { Classes.map((c, i) => <Class class={ this.props.Data.equipment[c] } key={ i } />) }
      </Nav>
    );
  }
}

export default Connect(ClassList);
