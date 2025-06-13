import React from 'react';
import './skillscard.css';

const SkillsCard = ({ skills }) => {
  return (
    <div className="skills-card">
      <h4>{skills.title}</h4>
      <ul>
        {skills.description.split(',').map((item, index) => (
          <li key={index}>{item.trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
