import React from 'react';
import Connect from '../Connect';
import * as Page from './Page';

class NotFound extends React.Component {
  render() {
    return (
      <Page.DocumentMeta title="Page not found">
        <div className="NotFoundScreen">
          <h1>Sorry :(</h1>
          <p>Page not found</p>
        </div>
      </Page.DocumentMeta>
    );
  }
}

export default Connect(NotFound);
