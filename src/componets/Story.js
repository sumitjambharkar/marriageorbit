import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { db } from "./firebase"
import { Button } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import Login from './pages/Login'
import images from "./image/bg-border.png";
import {Helmet} from "react-helmet";
AOS.init();

const Story = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        db.collection("success").onSnapshot((snapshot)=>{
            setData(snapshot.docs.map((doc)=>({
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
            <Title>
                <h2>Matrimony Service with Millions of Success Stories</h2>
                <div class="fancy"><img src={images}/></div>
            </Title>
            <StorySection className='container'>
                {data.map((ele,i) => {
                    return (
                        <React.Fragment key={i}>
                            <StoryDiv>
                                <StoryImage >
                                    <span>
                                    </span>
                                    <img alt='img'  src={ele.data.image} />
                                   
                                </StoryImage>
                                
                                <StoryDetails data-aos="flip-up" data-aos-duration="1800">
                                    <p></p>
                                <h3>{ele.data.name}</h3>
                                    <div class="descrip"><p>{ele.data.desc}</p></div>
                                    <p>
                                        {" "}<Link to={`/couple/${ele.id}`}>Read More</Link>
                                    </p>

                                </StoryDetails>
                            </StoryDiv>

                        </React.Fragment>
                    )
                })}
            </StorySection>

        </>
    )


}
const Title = styled.div`
>h2 {
    font-size: 35px;
    text-align:center;
    margin-top:70px;
    margin-bottom:70px;
    color:#FFA500;

}
`
const StorySection = styled.div`
   display:flex;
   justify-content:space-around;
   flex-wrap:wrap;`

const StoryDiv = styled.div`
   width:320px;
   height:430px;
   margin: 24px;
   border-radius:15px;
   padding:4px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   
   `

const StoryImage = styled.div`
   > img {
       
       width: 312px;
       height:285px;
       position: relative;
       border-radius:15px;
       overflow: hidden !important;
       
   }

   span{
       content: '';
       position: absolute;
       width: 286px;
       height:260px;
       margin: 12px;
       background: #0008;
       z-index: 1;
       opacity: 0;
       transition: 0.5s;
       border-radius: 13px;
   }


   span:hover{
     opacity: 100%;
     transform: scale(1.1);
   }

   

`

const StoryDetails = styled.div`
  width:330;
  height:250px;
  
  >h3{
    margin-top: 15px;
    font-size: 22px;
    line-height: 22px;
    text-align:center;
    color:#FFA500;
  }
   >p{
    font-size: 15px;
    font-weight:500;
    color: #72727d;
    text-align:center;
    margin:4px;
   }
   
   >p >a {
       text-decoration:none;
       text-align:center;
       color: #FFA500;
       border:1px solid #FFA500;
       padding:7px;
       border-radius:10px;    
   }
   >p >a:hover{
    
    background-color:#FFA500;
    color:#fff;
   }`


export default Story;