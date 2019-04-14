import React from 'react';
import Connect from './Connect';
import Logo from './Logo';
import ClassScreen from './screens/Class';
import SpecScreen from './screens/Spec';
import NotFoundScreen from './screens/NotFound';
import ClassList from './ClassList';
import * as EVENTS from '../events';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../scss/global.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.getEquipment();
  }

  render() {
    if (this.props.Data.status === EVENTS.LOADING_EQUIPMENT_START) {
      return (
        <div className="app-loading"></div>
      );
    }

    return (
      <BrowserRouter>
        <div className="App container">
          <Logo />
          <ClassList />
          <Switch>
            <Route exact path="/" render={ () => <p><em className="emphasis">Choose a class to begin.</em></p> } />
            <Route exact path="/:class" component={ClassScreen} />
            <Route exact path="/:class/:spec" component={SpecScreen} />
            <Route render={ () => <NotFoundScreen /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Connect(App);
