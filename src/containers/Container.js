import React, {Component} from 'react';
import Intake from './Intake';
import Profile from './Profile';
import Search from './Search';
import Contact from './Contact';
import Header from '../components/Header';
import {BrowserRouter, Route} from 'react-router-dom';

class Container extends Component {
    state = { page: 'Profile' };


    handleClick = (newPage) => {        
        // calling handleClick will 
        // result in a state change:
        this.setState(
          { page: newPage }
        );
      }

    render () {

        let page = this.state.page;
        let currentPage;
        const containerStyle = {border: '#404041 solid 1px', padding: '200px'};
            
        switch (page) {
            case 'Home':
            case 'Search':
            currentPage = <Search onClick={this.handleClick} />
            break;
            case 'Intake':
            currentPage = <Intake onClick={this.handleClick} />
            break;
            case 'Contact':
            currentPage = <Contact onClick={this.handleClick} />
            break;
            case 'Profile':
            currentPage = <Profile onClick={this.handleClick} />
            break;
            default:
            return (
                <div style={containerStyle}>
                    {this.state.page}
                </div>
            );
        }

        return (
            <div style={containerStyle}>
                
                {currentPage}
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