import React from 'react';
import "../App.css";
import Navbar from './Nav/Navbar';
import Header from './Header';
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
            <p>An important facility such as ctat is available in our site, so that people can interact with each other.</p>
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
            <p>An important facility such as ctat is available in our site, so that people can interact with each other.</p>
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
            <p>An important facility such as ctat is available in our site, so that people can interact with each other.</p>
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
            <p>An important facility such as ctat is available in our site, so that people can interact with each other.</p>
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
            <p>An important facility such as ctat is available in our site, so that people can interact with each other.</p>
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
            <p>An important facility such as ctat is available in our site, so that people can interact with each other.</p>
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
`