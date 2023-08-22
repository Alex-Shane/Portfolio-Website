import React from 'react';

function SkillsComponent() {
  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-section">
        <h3>Languages</h3>
        <div className="skills-icons">
          <div className="icon">
            <span className="tooltip">Python</span>
          </div>
          <div className="icon">
            <span className="tooltip">Java</span>
          </div>
          <div className="icon">
            <span className="tooltip">C++</span>
          </div>
          <div className="icon">
            <span className="tooltip">JavaScript</span>
          </div>
          <div className="icon">
            <span className="tooltip">C</span>
          </div>
          <div className="icon">
            <span className="tooltip">HTML</span>
          </div>
          <div className="icon">
            <span className="tooltip">CSS</span>
          </div>
          <div className="icon">
            <span className="tooltip">R</span>
          </div>
          <div className="icon">
            <span className="tooltip">SQL</span>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <h3>Tools</h3>
        <div className="skills-icons">
          <div className="icon">
            <span className="tooltip">Git</span>
          </div>
          <div className="icon">
            <span className="tooltip">Render</span>
          </div>
          <div className="icon">
            <span className="tooltip">Vim</span>
          </div>
          <div className="icon">
            <span className="tooltip">Terminal</span>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <h3>Topics</h3>
        <div className="skills-icons">
          <div className="icon">
            <span className="tooltip">Data Structures</span>
          </div>
          <div className="icon">
            <span className="tooltip">Algorithms</span>
          </div>
          <div className="icon">
            <span className="tooltip">Object Oriented Programming</span>
          </div>
          <div className="icon">
            <span className="tooltip">Artificial Intelligence</span>
          </div>
          <div className="icon">
            <span className="tooltip">UI/UX</span>
          </div>
          <div className="icon">
            <span className="tooltip">Web Scraping</span>
          </div>
          <div className="icon">
            <span className="tooltip">Logic</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
