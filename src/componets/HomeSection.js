import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import { db } from './firebase';
import { Avatar, Container } from '@mui/material';
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {login,logout} from './userSlice';
import { auth } from './firebase';
import Slider from '@mui/material/Slider';
import Navbar from '../componets/Nav/Navbar';
import Header from './Header';

const loc = ["Andheri","Bandra","Virar","Lokhandwala"]

const HomeSection = () => {

  const [location,setLocation] = useState("")

  function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  const [personData, setPersonData] = useState([])
  const [isGender, setIsGender] = useState('')

  const getLocation =(e)=> {

    console.log({...location,[e.target.name]:e.target.value});
  }
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
        displayName :userAuth.displayName,
        }))
      }else{
        dispatch(logout())
      }
    })
    
  }, [login])

  useEffect(() => {
    if(user.uid){
      db.collection("users")
      .doc(user.uid)
      .onSnapshot((snapshot) => {
        setIsGender(snapshot.data());
      });
    }
    db.collection("users").onSnapshot(snapshot => {
      setPersonData(snapshot.docs
        .map((doc) => ({
        id: doc.id,
        data : doc.data()
      })))
    })  
    
    return () => {
      
    }
  }, [])
  
  return (
    <>
     <Header/>
     <Navbar/>
      <h3 style={{textAlign:"center",padding:"30px",backgroundColor:" #eee"}}>Members Looking For Me 418</h3>
    
    <Container>
    <SearchBar><input type="search" placeholder="search"/>
    <button type="submit">Search</button>
    </SearchBar>
    </Container>
 
      <Section className='container'>
     <SectionFiltter>
       <Filtter>
       <Fil>
       <p>Select Location</p>
       <select name='location' value={location} onChange={getLocation} >
        <option>Select</option>
       {loc.map((ele)=>(
         <option>{ele}</option>
       ))}
       </select>

       <p>Country?</p>
       <ul>
        <li><input type="checkbox"></input>
       <label>All</label></li>
       <li><input type="checkbox"></input>
       <label>India</label></li>
       </ul>

       <p>Height</p>
       <Slider
        aria-label="Temperature"
        defaultValue={30}
        // getAriaValueText={valuetext}
        color="warning"
      />
       <p>Age</p>
       <Slider
        aria-label="Temperature"
        defaultValue={30}
        // getAriaValueText={valuetext}
        color="warning"
      />
       <p>Religion</p>
       <ul>
        <li><input type="checkbox"></input>
       <label>All</label></li>
       <li><input type="checkbox"></input>
       <label>Hindu</label></li>
       </ul>

       <p>Caste</p>
       <ul>
        <li><input type="checkbox"></input>
       <label>All</label></li>
       <li><input type="checkbox"></input>
       <label>96 Kuli Maratha</label></li>
       <li><input type="checkbox"></input>
       <label>Maratha</label></li>
       </ul>
       <a>More...</a>

       <p>Mother Tongue</p>
       <ul>
        <li><input type="checkbox"></input>
       <label>All</label></li>
       <li><input type="checkbox"></input>
       <label>Marathi</label></li>
       <li><input type="checkbox"></input>
       <label>Konkani</label></li>
       </ul>
       <a>More...</a>

       <p>Occupation</p>
       <ul>
        <li><input type="checkbox"></input>
       <label>All</label></li>
       <li><input type="checkbox"></input>
       <label>HR, Admin & Managers</label></li>
       <li><input type="checkbox"></input>
       <label>Non-Working</label></li>
       </ul>
       <a>More...</a>

       </Fil>
       </Filtter>
     </SectionFiltter>
     <SectionCard>
     <Card>
      
      {personData.map((doc)=>(
        <>
        { isGender.gender !== doc.data.gender ? 
          <> {doc.data.displayName===user.displayName ? 
            null :
         <SingleCard>
         <Avatar src={doc.data.image} sx={{width:"100%", height:250,}} variant="square"/>
         <span style={{textTransform: 'capitalize',fontWeight:600}}>{doc.data.displayName}</span>
         <span style={{textTransform: 'capitalize',fontFamily:'emoji'}}>{doc.data.gender}</span>
            <span style={{fontFamily:'cursive'}}>{calculate_age(new Date(doc.data.birth))}</span>
            <Button><Link to={`/view/${doc.id}`}>Send Message</Link></Button>
        </SingleCard>
        }
        </> : null
      }
        </>
      ))}
     </Card>
     </SectionCard>
    </Section>
      <Footer/>
    </>
  )
}

export default HomeSection;

const Section = styled.div`
display:flex;
width:100%;
overflow:hidden;
`

const SectionFiltter = styled.div`
width:25%;
padding:1%;

@media(max-width: 768px){
  width:40%;
}
`

const SectionCard = styled.div`
width:75%;
padding:1%;

@media(max-width: 768px){
  width:60%;
}
`

const Filtter = styled.div`
background-color:#eee;
min-height:100vh;
padding:0;
`
const Card = styled.div`
display:flax;
flex-wrap:wrap;
`

const SingleCard = styled.div`
width:198px;
display: flex;
justify-content: center;
flex-direction: column;
background-color:#eee;
margin:1%;
border:1px solid #ffa500;
>span{
  margin-left:4px;
}
> button {
  padding: 4px;
  background-color:#FFA500;
  color: white;
  border: 1px solid #FFA500;
  margin: 4px;
  }
  > button :hover {
     color: red;
     }
     > button a {
       color:white;
       text-decoration:none;
     }
`
const Fil = styled.div`
width:90%;
background-color:#eee;
margin:5%;

>p{
  font-weight:bold;
  padding-top:10px;
}
>select{
  width:100%;
  height:30px;
}
>ul{
  padding-left:0;
}
>ul li{
  list-style-type:none;
}
label{
  padding-left:5px;
}
`
const SearchBar = styled.div`
width:100%;
display: flex;
justify-content: flex-end;
>input{
  font-size: 15px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-right: 10px;
    width: 300px;
    outline: none;
}
>button{
  background: #ffa500;
    color: #fff;
    padding: 10px;
    width: 80px;
    font-size: 15px;
    border-radius: 4px;
    font-weight: 700;
    border: 0
}
`