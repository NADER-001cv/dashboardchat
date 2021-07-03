import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/bootstrap.min.css'
import Template from './Template'
import Aboutinfo from './views/Aboutinfo'
import ServiceShow from './views/ServiceShow'

function App() {
  return (
    <Router>
    <div className="container-fluid">
              
               <Switch>
                   <Route path="/" exact component={Template} /> 
              <Route path="/aboutstatus"  component={Aboutinfo} />
              <Route path="/service"    component={ServiceShow} />
               </Switch>
         
    </div>
    </Router>
  );
}

export default App;
