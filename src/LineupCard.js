import React from 'react';
import LineupSlot from './LineupSlot';

function LineupCard() {
  const lineupData = [
    { order: 1, linkText: 'Resume', linkTo: process.env.PUBLIC_URL + '/Alex-Shane-Resume.pdf', position: 'CF'},
    { order: 2, linkText: 'Transcript', linkTo: process.env.PUBLIC_URL + '/Transcript.pdf', position: 'SS'},
    { order: 3, linkText: 'Project #1: Knight Investor (Flask + JavaScript)', linkTo: 'https://knight-investor.onrender.com', position: '1B'},
    { order: 4, linkText: 'Project #2: Tree Buddy (Java + SQL)', linkTo: 'https://www.youtube.com/watch?v=rnfThrgctCs&ab_channel=AlexShane', position: 'LF'},
    { order: 5, linkText: 'Skills', linkTo: "Use react Dom router for this", position: 'C'},
    { order: 6, linkText: 'Referals', linkTo: process.env.PUBLIC_URL + '/Recommendation-for-Alex-Shane.pdf', position: '2B'},
    { order: 7, linkText: 'About', linkTo: "use react router dom for this", position: 'RF'},
    { order: 8, linkText: 'Github', linkTo: 'https://github.com/Alex-Shane', position: "3B"},
    { order: 9, linkText: 'LinkedIn', linkTo: 'https://www.linkedin.com/in/alex-shane-b34337249/', position: "P"}
  ];

  return (
    <div className="lineup-card">
      {lineupData.map((slot, index) => (
        <LineupSlot
          key={index}
          order={slot.order}
          linkText={slot.linkText}
          linkTo={slot.linkTo}
          position={slot.position}
        />
      ))}
    </div>
  );
}

export default LineupCard;
