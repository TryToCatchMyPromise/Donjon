import {combineReducers, createStore} from "redux";
import contactsReducer from "./contacts-reducer";
import leftNavReducer from "./leftNav-reducer";

let reducers = combineReducers({
  contacts: contactsReducer,
  leftNav: leftNavReducer,
});

let store = createStore(reducers);

export default store;