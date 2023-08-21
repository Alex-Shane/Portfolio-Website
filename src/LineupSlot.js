import React from 'react';

function LineupSlot({ order, linkText, linkTo, position}) {

  return (
    <div className="lineup-slot">
      <div className="slot-number">{order}</div>
      <div className="slot-link">
        <a href={linkTo} target={linkText.includes('.pdf') ? '_blank' : '_self'} rel="noopener noreferrer">
          {linkText}
        </a>
      </div>
      <div className="slot-position">{position}</div>
    </div>
  );
}

export default LineupSlot;
