import React, { useEffect } from 'react';
import displayRazorpay from './Payment';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";


const BuySub = () => {
    const user = useSelector(selectUser)

    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      };
     
      useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
      });
  return (
    <>
    <Helmet>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="robots" content="follow,index"/>
      <meta name="description" content="Pagekeyword"/>
      <meta name="keywords" content="Pagekeywords"/>
      <meta name="author" content="Marriageorbit"/>
      <meta property="og:url" content="PageURL.html"/>
      <meta property="og:type" content="products" />
      <meta property="og:title" content="Title-Name"/>
      <meta property="og:image" content="Pageimagelink.jpg" />
      <meta property="og:site_name" content="Who We are "/>
   
    <link rel="canonical" href="" />
 
      <title></title>
      
      <link rel="icon" href="imagelink.png" sizes="16x16" type="image/png"></link>
      </Helmet>
    <Container>
     <Main>
     <h3>Contact Details</h3>
     <h6>Email ID : {user.email}</h6>
     <h5>Become a Premium Member @ Just Rs.199/-</h5>
     <h4>Premium Benefits</h4>
         <Dive>
         <p>Access Contact Details of 20 Profiles (Only Indian)</p>
         <p> Can Send 50 Personalise Messages</p>
         <p> View Details of Perfect E-Matches</p>
         <p>Membership Duration - 10 Days</p>
         </Dive>
     <h4><Button onClick={displayRazorpay}>Pay Now</Button></h4>
     <Link to="/">x</Link>
     </Main>
    </Container>
    </>
  )
}


export default BuySub;
const Container = styled.div`
display:flex;
background-color: #ebdcdc;
justify-content:center;
z-index:1;
text-align:center;
border-radius:2px;
height:100vh;`
const Dive = styled.div``
const Main = styled.div`
background-color:#fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
width:600px;
padding:12px;
margin-top: 85px;
height:460px;
> h5 {
    color : #FFA500;
}
> h4 Button {
    background-color:#FFA500;
    color:white;
}
> h4 Button:hover {
    background-color:#FFA500;
    color:white;
}
> a {
  text-decoration:none; 
  color:black;
}`