import React from 'react';
import Avatar from './Avatar';

const WriterCont = () => {
    return (
        <div style={{backgroundColor: 'lavender', border: '1px solid #765491', borderRadius: '10px', height: '125px', marginBottom: '10px'}}>
           <div style={{float: 'left', margin: '10px'}}> <Avatar /> </div>
            <p>I'm writerCont</p>
        </div>
    )
}

export default WriterCont; 