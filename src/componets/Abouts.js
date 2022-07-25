import React from "react";
import images from "../image/about-us.jpg";
import images1 from "../image/bg-border.png";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { db } from "./firebase"
import { Button } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import Loginn from './Loginn'
const Abouts = ()=> {

return (

    <>
   
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