import React, { useState } from 'react';
import './Contact.css';
function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const hendleEmailChange = (e) => {
    setSuccessMsg('');
    setEmailError('');
    setEmail(e.target.value);
  }
  const hendlePasswordChange = (e) => {
    setSuccessMsg('');
    setPasswordError('');
    setPassword(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
       const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if(emailRegex.test(email)){
         setEmailError('');
         if(email==='admin@demo.com'){
              setEmailError('');
              if(password==="demo"){
                setSuccessMsg('you are successfully logged in');
              }
                else{
                  setPasswordError('Password does not match with the email adresse');
                }
              }
         else{
           setEmailError('Email does not match with our database');
         }
       }else{
         setEmailError('Invalid Email');
       }
    } else {
      setEmailError('Email Required');
    }
    if (password !== "") {
   
    } else {
      setPasswordError('Password Required');
    }
  }
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="inputForm">
          <h3 className="text-center mt-3">React Login Form Validation</h3>
          {successMsg&&<div className="success-msg">{successMsg}</div>}
          <div className="">
            <form className="form-group form" autoComplete="off" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control custom_input" onChange={hendleEmailChange} value={email} placeholder="Enter your email address" /><br />
                {emailError && <div className="error-msg">{emailError}</div>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control custom_input" onChange={hendlePasswordChange} value={password} placeholder="Enter your password" /><br />
                {passwordError && <div className="error-msg">{passwordError}</div>}
              </div>
              <div className="form-group d-flex justify-content-center mt-2">
                <button type="submit" className="btn bt-sm btn-success">connexion</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
