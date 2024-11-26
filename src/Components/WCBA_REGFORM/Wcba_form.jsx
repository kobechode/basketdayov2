import React, { useState } from "react";
import { database,app } from '../../Firebaseconfig'; // Firebase config
 
 
import "./wcba.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDatabase,ref,set,push } from "firebase/database";

const WcbaReg = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


 

  const handleSubmit = (e) => {

  function RegisterWcba(){

    const database = getDatabase();
    const Reference = push(ref(database,"Basketdayo/Wsbc"))
    
    set (Reference,{



    })
  }
   
  };


  return (
    <div className="signup-container_Wcba">
      {/* <h2 className="signup-title">Create an Account</h2> */}
      
  <img class="w-[350px] h-[150px] "src="https://github.com/kobechode/CCT2/blob/master/WCBA.png?raw=true" alt=""></img>
      {error && <p className="error-message text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input
            type="Text"
            id="Firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input
            type="Text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Contact Number</label>
          <input
            type="tel"
            id="Contactnum"
            value={contactnum}
            onChange={(e) => setContactnum(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default WcbaReg ;
