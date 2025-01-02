import React, { useState } from "react";
 
import { db,database,app } from "../../../Firebaseconfig"
import { doc, setDoc } from "firebase/firestore";
 
 
import "./Teachers_Regform.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDatabase,ref,set,push } from "firebase/database";

const TeachersReg = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


 

  const handleSubmit =  async (e) => {
    e.preventDefault(); // Prevent form refresh
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const options = {
      timeZone: 'Asia/Manila',
      hour12: false, // Use 24-hour format
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const formattedTime = currentDate.toLocaleString('en-US', options).replace(/:/g, '-'); // Replace colons with dashes

    const docRef = doc(db, "Basketdayo", "Teachers_Club",`${formattedDate}_Registered_Players`, `${firstname}_${lastname}`);  // Define document reference
    
    try {
      await setDoc(docRef, {
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        ContactNumber: contactnum,
      },{ merge: true});
      console.log("Document written successfully!");
      navigate("/success");  // Navigate to a success page
    } catch (error) {
      setError("Error writing document: " + error.message);
    }
  
  };


  return (
    <div className="signup-container_TRF">
      {/* <h2 className="signup-title">Create an Account</h2> */}
      
  <img class="w-[350px] h-[150px] "src="https://github.com/kobechode/CCT2/blob/master/Teachers_Club.png?raw=true" alt=""></img>
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
        <button type="submit" className="signup-button_Trf">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default TeachersReg  ;
