import React from "react";
import "./App.css";
import BasisContainer from "./Page Structure/Basis/BasisContainer";
import {Route} from "react-router-dom";
import MainPageContainer from "./Page Structure/Pages content/main_page/MainPageContainer";
import FooterContainer from "./Page Structure/Footer/FooterContainer";


const App = (props) => {
  return (

      <div className="app-wrapper">
        <BasisContainer/>
        <div className="app-wrapper-content">
          <Route path="/main" render={
            () => <MainPageContainer/>}/>
        </div>
        <FooterContainer/>
      </div>

  );
};

export default App;