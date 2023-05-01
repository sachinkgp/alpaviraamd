import React from 'react';
import { shreya,khusnuma } from './teamdata';

const TeamPage = () => {
  const teamMember1 = {
    name: 'Alice',
    title: 'CEO',
    image: 'RAJK1590.JPG',
    bio: shreya
  };
  const teamMember2 = {
    name: 'Bob',
    title: 'CTO',
    image: 'RAJK1601.JPG',
    bio: khusnuma
  };
  // Add more team member variables as needed

  return (
    <div className="teamback">
      <h1 style={{ fontSize: '36px', margin: '20px', textAlign: 'center' }}>Our Team</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ margin: '20px', width: '300px', textAlign: 'center' }}>
          <img src={teamMember1.image} alt={teamMember1.name} className="teambox" />
          <h2 style={{ fontSize: '24px', margin: '10px' }}>{teamMember1.name}</h2>
          <p style={{ fontSize: '18px', margin: '10px' }}>{teamMember1.title}</p>
          <p style={{ fontSize: '16px', margin: '10px' }}>{teamMember1.bio}</p>
        </div>
        <div style={{ margin: '20px', width: '300px', textAlign: 'center' }}>
          <img src={teamMember2.image} alt={teamMember2.name} className='teambox' />
          <h2 style={{ fontSize: '24px', margin: '10px' }}>{teamMember2.name}</h2>
          <p style={{ fontSize: '18px', margin: '10px' }}>{teamMember2.title}</p>
          <p style={{ fontSize: '16px', margin: '10px' }}>{teamMember2.bio}</p>
        </div>
        {/* Add more divs for additional team members */}
      </div>
      <div style={{'background-color':"#D16F69"}}>
        copyright issued for the month of the may 1st 2023
      </div>
    </div>
  );
};

export default TeamPage;