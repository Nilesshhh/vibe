import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import {useDispatch, useSelector} from  'react-redux';
import { logIn, signUp } from "../../actions/AuthAction.js";
const Auth = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducer.loading)

  const[isSignUp , setIsSignUp] = useState(true)
  console.log(loading)

const [data , setData] = useState({firstname:"",lastname: "", password:"",confirmpass:"",username:""})

  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) =>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(isSignUp){
      data.password === data.confirmpass
       ? dispatch(signUp(data)) 
       : setConfirmPass(false);
    }else{
      dispatch(logIn(data))
    }
  }
  const resetForm=()=>{
    setConfirmPass(true);
    setData({
      firstname:"",
      lastname: "", 
      password:"",
      confirmpass:"",
      username:"",
    })

  }
  return (
    <div className="Auth">
      <div className="blur" style={{top: '1%', right: '1rem'}}></div>
      <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
    {/* Left side */}
    <div class="backgroundBlur"></div>
      <div className="a-left">
       
        <div className="Webname">
          <h1> V I B E </h1>
          <img src={Logo} alt="" />
          <h6>Let's Create Magic & Just VIBE</h6>
        </div>
      </div>

   {/*Right side */}
      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h2>{isSignUp ? "Sign up":"Log In"}</h2>

        
        {isSignUp && 
          <div>
        <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
          />
        </div>
        }
          

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={data.username}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInputp"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
         
          />
          {isSignUp && 
            <input
            type="password"
            className="infoInputp"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={data.confirmpass}
          />}
          
        </div>
            <span style={{display: confirmPass ? "none":"block", color :"red", fontSize :"12px" , alignSelf:"flex-end", marginRight:"5px" }}>
              * Confirm Password is not same 
            </span>
        <div>
            <span style={{fontSize: '12px' , cursor:'pointer'}} onClick={()=>{setIsSignUp((prev)  => !prev); resetForm()}}>
            {isSignUp ? "Already have an account. Login !":"Don't have an account ? Sign up"}</span>
        </div>
        <button className="button infoButton" type="submit" disabled={loading}>{ loading ? "Loading..." :isSignUp ? "Sign up":"Log In"}</button>
      </form>
    </div>
     
    </div>
  );
};
export default Auth;
