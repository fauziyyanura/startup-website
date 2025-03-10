import React from 'react';
import teamImage from './asset/team.png';

const Team = () => {
    return (
        <div className='section-three'>
            <div className='team-image-container'>
            <img src={teamImage} alt="team" className='team' />
            </div>
            <div className='group'>
            <h1 className='group-text'>Lorem ipsum dolor sit amet consectetur</h1>
            <h3 className='group-note'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit  meno hit quos, ab,<br /> dolor aperiam nobis cum est eos error ipsum,volimptate culpa nesciunt delectus<br />  iste?</h3>
            <button className="learn-button2">Learn More</button>
            </div>
            
        </div>
    );
};

export default Team;