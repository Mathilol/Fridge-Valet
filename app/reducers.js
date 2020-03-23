/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import productReducer from 'containers/Product/reducer';
import globalReducer from 'containers/App/reducer';
import { reducer as reduxForm } from 'redux-form';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    products: productReducer,
    form: reduxForm,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
