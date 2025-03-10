import React from 'react';
import Header from './header';
import Social from './social';
import Team from './team';
import Mail from './mail';
import Talent from './talent';
import Facecard from './facecard';
import Footer from './footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Social />
                <Team />
                <Mail />
                <Talent />
                <Facecard />
            </main>
            <Footer />
        </div>
    );
};

export default Home;