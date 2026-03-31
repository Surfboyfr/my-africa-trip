import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaHeartbeat,
  FaBullseye,
  FaUserTie,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

type SectionProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
  <div style={styles.card}>
    <div style={styles.header}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.sectionTitle}>{title}</h3>
    </div>
    <div style={styles.sectionContent}>{children}</div>
  </div>
);

const WhatMakesUsDifferentPage: React.FC = () => {
  return (
    <section style={styles.container}>
      <Navbar />
      <div style={styles.wrapper}>
        <h1 style={styles.mainTitle}>What Makes Us Different</h1>
        <p style={styles.intro}>
          We combine curated travel experiences with structured growth
          opportunities. On every roam, you can expect:
        </p>

        {/* 1 */}
        <Section
          title="Healthy Competition"
          icon={<FaHeartbeat />}
        >
          <ul style={styles.list}>
            <li><FaCheckCircle style={styles.bullet} /> Wellness challenges</li>
            <li><FaCheckCircle style={styles.bullet} /> Fitness and mobility sessions</li>
            <li>
              <FaCheckCircle style={styles.bullet} />
              Intentional bodily exercise because growth must include the body
              not just ambition
            </li>
          </ul>
        </Section>

        {/* 2 */}
        <Section
          title="Vision Boarding & Strategic Mapping"
          icon={<FaBullseye />}
        >
          <p>We don't just dream; we design execution.</p>
          <ul style={styles.list}>
            <li>Maps out yearly goals</li>
            <li>Breaks them into SMART objectives</li>
            <li>Defines realistic timelines</li>
            <li>Identifies resources required</li>
            <li>Establishes measurable milestones</li>
            <li>Builds a practical roadmap for achievement</li>
          </ul>
          <p style={styles.highlight}>
            Clarity is power. Structure is strategy.
          </p>
        </Section>

        {/* 3 */}
        <Section
          title="Advisory & Consultancy Access"
          icon={<FaUserTie />}
        >
          <ul style={styles.list}>
            <li>Advisory sessions</li>
            <li>
              Complimentary consultation opportunities with vetted experts:
              <ul>
                <li>Business Branding</li>
                <li>Career advancement</li>
                <li>Travel strategy</li>
                <li>Personal development</li>
              </ul>
            </li>
          </ul>
        </Section>

        {/* 4 */}
        <Section
          title="Real Networking"
          icon={<FaUsers />}
        >
          <ul style={styles.list}>
            <li>Entrepreneurs</li>
            <li>Career professionals</li>
            <li>Creatives. Builders.</li>
          </ul>
          <p>
            You're not just travelling — you're entering a room of future
            collaborators, partners and trailblazers.
          </p>
          <p style={styles.highlight}>Exposure multiplies opportunity.</p>
        </Section>

        {/* Illustration / Highlight Section */}
        <div style={styles.illustrationBox}>
          <h3 style={styles.sectionTitle}>Your Journey, Elevated</h3>
          <p>
            When you sign up for our upcoming West Africa trip, you unlock an
            ecosystem designed for growth, access, and opportunity.
          </p>
        </div>

        {/* Bonus */}
        <div style={styles.bonus}>
          <h3 style={styles.sectionTitle}>Exclusive Benefits</h3>
          <ul style={styles.list}>
            <li>Roamers Circle Community</li>
            <li>
              5% discount on business trips, career-focused retreats, leisure
              roams, hangouts and “Meet a Trailblazer” sessions
            </li>
            <li>Priority access to curated events and collaborations</li>
            <li>Continued advisory support post-trip and more</li>
          </ul>

          <p style={styles.closing}>
            This isn't a one-off experience. It's an ecosystem of elevation.
          </p>
        </div>
      </div>
      
    </section>
    
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "100px 20px",
    backgroundColor: "#f9fafb",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    maxWidth: "1000px",
  },
  mainTitle: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    textAlign: "center",
    color: "#111827",
  },
  intro: {
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "50px",
    color: "#4b5563",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "14px",
    marginBottom: "25px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#4f46e5",
  },
  sectionTitle: {
    fontSize: "1.4rem",
    color: "#1f2937",
  },
  sectionContent: {
    fontSize: "1rem",
    color: "#4b5563",
    lineHeight: "1.7",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
  },
  bullet: {
    marginRight: "8px",
    color: "#10b981",
  },
  highlight: {
    marginTop: "15px",
    fontWeight: 600,
    color: "#111827",
  },
  illustrationBox: {
    marginTop: "40px",
    padding: "40px",
    borderRadius: "16px",
    background: "linear-gradient(to right, #6366f1, #8b5cf6)",
    color: "#ffffff",
    textAlign: "center",
  },
  bonus: {
    marginTop: "30px",
    padding: "35px",
    borderRadius: "14px",
    background: "#111827",
    color: "#ffffff",
  },
  closing: {
    marginTop: "20px",
    fontSize: "1.1rem",
    fontWeight: 600,
  },
};

export default WhatMakesUsDifferentPage;