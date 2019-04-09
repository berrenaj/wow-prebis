import * as EVENTS from '../events';

const defaultState = {
  status: EVENTS.INIT
};

export default (state = defaultState, action) => {
  if (Object.keys(EVENTS).indexOf(action.type) >= 0) {
    state['status'] = action.type;
  }
  
  switch (action.type) {
  case EVENTS.LOADING_EQUIPMENT_SUCCESS:
    return { ...state, equipment: action.equipment };
  default:
    return { ...state };
  }
};