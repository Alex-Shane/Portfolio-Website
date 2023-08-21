import React, { useState } from 'react';
import Choice from './Choice.js'

function LineupSlot({ order, linkText, linkTo, position}) {

    const [showChoice, setShowChoice] = useState(false);

    const handlePdfLinkClick = () => {
        setShowChoice(true);
      };

  return (
    <div className="lineup-slot">
      <div className="slot-number">{order}</div>
      <div className="slot-link">
        <a href={linkTo} target={linkTo.includes('.pdf') ? '_blank' : '_self'} download ={linkTo.includes('.pdf') ? "Alex Shane Resume" : null} rel="noopener noreferrer"
           onClick={(e) => {
            e.preventDefault();
            handlePdfLinkClick();
          }}
          >
          {linkText}
        </a>
      </div>
      <div className="slot-position">{position}</div>
      {showChoice && <Choice path = {linkTo} type = {linkText} setShowChoice={setShowChoice} />}
    </div>
  );
}

export default LineupSlot;
