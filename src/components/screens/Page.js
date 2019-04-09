import React from 'react';
import * as UTILS from '../../utils';
import Item from '../Item';

export const Header = (props) => {
  let items = props.data.getItems();
  return (
    <header className={props.className}>
      <h2>{props.title}</h2>
      <p>{items.length} {UTILS.formatPlural(items.length, 'item', 'items')} found</p>
    </header>
  );
};

export class Body extends React.Component {
  render() {
    let items = this.props.data.getItems();
    return items.map((item, i) => <Item {...item} key={ i } />);
  }
};
