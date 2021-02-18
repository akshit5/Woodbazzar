import React from 'react';
import '../css/login.css';
function Login(){
    return (<>
	<div className="back">
       <div className="wrapper">
	   <div className="title">
	   Login Form
	   </div>
	   <form action="#">
        <div className="field">
          <input type="text" required/>
          <label>Email Address</label>
        </div>
<div className="field">
          <input type="password" required/>
          <label>Password</label>
        </div>
<div className="content">
          <div class="checkbox">
            <input type="checkbox" id="remember-me"/>
            <label for="remember-me">Remember me</label>
          </div>
<div class="pass-link">
<a href="#">Forgot password?</a></div>
</div>
<div className="field">
          <input type="submit" value="Login"/>
        </div>
<div className="signup-link">
Not a member? <a href="#">Signup now</a></div>
</form>
</div>
</div>
    </>)
}
export default Login;