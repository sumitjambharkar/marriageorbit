import React, { useState } from 'react'

import Footer from './Footer';
import styled from 'styled-components';
import { db } from './firebase';
import { toast } from 'react-toastify';
import Header from './Header';
import Navbar from './Nav/Navbar';
import {Helmet} from "react-helmet";

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
    {/* <Helmet>
        <meta charSet="utf-8" />
        <title>contact</title>
        <link rel="canonical" href="https://https://smartpropdeals.com/" />
    </Helmet> */}
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
            <h4><a href='tel:9833188536'>+91 98331 88536</a></h4>
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