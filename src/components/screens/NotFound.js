import React from 'react';
import Connect from '../Connect';

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFoundScreen">
        <h1>Sorry :(</h1>
        <p>Page not found</p>
      </div>
    );
  }
}

export default Connect(NotFound);
