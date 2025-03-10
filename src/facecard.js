import React from 'react';
import cardImage1 from './asset/card1.png';
import cardImage2 from './asset/card2.png';
import cardImage3 from './asset/card3.png';
import cardImage4 from './asset/card4.png';

const facecard = () => {
    return (
        <>
        <div className='images'>
        <div className="profile-card">
        <img src={cardImage1} alt="profile1" className="profile-image1" />
        <h2 className="profile-name">Peg Legge</h2>
        <p className="profile-title">CEO</p>
        </div>
        <div className="profile-card">
        <img src={cardImage2} alt="profile2" className="profile-image2" />
        <h2 className="profile-name">Richard Guerra</h2>
        <p className="profile-title">CTO</p>
        </div>

        <div className="profile-card">
        <img src={cardImage3} alt="profile3" className="profile-image3" />
        <h2 className="profile-name">Alexandra Stolz</h2>
        <p className="profile-title">DESIGNER</p>
        </div>

        <div className="profile-card">
        <img src={cardImage4} alt="profile4" className="profile-image4" />
        <h2 className="profile-name">Janet Bray</h2>
        <p className="profile-title">DEVELOPER</p>
        </div>
        </div>

        <div className='button-class'>
            <button className="learn-button">Learn More</button>
        </div>
        
        
        </>
    );
};

export default facecard;