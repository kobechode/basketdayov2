import React, { useState, useEffect } from "react";
import { db } from "../../Firebaseconfig"; // Firebase config
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./wcba.css";

const WcbaReg = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [docCount, setDocCount] = useState(0);
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true); // Default to disabled
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocumentCount = async () => {
      const currentDate = new Date().toISOString().split("T")[0]; // Get today's date
      const querySnapshot = await getDocs(
        collection(db, "Basketdayo", "Wcba", `${currentDate}_Registered_Players`)
      );
      const count = querySnapshot.size;
      setDocCount(count);

      // Disable the button if document count exceeds 30
      if (count >= 30) {
        setIsDisabled(true);
      }
    };

    const checkDayOfWeek = () => {
      const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
      // Enable button only on Wednesday (3)
      if (today === 4) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };

    fetchDocumentCount();
    checkDayOfWeek();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const options = {
      timeZone: "Asia/Manila",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedTime = currentDate
      .toLocaleString("en-US", options)
      .replace(/:/g, "-");

    const docRef = doc(
      db,
      "Basketdayo",
      "Wcba",
      `${formattedDate}_Registered_Players`,
      `${firstname}_${lastname}`
    );

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

      // Send email using EmailJS
      const templateParams = {
        firstname: firstname,
        lastname: lastname,
        email: email,
      };

      emailjs
        .send(
          "service_615y0s3",
          "template_iotobqh",
          templateParams,
          "VQdPf1Ssy_pj3-ern"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Registration and email confirmation successful!");
            navigate("/success");
          },
          (error) => {
            console.log("FAILED...", error.text);
            setError("Email confirmation failed: " + error.text);
          }
        );
    } catch (error) {
      setError("Error writing document: " + error.message);
    }
  };

  return (
    <div className="signup-container_Wcba">
      <img
        className="w-[350px] h-[150px]"
        src="https://github.com/kobechode/CCT2/blob/master/WCBA.png?raw=true"
        alt=""
      ></img>
      {error && <p className="error-message text-red-500">{error}</p>}
      <p className="text-green-500">Registered Players Today: {docCount}/30</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="Firstname"
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
        <button type="submit" className="signup-button_Wcba" disabled={isDisabled}>
          {isDisabled ? "Registration Unavailable" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default WcbaReg;
