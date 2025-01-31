import React, { useState } from 'react';
import './Login.css';
import { auth } from '../../Firebaseconfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address.');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value) ? '' : 'Password must be at least 6 characters long.');
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
    setTermsError(e.target.checked ? '' : '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return setError('Invalid email address.');
    if (!validatePassword(password)) return setError('Password must be at least 6 characters long.');
    if (!termsAccepted) return setTermsError('You must accept the terms and conditions to proceed.');

    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/dashboard'))
      .catch(() => setError('The credentials you entered are invalid.'));
  };

  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        const user = result.user;
        setEmail(user.email);
        navigate('/dashboard');
      })
      .catch(() => setError('Google sign-in failed.'));
  };

  return (
    <div className="login-container p-1 bg-white rounded-xl">
      <h2>Login</h2>
      {error && <p className="error-message text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} required />
          {emailError && <p className="error-message text-red-500">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required />
          {passwordError && <p className="error-message text-red-500">{passwordError}</p>}
        </div>
        <div className="form-group">
          <input type="checkbox" id="terms" checked={termsAccepted} onChange={handleTermsChange} />
          <label htmlFor="terms" className="text-red-500"> Review <Link to="/Terms">Terms and Conditions</Link></label>
          <label htmlFor="terms"> click here to agree </label>
          {termsError && <p className="error-message text-red-500">{termsError}</p>}
        </div>
        <button type="submit" className="login-btn">Login</button>
        <button type="button" className="google-btn" onClick={handleGoogleSignIn}>
          <FcGoogle className="google-icon" /> Sign in with Google
        </button>
        <div className="login-links">
          <Link to="/signup">Create an Account</Link>
          <br />
          <Link to="/passwordreset">Forgot Password</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
