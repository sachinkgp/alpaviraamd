import React from 'react';
import { shreya,khusnuma } from './teamdata';
import '../App.css'

const Ourteam = () => {
  const teamMember1 = {
    name: 'Shreya',
    title: 'ZZZZ',
    image: 'RAJK1590.JPG',
    bio: shreya,
    socialMedia: {
        twitter: 'https://twitter.com/alice',
        linkedin: 'https://linkedin.com/in/alice'
      }
  };
  const teamMember2 = {
    name: 'Khushnuma',
    title: 'ZZZZ',
    image: 'RAJK1601.JPG',
    bio: khusnuma,
    socialMedia: {
        twitter: 'https://twitter.com/alice',
        linkedin: 'https://linkedin.com/in/alice'
      }
  };
  // Add more team member variables as needed

  return (
    <div className="teamback">
      <h1 style={{ fontSize: '36px', margin: '20px', textAlign: 'center' }}>Our Team</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className='teambox'>
          <img src={teamMember1.image} alt={teamMember1.name} className="teamboximage" />
          <div className="boxtext">
            <h2 style={{ fontSize: '24px'}}>{teamMember1.name}</h2>
            <p style={{ fontSize: '18px'}}>{teamMember1.title}</p>
            <p style={{ fontSize: '16px'}}>{teamMember1.bio}</p>
          </div>
          <div className='social-media-box'>
            <a href={teamMember1.socialMedia.twitter} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a>
            <a href={teamMember1.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className='teambox'>
          <img src={teamMember2.image} alt={teamMember2.name} className='teamboximage' />
          <div className="boxtext">
                <h2 style={{ fontSize: '24px'}}>{teamMember2.name}</h2>
                <p style={{ fontSize: '18px'}}>{teamMember2.title}</p>
                <p style={{ fontSize: '16px'}}>{teamMember2.bio}</p>
          </div>
          <div className='social-media-box'>
            <a href={teamMember1.socialMedia.twitter} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a>
            <a href={teamMember1.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        {/* Add more divs for additional team members */}
      </div>
      
      <div className="foot">
        copyright issued for the month of the may 1st 2023
      </div>
    </div>
  );
};

export default Ourteam;