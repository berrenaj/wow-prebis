import React from 'react';
import Connect from './Connect';
import Class from './Class';
import { withRouter } from 'react-router-dom';
import '../scss/components/_ClassList.scss';

class ClassList extends React.Component {
  render() {
    const Classes = Object.keys(this.props.Data.equipment);
    return (
      <nav className="classlist">
        <ul>
          { Classes.map((c, i) => {
            const active = this.props.location.pathname.substring(1, c.length + 1) === c.toLowerCase();
            return (
              <li className={ active ? "active" : null } key={ i }>
                <Class class={ this.props.Data.equipment[c] } />
              </li>
            )
          }) }
        </ul>
      </nav>
    );
  }
}

export default withRouter(Connect(ClassList));
