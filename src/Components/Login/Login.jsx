import React, { useState } from 'react';
import './Login.css';
import { auth } from '../../Firebaseconfig'; // Firebase config
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError('');
    }
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
    if (e.target.checked) {
      setTermsError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!termsAccepted) {
      setTermsError("You must accept the terms and conditions to proceed.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        navigate("/dashboard");
        setError('');
      })
      .catch((error) => {
        setError("The credentials you entered are invalid.");
      });
  };

  return (
    <div className="login-container p-1 bg-white rounded-xl">
      <h2>Login</h2>
      {error && <p className="error-message text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="error-message text-red-500">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error-message text-red-500">{passwordError}</p>}
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={handleTermsChange}
          />
          <label htmlFor="terms"> Review <Link to="/Terms">Terms and condition</Link></label>
          <label htmlFor="terms"> I accept the   Terms and condition </label>
          {termsError && <p className="error-message text-red-500">{termsError}</p>}
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <br />
          <Link to="/signup">Create an Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
