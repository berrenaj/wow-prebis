import React from 'react';
import * as UTILS from '../../utils';
import Item from '../Item';
import Table from '../Table';
import '../../scss/components/_ItemTable.scss';

export const Header = (props) => {
  let items = props.data.getItems();
  let className = ['pageheader'];
  if (props.className) {
    className.push(props.className);
  }
  return (
    <header className={className.join(' ')}>
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
    if (prevProps.class !== this.props.class || prevProps.spec !== this.props.spec) {
      this.setState({ items: this.props.items });
    }
  }

  getRows() {
    return this.state.items.map((item, i) => {
      let r = [
        <Item {...item} />,
        <span className="label item--stat" title="Level">{ item.lvl }</span>,
        <span className="label item--stat" title="Required Level">{ item.reqlvl }</span>,
        <span className="label item--stat" title="Armor">{ item.armor }</span>,
        <span className="label item--stat" title="Stamina">{ item.stamina }</span>,
        <span className="label item--stat" title="Spirit">{ item.spirit }</span>
      ];

      if (this.isMelee()) {
        r.push(<span className="label item--stat" title="Strength">{ item.strength }</span>);
        r.push(<span className="label item--stat" title="Agility">{ item.agility }</span>);
      }

      if (this.isRanged()) {
        r.push(<span className="label item--stat" title="Agility">{ item.agility }</span>);
        r.push(<span className="label item--stat" title="Intellect">{ item.intellect }</span>);
      }

      if (this.isSpellcaster()) {
        r.push(<span className="label item--stat" title="Intellect">{ item.intellect }</span>);
      }

      return {
        data: r
      };
    });
  }

  isMelee() {
    return this._testSpec(['Warrior', 'Enchancement', 'Fury', 'Protection', 'Arms', 'Retribution', 'Feral', 'Rogue']);
  }

  isRanged() {
    return this._testSpec(['Hunter']);
  }

  isSpellcaster() {
    return this._testSpec(['Mage', 'Priest', 'Warlock', 'Paladin', 'Shaman', 'Druid']);
  }

  _testSpec(arr) {
    return (arr.indexOf(this.props.spec) >= 0 || arr.indexOf(this.props.class) >= 0);
  }

  render() {
    if (this.state.items.length === 0) {
      return null;
    }

    let headers = [() => <span>Name</span>, 'Lvl', 'Req Lvl', 'Armor', 'Stamina', 'Spirit'];
    if (this.isMelee()) {
      headers = headers.concat(['Strength', 'Agility']);
    }
    if (this.isRanged()) {
      headers = headers.concat(['Agility', 'Intellect']);
    }
    if (this.isSpellcaster()) {
      headers = headers.concat(['Intellect']);
    }

    return (
      <Table className="items" headers={ headers } rows={ this.getRows() } />
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
    return <TableLayout 
      items={ this.props.data.getItems() } 
      class={ this.props.data.class ? this.props.data.class.name : this.props.data.name } 
      spec={ this.props.data.class ? this.props.data.name : null } 
    />
  }

  render() {
    return this.getTableLayout();
  }
};
