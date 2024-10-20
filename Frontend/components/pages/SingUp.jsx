import React from 'react';
import logo from '../../src/assets/logo.svg'; // تأكد من أن المسار صحيح
import videoSrc from '../../src/assets/vdio.mov'; // تأكد من أن المسار صحيح
import '../styles/SingUp.css'

const SignUp = () => {
  return (
    <>
      <div className="card">
        <div className="part-1">
          <div className="logotext">
            <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="40" fontFamily="Arial" fontSize="20" fill="white">G</text>
              <text x="36" y="40" fontFamily="Arial" fontSize="20" fill="white">A</text>
              <text x="58" y="40" fontFamily="Arial" fontSize="20" fill="white">M</text>
              <text x="84" y="40" fontFamily="Arial" fontSize="20" fill="white">E</text>
              <text x="120" y="40" fontFamily="Arial" fontSize="20" fill="white">M</text>
              <text x="140" y="40" fontFamily="Arial" fontSize="20" fill="white">B</text>
              <text x="157" y="40" fontFamily="Arial" fontSize="20" fill="white">X</text>
            </svg>
          </div>
          <div className="logo-1">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="part-2">
          <div className="name">
            <label>Username</label>
          </div>
          <div className="value">
            <input type="text" />
          </div>
        </div>
        <div className="part-3">
          <div className="name">
            <label>Email</label>
          </div>
          <div className="value">
            <input type="email" />
          </div>
        </div>
        <div className="part-4">
          <div className="name">
            <label>Password</label>
          </div>
          <div className="value">
            <input type="password" />
          </div>
        </div>
        <div className="part-5">
          <div className="button">
            <video autoPlay muted loop className="button-background">
              <source src={videoSrc} type="video/mp4" />
            </video>
            <button className="signup-btn">Sign Up</button>
          </div>
          <div className="textsinup">
            <div className="para-1">
              <p className="accaonte">Do you have an account?</p>
            </div>
            <div className="para-2">
              <a href="#">
                <p>Log In</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
