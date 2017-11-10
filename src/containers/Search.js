import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from './Body';
import Writer from '../components/Writer';
import SearchBar from '../components/SearchBar';
const Search = () => {

    const searchStyle = {};

    return (
        <div>
            <Header />
            {/* <Body /> */}
            {/* <SearchBar /> */}
            <div className="container-fluid">
                <div className="row">

                    <div style={{float: "left", display: 'inline', width: '100%', padding: '30px', paddingTop: '10px', 
                    color: '#765491', textAlign: 'center', 
                    border: '1px solid black', borderLeft: '0',  borderRight: '0',}}>

                       <h2> Your Matches</h2>
                        <div>
                            <Writer />
                            <Writer />
                            <Writer />
                            <Writer />
                            <Writer />
                            <Writer />
                            <Writer />
                        </div>
                        
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Search; 