import {combineReducers, createStore} from "redux";
import contactsReducer from "./contacts-reducer";

let reducers = combineReducers({
  contacts: contactsReducer,
});

let store = createStore(reducers);

export default store;