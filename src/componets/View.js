import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import images from "../image/bg-border.png";
import Header from './Header';
import Navbar from './Nav/Navbar';



const View = () => {

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const { Id } = useParams()
  const [personData, setPersonData] = useState([])
  const [personDataFirst, setPersonDataFirst] = useState([])
  const [personDataSecand, setPersonDataSecand] = useState([])

  let x = personData.birth
  let date = new Date(x)
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  

  useEffect(() => {
    if (Id) {
      db.collection("users").doc(Id).onSnapshot(snapshot => {
        setPersonData(snapshot.data())
        console.log(snapshot.data());
      })
      db.collection("users")
        .doc(Id)
        .collection("userdata1")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setPersonDataFirst(doc.data())
            console.log(doc.data());
          });
        });
      db.collection("users")
        .doc(Id)
        .collection("userdata2")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setPersonDataSecand(doc.data())
          });
      });
  
    }

  }, [Id])
  return (
    <>
    <Header/>
      <Navbar/>
      <ProfileSection>
        <ImageSection>
          <CardImage>
          <Avatar src={personData.image} sx={{width:224,height:250}} variant="square"/>
          </CardImage>
          <ImageDetails>
            <h3 style={{ textTransform: 'capitalize' }}>{personData.displayName}</h3>
            <hr></hr>
            <Section>
              <Firsts>
                <li>{calculate_age(new Date(personData.birth))} Years</li>
                <li>{personDataFirst.maritalStatus}</li>
                <li>{personDataSecand.religion}</li>
                <li>{personDataSecand.tounge}</li>
              </Firsts>
              <Firsts>
                <li>Not Specified</li>
                <li>Not Specified</li>
                <li>Lives in {personDataFirst.city}</li>
                {/* <li><Link to="/chats/:roomId">Group Chat</Link></li> */}
                <li><Link to="/chat">Chat</Link></li>
              </Firsts>
            </Section>
          </ImageDetails>
        </ImageSection>
      </ProfileSection>
      <AllDetails>
        <Details className='container'>
          <h1>Details of Profile</h1>
          <div class="fancy2"><img src={images}/></div>
          <Box>
            <h3>About</h3>
            <span>I am currently living in uk. I am a smart and dynamic girl who respects her culture very much. I belong to a simple marathi family.</span>
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
                <li>{personDataSecand.religion}</li>
              </First>
              <First>
                <li>Mother Tounge</li>
                <li>{personDataSecand.tounge}</li>
              </First>
            </Agent>
         
          </Box>
          <hr></hr>
          <Box><h3>Lifestyle and Intrests</h3>
            <Agent>
              <First>
                <li>Eating Habit</li>
                <li>{personDataFirst.diet}</li>
              </First>
              <First>
                <li>Height</li>
                <li>{personDataFirst.height}</li>
              </First>
            </Agent>
           
          </Box>
          <hr></hr>
          <Box><h3>Education and profession</h3>
            <Agent>
              <First>
                <li>Qaulification</li>
                <li>{personDataSecand.qaulification}</li>
              </First>
              <First>
                <li>University</li>
                <li>{personDataSecand.collage}</li>
              </First>
            </Agent>
            
          </Box>
          <hr></hr>
          <Box><h3>Family Details</h3>
            <Agent>
              <First>
                <li>Live in Family</li>
                <li>{personDataFirst.family}</li>
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
                <li>{personDataFirst.city}</li>
              </First>
              <First>
                <li>State</li>
                <li>{personDataFirst.state}</li>
              </First>
            </Agent>
          </Box>
          <hr></hr>
        </Details>
      </AllDetails> 

      <Footer />
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
padding-right: 80px;
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
