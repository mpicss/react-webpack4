import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tdxy from "./Tdxy";
import Rtdl from "./Rtdl";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>云管平台软件包</h1>
          <ul className="header">
            <li><NavLink to="/home">标准部署</NavLink></li>
            <li><NavLink to="/tdxy">天地祥云定制</NavLink></li>
            <li><NavLink to="/rtdl">软通动力定制</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/Home" component={Home}/>
            <Route path="/Tdxy" component={Tdxy}/>
            <Route path="/Rtdl" component={Rtdl}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 export default Main;