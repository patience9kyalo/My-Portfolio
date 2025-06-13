import React from 'react';
import './certificatescard.css';

const certificatesCard = ({ certificate }) => {
  return (
    <div className="certificate-card">
      <h3>{certificate.title}</h3>
      <p>{certificate.organization}</p>
      <a href={certificate.certificate_url} target="_blank" rel="noopener noreferrer">
        📜 View Certificate
      </a>
    </div>
  );
};

export default certificatesCard;
