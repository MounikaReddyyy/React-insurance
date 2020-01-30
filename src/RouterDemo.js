import React from "react";
//import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';

class RouterDemo extends React.Component
{

render()
{
return(
< Router>
      <div>
        <nav class="navbar navbar-expand-sm bg-light">
          <ul class="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/Register" className="nav-link">Register</Link>
            </li>
          </ul>
        </nav>

          <Route exact path="/" Component={Home}/>

          <Route  path="/Login" Component={Login}/>

          <Route  path="/Register" Component={Register}/>

      </div>
    </Router>
  );
}

}
export default RouterDemo;