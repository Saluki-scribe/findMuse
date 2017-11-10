import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from './Body';
import WriterCont from '../components/WriterCont';

const Likes = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid" style={{border: '1px solid black', borderLeft: '0',  borderRight: '0'}}>
                <div>

                    <div style={{float: "left", display: 'inline', width: '50%', padding: '30px', paddingTop: '10px', 
                    color: '#765491', textAlign: 'center'}}>
                       <h2> Writing Buddies</h2>
                       <div>
                           <WriterCont />
                           <WriterCont />
                           <WriterCont />
                       </div>
                    </div>

                    <div style={{float: "left", display: 'inline', width: '50%', padding: '30px', paddingTop: '10px', 
                    color: '#765491', textAlign: 'center'}}>
                       <h2> Writers You Like</h2>
                       <div>
                           <WriterCont />
                           <WriterCont />
                       </div>
                    </div>

                </div>
            </div>
            <div>
            <Footer />
            </div>
        </div>
    );
}

export default Likes; 