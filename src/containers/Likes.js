import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from './Body';

const Likes = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">

                    <div style={{float: "left", display: 'inline', height: '300px', width: '50%', padding: '30px', paddingTop: '10px', 
                    color: '#765491', textAlign: 'center', 
                    border: '1px solid black', borderLeft: '0',  borderRight: '0',}}>
                       <h2> Your Friends</h2>
                    </div>
                    <div style={{float: "left", display: 'inline', height: '300px', width: '50%', padding: '30px', paddingTop: '10px', 
                    color: '#765491', textAlign: 'center', 
                    border: '1px solid black', borderLeft: '0',  borderRight: '0',}}>
                       <h2> Your Likes</h2>
                    </div>

                </div>
            </div>
            I LIKE you! Get it?                
            <Footer />
        </div>
    );
}

export default Likes; 