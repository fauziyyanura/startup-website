import React from 'react';
import Facebook from './asset/face.png';
import Insta from './asset/ig.png';
import Twitter from './asset/twitter.png';
import Pinterest from './asset/pin.png';
import Tiktok from './asset/tik.png';
import Whatsapp from './asset/whatsapp.png';
import Youtube from './asset/youtube.png';

const Footer = () => {
    return(
        <footer className= 'footer'>
            <div className='end'>
            <img src={Facebook} alt='face' className='face' />
            <img src={Insta} alt='instagram' className='insta' />
            <img src={Twitter} alt='twitter' className='twit' />
            <img src={Pinterest} alt='pinterest' className='pin' />
            <img src={Tiktok} alt='tiktok' className='tik' />
            <img src={Whatsapp} alt='whatsapp' className='whats' />
            <img src={Youtube} alt='youtube' className='you' />
            </div>
            <div className='right-start'>
            <p className='right'>@ Start , 2022. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
