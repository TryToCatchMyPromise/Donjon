import store from "src/Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import 'src/index.css';
import App from "src/App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


// ========================================

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
