import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Nav/Navbar';


const Sitemap = () => {
  return (
    <>
  <Header/>
      <Navbar/>
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
    <Footer/>
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