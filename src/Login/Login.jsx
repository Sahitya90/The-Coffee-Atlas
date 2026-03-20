import React from 'react'
import { useState } from 'react'
import './Login.css'
import Profile from '../assets/Profile.png'
import Image from '../assets/login-page.jpg'
import {login, signUp} from '../firebase'


const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");


  //feature for user authentication
  const [loading, setLoading] = useState(false);
  const user_auth = async(event)=>{
    //event to make the website not reload when we submit the form
    event.preventDefault();
    setLoading(true);
    try{
       if(signState === 'Sign In'){
      await login(email, password);

    }else{
      await signUp(name, email, password);
    }
    } catch(error){
      console.error(error);
      alert(error.message);
    }finally{
      setLoading(false);
    }
   
  }

  return (
    <div className='login'>
      
      <div className="left">
          <img src={Image} alt="Image of two people drinking there coffee outside a cafe" />
          <div className='login-overlay'>
            <h1>The Coffee Atlas</h1>
            <p>Discover the art, history, and science behind every cup.</p>
        </div>
        </div>
        <div className='right'>
          <div className="login-logo">
      <img src={Profile} alt="" /><h1>The Coffee Atlas</h1>
      </div>
     <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState==="Sign Up" ? <input value={name}
           onChange={(e)=> {setName(e.target.value)}}
          type = 'text' placeholder="Your Name"/>:<></>}
            
            <input value={email} onChange={(e)=> {setEmail(
              e.target.value
              )}} type='email' placeholder='Email'>
            </input>  
            <input value={password} onChange={(e)=> {setPassword(
              e.target.value
              )}} type='password' placeholder='Password'>

            </input>
            <button onClick={user_auth} type='submit'>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <p>Need Help ?</p>
            </div>
        </form>
        <div className="form-switch">
          {signState ==="Sign In"? <p>New to Coffee Atlas ?<span onClick={()=>{
            setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account ?<span onClick={()=> {setSignState("Sign In")}}>Sign In Now</span></p>
            }
        </div>
     </div>
     </div>
     
    </div>
  )
}

export default Login
