import React from 'react';
import Connect from '../Connect';
import NotFoundScreen from './NotFound';
import * as UTILS from '../../utils';
import * as Page from './Page';

class Class extends React.Component {
  render() {

    const cls = UTILS.getItemFromData(this.props.Data.equipment, this.props.match.params);
    if (!cls) {
      return (
        <NotFoundScreen />
      );
    }

    return (
      <React.Fragment>
        <Page.Header title={ cls.name } data={ cls } />
        <Page.Body data={ cls } />
      </React.Fragment>
    );
  }
}

export default Connect(Class);
