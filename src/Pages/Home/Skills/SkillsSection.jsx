import React from 'react';
import './SkillsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faJava, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';

const SkillsSection = () => {
  return (
    <section id="mySkills">
    <div className="skills-section">
      <div className="technical-skills">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <div className="skill-info">
              <FontAwesomeIcon icon={faJsSquare} className="icon" />
              <span>JavaScript</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '86%' }}></div>
            </div>
            <span className="percentage">86%</span>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <FontAwesomeIcon icon={faJsSquare} className="icon" />
              <span>JavaScript</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '86%' }}></div>
            </div>
            <span className="percentage">86%</span>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <FontAwesomeIcon icon={faJava} className="icon" />
              <span>Java</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '46%' }}></div>
            </div>
            <span className="percentage">46%</span>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <FontAwesomeIcon icon={faPython} className="icon" />
              <span>Python</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '38%' }}></div>
            </div>
            <span className="percentage">38%</span>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <FontAwesomeIcon icon={faPhp} className="icon" />
              <span>PHP</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '17%' }}></div>
            </div>
            <span className="percentage">17%</span>
          </div>
        </div>
      </div>
      <div className="professional-skills">
        <h2>Professional Skills</h2>
        <div className="circular-skills">
          <div className="circular-skill">
            <div className="circle" style={{ '--percentage': 95 }}>
              <span>95%</span>
            </div>
            <p>Communication</p>
          </div>
          <div className="circular-skill">
            <div className="circle" style={{ '--percentage': 55 }}>
              <span>55%</span>
            </div>
            <p>Teamwork</p>
          </div>
          <div className="circular-skill">
            <div className="circle" style={{ '--percentage': 86 }}>
              <span>86%</span>
            </div>
            <p>Project Management</p>
          </div>
          <div className="circular-skill">
            <div className="circle" style={{ '--percentage': 60 }}>
              <span>60%</span>
            </div>
            <p>Creativity</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default SkillsSection;
