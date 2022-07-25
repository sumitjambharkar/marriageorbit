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
 
      <title>Chat</title>
      
      <link rel="icon" href="imagelink.png" sizes="16x16" type="image/png"></link>
      </Helmet>
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
