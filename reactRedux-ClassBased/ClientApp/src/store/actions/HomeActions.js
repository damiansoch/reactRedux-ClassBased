import * as C from '../constants/HomeConstants';

export const selectUser = (user) => {
  console.log('clicked:', user.firstName);
  return {
    type: C.USER_SELECTED,
    payload: user,
  };
};
