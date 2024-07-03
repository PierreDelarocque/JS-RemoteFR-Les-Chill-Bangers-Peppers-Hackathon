import { useState } from "react";

function About() {
  const [selectedSection, setSelectedSection] = useState("Deuteranomaly");

  return (
    <main className="all-about-content">
      <section className="select-content-button">
        <input
          name="value-radio"
          id="value-1"
          type="radio"
          checked={selectedSection === "Deuteranomaly"}
          onChange={() => setSelectedSection("Deuteranomaly")}
        />
        <label htmlFor="value-1" className="select-label-about">
          Deuteranomaly
        </label>
        <input
          name="value-radio"
          id="value-2"
          type="radio"
          checked={selectedSection === "Protanopia"}
          onChange={() => setSelectedSection("Protanopia")}
        />
        <label htmlFor="value-2" className="select-label-about">
          Protanopia
        </label>
        <input
          name="value-radio"
          id="value-3"
          type="radio"
          checked={selectedSection === "Tritanopia"}
          onChange={() => setSelectedSection("Tritanopia")}
        />
        <label htmlFor="value-3" className="select-label-about">
          Tritanopia
        </label>
      </section>
      {selectedSection === "rules" && (
        <section className="rules-content">
          <h1 className="main-title-content">Les règles</h1>
        </section>
      )}
      {selectedSection === "legalsMentions" && (
        <section className="legals-mentions-content">
          <h1 className="main-title-content">Mentions Légales</h1>
        </section>
      )}
      {selectedSection === "cgu-content" && (
        <section className="cgu-content">
          <h1 className="main-title-content">
            Conditions Générales d'Utilisation
          </h1>
        </section>
      )}
    </main>
  );
}

export default About;
