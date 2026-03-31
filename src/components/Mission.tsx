import React from "react";

type InfoBlockProps = {
  title: string;
  content: string;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ title, content }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>{title}</h3>
      <p style={styles.text}>{content}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.mainTitle}>Our Purpose</h2>

      <div style={styles.grid}>
        <InfoBlock
          title="Our Vision"
          content="To become Africa's leading growth-centered travel community where ambitious individuals travel internationally, build strategic networks and execute structured life goals with expert support."
        />

        <InfoBlock
          title="Our Mission"
          content="To create transformative travel experiences combining exploration, wellness, education, strategic networking and professional growth."
        />

        <InfoBlock
          title="Our Tagline"
          content="Travel. Network. Unwind. Travel beyond borders, Network with the mindset of possibilities, Unwind with intention."
        />
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "60px 20px",
    backgroundColor: "#f9fafb",
    textAlign: "center",
  },
  mainTitle: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#1f2937",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#111827",
  },
  text: {
    fontSize: "1rem",
    color: "#4b5563",
    lineHeight: "1.6",
  },
};

export default AboutSection;