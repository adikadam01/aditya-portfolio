// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = ["HTML", "CSS", "Javascript", "Python", "React", "C++", "Java", "Github", "MongoDB", "SQL"];

  return (
    <div id="skills" className="skills">
      <div className="skills-marquee">
        <ul className="skills-list">
          {skills.concat(skills).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;