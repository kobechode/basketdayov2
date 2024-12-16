import React, { useState, useEffect } from "react";
import { db } from "../../Firebaseconfig"; // Firebase config
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "./Wsbc.css";

const WsbcReg = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [docCount, setDocCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const fetchDocumentCount = async () => {
      const currentDate = new Date().toISOString().split("T")[0]; // Get today's date
      const querySnapshot = await getDocs(
        collection(db, "Basketdayo", "Wsbc", `${currentDate}_Registered_Players`)
      );
      const count = querySnapshot.size;
      setDocCount(count);

      // Disable the button if document count exceeds 20
      if (count >= 20) {
        setIsDisabled(true);
      }
    };

    const checkDayOfWeek = () => {
      const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
      if (today === 0 || today === 4) {
        setIsDisabled(true); // Disable button on Sunday (0) and Thursday (4)
      }
    };

    fetchDocumentCount();
    checkDayOfWeek();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD
    const options = {
      timeZone: "Asia/Manila",
      hour12: false, // Use 24-hour format
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const formattedTime = currentDate
      .toLocaleString("en-US", options)
      .replace(/:/g, "-"); // Replace colons with dashes

    const docRef = doc(
      db,
      "Basketdayo",
      "Wsbc",
      `${formattedDate}_Registered_Players`,
      `${firstname}_${lastname}`
    ); // Define document reference

    try {
      await setDoc(
        docRef,
        {
          Firstname: firstname,
          Lastname: lastname,
          Email: email,
          ContactNumber: contactnum,
        },
        { merge: true }
      );
      console.log("Document written successfully!");
      navigate("/PickupDash"); // Navigate to a success page
    } catch (error) {
      setError("Error writing document: " + error.message);
    }

    const templateParams = {
      firstname: firstname,
      email: email,
      lastname: lastname,
    };

    emailjs
      .send("service_615y0s3", "template_ytravfs", templateParams, {
        publicKey: "VQdPf1Ssy_pj3-ern",

        firstname: firstname,
        email: email,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Success");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="signup-container_Wsbc">
      <img
        className="w-[350px] h-[150px]"
        src="https://github.com/kobechode/CCT2/blob/master/WSBC2.png?raw=true"
        alt=""
      />
      {error && <p className="error-message text-red-500">{error}</p>}
      <p className="text-green-500">Registered Players Today: {docCount}/20</p>
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
          />
        </div>
        <button type="submit" className="signup-button_Wsbc" disabled={isDisabled}>
          {isDisabled ? "Registration Unavailable" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default WsbcReg;
