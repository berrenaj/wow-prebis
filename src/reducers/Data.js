import * as EVENTS from '../events';

const defaultState = {
  status: EVENTS.INIT,
  gear: {}
};

export default (state = defaultState, action) => {
  if (Object.keys(EVENTS).indexOf(action.type) >= 0) {
    state['status'] = action.type;
  }
  
  switch (action.type) {
  case EVENTS.LOADING_EQUIPMENT_SUCCESS:
    return { ...state, equipment: action.equipment };
  case EVENTS.ADD_ITEM_TO_SLOT:
    const gear = state.gear;
    gear[action.item.slot] = action.item;
    return { ...state, gear: gear };
  default:
    return { ...state };
  }
};