import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../Firebaseconfig";
import { doc, setDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import "./WcbaLeague.css";

const firestore = getFirestore();

const WcbaLeague = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [docCount, setDocCount] = useState(0);
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocumentCount = async () => {
      const querySnapshot = await getDocs(
        collection(db, "League_Registration", "Wcba", `Wcba_Registered_Players`)
      );

      const count = querySnapshot.size;
      setDocCount(count);

      if (count >= 100) {
        setIsDisabled(true);
      }
    };

    const checkDate = () => {
      const today = new Date();
      const Deadlinedate = today >= new Date(2025, 0, 5); // January is 0-based

      if (Deadlinedate ) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };

    fetchDocumentCount();
    checkDate();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(
      db,
      "League_Registration",
      "Wcba",
      `Wcba_Registered_Players`,
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
          Status: "unpaid",
        },
        { merge: true }
      );

      const templateParams = {
        firstname,
        lastname,
        email,
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
            alert("Registration and email confirmation successful!");
            navigate("/dashboard");
          },
          (error) => {
            setError("Email confirmation failed: " + error.text);
          }
        );
    } catch (error) {
      setError("Error writing document: " + error.message);
    }
  };

  return (
    <div className="WcbaLeague">
      <header className="headerWcba">
        <div className="container">
          <div className="header__wrapper">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link to="/wcbaleague" className="nav__link active">
                    Registration
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/registeredplayersleaguewcba" className="nav__link">
                    Registered Players
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="signup-container_Wcba">
        <img
          className="w-[350px] h-[150px]"
          src="https://github.com/kobechode/CCT2/blob/master/WCBA.png?raw=true"
          alt="WCBA Logo"
        />
        {error && <p className="error-message text-red-500">{error}</p>}
        <p className="text-green-500">Registered Players Today: {docCount}/100</p>
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
          <button type="submit" className="signup-button_Wcba" disabled={isDisabled}>
            {isDisabled ? "Registration Unavailable" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WcbaLeague;
