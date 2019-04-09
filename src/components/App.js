import React from 'react';
import Connect from './Connect';
import Logo from './Logo';
import ClassScreen from './screens/Class';
import SpecScreen from './screens/Spec';
import NotFoundScreen from './screens/NotFound';
import ClassList from './ClassList';
import Nav from './Nav';
import * as EVENTS from '../events';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.getEquipment();
  }

  render() {
    if (this.props.Data.status === EVENTS.LOADING_EQUIPMENT_START) {
      return (
        <div className="loading">Loading</div>
      );
    }

    let navLinks = [
      <React.Fragment key="home">
        <NavLink to={ { pathname: '/' } }>Home</NavLink>
        <ClassList />
      </React.Fragment>
    ];
    return (
      <div className="App">
        <Logo />

        <BrowserRouter>
          <Nav>
            {navLinks}
          </Nav>
          <Switch>
            <Route exact path="/" render={ () => <React.Fragment /> } />
            <Route exact path="/:class" component={ClassScreen} />
            <Route exact path="/:class/:spec" component={SpecScreen} />
            <Route render={ () => <NotFoundScreen /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Connect(App);
