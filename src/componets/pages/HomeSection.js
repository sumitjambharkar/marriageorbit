import React, { useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { db } from '../firebase';
import { Avatar, Container } from '@mui/material';
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {login,logout} from '../userSlice';
import { auth } from '../firebase';
import Slider from '@mui/material/Slider';
import {Helmet} from "react-helmet";
import ScrollArea from 'react-scrollbar';
import Navbar from '../Nav/Navbar';
import Header from '../Header';
import Footer from '../Footer';


const city = ["mumbai", "pune", "new delhi", "surat", "nashik", "nagpur", "kolkata", "ahmedabad", "hyderabad", "bangalore", "jaipur", "kochi", "kanpur", "vadodara", "faridabad", "coimbatore", "karnataka", "chennai", "lucknow", "dore", "dehradun", "jamshedpur", "trivandrum", "rajasthan"]

const HomeSection = () => {

  const input = useRef("")
  

  function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const user = useSelector(selectUser)
  
  const dispatch = useDispatch()
  const [search, setSearch ] = useState("")
  const [location, setLocation] = useState([])
  const [isGender, setIsGender] = useState('')

  const handleSearch =()=> {
     
    var newData = location.filter((item)=>{
      return item.data.city === search
    })
    setLocation(newData)
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

  }, [])

  useEffect (() => {
    const Unsubscribe = db.collection("users").onSnapshot(snapshot => {
      setLocation(snapshot.docs
        .map((doc) => ({
        id: doc.id,
        data : doc.data()
      })))
    }) 
  
    return () => Unsubscribe()
  }, [])
   
  
    const handleSelect =()=> {
    // console.log(input.current.value);

    const newData = location.filter((item)=>{
      console.log(item.data.city);
      return item.data.city !== input.current.value
    })
    setLocation(newData)
    }

  
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

      <meta name="keywords" content="best Matrimony services in mumbai, best Matrimony services in pune, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in karnataka, Brides, matchmaking services in coimbatore, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in new delhi, Online matchmaking Services,Indian single girls in surat,girls for marriage in jaipur
      lifepartner for wedding in bangalore.get girlfriend for marriage in hyderabad.diffrent casts of girls for marriage in amritsar.
      services of matrimony for mens in ahmedabad, Matrimonial websites to find girls, matrimonials, couples girls and boys matchmaking companies in chandigadh, Brides, matchmaking services in uttar pradesh, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in gujarat, Online matchmaking Services,Indian single boys in kolkata,boys for marriage in bihar
      lifepartner for wedding in chennai.get boyfriend for marriage in kanpur.diffrent casts of boys for marriage in nashik.
      hindu girls and boys for marriage."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/matches"/>
      <meta property="og:type" content="Matrimonial Matchmaking Service In India" />
      <meta property="og:title" content="Matches | find your favourite lifepartner for marriage in mumbai" />
      <meta property="og:image" content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png" />
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/matches" />
 
      <title>Matches | find your favourite lifepartner for marriage in mumbai</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 
      </Helmet>
      <Header/>
    <Navbar/>
      <h3 style={{textAlign:"center",padding:"30px",backgroundColor:" #eee"}}>Members Looking For Me 418</h3>
    
    <Container>
  
    <SearchBar>  
        <Button style={{backgroundColor:'#fff'}} onClick={handleSearch} type="submit"><img src="https://img.icons8.com/ios/40/fab90a/filter--v1.png"/></Button><input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search"/>
    <button onClick={handleSearch} type="submit">Search</button>
    </SearchBar>
    </Container>
 
      <Section className='container'>
     <SectionFiltter>
       <Filtter>
       <Fil>
       <p>Select Location</p>
       <select ref={input}  onChange={handleSelect} >
        <option>Select Location</option>
       {city.map((ele)=>(
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
  

       <p>Mother Tongue</p>
       <ul>
        <li><input type="checkbox"></input>
       <label>All</label></li>
       <li><input type="checkbox"></input>
       <label>Marathi</label></li>
       <li><input type="checkbox"></input>
       <label>Konkani</label></li>
       </ul>
       

       <p>Occupation</p>
       <ul>
        <li><input type="checkbox"></input>
       <label>All</label></li>
       <li><input type="checkbox"></input>
       <label>HR, Admin & Managers</label></li>
       <li><input type="checkbox"></input>
       <label>Non-Working</label></li>
       </ul>
      

       </Fil>
       </Filtter>
     </SectionFiltter>
     <SectionCard>
     <Card>
      
      {location.slice(0,20).map((doc)=>(
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
    <Container>
        <h1 style={{textAlign:"center",fontSize:"24px", fontWeight:600, marginTop:"25px"}}>We Are Available In Several Locations</h1>
    <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{height:100, color:"#666666", marginBottom:"25px",padding:"15px", border:"1px solid #ffa500"}}
            > 
<p>	Tamil mens For relationship In Mumbai	</p>
<p>	online dating marriages apps in mumbai	</p>
<p>	Maharashtrian females From mumbai for marriage	</p>
<p>	newly launched matrimony services in mumbai	</p>
<p>	Chambhar females From mumbai for matchmaking	</p>
<p>	Brahmin males For wedding In Mumbai	</p>
<p>	Bengali girls For wedding In Mumbai	</p>
<p>	Buddhist females For marriage In Mumbai	</p>
<p>	newly launched matrimonial websites in mumbai	</p>
<p>	Bengali mens From mumbai for wedding	</p>
<p>	Hanafi girls For relationship In Mumbai	</p>
<p>	Gujarati mens For wedding In Mumbai	</p>
<p>	trusted marriages websites in india	</p>
<p>	Telugu girls From mumbai for marriage	</p>
<p>	top 10 matrimony websites in india	</p>
<p>	newly launched weddings websites in india	</p>
<p>	Buddhist mens From mumbai for wedding	</p>
<p>	English girls For relationship In Mumbai	</p>
<p>	upcoming marriages services in mumbai	</p>
<p>	Roman Catholic females From mumbai for wedding	</p>
<p>	Bengali males From mumbai for marriage	</p>
<p>	newly launched matrimonial companies in india	</p>
<p>	upcoming matrimony services in mumbai	</p>
<p>	Buddhist girls For marriage In Mumbai	</p>
<p>	girls lifepartner providing weddings websites in india	</p>
<p>	Punjabi males For relationship In Mumbai	</p>
<p>	online meeting marriages websites in india	</p>
<p>	upcoming weddings companies in india	</p>
<p>	Marwari girls From mumbai for matchmaking	</p>
<p>	Buddhist males From mumbai for marriage	</p>
<p>	Malyalam mens From mumbai for matchmaking	</p>
<p>	Hindu womens From mumbai for wedding	</p>
<p>	Bengali girls For marriage In Mumbai	</p>
<p>	Marathi boys For wedding In Mumbai	</p>
<p>	Konkani womens For marriage In Mumbai	</p>
<p>	Hindi girls From mumbai for matchmaking	</p>
<p>	boys lifepartner providing matrimonial companies in mumbai	</p>
<p>	online meeting matchmaking apps in india	</p>
<p>	Roman Catholic boys From mumbai for wedding	</p>
<p>	online meeting weddings companies in mumbai	</p>
<p>	Hanafi womens For wedding In Mumbai	</p>
<p>	girls lifepartner providing matchmaking services in mumbai	</p>
<p>	online meeting marriages companies in india	</p>
<p>	Maharashtrian boys For relationship In Mumbai	</p>
<p>	Urdu females For marriage In Mumbai	</p>
<p>	boys lifepartner providing matchmaking websites in india	</p>
<p>	Hanafi males For relationship In Mumbai	</p>
<p>	upcoming matrimonial services in india	</p>
<p>	Kshatriya females For wedding In Mumbai	</p>
<p>	English females From mumbai for marriage	</p>
<p>	Marathi mens For relationship In Mumbai	</p>
<p>	Roman Catholic males For wedding In Mumbai	</p>
<p>	Maharashtrian womens For wedding In Mumbai	</p>
<p>	newly launched matrimony services in india	</p>
<p>	online dating matrimony companies in india	</p>
<p>	trusted matrimonial services in india	</p>
<p>	Bengali mens From mumbai for marriage	</p>
<p>	best matrimony apps in mumbai	</p>
<p>	matrimony companies in india	</p>
<p>	Urdu males For wedding In Mumbai	</p>
<p>	best matrimonial companies in mumbai	</p>
<p>	Punjabi girls For relationship In Mumbai	</p>
<p>	online dating weddings apps in mumbai	</p>
<p>	newly launched marriages services in india	</p>
<p>	marriages websites in india	</p>
<p>	online meeting matrimony services in mumbai	</p>
<p>	Muslim females From mumbai for matchmaking	</p>
<p>	girls lifepartner providing matrimony apps in mumbai	</p>
<p>	top 10 marriages companies in mumbai	</p>
<p>	Chambhar girls For wedding In Mumbai	</p>
<p>	Hanafi males From mumbai for matchmaking	</p>
<p>	newly launched matrimonial websites in india	</p>
<p>	girls lifepartner providing weddings apps in mumbai	</p>
<p>	English boys From mumbai for matchmaking	</p>
<p>	newly launched matchmaking apps in india	</p>
<p>	Tamil males From mumbai for wedding	</p>
<p>	Konkani boys From mumbai for matchmaking	</p>
<p>	girls lifepartner providing matrimony apps in india	</p>
<p>	Telugu girls For relationship In Mumbai	</p>
<p>	boys lifepartner providing marriages websites in mumbai	</p>
<p>	Hindi males For wedding In Mumbai	</p>
<p>	Konkani males From mumbai for wedding	</p>
<p>	Buddhist males From mumbai for wedding	</p>
<p>	Hindu males From mumbai for matchmaking	</p>
<p>	English girls From mumbai for matchmaking	</p>
<p>	Roman Catholic boys From mumbai for marriage	</p>
<p>	Sindhi mens For marriage In Mumbai	</p>
<p>	boys lifepartner providing matrimonial websites in india	</p>
<p>	newly launched weddings companies in india	</p>
<p>	Kshatriya boys For relationship In Mumbai	</p>
<p>	boys lifepartner providing matrimony apps in mumbai	</p>
<p>	Kshatriya mens For marriage In Mumbai	</p>
<p>	Marathi boys From mumbai for marriage	</p>
<p>	Brahmin mens From mumbai for matchmaking	</p>
<p>	Odia males From mumbai for wedding	</p>
<p>	Maharashtrian females From mumbai for wedding	</p>
<p>	newly launched marriages websites in india	</p>
<p>	Hanafi mens From mumbai for matchmaking	</p>
<p>	Bengali womens From mumbai for wedding	</p>
<p>	Telugu womens From mumbai for matchmaking	</p>
<p>	weddings websites in india	</p>
<p>	English mens From mumbai for matchmaking	</p>
<p>	newly launched marriages apps in india	</p>
<p>	top 10 matrimony websites in mumbai	</p>
<p>	Marathi womens For relationship In Mumbai	</p>
<p>	best marriages services in mumbai	</p>
<p>	Marwari mens For marriage In Mumbai	</p>
<p>	girls lifepartner providing matrimony websites in mumbai	</p>
<p>	boys lifepartner providing matrimonial apps in mumbai	</p>
<p>	Malyalam males For relationship In Mumbai	</p>
<p>	Odia boys For marriage In Mumbai	</p>
<p>	Kshatriya boys From mumbai for marriage	</p>
<p>	Buddhist girls From mumbai for marriage	</p>
<p>	Chambhar mens For marriage In Mumbai	</p>
<p>	English males For wedding In Mumbai	</p>
<p>	Kannada females For marriage In Mumbai	</p>
<p>	Bengali males From mumbai for wedding	</p>
<p>	Jain womens From mumbai for matchmaking	</p>
<p>	Tamil girls From mumbai for wedding	</p>
<p>	boys lifepartner providing weddings services in mumbai	</p>
          </ScrollArea>
          </Container>
          <Footer/>    </>
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
 display:none;
}
`

const SectionCard = styled.div`
width:75%;
padding:1%;

@media(max-width: 768px){
width:100%;
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
justify-content:center;
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
    height:45px;
    width: 300px;
    outline: none;
}
>button{
  background: #ffa500;
    color: #fff;
    height:45px;
    width: 80px;
    font-size: 15px;
    border-radius: 4px;
    font-weight: 700;
    border: 0;
}
> Button {
  display:none;
}
@media(max-width: 768px){
  Button {
    display:block;
  }
}
`