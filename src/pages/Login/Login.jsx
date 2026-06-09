import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className='logo' />
      <form className="login-form">
        <h2>{currentState}</h2>
        {currentState == "Sign Up" ? <input type="text" placeholder='Username' className="form-input" required /> : null}
        <input type="email" placeholder='Email Address' className="form-input" required />
        <input type="text" placeholder='Password' className="form-input" required />
        <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to terms & use of privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currentState === "Sign Up"
            ? <p className='login-toggle'>Already have an account <span onClick={() => setCurrentState("Log In")}>Login here</span></p>
            : <p className='login-toggle'>Create an account <span onClick={() => setCurrentState("Sign Up")}>click here</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login