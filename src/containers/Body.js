import React from 'react';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "I\'m just a body..." };
    }

    render () {
        const containerStyle = {border: '#404041 solid 1px',  borderLeft: '0',  borderRight: '0', padding: '200px'};
        
        return (            
            <div style={containerStyle}>
                <p>{this.state.text}</p>
            </div>
        )
    }

   

}

export default Body;
