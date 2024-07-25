import React from 'react'

export const LoginSignUp = () => {
  return (
    <div className="loginSignUp">
        <div className="UserContainer">
            <h1>Sign up</h1>
            <div className="SignUp fields">
                <input type="text" placeholder="Full names"></input>
                <input type="email" placeholder="email address"></input>
                <input type="password" placeholder="enter password"></input>
                <button type="button">Sign up</button>
            </div>
            <p className="login-text">Already have an account?<span>Login in Here</span></p>
            <div className="user-agreement">
                <input type="checkbox" name="" id=""></input>
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
        </div>
    </div>
  )
}
