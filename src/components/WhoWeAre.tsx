import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <section style={styles.container}>
      <div style={styles.contentWrapper}>
        <h2 style={styles.title}>Who We Are</h2>

        <p style={styles.description}>
          The Roam Circle is not just another travel agency — we are a circle of
          possibilities. Born from the concept of the 360-degree circle, we exist
          at the intersection of:
        </p>

        <div style={styles.grid}>
          {[
            "Travel",
            "Networking",
            "Wellness",
            "Personal Growth",
            "Career Acceleration",
            "Entrepreneurial Development",
            "Budget-Smart Exploration",
          ].map((item, index) => (
            <div key={index} style={styles.pill}>
              {item}
            </div>
          ))}
        </div>

        <p style={styles.closing}>
          Travel is not just movement across borders — it is movement in mindset,
          clarity, confidence, and capacity.
        </p>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "80px 20px",
    background: "linear-gradient(to right, #f8fafc, #eef2ff)",
    display: "flex",
    justifyContent: "center",
  },
  contentWrapper: {
    maxWidth: "900px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#1f2937",
  },
  description: {
    fontSize: "1.1rem",
    color: "#4b5563",
    lineHeight: "1.7",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "40px",
  },
  pill: {
    padding: "10px 18px",
    backgroundColor: "#ffffff",
    borderRadius: "999px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    fontSize: "0.95rem",
    color: "#111827",
  },
  closing: {
    fontSize: "1.15rem",
    fontWeight: 500,
    color: "#111827",
    lineHeight: "1.8",
  },
};

export default WhoWeAre;