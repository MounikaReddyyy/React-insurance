import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Timer from'./Timer';
import Calculator from'./Calculator';
import Form from './Forms';
import Refusage from'./Refs';
import RouterDemo from'./RouterDemo';


function App() {
  return (
    <div>
 <Timer/>
<Calculator/>
<Form/>
<Refusage/>
<RouterDemo />

    </div>
  );
}

export default App;
