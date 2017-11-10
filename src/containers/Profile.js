import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from './Body';

const Profile = () => {
    return (
        <div>
            <Header />
            {/* <Body />             */}
            <div style={{height: ''}}>
                <div style={{float: "left", display: 'inline', height: '350px', width: '100%', padding: '30px', paddingTop: '10px', 
                    color: '#765491', backgroundColor: 'white', textAlign: 'center', 
                    border: '1px solid black', borderLeft: '0',  borderRight: '0',}}>
                       <h2>Harry Potter</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile; 