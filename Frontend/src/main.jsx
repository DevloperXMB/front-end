import React from 'react';
import ReactDOM from 'react-dom/client'; // استيراد ReactDOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../components/pages/SingUp'; // تأكد من أن الاسم صحيح
import LogIn from '../components/pages/LogIne'; // تأكد من أن الاسم صحيح
import Home from '../components/home/Home'; // تأكد من أن الاسم صحيح


const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/Home" element={<Home />} />

      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);
