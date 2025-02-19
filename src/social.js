import React from 'react';
import google from './asset/google.png';
import micro from './asset/micro.png';
import air from './asset/air.png';
import facebook from './asset/facebook.png';
import spotify from './asset/spotify.png';

const Social = () => {
    return (
        <>
        <div className='partners-section'>
            <h2 className='part'>PARTNERS</h2>
            <h1 className='lorem'>Lorem Ipsum Dolor</h1>
            <h3 className='ipsum'>Lorem ipsum, dolor sit amet<br /> consectetur<br /> adipisicing elit</h3>
        </div>
        <div className='media'>
            <img src={google} alt="google" className='google' />
            <img src={micro}   alt="microsoft" className='microsoft' />
            <img src={air}  alt="air" className='air' />
            <img src={facebook} alt="facebook" className='facebook' />
            <img src={spotify}  alt="spot" className='spotify' />
        </div>
        <div className="partner-btn">
        <button className="learn-button">Learn More</button>
        </div>
        </>
    );
};

export default Social;