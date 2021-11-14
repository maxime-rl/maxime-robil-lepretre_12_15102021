import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

/**
 * Save state to local storage
 * @param {object} state
 */
const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};

/**
 * Load state from local storage
 * @returns state
 */
const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage();

const middleware = [thunk];

/**
 * Create store
 */
const store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
