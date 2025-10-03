import React, { useState } from "react";
import styles from "./Signup.module.scss";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [confirmCode, setConfirmCode] = useState("");

  const handleNext = () => {
    if (step === 1 && email) setStep(2);
    if (step === 2 && code.length >= 6 && code === confirmCode) setStep(3);
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.card}>
        <h2>Sign Up</h2>

        {step === 1 && (
          <>
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleNext} disabled={!email}>
              Send Code
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Enter 6-digit Code</label>
            <input 
              type="password" 
              placeholder="Enter code" 
              value={code} 
              onChange={(e) => setCode(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Repeat code" 
              value={confirmCode} 
              onChange={(e) => setConfirmCode(e.target.value)}
            />
            <button onClick={handleNext} disabled={code.length < 6 || code !== confirmCode}>
              Confirm
            </button>
          </>
        )}

        {step === 3 && (
          <p className={styles.success}>✅ Registration completed!</p>
        )}

        <p className={styles.link}>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
