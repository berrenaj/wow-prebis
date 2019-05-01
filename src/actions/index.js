import * as EVENTS from '../events';
import API from '../api';

const _get = function(url) {
  return fetch(url, {
    mode: 'cors',
    redirect: "follow",
  });
};

export const getEquipment = () => {
  return (dispatch) => {
    dispatch({
      type: EVENTS.LOADING_EQUIPMENT_START
    });
    _get(API.EQUIPMENT).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          dispatch({
            type: EVENTS.LOADING_EQUIPMENT_SUCCESS,
            equipment: data
          });
        })
      } else {
        dispatch({
          type: EVENTS.LOADING_EQUIPMENT_ERROR
        });
      }
    });
  }
};

export const addItemToSlot = (item) => {
  return (dispatch) => {
    dispatch({
      type: EVENTS.ADD_ITEM_TO_SLOT,
      item: item
    });
  }
};