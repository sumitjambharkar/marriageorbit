import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {db} from '../firebase';
import {Helmet} from "react-helmet";
import Footer from "../Footer";
import { Container } from "@mui/material";
import ScrollArea from 'react-scrollbar';


const Video = () => {
  

  const [video, setVideo] = useState([])

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot)=>{
      setVideo(snapshot.docs.map((doc)=>({
          id : doc.id,
          data : doc.data()
      })))
  })
  }, [])
  

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

  <meta name="keywords" content="Matrimony services for girls in kolaba, matchmaking services in mumbai, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in mumbai, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
  Online Matrimony, female partner for shadi in bhandup, Online matchmaking Services,Indian single girls in matunga,girls for marriage in mumbai
  lifepartner for wedding in ghatkopar.get girlfriend for marriage in goregaon.diffrent casts of girls for marriage in mumbai.
  services of matrimony for mens in powai, Matrimonial websites to find girls, matrimonials, couples girls and boys matchmaking companies in mumbai, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
  Online Matrimony for females and males, male partner for shadi in kandivali, Online matchmaking Services,Indian single boys in mumbai,boys for marriage in mumbai
  lifepartner for wedding in vikhroli.get boyfriend for marriage in malad.diffrent casts of boys for marriage in mumbai.
  hindu girls and boys for marriage."/>

  <meta name="author" content="Design and Promoted By Marriageorbit"/>
  <meta property="og:url" content="https://marriageorbit.com/video"/>
  <meta property="og:type" content="Matrimonial Matchmaking Service In India" />
  <meta property="og:title" content="Video | New Trending matchmaking Service in mumbai" />
  <meta property="og:image" content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png" />
  <meta property="og:site_name" content="Marriageorbit.com"/>

<link rel="canonical" href="https://marriageorbit.com/video" />

  <title>Video | New Trending matchmaking Service in mumbai</title>
  
  <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 



  </Helmet>
      <Details className="container">
        <Link to="/">Featured Success Stories</Link>
        <Link to="/video">Videos Stories</Link>
        <Link to="/tellus">Tell Us Your Story</Link>
      </Details>
      <Welcome className="container">
        <h1>
          Watch the beautiful journey of our Success Stories and be inspired.
        </h1>
      </Welcome>
      <Videos className="container">
        <div className="row">
          
       
          
            <>
              {video.map((doc)=>(
                <div className="col-md-4">
                <Box>
                
                <iframe width="100%" height="315" src={doc.data.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
                </Box>
                </div>
              ))}
              
            </>
         
          </div>
      </Videos>
      <Container>
        <h1 style={{textAlign:"center",fontSize:"24px", fontWeight:600, marginTop:"25px"}}>We Are Available In Several Locations</h1>
    <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{height:100, color:"#666666", marginBottom:"25px",padding:"15px", border:"1px solid #ffa500"}}
            > 

<p>	boys lifepartner providing matchmaking websites Powai	</p>
<p>	newly launched matchmaking apps Kanjurmarg	</p>
<p>	top 10 matrimony matrimonial companies Colaba	</p>
<p>	newly launched matchmaking websites Kanjurmarg	</p>
<p>	girls lifepartner providing matrimonial apps Mahim	</p>
<p>	online meeting matrimonial websites Bhandup	</p>
<p>	girls lifepartner providing matrimonial companies Goregaon	</p>
<p>	top 10 matrimony matrimonial apps Bhandup	</p>
<p>	trusted matchmaking websites Matunga	</p>
<p>	online dating matrimonial companies Vasai	</p>
<p>	upcoming matchmaking apps Powai	</p>
<p>	trusted matrimonial companies Kandivali	</p>
<p>	boys lifepartner providing matrimonial apps Vikhroli	</p>
<p>	boys lifepartner providing matchmaking apps Ghatkopar	</p>
<p>	newly launched matchmaking websites Dahisar	</p>
<p>	best matrimonial services Parel	</p>
<p>	top 10 matrimony matrimonial companies Dahisar	</p>
<p>	online dating matchmaking apps Virar	</p>
<p>	newly launched matchmaking websites Dadar	</p>
<p>	girls lifepartner providing matchmaking websites Palghar	</p>
<p>	upcoming matchmaking apps Sion	</p>
<p>	trusted matrimonial apps Goregaon	</p>
<p>	newly launched matchmaking apps Mulund	</p>
<p>	newly launched matrimonial services Chembur	</p>
<p>	top 10 matrimony matrimonial services byculla	</p>
<p>	online dating matrimonial companies Boisar	</p>
<p>	girls lifepartner providing matrimonial apps Bandra	</p>
<p>	trusted matchmaking apps Chembur	</p>
<p>	top 10 matrimony matrimonial apps Andheri	</p>
<p>	online dating matrimonial services Borivali	</p>
<p>	boys lifepartner providing matrimonial companies Mulund	</p>
<p>	online dating matchmaking services Mira-bhayander	</p>
<p>	trusted matrimonial websites Palghar	</p>
<p>	boys lifepartner providing matchmaking companies Colaba	</p>
<p>	newly launched matchmaking services Colaba	</p>
<p>	boys lifepartner providing matchmaking websites Juhu	</p>
<p>	newly launched matchmaking companies Palghar	</p>
<p>	online meeting matchmaking services Mira-bhayander	</p>
<p>	online dating matrimonial companies Powai	</p>
<p>	girls lifepartner providing matchmaking apps Malad	</p>
<p>	newly launched matrimonial services Juhu	</p>
<p>	upcoming matchmaking companies Goregaon	</p>
<p>	online meeting matchmaking apps Dahisar	</p>
<p>	upcoming matrimonial companies Ghatkopar	</p>    
          </ScrollArea>
          </Container>
      <Footer/>
    </>
  );
};

export default Video;

const Details = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: start;
  margin-top: 24px;
  a {
    color: black;
    text-decoration: none;
    padding: 16px;
    display: flex;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  a:active {
    color: red;
  }
`;
const Welcome = styled.div`
  padding: 24px;
  > h1 {
    text-align: center;
    color: #72727d;
  }
  > p {
    text-align: center;
    color: #72727d;
  }
`;
const Videos = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 8px 8px;
  
`;
const Box = styled.div`
  width:100%;
  margin: 4px;
  text-align: center;
`;
