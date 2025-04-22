import React from 'react';

function Awards() {
    return ( 
     <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
            <img src='media/images/largestBroker.svg' alt='largest-broker'/>
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1>Largest stock broker in India</h1>
                <p >2+ million Zerodha clients contributes to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                <div className='row p-5'>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 '>
                        <ul>
                            <li>
                                <p>$tocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt.Securities</p>
                            </li>
                        </ul>
                        
                    </div>
                    <img src='media\images\pressLogos.png' alt='press-logo' style={{width:"80%"}}  />
                </div>
            </div>
        </div>
     </div>
     );
}

export default Awards;