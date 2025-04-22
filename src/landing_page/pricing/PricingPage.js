import React from 'react';
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Navbar from "../Navbar";
import  Footer from "../Footer";


function PricingPage() {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Brokerage/>
            < Footer />
        </div> 
     );
}

export default PricingPage;