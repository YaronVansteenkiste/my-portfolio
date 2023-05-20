import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css'

const languages = [
  'Javascript',
  'Typescript',
  'C#',
  'Java',
  'HTML/CSS',
  'Python',
  'SQL',
];

const frameworks = [
  '.NET',
  'Spring/Boot',
  'Node.js',
  'Backbone.js',
  'ReactJS',
  'Bootstrap',
  'jQuery',
  'ElectronJS',
];

const databases = ['MongoDB', 'PostgreSQL', 'noSQL'];

export function SkillSection() {
  return (
    <div id='skills-container' className="section-container container text-center mt-5">
      <div className="row">
        <div className="col">
          <h2>My Areas of Expertise</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Languages</h3>
          <ul className="animated-list">
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3>Frameworks</h3>
          <ul className="animated-list">
            {frameworks.map((framework) => (
              <li key={framework}>{framework}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3>Databases</h3>
          <ul className="animated-list">
            {databases.map((database) => (
              <li key={database}>{database}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
