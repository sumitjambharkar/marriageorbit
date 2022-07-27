import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { db } from './firebase'
import { Link } from 'react-router-dom'
import MessageScreen from './MessageScreen';
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import {Helmet} from "react-helmet";
import Navbar from './Nav/Navbar';
import Header from './Header';




function Chats() {
  const [room, setRoom] = useState([])
  const user = useSelector(selectUser)
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setRoom(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
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

      <meta name="keywords" content="Matrimony services for girls in mumbai, matchmaking services, Matrimonial website and services, matrimonials, couples matchmaking companies in mumbai, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in mumbai, Online matchmaking Services,Indian single girls in mumbai,girls for marriage in mumbai
      lifepartner for wedding in mumbai.get girlfriend for marriage in mumbai.diffrent casts of girls for marriage in mumbai.
      services of matrimony for mens in mumbai, Matrimonial websites to find girls, matrimonials, couples girls and boys matchmaking companies in mumbai, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in mumbai, Online matchmaking Services,Indian single boys in mumbai,boys for marriage in mumbai
      lifepartner for wedding in mumbai.get boyfriend for marriage in mumbai.diffrent casts of boys for marriage in mumbai.
      hindu girls and boys for marriage."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/chat"/>
      <meta property="og:type" content="Matrimonial Matchmaking Service In India" />
      <meta property="og:title" content="Chat | Marriage Matrimony services in vasai-virar" />
      <meta property="og:image" content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png" />
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/chat" />
 
      <title>Chat | Marriage Matrimony services in vasai-virar</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 
   
      </Helmet>
      <Header/>
    <Navbar/>
      <Chat>
        <ContactSideBar>
          {room.map((doc) => {
            return (
              <>
                {doc.data.displayName===user.displayName ?
                null 
                :
                <Link 
                 to={`/chats/${doc.id}`}
                 >
                <Contact>
                  <Avatar src={doc.data.image} />
                  <ListItemButton>
                    <ListItemText>
                    {doc.data.displayName}
                    </ListItemText>
                  </ListItemButton>
                </Contact>
                </Link>
                } 
              </>
            )
          })}
        </ContactSideBar>
        <ChatSideBar>
        <MessageScreen/>
        </ChatSideBar>
      </Chat>
    </>
  )
}

export default Chats;
const Chat = styled.div`
display:flex;
background-color:gray;
height:100vh;
padding:50px;`
const ContactSideBar = styled.div`
flex:3;
height:75vh;
background-color:white;
overflow: scroll;
> a {
  text-decoration:none;
  color:black;
}
`
const Contact = styled.div`
padding:8px;
display:flex;
justify-content:start;
`
const ChatSideBar = styled.div`
flex:7;
height:75vh;
background-color:#e1d9d9;`
