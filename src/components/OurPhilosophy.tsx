import React from "react";

const philosophyPoints = [
  {
    title: "Wholeness",
    description:
      "You grow mentally, physically, financially and socially.",
  },
  {
    title: "Continuity",
    description:
      "Growth takes place from the concept of consistency.",
  },
  {
    title: "Connection",
    description:
      "You never travel alone. You belong.",
  },
  {
    title: "Possibility",
    description:
      "Every border crossed unlocks opportunity.",
  },
];

const OurPhilosophy: React.FC = () => {
  return (
    <section style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.title}>Our Philosophy</h2>
        <h3 style={styles.subtitle}>The 360° Circle</h3>

        <div style={styles.grid}>
          {philosophyPoints.map((item, index) => (
            <div key={index} style={styles.card}>
              <h4 style={styles.cardTitle}>{item.title}</h4>
              <p style={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>

        <p style={styles.closing}>
          At The Roam Circle, every journey is intentionally curated to elevate
          your life — not just your location.
        </p>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "80px 20px",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    maxWidth: "1000px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#1f2937",
  },
  subtitle: {
    fontSize: "1.3rem",
    marginBottom: "40px",
    color: "#6b7280",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "10px",
    marginBottom: "40px",
  },
  card: {
    padding: "25px",
    borderRadius: "14px",
    background: "#f9fafb",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#111827",
  },
  cardText: {
    fontSize: "0.95rem",
    color: "#4b5563",
    lineHeight: "1.6",
  },
  closing: {
    fontSize: "1.1rem",
    fontWeight: 500,
    color: "#111827",
    lineHeight: "1.8",
  },
};

export default OurPhilosophy;