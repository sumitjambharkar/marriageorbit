import React, {useState } from "react";
import styled from "styled-components";
import Shaadi from './image/photo.jpg'
import Logoo from './image/nl.png'
import Login from "./pages/Login";
import Form from "./Form";
import images1 from "./image/bg-border.png";
import {Helmet} from "react-helmet";


const Header = () => {
  
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
      <Head>
        <Navbar>
          <Logo><h1>MARRIAGE</h1>
            <img className="App-logo" src={Logoo} alt=""/>
            <h1>RBIT</h1>
          </Logo>
            <Loginn>       
                <p><Login/></p>     
            </Loginn>
        </Navbar>
        <Heading>
          <h1>Trusted Matrimony & Matchmaking Service</h1>
          <p>Let's Start New Journey</p>
        </Heading>
       <Form/>
      </Head>
    </>
  );
};
export default Header;
const Head = styled.div`
  background-image: url(${Shaadi});
  z-index: 1;
  position: relative;
  min-height:600px;
  background-size:cover;
  background-repeat: no-repeat;
  align-items: center;
  .login {
    display: none;
  }
  .signup {
    display: none;
  }
  @media (max-width:500px) {
  min-height:100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  
  }
  @media (max-width:800px) {
  min-height:100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  
  }
`;


const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding-top:20px;
  background-color:#00000061;
  position:static;
  @media (max-width:500px) {
    
  }
`;
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

> h1 {
  font-size: 30px;
    font-weight: 600;
    color: #FFA500;
    font-family: poppins;
}

.App-logo {

  width: 4rem;
  margin-top: -10px;
}
@media (max-width:500px) {
  h1 {
    font-size:18px;
  }
  .App-logo{
    width:2rem;
  }
}
@media (max-width:800px) {
   >h1 {
    font-size: 20px;
    font-weight: 600;
    color: #FFA500;
    font-family: poppins;
  }
  .App-logo {
    width: 2rem;
    margin-top: -10px;
}
  }

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 1s linear;
  }
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

  
`;
const Loginn = styled.div`
  color: black;
  > h1 > a {
    font-size: 20px;
    text-decoration: none;
    color:#ffa500;
    border:1px solid #fff;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  p{
    font-size: 30px;
   
  }
`;
const Heading = styled.div`
  text-align: center;
  margin-top:310px;
  position: relative;
  color:#FFA500;
  >  p{
    font-size:40px;
    font-family: TypoUpright BT;
  }
  @media (max-width:995px) {
    h1 {
      font-size:24px;
    }
  }
  @media (max-width:500px) {
    margin-top:150px;
    
  }
`;
