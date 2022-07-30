import React from 'react';
import Navbar from '../Nav/Navbar';
import Header from '../Header';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import styled from 'styled-components';
import SmsIcon from '@mui/icons-material/Sms';
import SearchIcon from '@mui/icons-material/Search';
import DiamondIcon from '@mui/icons-material/Diamond';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Service = () => {
  
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='container text-center'>
      <div className='row mt-4 mb-5'>
      <h1>Our Service</h1>
      <div className='col-md-4 text-center mt-4'>
          <Servicee>
            <p></p>
            <SensorOccupiedIcon/>
            <p></p>
            <strong>Free Sign Up</strong>
            <p></p>
            <p>Sign up in marriage orbit for free of cost and get perfect matches for your Profile</p>
            <p></p>
          </Servicee>
        </div>
        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <SmsIcon/>
            <p></p>
            <strong>Free SMS & Chat</strong>
            <p></p>
            <p>On our website, a crucial tool like ctat is accessible so that users can communicate with one another.</p>
            <p></p>
          </Servicee>
        </div>

        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <SearchIcon/>
           <p></p>
            <strong>Auto Match Maker</strong>
            <p></p>
            <p>Each day, some new members sign up. This matrimonial service updates and displays matching profiles to you.</p>
            <p></p>
          </Servicee>
        </div>

        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <DiamondIcon/>
            <p></p>
            <strong>Recommend Profile</strong>
            <p></p>
            <p>You can view updates from those you follow when you follow someone.</p>
            <p></p>
          </Servicee>
        </div>



        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <NotificationsActiveIcon/>
            <p></p>
            <strong>NotificationsAlerts</strong>
            <p></p>
            <p>changes to the display picture, birthday notifications, and photo requests</p>
            <p></p>
          </Servicee>
        </div>

        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <AdminPanelSettingsIcon/>
            <p></p>
            <strong>Restrictions Setting</strong>
            <p></p>
            <p>limitations make it possible to disable the built-in anti-spam system.</p>
            <p></p>
          </Servicee>
        </div>

      </div>
    </div>
    </>
  ) 
}

export default Service;

const Servicee = styled.div`
width: 100%;
height: 220px;
background: #eee;
align-items: center;
padding: 15px;
transition: 0.5s;
display:flex;
justify-content: center;
flex-direction: column;
cursor: pointer;
>.MuiSvgIcon-root {
  font-size:60px;
  color:#FFA500;
}
:hover{
  box-shadow: 0 0 10px;
}
`