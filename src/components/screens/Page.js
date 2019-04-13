import React from 'react';
import * as UTILS from '../../utils';
import Item from '../Item';
import Table from '../Table';
import '../../scss/components/_ItemTable.scss';

export const Header = (props) => {
  let items = props.data.getItems();
  return (
    <header className={props.className}>
      <h2>{props.title}</h2>
      <p>{items.length} {UTILS.formatPlural(items.length, 'item', 'items')} found</p>
    </header>
  );
};

export class TableLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.setState({ items: this.props.items });
    }
  }

  getRows() {
    return this.state.items.map((item, i) => {
      return {
        data: [
          <Item {...item} />,
          <span className="label item--stat" title="Level">{ item.lvl }</span>,
          <span className="label item--stat" title="Required Level">{ item.reqlvl }</span>,
          <span className="label item--stat" title="Armor">{ item.armor }</span>,
          <span className="label item--stat" title="Stamina">{ item.stamina }</span>,
          <span className="label item--stat" title="Spirit">{ item.spirit }</span>,
          <span className="label item--stat" title="Strength">{ item.strength }</span>,
          <span className="label item--stat" title="Agility">{ item.agility }</span>,
          <span className="label item--stat" title="Intellect">{ item.intellect }</span>
        ]
      };
    });
  }

  render() {
    return (
      <Table className="items" headers={ ['Name', 'Lvl', 'Req Lvl', 'Armor', 'Stamina', 'Spirit', 'Strength', 'Agility', 'Intellect'] } rows={ this.getRows() } />
    );
  }
};

export class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: 'table'
    };
  }

  getTableLayout() {
    return <TableLayout items={ this.props.data.getItems() } name={ this.props.data.name } />
  }

  render() {
    return this.getTableLayout();
  }
};
