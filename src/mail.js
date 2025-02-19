import React from 'react';
import mailImage from './asset/mail.png';

const Mail = () => {
    return (
        <>
        <div className='mail-sec'>
            <div className='mail-con'>
            <img src={mailImage} alt="mail" className='mail' />
            </div>
            <div className='mail-note'>
            <h1 className='group-text'>Lorem ipsum dolor sit amet consectetur</h1>
            <h3 className='group-note'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit  meno hit quos, ab, dolor aperiam nobis cum est eos error ipsum,volimptate culpa nesciunt delectus  iste?</h3>
            <button className="learn-button">Learn More</button>
            </div>

        </div>
        </>
    );
};

export default Mail;