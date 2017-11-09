import React from 'react';
import Avatar from './Avatar';

const Writer = () => {
    const writerStyle = {height: '350px', width: '275px', color: '#765491', backgroundColor: '#d7beea', border: '1px solid #765491', borderRadius: '10px',
    margin: '10px', float: 'left'};

    let genreArray = ['fantasy', 'horror', 'YA'];
    let wantArray = ['roleplay', 'collaboration']; 

    return (
        <div style={writerStyle}> 
            <div style={{margin: '10px'}}>
                <h3 style={{textAlign: 'center', fontFamily: 'Merienda'}}>Name Nameity</h3>
                <Avatar />
                <div>
                    <p>TYPEOF Writer</p>
                    <p style={{textAlign: 'left'}}><strong>Genres: </strong></p> 
                    
                    
                      


                    <p style={{textAlign: 'left'}}><strong>Looking for: </strong> {wantArray[0]}, {wantArray[1]} </p>
                </div>
            </div>
        </div>
    )
}

export default Writer; 