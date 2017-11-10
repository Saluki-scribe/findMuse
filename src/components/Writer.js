import React from 'react';
import Avatar from './Avatar';

const Writer = (user) => {
    const writerStyle = {height: '350px', width: '275px', color: '#765491', backgroundColor: '#d7beea', border: '1px solid #765491', borderRadius: '10px',
    margin: '10px', float: 'left'};


    let typeOf = 'Prose';
    let writerName = "Name Nameity";

    let genreArray = ['fantasy', 'horror', 'YA'];
    let wantArray = ['roleplay', 'collaboration']; 

    const genreList = genreArray.map((genre, i) => 
    // expression goes here:
      <span key={"genre_" + i} style={{display: 'block'}}>{genre}</span>
    );

    const wantList = wantArray.map((wants, i) => 
    // expression goes here:
      <span key={"wants_" + i} style={{display: 'block'}}>{wants}</span>
    );

    return (
        <div style={writerStyle}> 
            <div style={{margin: '10px'}}>

            <a href='#' target='_blank'> <h3 style={{textAlign: 'center', fontFamily: 'Merienda', color: '#765491'}}>{writerName}</h3></a>
               <a href='#' target='_blank'> <Avatar /> </a>
                
                <div>
                
                    <p style={{marginTop: '5px'}}><strong>{typeOf} Writer</strong></p>
                    
                    <div style={{float: 'left', width: '50%', marginTop: '10px', margin: 'auto'}}>
                    <p style={{textAlign: 'left', marginLeft: '10px'}}><strong style={{textDecoration: 'underline'}}>Genres</strong>{genreList}</p> 
                    </div>

                    <div style={{float: 'left', width: '50%', marginTop: '10px', margin: 'auto'}}>
                    <p style={{textAlign: 'left', marginLeft: '10px'}}><strong style={{textDecoration: 'underline'}}>Looking for</strong> {wantList}</p>
                    </div>                
                </div>

            </div>
          {/* <a href='#' target='_blank'>
                <h4 style={{color: 'white', textAlign: 'center'}}>Profile</h4></a> */}

        </div>
    )
}

export default Writer; 