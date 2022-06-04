import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {RoutesPage} from "./routes/routes";

const App = () => {
  return (
      <div>
        <HashRouter>
          <RoutesPage/>
        </HashRouter>
      </div>
  )
}

export default App;
