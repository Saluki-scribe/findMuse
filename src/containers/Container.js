import React, {Component} from 'react';
import Intake from './Intake';
import Profile from './Profile';
import Search from './Search';
import Contact from './Contact';

class Container extends Component {
    state = { page: 'Profile' };

    render () {
        let page = this.state.page;
        let currentPage;
        const containerStyle = {border: '#404041 solid 1px', padding: '200px'};
            
        switch (page) {
            case 'Home':
            case 'Search':
            currentPage = <Search />
            break;
            case 'Intake':
            currentPage = <Intake />
            break;
            case 'Contact':
            currentPage = <Contact />
            break;
            case 'Profile':
            currentPage = <Profile />
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