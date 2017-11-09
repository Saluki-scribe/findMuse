import React, {Component} from 'react';
import Intake from './Intake';
import Profile from './Profile';
import Search from './Search';
import Contact from './Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from './Body';
import {BrowserRouter, Route} from 'react-router-dom';

class Container extends Component {

    constructor(props) {
        super(props);
    
        this.state = { page: 'Profile' };
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick = (newPage) => {        
        // calling handleClick will 
        // result in a state change:
        this.setState(
          { page: newPage }
        );
      }

    render () {

        // let page = this.state.page;
        // let currentPage;
        // const containerStyle = {border: '#404041 solid 1px', padding: '200px'};
            
        // switch (page) {
        //     case 'Home':
        //     case 'http://localhost:3000/search':
        //     currentPage = <Search />
        //     break;
        //     case 'Intake':
        //     currentPage = <Intake />
        //     break;
        //     case 'Contact':
        //     currentPage = <Contact />
        //     break;
        //     case 'Profile':
        //     currentPage = <Profile />
        //     break;
        //     default:
        //     return (
        //         <div style={containerStyle}>
        //             {this.state.page}
        //         </div>
        //     );
        // }

        return (
            <div>
                <div>
                 <Header />
                 <Body />
                 <Footer/>
               </div>
            </div>
        );

        // if (page === 'Home') {
        //     return (
        //         <div style={containerStyle}>
        //             <Search />
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div style={containerStyle}>
        //            {this.state.page}
        //         </div>
        //     );
        // }
        
    }
    
}

export default Container;
