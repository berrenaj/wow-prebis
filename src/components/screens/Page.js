import React from 'react';
import * as UTILS from '../../utils';
import Item from '../Item';
import Table from '../Table';

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
  constructor(props) {
    super(props);

    this.state = {
      layout: 'table'
    };
  }

  getTableLayout() {
    let items = this.props.data.getItems();
    let rows = items.map((item, i) => {
      return {
        data: [
          <Item {...item} key={ i } />,
          item.lvl,
          item.reqlvl,
          [ item.stamina, item.spirit, item.strength, item.agility, item.intellect ].join(' / ')
        ]
      };
    });

    return (
      <Table headers={ ['Name', 'Lvl', 'Req Lvl', 'Stats'] } rows={ rows } />
    );
  }

  render() {
    return this.getTableLayout();
  }
};
