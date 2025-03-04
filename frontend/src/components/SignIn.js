import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Home/Navbar';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Logged in successfully');
      navigate('/');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
   <>
    <Navbar/>
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: "url('/bground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="card p-4 shadow-lg" style={{ width: '400px', backdropFilter: "blur(10px)", background: "rgba(255, 255, 255, 0.2)", borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-white">Sign In</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1" className="text-white">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <small id="emailHelp" className="form-text text-light">
              We'll never share your email with anyone else.
            </small>
          </div>

          {/* Password Input */}
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1" className="text-white">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="Enter password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="form-group form-check mb-3">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="exampleCheck1" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label className="form-check-label text-white" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignIn;