import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

 const Header = () => {

    const headerStyle={color: '#765491', margin: 'auto 20px', fontSize: '35px'}

    return (
    <div className="App">
       
        <header className="App-header container-fluid">
            
            <div className="row">

                <div id="navBar">
                    <img src="/favicon.ico" className="App-logo" alt="logo" />
                    
                    <a href="#" style={headerStyle}>Home</a>
                    <a href="#" style={headerStyle}>Profile</a>
                    <a href="#" style={headerStyle}>Search</a>

                    <a href="#"><Avatar /></a>

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