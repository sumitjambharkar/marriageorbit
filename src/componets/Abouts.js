import React from "react";
import images from "../image/about-us.jpg";
import images1 from "../image/bg-border.png";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { db } from "./firebase"
import { Button } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import Loginn from './Loginn';
import {Helmet} from "react-helmet";
const Abouts = ()=> {

return (

    <>
   <Helmet>
   <meta charset="utf-8"/>
  <meta name="robots" content="follow,index"/>
  <meta http-equiv="content-language" content="en"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="description" content="Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession.On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity."/>

      <meta name="keywords" content="Matrimony services for boys in mumbai,Matchmaking services for girls in mumbai,Matrimonial websites to get womens, matrimonials, couples matchmaking companies in mumbai, Brides, matchmaking services in linking road, grooms, shaadi, Online Matrimonial services in marine drive, 
      Online Matrimony, female partner for shadi in south matunga, Online matchmaking Services,Indian single girls in juhu,girls for marriage in mumbai
      lifepartner for wedding in thane.get girlfriend for marriage in bandra.diffrent casts of girls for marriage in mulund.
      Matrimony services for mens in panvel, matchmaking websites to find girls, matrimonials, couples girls and boys matchmaking companies in lower parel, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in dadar, Online matchmaking Services,Indian single boys in chembur,boys for marriage in varsova
      lifepartner for wedding in santacruz.get boyfriend for marriage in vasai-virar.diffrent casts of boys for marriage in andheri.hindu girls and boys for marriage in borivali."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/about"/>
      <meta property="og:type" content="About Our Matrimonial Matchmaking Service In Thane" />
      <meta property="og:title" content="About Us | Best Matchmaking Services In Thane" />
      <meta property="og:image" content="https://marriageorbit.com/static/media/download.c4ad1512ea895588cb1d.jpg" />
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/about" />
 
      <title>About Us | Best Matchmaking and Matrimony Services In Thane</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 
   

      </Helmet>
<div class="heads"><h1>About Us</h1></div>
<div class="fancy2"><img src={images1}/></div>
 <br></br>
 <div class="container">
<div class="row">
<div class="col-md-6">
<div class="imageabt">
    <img src={images}/>
</div>
</div>

<div class="col-md-6">
<div class="sectiontxt">
<p>We Are Marriageorbit With thousands of success stories and India's matrimonial and matchmaking services. Utilize these matrimonial services to investigate the possibilities and resources for a union with your ideal match. Numerous top-notch online matrimonial sites in India,Mumbai. A lot of grooms or brides can use a matrimony website as a platform to find the ideal match for their needs.
The bride and groom might look for a spouse immediately.<br></br><br></br>
You may find high profile and free marriage bureaus in Mumbai right here. also find out about local boys and girls looking for marriage.
We specialise in matching local singles for marriage between women and men.
Find a bride for marriage close to you as well as in renowned places like Mumbai, Pune, New Delhi, Chennai, Bangalore, and Ahmedabad.
Marriage Orbit offers you a way to locate your life partner for a planned, local, happy marriage.</p>
</div>
</div>


</div>
 </div>
 <SectionButton>
                <span>Your story is waiting to happen!</span>
                <Button data-aos="zoom-in-down" data-aos-duration="1500"><Link><span style={{position:'absolute',opacity:0}}><Loginn/></span>Get Started</Link></Button>
</SectionButton>
</>

)
}

const SectionButton = styled.div`
   background-color:#FFA500;
   display:flex;
   min-height: 113px;
   justify-content:center;
   justify-items:center;
   flex-wrap:wrap;
   align-items:center;
   margin-top:36px;
  
   >span {
       font-size:24px;
       padding:28px;
       color:white;
   }
   >Button {
    font-size:24px;
    color:white;
    margin-top: 0;
    margin-bottom: 0;
    padding:6px;
    border:2px solid white;
    border-radius:4px;

   }

   > Button a {
       text-decoration:none;
       color:white;
   }
   @media (max-width:575px) {
    padding-bottom:20px;
   }
  
   `
export default Abouts