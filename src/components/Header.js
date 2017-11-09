import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

 const Header = () => {

    const headerStyle={color: '#765491', margin: 'auto 20px', fontSize: '35px', fontFamily: 'Merienda',
    border: '0px solid black', borderTop: '0', borderBottom: '0', borderLeft: '0', padding: '10px',
    textAlign: 'left'}

    return (
    <div className="App">
       
        <header className="App-header container-fluid">
            
            <div className="row">

                <div id="navBar">
                    <img src="/favicon.ico" className="App-logo" alt="logo" />
                    
                    <a href="/search" style={headerStyle} hover={{color: 'blue'}}>Search</a>
                    <a href="/likes" style={headerStyle}>Likes</a>
                    <a href="/profile" style={headerStyle}>Profile</a>

                    <div className="pull-right" style={{marginRight: 50, backgroundColor: 'white', borderRadius: 60}}>
                    <a href="/profile" ><Avatar /></a></div>

                </div>

            </div>

        </header>

    </div>
    );
  };

  Header.defaultProps = {
    message: 'You\'re amazing'
  };
  
  
export default Header;