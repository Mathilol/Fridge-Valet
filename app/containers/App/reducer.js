/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CONSTANT_1, CONSTANT_2 } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {},
};

/* eslint-disable default-case, no-param-reassign */

// TODO: ADD REDUCER FOR GLOBAL
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONSTANT_1:
        // change state
        break;
      case CONSTANT_2:
        // chagne state
        break;
    }
  });

export default appReducer;
