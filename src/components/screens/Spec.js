import React from 'react';
import Connect from '../Connect';
import NotFoundScreen from './NotFound';
import * as Page from './Page';
import * as UTILS from '../../utils';

class Spec extends React.Component {
  render() {
    const spec = UTILS.getItemFromData(this.props.Data.equipment, this.props.match.params);
    if (!spec) {
      return (
        <NotFoundScreen />
      );
    }

    let title = spec.name + ' ' + spec.class.name;

    return (
      <Page.DocumentMeta title={ title }>
        <Page.Header title={ title } data={ spec } />
        <Page.Body data={ spec } />
      </Page.DocumentMeta>
    );
  }
}

export default Connect(Spec);
