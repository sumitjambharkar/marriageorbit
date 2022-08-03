import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import {Helmet} from "react-helmet";
import ScrollArea from 'react-scrollbar';
import { Container } from '@mui/material';
import Navbar from '../Nav/Navbar';
import Header from '../Header';
import Footer from '../Footer';


const Contact = () => {
    const [input, setinput] = useState({
        name:"",
        email:"",
        message:"",
        number:"",
        subject:""
    })
    let name, value
    const inputFeild =(e)=> {
        name = e.target.name
        value = e.target.value
        setinput({...input,[name]:value})
    }
    const [err ,setErr] = useState("")
    const submitForm =(e) =>{
        e.preventDefault()
        const {name,email,message} = input
        if(!name || !email || ! message){
            setErr("please fill out field")
        }
        else {
            db.collection("contact_query").add({
                input
            })
            toast.success("submit")
            setErr("")
        }
        setinput("")
        
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

      <meta name="keywords" content="Matrimony services for girls in kolaba, matchmaking services in mumbai, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in mumbai, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in bhandup, Online matchmaking Services,Indian single girls in matunga,girls for marriage in mumbai
      lifepartner for wedding in ghatkopar.get girlfriend for marriage in goregaon.diffrent casts of girls for marriage in mumbai.
      services of matrimony for mens in powai, Matrimonial websites to find girls, matrimonials, couples girls and boys matchmaking companies in mumbai, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in kandivali, Online matchmaking Services,Indian single boys in mumbai,boys for marriage in mumbai
      lifepartner for wedding in vikhroli.get boyfriend for marriage in malad.diffrent casts of boys for marriage in mumbai.
      hindu girls and boys for marriage."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/contact"/>
      <meta property="og:type" content="Matrimonial Matchmaking Service In India" />
      <meta property="og:title" content="Contact Us | Top Matrimonial website in mumbai" />
      <meta property="og:image" content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png" />
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/contact" />
 
      <title>Contact Us | Top Matrimonial website in mumbai</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 
   


      </Helmet>
      <Header/>
    <Navbar/>
    <Head>
        <h3>Contact Us</h3>
        <h5>contact us if you have any query or concern.</h5>
    </Head>
    <Feed>
        <Address>
            <button>Marriageorbit</button>
            <span>Address</span>
            <h4>001, Kenwood Apartment,
            <br></br> Lokhandwala Complex,
            <br></br> Andheri West, Mumbai - 400 053</h4>
            <span>Email Id</span>
            <h4><a href ="mailto:marriageorbit@gmail.com">marriageorbit@gmail.com</a></h4>
            <span>Contact No</span>
            <h4><a href='tel:9833188536'>+91 98331 88050</a></h4>
            <span>Telephone No</span>
            <h4><a href='tel:+91 224006 5656'>+91 224006 5656</a></h4>
            <span>U.K No</span>
            <h4><a href='tel:+44 7405094232'>+44 7405094232</a></h4>
        </Address>
        <FeedBack>
            <p style={{textAlign:"center",color:"red"}}>{err}</p>
            <span>Fill form for enquiry or concern.</span>
            < input onChange={inputFeild} value={input.name} name="name" placeholder='Enter Your Name'/>
            < input onChange={inputFeild} value={input.email} name="email" placeholder='Enter Your Email Id'/>
            < input onChange={inputFeild} value={input.number} name='number'  placeholder='Enter Your Mobile No'/>
            < input onChange={inputFeild} value={input.subject} name="subject" placeholder='Enter Subject'/>
            < input onChange={inputFeild} value={input.message} name='message' placeholder='Enter Message Here'/>
            <button onClick={submitForm} type='submit'>Submit</button>
        </FeedBack>
    </Feed>
    <Container>
        <h1 style={{textAlign:"center",fontSize:"24px", fontWeight:600, marginTop:"25px"}}>We Are Available In Several Locations</h1>
    <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{height:100, color:"#666666", marginBottom:"25px",padding:"15px", border:"1px solid #ffa500"}}
            > 
<p>	girls lifepartner providing matrimonial websites Ghatkopar	</p>
<p>	newly launched matrimonial companies Dahanu	</p>
<p>	newly launched matrimonial services Mira-bhayander	</p>
<p>	girls lifepartner providing matchmaking services Bandra	</p>
<p>	online dating matrimonial apps Mira-bhayander	</p>
<p>	newly launched matrimonial apps Ghatkopar	</p>
<p>	newly launched matrimonial services Vasai	</p>
<p>	online dating matrimonial services Vasai	</p>
<p>	online meeting matchmaking websites Andheri	</p>
<p>	trusted matrimonial websites Worli	</p>
<p>	upcoming matchmaking companies Powai	</p>
<p>	boys lifepartner providing matrimonial services Bandra	</p>
<p>	top 10 matrimony matrimonial services Borivali	</p>
<p>	boys lifepartner providing matchmaking apps Bhandup	</p>
<p>	boys lifepartner providing matrimonial companies Jogeshwari	</p>
<p>	girls lifepartner providing matchmaking companies Palghar	</p>
<p>	boys lifepartner providing matchmaking apps Kanjurmarg	</p>
<p>	trusted matrimonial apps byculla	</p>
<p>	trusted matchmaking websites Dadar	</p>
<p>	online meeting matrimonial apps Vasai	</p>
<p>	upcoming matrimonial websites byculla	</p>
<p>	best matchmaking companies Churchgate	</p>
<p>	online meeting matrimonial companies Jogeshwari	</p>
<p>	online dating matrimonial companies Jogeshwari	</p>
<p>	trusted matrimonial apps Kandivali	</p>
<p>	best matrimonial websites Ghatkopar	</p>
<p>	upcoming matrimonial apps Churchgate	</p>
<p>	newly launched matchmaking services Vidyavihar	</p>
<p>	trusted matrimonial companies Bhandup	</p>
<p>	top 10 matrimony matchmaking companies Vile-Parle	</p>
<p>	boys lifepartner providing matrimonial services Mulund	</p>
<p>	online meeting matrimonial websites Vidyavihar	</p>
<p>	girls lifepartner providing matchmaking apps Thane	</p>
<p>	girls lifepartner providing matchmaking services Dahisar	</p>
<p>	trusted matchmaking companies Borivali	</p>
<p>	newly launched matchmaking companies Kanjurmarg	</p>
<p>	best matrimonial apps Nallasopara	</p>
<p>	top 10 matrimony matchmaking websites Boisar	</p>
<p>	newly launched matchmaking apps Powai	</p>
<p>	newly launched matchmaking websites Powai	</p>
<p>	newly launched matrimonial apps Mira-bhayander	</p>
<p>	newly launched matchmaking services Bandra	</p>
<p>	girls lifepartner providing matchmaking apps Powai	</p>
<p>	girls lifepartner providing matchmaking services Mira-bhayander	</p>
<p>	girls lifepartner providing matchmaking companies Bhandup	</p>
<p>	newly launched matrimonial companies Mulund	</p>
<p>	newly launched matrimonial websites Palghar	</p>
<p>	upcoming matchmaking services Thane	</p>
<p>	boys lifepartner providing matrimonial apps Bhandup	</p>
<p>	top 10 matrimony matrimonial companies Dadar	</p>
<p>	newly launched matrimonial websites Ghatkopar	</p>
<p>	upcoming matchmaking apps Borivali	</p>
<p>	trusted matchmaking apps Virar	</p>
<p>	girls lifepartner providing matchmaking apps Nallasopara	</p>
<p>	online dating matchmaking companies Nallasopara	</p>
<p>	best matrimonial companies Colaba	</p>
<p>	best matrimonial apps Bhandup	</p>
<p>	best matrimonial websites Kandivali	</p>
<p>	boys lifepartner providing matchmaking companies Navi Mumbai	</p>
<p>	best matchmaking websites Powai	</p>
<p>	newly launched matchmaking services Bhandup	</p>
<p>	upcoming matrimonial apps Worli	</p>
<p>	best matrimonial apps Churchgate	</p>
<p>	boys lifepartner providing matchmaking companies Bandra	</p>
<p>	boys lifepartner providing matrimonial websites Powai	</p>
<p>	boys lifepartner providing matrimonial apps Vasai	</p>
<p>	online dating matchmaking websites Navi Mumbai	</p>
<p>	online meeting matchmaking services Nallasopara	</p>
<p>	best matrimonial services Churchgate	</p>
<p>	girls lifepartner providing matrimonial websites Kurla	</p>
<p>	online dating matchmaking apps Matunga	</p>
<p>	best matrimonial services Boisar	</p>
<p>	newly launched matrimonial websites Bhandup	</p>
<p>	upcoming matchmaking websites Vidyavihar	</p>
<p>	top 10 matrimony matrimonial companies Kandivali	</p>
<p>	upcoming matrimonial services Nallasopara	</p>
<p>	upcoming matrimonial websites Bhandup	</p>
<p>	best matchmaking apps byculla	</p>
<p>	online meeting matchmaking companies Vasai	</p>
<p>	newly launched matrimonial companies Chembur	</p>
<p>	upcoming matrimonial companies Borivali	</p>
<p>	trusted matrimonial companies Powai	</p>
<p>	newly launched matchmaking services Dahisar	</p>
<p>	trusted matrimonial companies Colaba	</p>
<p>	online meeting matchmaking services Dahanu	</p>
<p>	boys lifepartner providing matrimonial services Mira-bhayander	</p>
<p>	upcoming matrimonial websites Parel	</p>
<p>	trusted matrimonial websites Mulund	</p>
<p>	online meeting matrimonial websites Juhu	</p>
            
          </ScrollArea>
          </Container>
          <Footer/>
    </>
  )
}

