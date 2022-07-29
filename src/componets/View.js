import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import images from "../image/bg-border.png";
import { Helmet } from "react-helmet";
import Header from './Header';
import Navbar from './Nav/Navbar';
import CallView from './CallView';
import EmailView from './EmailView';
import ChatIcon from '@mui/icons-material/Chat';



const View = () => {

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const { Id } = useParams()
  console.log(Id);
  const [personData, setPersonData] = useState([])

  let x = personData.birth
  let date = new Date(x)
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;



  useEffect(() => {
    if (Id) {
      db.collection("users").doc(Id).onSnapshot(snapshot => {
        setPersonData(snapshot.data())
      })
    }

  }, [Id])
  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow,index" />
        <meta name="description" content="Pagekeyword" />
        <meta name="keywords" content="Pagekeywords" />
        <meta name="author" content="Marriageorbit" />
        <meta property="og:url" content="PageURL.html" />
        <meta property="og:type" content="products" />
        <meta property="og:title" content="Title-Name" />
        <meta property="og:image" content="Pageimagelink.jpg" />
        <meta property="og:site_name" content="Who We are " />

        <link rel="canonical" href="" />

        <title></title>

        <link rel="icon" href="imagelink.png" sizes="16x16" type="image/png"></link>
      </Helmet>
      <Header />
      <Navbar />
      <ProfileSection>
        <ImageSection>
          <CardImage>
            <Avatar src={personData.image} sx={{ width: 224, height: 250 }} variant="square" />
          </CardImage>
          <ImageDetails>
            <h3 style={{ textTransform: 'capitalize' }}>{personData.displayName}</h3>
            <hr></hr>
            <Section>
              <Firsts>
                <li>{calculate_age(new Date(personData.birth))} Years</li>
                <li>{personData.maritalStatus}</li>
                <li>{personData.religion}</li>
                <li>{personData.tounge}</li>
              </Firsts>
              <Firsts>
                <li>Not Specified</li>
                <li>Not Specified</li>
                <li>Lives in {personData.city}</li>
                {/* <li><Link to="/chats/:roomId">Group Chat</Link></li> */}
                <li><Link >Online Now</Link></li>
              </Firsts>
            </Section>

            <Second>
              <li>
                <EmailView email={personData.email} />
              </li>
              <li>
                <CallView number={personData.number} />
              </li>
              <li>
                <Link to="/chat"><button><ChatIcon /></button></Link>
              </li>
            </Second>
          </ImageDetails>
        </ImageSection>
      </ProfileSection>
      <AllDetails>
        <Details className='container'>
          <h1>Details of Profile</h1>
          <div class="fancy2"><img src={images} alt="" /></div>
          <Box>
            <h3>About</h3>
            <span>{personData.about}</span>
          </Box><hr></hr>
          <Box>
            <h3>Basic Info</h3>
            <Agent>
              <First>
                <li>Gender</li>
                <li>{personData.gender}</li>
              </First>
              <First>
                <li>Date Of Birth</li>
                <li>{dateMDY}</li>
              </First>
            </Agent>
            <Agent>
              <First>
                <li>Religion</li>
                <li>{personData.religion}</li>
              </First>
              <First>
                <li>Mother Tounge</li>
                <li>{personData.tounge}</li>
              </First>
            </Agent>

          </Box>
          <hr></hr>
          <Box><h3>Lifestyle and Intrests</h3>
            <Agent>
              <First>
                <li>Eating Habit</li>
                <li>{personData.diet}</li>
              </First>
              <First>
                <li>Height</li>
                <li>{personData.height}</li>
              </First>
            </Agent>

          </Box>
          <hr></hr>
          <Box><h3>Education and profession</h3>
            <Agent>
              <First>
                <li>Qaulification</li>
                <li>{personData.qaulification}</li>
              </First>
              <First>
                <li>University</li>
                <li>{personData.collage}</li>
              </First>
            </Agent>

          </Box>
          <hr></hr>
          <Box><h3>Family Details</h3>
            <Agent>
              <First>
                <li>Live in Family</li>
                <li>{personData.family}</li>
              </First>
              <First>
                <li>Members</li>
                <li>Not Specified</li>
              </First>
            </Agent>
          </Box>
          <hr></hr>
          <Box><h3>Location</h3>
            <Agent>
              <First>
                <li>Live in</li>
                <li>{personData.city}</li>
              </First>
              <First>
                <li>State</li>
                <li>{personData.state}</li>
              </First>
            </Agent>
          </Box>
          <hr></hr>
        </Details>
      </AllDetails>
    </>
  )
}

export default View;

const ProfileSection = styled.div`
display:flex;
justify-content:center;
background-color:white;`
const ImageSection = styled.div`
display: flex;
justify-content:center;
flex-wrap:wrap;
`
const CardImage = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
background-color:#eee;
padding:12px;
margin:12px;
> img {
    width:200px;
}`
const ImageDetails = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
width:450px;
margin-top:28px;
padding:12px;
background-color:#eee;
> h3 {
  font-size: 1.2rem;
    font-weight: bold;
    font-family: ui-serif;
    color:#564343;
}
> p {
  display:flex;
  justify-content:space-around;
  font-size: 15px;
  color: #666;
}
@media (max-width:600px) {
    width:230px;
  }
`
const Section = styled.div`
display:flex;
justify-content:space-around;`
const Firsts = styled.div`
> li {
  list-style:none;
  font-size: 15px;
  color: #666;
  margin:4px;
}
> li > a {
  text-decoration: none;
  font-size: 15px;
  color: #666;
}`
const AllDetails = styled.div`
display:flex;
justify-content:start;
padding:30px;
background-color:white;`
const Details = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
background-color:#eee;
width: 70%;
>h1 {
  font-size: 1.8rem;
    font-weight: bold;
    font-family: auto;
    color:#FFA500;
}
@media (max-width:600px) {
    width:100%;
  }
> h1 {
  text-align:center;
}`
const Box = styled.div`
padding:24px;
>h3 {
  font-size: 1rem;
    font-weight: 600;
    font-family: auto;
}
`
const Agent = styled.div`
display:flex;
justify-content:space-around;
`
const First = styled.div`
padding-left:8px;
margin:4px;
> li {
  list-style:none;
  font-size: 15px;
  color: #666;
  width: 100px;
  
}
`
const Second = styled.div`
width: 100%;
text-align: center;
> li{
  width: 33%; 
  display: flex;
  float: left;
  flex-direction: column;
  flex-direction: column;
 align-items: center;
 margin-top: 5px;
 > a button{
    width:60px;
    height:60px;
    border-radius:50%;
    line-height: 50px;
    color: #ffa500;
    font-size: 18px;
    border: 1px solid #ffa500;
  
    >.MuiSvgIcon-root {
  font-size:35px;
  color:#FFA500;
}
}
 

}
`