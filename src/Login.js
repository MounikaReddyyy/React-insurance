import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Login extends React.Component
{
render()
{

return(
<div>
    <form>
<div className="form-group">
<label for="Email"><b>Email</b></label>
    <input type="email" placeholder="Enter  your emailaddress" name="email" required/>
</div>

<div className="form-group">
<label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

</div>
<label>
<button type="submit">Login</button></label>
<div>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>
  </form>
</div>);



}

}
export default Login;