export default Contact;

const Head = styled.div`
text-align:center;
> h3 {
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
    margin:30px;
}
> h5 {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    margin:30px;
}`;
const Feed = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;`
const Address = styled.div`
display:flex;
justify-content:start;
flex-direction:column;

button {
    padding:4px;
    margin-bottom: 12px;
    font-size:24px;
    height: calc(2.5rem);
    width:auto;
    border: 1px solid #ffa500;
    background-color:#ffa500;
    color:white;

}
> span {
    font-size: 13px;
    margin-bottom: 5px;

}
> h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 0px;
    color: #FFA500;
    word-break: break-word;
}
> h4 a {
  text-decoration:none;
  color:#FFA500;
  
}
`
const FeedBack = styled.div`
display:flex;
justify-content:start;
flex-direction:column;
> span {
    margin-top: 0px;
    margin-bottom: 5px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: #525252;
}
> input {
    margin:12px;
    padding:4px;
    font-size: 0.9rem;
    border-radius: 0.15rem;
    height: calc(2.5rem);
    width:435px;
    border: 1px solid #ffa500;
    outline:none;
}
> button {
    margin:12px;
    padding:4px;
    font-size: 0.9rem;
    border-radius: 0.15rem;
    height: calc(2.5rem);
    width:435px;
    border: 1px solid #ffa500;
    background-color:#ffa500;
    color:white;

}
@media (max-width:560px) {
    > button {
        width:250px;
    }
    > input {
    margin:6px;
    padding:4px;
    font-size: 0.9rem;
    border-radius: 0.15rem;
    height: calc(2.5rem);
    width:250px;
    border: 1px solid #ffa500;
    outline:none;
}
    
}`