import React from 'react';
import ItemIcon from './ItemIcon';
import '../scss/components/_List.scss';

const spelllist = (spells) => {
  if (spells.length === 0) {
    return null;
  }

  const descriptionMap = {
    'Spell Hit': 'Improves your chance to hit with spells by %displayvalue.',
    'Hit': 'Improves your chance to hit by %displayvalue.',
    'Crit': 'Improves your chance get a critical strike by %displayvalue.',
    'Spell Crit': 'Improves your chance get a critical strike with spells by %displayvalue.',
    'Defence': 'Improves your defence skill by %displayvalue.',
    'Attack Power': 'Improves your attack power by %displayvalue.',
    'Invulnerability': 'Has a %displayvalue chance to make you invulnerable.',
    '1H Axe': 'Improves your 1h axe skill by %displayvalue.',
    'Chance on hit': 'Chance on hit: %displayvalue.'
  };

  return (
    <ul className="list">
      { 
        spells.map((spell, i) => {
          return (
            <li key={ i }>
              <a href={`https://classic.wowhead.com/spell=${spell.id}`}>
                { descriptionMap[spell.type] && descriptionMap[spell.type].replace('%displayvalue', spell.displayvalue) }
                { !descriptionMap[spell.type] && <span>Increases {spell.type} by { spell.displayvalue}</span> }
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export default (props) => {
  return (
    <React.Fragment>
      <a className={`item item--quality${props.quality}`} href={`https://classic.wowhead.com/item=${props.id}`} target="_blank" rel="noopener noreferrer">
        <ItemIcon {...props } />
        { props.name }
      </a>
      { spelllist(props.spells) }
    </React.Fragment>
  );
}