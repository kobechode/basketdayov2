import React, { useState, useEffect } from "react";
import { db } from "../../../Firebaseconfig"
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

  const getWednesdayOfTheWeek = (currentDate = new Date()) => {
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const diffToWednesday = 3 - dayOfWeek; // Calculate the difference to Wednesday (3)
    const wednesday = new Date(currentDate);
    wednesday.setDate(currentDate.getDate() + diffToWednesday);
    return wednesday.toISOString().split("T")[0]; // Default ISO format for Firestore
  };

  const formatWednesdayForEmail = (wednesdayDate) => {
    const date = new Date(wednesdayDate);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options).replace(",", ""); // Format as "Dec 18 2024"
  };

  useEffect(() => {
    const fetchDocumentCount = async () => {
      const wednesdayDate = getWednesdayOfTheWeek(new Date());
      const querySnapshot = await getDocs(
        collection(db, "Basketdayo", "Wcba", `${wednesdayDate}_Registered_Players`)
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
      // Enable button only on Monday, Tuesday, or Friday
      if (today === 0 || today === 1 || today === 2 || today == 3) {
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

    const wednesdayDate = getWednesdayOfTheWeek(new Date());
    const wednesdayFormattedForEmail = formatWednesdayForEmail(wednesdayDate);

    const docRef = doc(
      db,
      "Basketdayo",
      "Wcba",
      `${wednesdayDate}_Registered_Players`,
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
          wednesday_date: wednesdayDate, // Save ISO format in Firestore
        },
        { merge: true }
      );
      console.log("Document written successfully!");

      // Send email using EmailJS
      const templateParams = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        wednesday_date: wednesdayFormattedForEmail, // Send formatted date to EmailJS
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
            navigate("/dashboard");
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
          <label htmlFor="Contactnum">Contact Number</label>
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
