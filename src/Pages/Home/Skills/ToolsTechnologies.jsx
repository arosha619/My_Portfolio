import React from 'react';
import './ToolsTechnologies.css';

const toolsData = {
  'Frontend & Backend Development': [
    { name: 'HTML5', logo: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS3', logo: 'https://skillicons.dev/icons?i=css' },
    { name: 'Bootstrap', logo: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'Tailwind CSS', logo: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'JavaScript', logo: 'https://skillicons.dev/icons?i=javascript' },
    { name: 'TypeScript', logo: 'https://skillicons.dev/icons?i=typescript' },
    { name: 'Node.js', logo: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Express.js', logo: 'https://skillicons.dev/icons?i=express' },
    { name: 'React.js', logo: 'https://skillicons.dev/icons?i=react' },
    { name: 'Next.js', logo: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'GraphQL', logo: 'https://skillicons.dev/icons?i=graphql' },
    { name: 'C#', logo: 'https://skillicons.dev/icons?i=csharp' },
    { name: '.NET', logo: 'https://skillicons.dev/icons?i=dotnet' },
    { name: 'Dart', logo: 'https://skillicons.dev/icons?i=dart' },
    { name: 'Flutter', logo: 'https://skillicons.dev/icons?i=flutter' },
    { name: 'Python', logo: 'https://skillicons.dev/icons?i=python' },
    { name: 'Flask', logo: 'https://skillicons.dev/icons?i=flask' },
    { name: 'FastAPI', logo: 'https://skillicons.dev/icons?i=fastapi' },
    { name: 'Java', logo: 'https://skillicons.dev/icons?i=java' },
  ],
  'Cloud, BaaS, Database & CI/CD Management': [
    { name: 'Azure', logo: 'https://skillicons.dev/icons?i=azure' },
    { name: 'GCP', logo: 'https://skillicons.dev/icons?i=gcp' },
    { name: 'Firebase', logo: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'Supabase', logo: 'https://skillicons.dev/icons?i=supabase' },
    { name: 'PostgreSQL', logo: 'https://skillicons.dev/icons?i=postgres' },
    { name: 'MongoDB', logo: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'Git', logo: 'https://skillicons.dev/icons?i=git' },
    { name: 'GitHub', logo: 'https://skillicons.dev/icons?i=github' },
    { name: 'GitLab', logo: 'https://skillicons.dev/icons?i=gitlab' },
    { name: 'Codemagic', logo: 'https://skillicons.dev/icons?i=codemagic' },
  ],
  'Artificial Intelligence & Machine Learning': [
    { name: 'Azure AI', logo: 'https://skillicons.dev/icons?i=azure' },
    { name: 'Azure ML', logo: 'https://skillicons.dev/icons?i=azure' },
    { name: 'TensorFlow', logo: 'https://skillicons.dev/icons?i=tensorflow' },
    { name: 'Keras', logo: 'https://skillicons.dev/icons?i=keras' },
    { name: 'PyTorch', logo: 'https://skillicons.dev/icons?i=pytorch' },
    { name: 'Scikit-learn', logo: 'https://skillicons.dev/icons?i=scikit-learn' },
    { name: 'OpenCV', logo: 'https://skillicons.dev/icons?i=opencv' },
    { name: 'LangChain', logo: 'https://skillicons.dev/icons?i=langchain' },
  ],
  'Code Editors & IDEs': [
    { name: 'Visual Studio Code', logo: 'https://skillicons.dev/icons?i=vscode' },
    { name: 'Visual Studio', logo: 'https://skillicons.dev/icons?i=visualstudio' },
    { name: 'Android Studio', logo: 'https://skillicons.dev/icons?i=androidstudio' },
    { name: 'IntelliJ IDEA', logo: 'https://skillicons.dev/icons?i=idea' },
    { name: 'PyCharm', logo: 'https://skillicons.dev/icons?i=pycharm' },
    { name: 'Codespaces', logo: 'https://skillicons.dev/icons?i=codespaces' },
    { name: 'CodeSandbox', logo: 'https://skillicons.dev/icons?i=codesandbox' },
    { name: 'Google Colab', logo: 'https://skillicons.dev/icons?i=googlecolab' },
  ]
};

const ToolsTechnologies = () => {
  return (
    <div className="tools-technologies" >
      <h1>Tools & Technologies</h1>
      <p>I love using so many tools to make my work easier. Here are some of them.</p>
      {Object.keys(toolsData).map(category => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="tools">
            {toolsData[category].map(tool => (
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
