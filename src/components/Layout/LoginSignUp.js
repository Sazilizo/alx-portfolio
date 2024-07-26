import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'


export const LoginSignUp = () => {
  const {register, login} = useContext(ShopContext);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const [choice, setChoice] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password);
  };


  return (
    <div className="loginSignUp">
        <div className="UserContainer">
          <input style={{display:'inline-block'}} type="checkbox" onChange={(e)=>setChoice(e.target.checked)}checked={choice} name="check"></input><span>Have an account?</span>
          {choice? 
          <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="SignUp fields">

                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="username" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="password" />
              </div>
              <button type="submit">Login</button>
          </form>:
          <div>
            <h1>Sign up</h1>
            <div className="SignUp fields">
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Full names"></input>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address"></input>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password"></input>
                <button type="submit">Register</button>
            </div>
            <p className="login-text">Already have an account?<span>Login in Here</span></p>
            <div className="user-agreement">
                <input type="checkbox" name="" id=""></input>
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
          </div> 
          }
        </div>
    </div>
  )
}
