import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import SmsIcon from '@mui/icons-material/Sms';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import images2 from "./image/logos.png";
import {Helmet} from "react-helmet";
const Footer = () => {
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
    <FooterSection >
    <a href="https://api.whatsapp.com/send?phone=9833188536&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
    <SmsIcon style={{color:"#fff",fontSize:40}}/>
</a>
          <FirstDiv data-aos="zoom-in-right" data-aos-duration="1500">
          {/* <a><SmsIcon style={{color:"#fff",fontSize:40}}/></a> */}
          <div class="logoS"><img src={images2}/></div>
           <hr/>
           <strong>Let's Start New Journey With India's <br></br>matrimonial and matchmaking service.</strong>
           <p></p>
           <ul>
            <li><a target="blank" href='https://www.facebook.com/profile.php?id=100081940505377'><FacebookIcon/></a></li>
           <li><a target="blank" href='https://www.instagram.com/marriageorbit/'><InstagramIcon/></a></li>
           <li><a href=''><TwitterIcon/></a></li>
           <li><a target="blank" href='https://www.youtube.com/channel/UC24wskR9nDHv8jnz2apRY0w'><YouTubeIcon/></a></li>
           </ul>
           </FirstDiv>
          

          <SecandDiv data-aos="zoom-out-up" data-aos-duration="1500">
          <h2>About Us</h2>
          <hr/>
          <p><Link to="/about">About Marriageorbit.com »</Link></p>
          <p><Link to="/contact">Contact Us »</Link></p>
          <p><Link to="/sitemap">Sitemap »</Link></p>
          </SecandDiv>
          <ThirdDiv data-aos="zoom-in-left" data-aos-duration="1500">
          <h2>Information</h2>
          <hr/>
          <p><Link to="/">Terms of Use »</Link></p>
          <p><Link to="/privacy-policy">Privacy Policy »</Link></p>
          <p><a href="https://api.whatsapp.com/send?phone=9833188536&amp;text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Help »</a></p>

          </ThirdDiv>
      </FooterSection>
       <FooterDiv>
        <h1>
          © 1996-2022 Marriageorbit.com | The World's Leading Matchmaking Service™
        </h1>
        <h1>Created By Smart Deal And Investment</h1>
        </FooterDiv>
    </>
  )
}

export default Footer;
const FooterSection = styled.div`
 overflow: hidden;
  background-color:#2e2e2e;
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
  .float{
    position:fixed;
    width:80px;
    height:80px;
    bottom:90px;
    right:28px;
    background-color:red;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:30px;
    box-shadow: 2px 2px 3px #999;
    z-index:100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .my-float{
    margin-top:16px;
  }
  
 `
const FooterDiv = styled.div`
background-color:#2a2424;
display:flex;
justify-content:space-around;
flex-wrap:wrap;
> h1 {
    font-size: 16px;
    padding: 24px 24px;
    color: white;
  }
  `
const FirstDiv = styled.div`
padding-top:20px;
color:white;

  > h2 {
    font-size: 24px;
    font-family: inherit;
    font-weight: 400;
  }
  >p{
    color:white;
    padding-bottom: 10px;
    display: block;
    transition: all 0.3s ease-in-out;
  }
  >p:hover{
    transform: translate(25px);
  }
  >a {
  width: 80px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  height: 80px;
  align-items: center;
  background-color: red;
}
>ul{
  display: flex;
  margin-left: -40px;
}
>ul li{
  margin:5px;
}
>ul li a{
	width: 40px;
	height: 40px;
  color: #fff;
	float: left;
	background: #ccc;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	border: 1px solid #ffa500;
	transition: 0.5s;
}
> a > MuiSvgIcon-root{
  color:red;
}

>ul li:nth-child(1) a :hover{
  color: #0047fd;
}

>ul li:nth-child(2) a :hover{
  color: #fd00a7;
}
>ul li:nth-child(3) a :hover{
  color: #00fafd;
}

>ul li:nth-child(4) a :hover{
  color: #fd0000;
}
  `
const SecandDiv = styled.div`
padding-top:20px;
color:white;
> h2 {
    font-size: 24px;
    font-family: inherit;
    font-weight: 400;
  }
  >p > a {
    color:#FFA500;
    padding-bottom:6px;
    display: block;
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
  }
  >p > a:hover{
    transform: translate(25px);
  }
  `
const ThirdDiv = styled.div`
padding-top:20px;
color:white;
> h2 {
    font-size: 24px;
    font-family: inherit;
    font-weight: 400;
  }
  >p > a {
    color:#FFA500;
    padding-bottom:6px;
    display: block;
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
  }
  >p > a:hover{
    transform: translate(15px);
  }
  `