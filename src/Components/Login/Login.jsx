import React, { useState, useEffect } from 'react';
import './Login.css';
import { auth } from '../../Firebaseconfig'; // Firebase config
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 
 
 


const Login = () =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track the logged-in user
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
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

  // Handle input change for password with validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!validatePassword(value)) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError('');
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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed in:', user);
        navigate("/dashboard");
        setError(''); // Clear any previous errors
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        setUser(null); // Clear user state on sign out
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
      });
  };


return(
    <div class="login-container  p-1 bg-white  rounded-xl">
    <h2>Login</h2>
    {error && <p className="error-message text-red-500">{"The credentials you entered is invalid"}</p>}
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username"placeholder="Enter your username"  value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        {emailError && <p className="error-message text-red-500">{emailError}</p>}
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password"  value={password} onChange={(e) => setPassword(e.target.value)}required></input>
        {passwordError && <p className="error-message text-red-500">{passwordError}</p>}
      </div>
      <button type="submit" class="login-btn">Login</button>
      <div class="login-links">
        <a href="#">Forgot Password?</a>
        <br></br>
        <Link to="/signup">Create an Account</Link>
      </div>
    </form>
  </div>


)
}

export default Login