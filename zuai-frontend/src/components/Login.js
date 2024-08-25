import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      console.log('Login successful!');
      
      navigate('/');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/register');
    console.log('Forgot Password clicked');
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
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
        <button type="submit" className="login-button">Login</button>
        <a href='/register'>
          <p>You don't have an account? Register here.</p>
        </a>
        <button type="button" className="forgot-button" onClick={handleForgotPassword}>Forgot Password?</button>
      </form>
    </div>
  );
};

export default LoginForm;
