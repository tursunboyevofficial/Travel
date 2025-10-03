import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleNext = () => {
    if (step === 1 && email) setStep(2);
    if (step === 2 && newPass.length >= 6 && newPass === confirmPass) setStep(3);
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.card}>
        <h2>Forgot Password</h2>

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
              Send Reset Link
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>New Password</label>
            <input 
              type="password" 
              placeholder="Enter new password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="Repeat new password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <button onClick={handleNext} disabled={newPass.length < 6 || newPass !== confirmPass}>
              Save New Password
            </button>
          </>
        )}

        {step === 3 && (
          <p className={styles.success}>✅ Password successfully changed!</p>
        )}

        <p className={styles.link}><a href="/login">⬅ Back to Login</a></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
