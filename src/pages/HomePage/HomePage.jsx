import React, { useState, useEffect } from "react";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [isTyped, setIsTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyped(true);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={css.container}>
      <h1 className={css.heading}>Welcome to Phonebook!</h1>
      <p className={`${css.subheading} ${isTyped ? css.typed : ""}`}>
        Manage your contacts easily and efficiently.
      </p>
    </main>
  );
};

export default HomePage;
