import React from "react";
import "./App.css";
import {Route} from "react-router-dom";
import MainContainer from "./Pages/main_page/components/Main/MainContainer";

const App = (props) => {
  return (

      <div className="app-wrapper">
        {/*<Header/>*/}
        {/*<Progress/>*/}
        <div className="app-wrapper-content">
          <Route path="/main" render={
            () => <MainContainer/>}/>
        </div>
        {/*<Footer/>*/}
      </div>

  );
};

export default App;