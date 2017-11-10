import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

 class Header extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        }

    handleClick(e) { 
        e.preventDefault();
        const page = e.target;
        console.log("handleClick executed in Header.js: page = " + page);
      }

    render() {
        const headerStyle={color: 'white', margin: 'auto 15px', fontSize: '35px', fontFamily: 'Merienda',
        border: '0px solid black', borderTop: '0', borderBottom: '0', borderLeft: '0', padding: '10px',
        textAlign: 'left'}

        return (
        <div className="App">
        
            <header className="App-header container-fluid">
                
              

                    <div>
                        <img src="/favicon-purple.png" className="App-logo" alt="logo" />
                        <a href="/search" style={headerStyle}>Search</a>
                        <a href="/likes" style={headerStyle}>Likes</a>
                        <a href="/profile" style={headerStyle}>Profile</a>

                        <div className="pull-right" style={{marginRight: 50, backgroundColor: 'white', borderRadius: 60}}>
                            <a href="/profile" ><Avatar /></a>
                        </div>

                    </div>

            

            </header>

        </div>
        );


}

  };

  Header.defaultProps = {
    message: 'You\'re amazing'
  };
  
  
export default Header;