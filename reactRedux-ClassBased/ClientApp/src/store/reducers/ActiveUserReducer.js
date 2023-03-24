import * as C from '../constants/HomeConstants';

const ActiveUserReducer = (state = null, action) => {
  switch (action.type) {
    case C.USER_SELECTED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default ActiveUserReducer;
