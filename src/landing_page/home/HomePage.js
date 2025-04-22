import React from 'react';
import Awards from './Awards.js';
import Education from './Education.js';
import Hero from './Hero.js';
import Pricing from './Pricing.js';
import Stats from './Stats.js';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <div>
            <Navbar/>
            <Hero />
            <Awards />
            <Stats/>
            <Pricing />
            <Education/>
            <OpenAccount/>
            <Footer/>
        </div>
     );
}

export default HomePage;