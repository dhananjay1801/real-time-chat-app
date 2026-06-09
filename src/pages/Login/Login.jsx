import React from 'react'
import './Login.css'
import assets from '../../assets/assets' 

const Login = () => {
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className='logo'/>
      <form className="login-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder='Username' className="form-input" required/>
        <input type="email" placeholder='Email Address' className="form-input" />
        <input type="text" placeholder='Password' className="form-input" />
        <button type='submit'>Sign Up</button>
        <div className="login-term">
          <input type="checkbox"/>
          <p>Agree to terms & use of privacy policy.</p>
        </div>
        <div className="login-forgot">
          <p>Already have an account <span>click here</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login