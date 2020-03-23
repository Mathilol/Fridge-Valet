/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'FridgeValet/Home/CHANGE_USERNAME';
export const ITEM_COUNT = 'FridgeValet/Home/ITEM_COUNT';
export const FETCH_LATEST_PRODUCTS_START =
  'FridgeValet/Home/FETCH_LATEST_PRODUCTS_START';
export const FETCH_LATEST_PRODUCTS_COMPLETE =
  'FridgeValet/Home/FETCH_LATEST_PRODUCTS_COMPLETE';
export const FETCH_LATEST_PRODUCTS_FAILURE =
  'FridgeValet/Home/FETCH_LATEST_PRODUCTS_FAILURE';
