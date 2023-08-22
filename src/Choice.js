import React from 'react';

const Choice = ({ path, type, setShowChoice }) => {
  let load = '';

  if (type === 'Resume') {
    load = 'Alex Shane Resume';
  } else if (type === 'Transcript') {
    load = 'Alex Shane Transcript';
  } else {
    load = 'Recommendation for Alex Shane';
  }

  // Function to handle closing the ChoiceComponent
  const handleClose = () => {
    setShowChoice(false); // Set state to false to close the ChoiceComponent
  };

  return (
    <div className="choice-component">
      <div className="choice-buttons">
          <button className = "button">
            <a href={path} download={load}> Download </a>
          </button>
          <button className = "button">
            <a href={path}> View in Browser </a>
          </button>
      </div>
    <button className= "close-button" onClick={handleClose}> Close </button>
    </div>
  );
};

export default Choice;
