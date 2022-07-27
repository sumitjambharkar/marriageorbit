import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Nav/Navbar';
import {Helmet} from "react-helmet";


const Sitemap = () => {
  return (
    <>
    <Helmet>
     


    <meta charset="utf-8"/>
  <meta name="robots" content="follow,index"/>
  <meta http-equiv="content-language" content="en"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="description" content="On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity. Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession."/>

      <meta name="keywords" content="Matrimony services for girls in palghar,Matchmaking services in boisar, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in virar, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in dahanu, Online matchmaking Services,Indian single girls in virar,girls for marriage in vasai
      lifepartner for wedding in dahanu.get girlfriend for marriage in dahanu.diffrent casts of girls for marriage in virar.
      services of matrimony for mens in virar, Matrimonial websites to find girls, matrimonials, couples girls and boys matchmaking companies in dahisar, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in nallasopara, Online matchmaking Services,Indian single boys in vasai,boys for marriage in mumbai
      lifepartner for wedding in virar.get boyfriend for marriage in mira-bhayander.diffrent casts of boys for marriage in vasai.
      hindu girls and boys for marriage."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/sitemap"/>
      <meta property="og:type" content="Matrimonial Matchmaking Service In India" />
      <meta property="og:title" content="Sitemap | best matchmaking services in andheri" />
      <meta property="og:image" content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png" />
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/sitemap" />
 
      <title>Sitemap | best matchmaking services in Andheri</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 
   

      </Helmet>

    <p></p>
    <h2 style={{textAlign:"center"}}>Marriageorbit Location</h2>
    <p></p>
    <SiteLocation className='container'>
    <Map>
    <iframe title='my' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1781202163334!2d72.82176281490213!3d19.14367888704915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7047dac848d%3A0xc26a2c66606f939b!2sKenwood%20Apartment!5e0!3m2!1shi!2sin!4v1649664937669!5m2!1shi!2sin"></iframe>
    </Map>
    <Location>
        <h4>Mumbai Andheri (West)</h4>
        <span>Marriageorbit</span>
        <p></p>
        <span>Address</span>
        <h4>001, Kenwood Apartment,<br></br> Lokhandwala Complex,<br></br>
             Andheri West, Mumbai -400 053</h4>
        <span>Email Id</span>
        <h4><a href ="mailto:marriageorbit@gmail.com">marriageorbit@gmail.com</a></h4>
        <span>Contact No</span>
        <h4><a href='tel:9833188536'>+91 98331 88536</a></h4>
        <span>Telephone No</span>
        <h4><a href='tel:+91 224006 5656'>+91 224006 5656</a></h4>
        <span>U.K No</span>
        <h4><a href='tel:+44 7405094232'>+44 7405094232</a></h4>
        <span>Timings:</span>
        <h4>12:00 PM to 08:00 PM</h4>
    </Location>
    </SiteLocation>
   
    </>
  )
}

export default Sitemap;
const SiteLocation = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-bottom:24px;`
const Map = styled.div`
margin-right:24px;
> iframe {
    width:600px;
    height:400px;
}
@media (max-width:1200px) {
    margin-right:4px;
    > iframe {
    width:260px;
    height:300px;
}
}`
const Location = styled.div`
word-wrap:wrap;
margin-left:24px;
> h4 {
    font-size:16px;
    font-weight:600;
    color:#FFA500;
}
> h4 a {
  text-decoration:none;
  color:#FFA500;
}
`