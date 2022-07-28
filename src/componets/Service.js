import { Avatar } from '@mui/material';
import React from 'react';
import "../App.css";

const Service = () => {
  return (
    <div className='container'>              
      <div className='row mt-5 mb-5'>              
        <div className='col-md-4'>              
          <div className='service'>              
            <Avatar></Avatar>              
            <strong>Free SMS & Chat</strong>              
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service