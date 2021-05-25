import {combineReducers, createStore} from "redux";
import contactsReducer from "src/Redux/contacts-reducer";
import leftNavReducer from "src/Redux/leftNav-reducer";
import arrowDownReducer from "src/Redux/arrowDown-reducer";
import videoSectionReducer from "src/Redux/videoSection-reducer";

const reducers = combineReducers({
  contacts: contactsReducer,
  leftNav: leftNavReducer,
  arrowDown: arrowDownReducer,
  videoSection: videoSectionReducer,
});

const store = createStore(reducers);

export default store;
