import React from 'react';
import styled from 'styled-components';
import AboutImage from '../image/download.jpg';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Nav/Navbar';
import {Helmet} from "react-helmet";
const About = () => {
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
 
      <title>About Us</title>
      
      <link rel="icon" href="imagelink.png" sizes="16x16" type="image/png"></link>
      </Helmet>
    <Header/>
      <Navbar/>
    <AboutSection className='container'>
     <h1>About Us</h1>
     <Image>
         <img src={AboutImage}  alt='about'/>
     </Image>
     <p>
     Sangam is a matchmaking service created for parents who are looking for a life partner for their loved ones. Unlike other Matrimonial services, we focus on providing detailed family and background information to help you take the next step with confidence. With over 80+ community sites, you can find a match from your own community. Sangam is part of Shaadi.com (sometimes mis-spelt as Shadi), the World's No. 1 Matchmaking service.
     </p>
     <h4>Our Mission:</h4>
     <span>With the aim of bringing upliftment & togetherness to the Prajapati community, we at Anmolrishte.com have a vision to widen and strengthen this website as an all-serving dedicated space from matchmaking to wedding planning services, wedding invitations, catering facilities, destinations, decorations or venue bookings & more. </span>
     <p></p>
     <h4>Why Us:</h4>
     <li>Matrimonial magazines have gone obsolete, websites are the all-serving future</li>
     <li>Reach wider than magazines, raises the chances of finding a compatible partner</li>
     <li>Dedicated support team </li>
     <li>Easy to use </li>
     <li>100% Verified Profiles</li>
     <li>Advanced filters</li>
     <li>Reduced hassle & time consumption</li>
     <li>Upliftment of the community</li>
     <li>In the near future, wedding planning, venue, caterers, DJ etc. booking to be introduced and incorporated</li>
     <p></p>
     <h4>What keeps us going:</h4>
     <p>Happy success stories and continuous feedback from our valued members. </p>
    </AboutSection>
    <Footer/>
    </>
  )
}

export default About;

const AboutSection = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
> h1 {
    margin:12px;
    text-align : center;
    font-family:roman;
    font-weight :700;
}
> p {
    margin : 12PX;
    text-align :center;
    font-weight :600;
   color : #8b7c7c;
    
}
> span {
  font-weight :600;
  color : #8b7c7c;
}
> li {
  font-weight :600;
  color : #8b7c7c;
}
> h4 {
  font-weight:600;
}
`
const Image = styled.div`
display:flex;
justify-content:center;
>img {
    width:700px;
}`
