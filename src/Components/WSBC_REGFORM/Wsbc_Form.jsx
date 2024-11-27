import React, { useState } from "react";
import { db, app } from "../../Firebaseconfig"; // Firebase config
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Wsbc.css";

const WsbcReg = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

    const docRef = doc(db, "Basketdayo","Wsbc","Games_Played","111");  // Define document reference
    
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
    <div className="signup-container">
      <img
        className="w-[350px] h-[150px]"
        src="https://github.com/kobechode/CCT2/blob/master/WSBC2.png?raw=true"
        alt=""
      />
      {error && <p className="error-message text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactnum">Contact Number</label>
          <input
            type="tel"
            id="contactnum"
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

export default WsbcReg;
