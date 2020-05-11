import React from "react";
import "./App.css";
import BasisContainer from "./Page Structure/Basis/BasisContainer";
import {Route} from "react-router-dom";
import MainPageContainer from "./Page Structure/Pages content/main_page/MainPageContainer";
import FooterContainer from "./Page Structure/Footer/FooterContainer";
import ScrollTop from "./Page Structure/Basis/Left Header/ScrollTop/ScrollTop";
import Test from "./Page Structure/Test/Test";





const App = (props) => {
  return (

      <div className="app-wrapper">
        <BasisContainer/>
        <div className="app-wrapper-content">
          <Route path="/" render={
            () => <MainPageContainer/>}/>
        </div>
        <FooterContainer/>
        {/*<Test/>*/}
        {/*<ScrollTop/>*/}
      </div>

  );
};

export default App;