import React from "react";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-section-img">
        <img src="./img/arosha2.jpg" alt="About Me" />
      </div>
      <div className="about-section-content">
      <p className="section--title">Get to know</p>
      <h2 className="skills-section--heading">About Me</h2>
        <p>
          An enthusiastic and passionate individual who has excellent motivation
          toward the success of my career with up-to-date technical and
          management skills. My smart thinking pattern and confidence in
          developing applications for the future industrial world help me
          perform my role best. Hard work and commitment to work under any
          condition lead the way to achieving personal and professional goals
          and aspirations on time.
        </p>
        <div className="info">
          <p>
            <strong>First Name:</strong> Arosha 
          </p>
          <p>
            <strong>Last Name:</strong> Sandaruwan
          </p>
          <p>
            <strong>Phone:</strong> +94 762356027
          </p>
          <p>
            <strong>Languages:</strong> English, Sinhala
          </p>
          <p>
            <strong>Location:</strong> Sri Lanka
          </p>
          <p>
            <strong>Email:</strong> aroshasandaruwan619@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
