import React from 'react';

class SearchBar extends React.Component {

    render() {

        const searchStyle = {height: '75px', backgroundColor: '#d7beea', borderTop: '1px solid black'}

        return (
            <div className='containerFluid' style={searchStyle}>Here's ya search bar</div>
        )
    }
}

export default SearchBar;