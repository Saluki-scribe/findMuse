import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {

    const footerStyle = {backgroundColor: '#765491', color: '#d7beea', textAlign: 'center'};
    const iconStyle = {color: '#d7beea', fontSize: '40px', textAlign: 'center'};
    return (
        
    <footer className="page-footer white center-on-small-only" style={footerStyle}>

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <h5 className="title">Footer Content</h5>
                <p>FindMuse helps writers find writers. Follow us to continue the conversation!</p>
            </div>
        </div>
    </div>

    <div className="social-section text-center" >
        
            <a className="btn-floating btn-sm btn-fb" style={iconStyle} href="#" target="_blank"><i className="fa fa-facebook"> </i></a>
            <a className="btn-floating btn-sm btn-tw" style={iconStyle} href="#" target="_blank"><i className="fa fa-twitter"> </i></a>
            <a className="btn-floating btn-sm btn-gplus"style={iconStyle} href="#" target="_blank"><i className="fa fa-google-plus"> </i></a>

    </div>

    <div className="footer-copyright">

        <div className="container-fluid">
            © 2017 Copyright: <a href="https://github.com/Saluki-scribe" target="_blank"> Taran Clarke </a>
        </div>
    </div>

</footer>
    )
  };
  
  Footer.defaultProps = {
    message: 'You\'re amazing'
  };
  
export default Footer;