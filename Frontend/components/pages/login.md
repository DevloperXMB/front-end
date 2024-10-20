import React, { useState } from 'react';
import logo from '../../src/assets/logo.svg'; // تأكد من أن المسار صحيح
import videoSrc from '../../src/assets/vdio.mov'; // تأكد من أن المسار صحيح
import '../styles/SingUp.css';
import axios from 'axios'; // تأكد من أنك قمت بتثبيت axios

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signup', {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('خطأ في التسجيل');
    }
  };

  return (
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

      <form onSubmit={handleSubmit}>
        <div className="part-2">
          <div className="name">
            <label>Username</label>
          </div>
          <div className="value">
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
        </div>
        
        <div className="part-3">
          <div className="name">
            <label>Email</label>
          </div>
          <div className="value">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
        </div>
        
        <div className="part-4">
          <div className="name">
            <label>Password</label>
          </div>
          <div className="value">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
        </div>
        
        <div className="part-5">
          <div className="button">
            <video autoPlay muted loop className="button-background">
              <source src={videoSrc} type="video/mp4" />
            </video>
            <button type="submit" className="signup-btn">Sign Up</button>
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
      </form>

      {/* عرض الرسالة بعد التسجيل */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Signup;
