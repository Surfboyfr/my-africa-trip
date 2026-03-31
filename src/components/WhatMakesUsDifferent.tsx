import React from "react";
import {Link } from "react-router-dom";

const WhatMakesUsDifferent: React.FC = () => {
  const handleClick = () => {
    // Replace with your routing logic (e.g., React Router or Next.js navigation)
    window.location.href = "/experiences";
  };

  return (
    <section style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.title}>What Makes Us Different</h2>

        <p style={styles.text}>
          We combine curated travel experiences with structured growth
          opportunities. On every roam, you can expect:
        </p>
           <Link to="/what-makes-us-different" style={{ textDecoration: "none" }}>
              <button style={styles.button}>
          Explore Experiences
        </button></Link>
        
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "80px 20px",
    background: "linear-gradient(to right, #eef2ff, #f8fafc)",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  wrapper: {
    maxWidth: "800px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#1f2937",
  },
  text: {
    fontSize: "1.1rem",
    color: "#4b5563",
    lineHeight: "1.7",
    marginBottom: "40px",
  },
  button: {
    padding: "14px 28px",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#111827",
    border: "none",
    borderRadius: "999px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default WhatMakesUsDifferent;