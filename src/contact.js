import React from "react";
import Nav from './nav'
import Us from './us';
import Message from './message'
import Footer from './footer';

const CONTACT = () => {
    return (
        <div>
            <Nav />
            <main>
                <Us />
                <Message />
            </main>
            <Footer />
        </div>
    );
};

export default CONTACT;