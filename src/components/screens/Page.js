import React from 'react';
import * as UTILS from '../../utils';
import Item from '../Item';
import Table from '../Table';
import '../../scss/components/_ItemTable.scss';
import '../../scss/components/_Search.scss';
import '../../scss/components/_ChangeView.scss';

const itemFilters = {
  WEAPON: 'Weapons',
  ARMOR: 'Armor',
  ALL: 'All items'
};

export class DocumentMeta extends React.Component {
  constructor(props) {
    super(props);
    
    let title = "WoW Pre-Bis";

    if (props.title) {
      title = props.title + ' | ' + title;
    }
    document.title = title;
  }

  render() {
    return this.props.children;
  }
};

export const Header = (props) => {
  let className = ['pageheader'];
  if (props.className) {
    className.push(props.className);
  }
  return (
    <header className={className.join(' ')}>
      <h2>{props.title}</h2>
    </header>
  );
};

export class TableLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      search: false,
      query: '',
      view: 'Armor'
    };

    this.search = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.class !== this.props.class || prevProps.spec !== this.props.spec) {
      this.setState({
        items: this.props.items,
        search: false,
        query: ''
      });
    }
  }

  getRows() {
    return this.state.items.filter((item) => {
      const weapons = ['2H Weapon', 'MH Weapon', 'OH Weapon', 'Ranged'];
      if (this.state.view === itemFilters.ARMOR && weapons.indexOf(item.slot) < 0) {
        return true;
      }
      if (this.state.view === itemFilters.WEAPON && weapons.indexOf(item.slot) >= 0) {
        return true;
      }
      if (this.state.view === itemFilters.ALL) {
        return true;
      }

      return false;
    }).map((item, i) => {
      let r = [
        <Item {...item} />,
        <span className="label item--stat" title="Level">{ item.lvl }</span>,
        <span className="label item--stat" title="Required Level">{ item.reqlvl }</span>
      ];

      if (this.state.view === itemFilters.ARMOR) {
        r.push(<span className="label item--stat" title="Armor">{ item.armor }</span>);
      } else if (this.state.view === itemFilters.WEAPON) {
        r.push(<span className="label item--stat" title="Minimum Damage">{ item.damage.min }</span>);
        r.push(<span className="label item--stat" title="Maximum Damage">{ item.damage.max }</span>);
      } else {
        r.push(<span className="label item--stat" title="Armor">{ item.armor }</span>);
        r.push(<span className="label item--stat" title="Minimum Damage">{ item.damage.min }</span>);
        r.push(<span className="label item--stat" title="Maximum Damage">{ item.damage.max }</span>);
      }

      r.push(<span className="label item--stat" title="Stamina">{ item.stamina }</span>);
      r.push(<span className="label item--stat" title="Spirit">{ item.spirit }</span>);

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

  startSearch() {
    this.setState({ search: true }, () => {
      this.search.current.focus();
    });
  }

  stopSearch() {
    if (this.state.query.length === 0) {
      this.setState({ search: false });
    }
  }

  switchView(event) {
    this.setState({ view: event.target.innerText });
  }

  searchItems(event) {
    if (!event || !event.target) {
      return;
    }

    var items = [];
    for (const i in this.props.items) {
      var c = true;
      if (typeof event.target.value === 'string' && event.target.value.length > 0) {
        var test = this.props.items[i].name.search(new RegExp(event.target.value, 'i'));
        c = (test >= 0);
      }

      if (c) {
        items.push(this.props.items[i]);
      }
    }

    this.setState({ query: event.target.value, items: items });
  }

  getNameHeader() {
    return (
      <div className="search" onClick={ this.startSearch.bind(this) }>
        { !this.state.search && <span>Name</span> }
        { this.state.search && <input ref={ this.search } defaultValue={ this.state.query } onChange={ this.searchItems.bind(this) } type="search" placeholder="Search items" onBlur={ this.stopSearch.bind(this) } /> }
        { !this.state.search && <i className="fa fa-search" /> }
      </div>
    )
  }

  render() {
    let headers = [this.getNameHeader(), 'Lvl', 'Req Lvl'];

    if (this.state.view === itemFilters.ARMOR) {
      headers.push('Armor');
    } else if (this.state.view === itemFilters.WEAPON) {
      headers.push('Min Dmg');
      headers.push('Max Dmg');
    } else {
      headers.push('Armor');
      headers.push('Min Dmg');
      headers.push('Max Dmg');
    }

    headers.push('Stamina');
    headers.push('Spirit');

    if (this.isMelee()) {
      headers = headers.concat(['Strength', 'Agility']);
    }
    if (this.isRanged()) {
      headers = headers.concat(['Agility', 'Intellect']);
    }
    if (this.isSpellcaster()) {
      headers = headers.concat(['Intellect']);
    }

    const rows = this.getRows();

    return (
      <React.Fragment>
        <p>
          {rows.length} {UTILS.formatPlural(rows.length, 'item', 'items')} found
        </p>

        <ul className="changeview">
          <li><a onClick={ this.switchView.bind(this) } className={ this.state.view === itemFilters.ARMOR ? "active" : "" }>{ itemFilters.ARMOR }</a></li>
          <li><a onClick={ this.switchView.bind(this) } className={ this.state.view === itemFilters.WEAPON ? "active" : "" }>{ itemFilters.WEAPON }</a></li>
          <li><a onClick={ this.switchView.bind(this) } className={ this.state.view === itemFilters.ALL ? "active" : "" }>{ itemFilters.ALL }</a></li>
        </ul>
        <Table className="items" headers={ headers } rows={ rows } emptyText="No items found" />
      </React.Fragment>
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
