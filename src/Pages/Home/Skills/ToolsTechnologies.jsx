import React from "react";
import "./ToolsTechnologies.css";

const toolsData = {
  "Programming languages": [
    { name: "Java", logo: "https://skillicons.dev/icons?i=java" },
    { name: "C language", logo: "https://skillicons.dev/icons?i=c" },
    { name: "JavaScript", logo: "https://skillicons.dev/icons?i=javascript" },
    { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
  ],
  "Frontend & Backend Development": [
    { name: "HTML5", logo: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3", logo: "https://skillicons.dev/icons?i=css" },
    { name: "Bootstrap", logo: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "Tailwind CSS", logo: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Material UI", logo: "https://skillicons.dev/icons?i=materialui" },
    { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express.js", logo: "https://skillicons.dev/icons?i=express" },
    { name: "React.js", logo: "https://skillicons.dev/icons?i=react" },
    { name: "Spring Boot", logo: "https://skillicons.dev/icons?i=spring" },
  ],
  "Cloud, Database & CI/CD Management": [
    { name: "AWS", logo: "https://skillicons.dev/icons?i=aws" },
    { name: "Firebase", logo: "https://skillicons.dev/icons?i=firebase" },
    { name: "MySql", logo: "https://skillicons.dev/icons?i=mysql" },
    { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", logo: "https://skillicons.dev/icons?i=github" },
    { name: "GitHub Actions", logo: "https://skillicons.dev/icons?i=githubactions" },
  ],
  "Code Editors,IDEs and others": [
    {
      name: "Visual Studio Code",
      logo: "https://skillicons.dev/icons?i=vscode",
    },
    {
      name: "visual Studio",
      logo: "https://skillicons.dev/icons?i=visualstudio",
    },
    { name: "IntelliJ IDEA", logo: "https://skillicons.dev/icons?i=idea" },
    { name: "PyCharm", logo: "https://skillicons.dev/icons?i=pycharm" },
    { name: "Postman", logo: "https://skillicons.dev/icons?i=postman" },
    { name: "Figma", logo: "https://skillicons.dev/icons?i=figma" },

  ],
};

const ToolsTechnologies = () => {
  return (
    <div className="tools-technologies">
      <h1>My Skills</h1>
      {/* <p>I love using so many tools to make my work easier. Here are some of them.</p> */}
      {Object.keys(toolsData).map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="tools">
            {toolsData[category].map((tool) => (
              <div key={tool.name} className="tool">
                <img src={tool.logo} alt={tool.name} />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsTechnologies;
