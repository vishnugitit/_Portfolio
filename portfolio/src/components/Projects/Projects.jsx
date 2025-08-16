import React, { useState } from "react";
import "./Projects.css";

const ProjectsSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Sample Data
  const data = {
    Projects: [
      { id: 1, title: "Portfolio Website", description: "A personal portfolio built with React showcasing skills and projects." },
      { id: 2, title: "E-Commerce App", description: "An online shopping app with cart, payments, and product filters." },
      { id: 3, title: "Chat Application", description: "A real-time chat app using Socket.IO and Node.js backend." },
    ],
    Workshops: [
      { id: 1, title: "React Workshop", description: "Hands-on React training covering hooks, state management, and routing." },
      { id: 2, title: "Cloud Workshop", description: "Introduction to AWS, deployment, and cloud infrastructure basics." },
      { id: 3, title: "AI Workshop", description: "Exploring basics of AI, ML algorithms, and practical use cases." },
    ],
    Certifications: [
      { id: 1, title: "React Certification", description: "Certified in advanced React concepts and project building." },
      { id: 2, title: "AWS Certification", description: "Completed AWS Certified Cloud Practitioner program." },
      { id: 3, title: "Python Certification", description: "Certified in Python programming and data structures." },
    ],
  };

  return (
    <div className="portfolio-container">
      {/* Section Tabs */}
      <div className="tabs">
        {Object.keys(data).map((section) => (
          <button
            key={section}
            className={`tab-btn ${activeSection === section ? "active" : ""}`}
            onClick={() => {
              setActiveSection(section);
              setSelectedCard(null); // Reset card selection when switching
            }}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      {activeSection && (
        <div className="cards-grid">
          {data[activeSection].map((item) => (
            <div
              key={item.id}
              className={`card ${selectedCard?.id === item.id ? "selected" : ""}`}
              onClick={() => setSelectedCard(item)}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Details Section */}
      {selectedCard && (
        <div className="details-card">
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
