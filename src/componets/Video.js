import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import {db} from './firebase'


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
