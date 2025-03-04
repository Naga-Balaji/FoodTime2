import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Home/Navbar';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
      alert('User registered successfully');
      navigate('/signin');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <>
      {/* Navbar should be outside the form container */}
      <Navbar />

      <div 
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          backgroundImage: "url('bground2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      > 
        <div className="card p-4 shadow-lg" style={{ width: '90%', maxWidth: '400px', backdropFilter: "blur(10px)", background: "rgba(255, 255, 255, 0.2)", borderRadius: "15px" }}>
          <h2 className="text-center mb-4 text-white">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="form-group mb-3">
              <label htmlFor="nameInput" className="text-white">Full Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="nameInput" 
                placeholder="Enter full name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>

            {/* Email Input */}
            <div className="form-group mb-3">
              <label htmlFor="emailInput" className="text-white">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="emailInput" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <small className="form-text text-light">
                We'll never share your email with anyone else.
              </small>
            </div>

            {/* Password Input */}
            <div className="form-group mb-3">
              <label htmlFor="passwordInput" className="text-white">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="passwordInput" 
                placeholder="Enter password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="form-group form-check mb-3">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="termsCheck" 
                checked={agreeTerms} 
                onChange={() => setAgreeTerms(!agreeTerms)} 
                required
              />
              <label className="form-check-label text-white" htmlFor="termsCheck">
                I agree to the terms & conditions
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
