import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    if (username && password) {
      
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      console.log('User registered successfully!');
      alert('User registered successfully!');
    } else {
      alert('Please enter both username and password.');
    }
    navigate('/login')
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        <p>Already U have a Account <a href='/login'>Login</a></p>
      </form>
    </div>
  );
}

export default Register;
