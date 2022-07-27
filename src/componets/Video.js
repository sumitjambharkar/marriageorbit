import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import {db} from './firebase';
import {Helmet} from "react-helmet";



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
