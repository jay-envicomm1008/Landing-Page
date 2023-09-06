import React, { useState } from 'react';
import styles from '../style'; 
import { navLinks } from "../constants";



const Login = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openLoginPopup = () => {
    setIsLoginOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
    setUsername('');
    setPassword('');
  };

  const handleLogin = () => {
    
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      closeLoginPopup();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.id}>
            {link.id === 'login' && (
              <button onClick={openLoginPopup}>{link.title}</button>
            )}
            
          </li>
        ))}
      </ul>

      {isLoginOpen && (
        <div className={`${styles.popupOverlay}`}>
          <div className={`${styles.popup}`}>
            <div className="flex flex-col p-4">
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                <p className={`${styles.paragraph} ml-2`}>
                  <span className="text-green">WELCOME TO</span>{" "}
                  <span className="text-white"></span>
                </p>
              </div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-2"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-2"
              />
              <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
              </button>
              <button onClick={closeLoginPopup} className="bg-red-500 text-white px-4 py-2 rounded mt-2">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
