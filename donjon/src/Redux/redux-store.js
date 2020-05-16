import {combineReducers, createStore} from "redux";
import contactsReducer from "./contacts-reducer";
import leftNavReducer from "./leftNav-reducer";
import arrowDownReducer from "./arrowDown-reducer";
import videoSectionReducer from "./videoSection-reducer";

let reducers = combineReducers({
  contacts: contactsReducer,
  leftNav: leftNavReducer,
  arrowDown: arrowDownReducer,
  videoSection: videoSectionReducer,
});

let store = createStore(reducers);

export default store;