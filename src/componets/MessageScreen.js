import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {db } from "./firebase";
import Avatar from '@mui/material/Avatar';
import firebase from 'firebase/compat/app';
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import ScrollToBottom from 'react-scroll-to-bottom';



const MessageScreen = () => {
  const user = useSelector(selectUser)

  const { roomId } = useParams();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState([])
  const [input, setInput] = useState("")
  const sendMessage =(e)=>{
    e.preventDefault()
    if(roomId){
      db.collection("users").doc(roomId).collection("message").add({
        displayName:user.displayName,
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      })
      setInput("")
    }
  }

  useEffect(() => {
    if (roomId) {
        db.collection("users")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setUsers(snapshot.data());
        });
        db.collection("users").doc(roomId).collection("message")
        .orderBy("timestamp","asc")
        .onSnapshot(snapshot=>{
          setMessage(snapshot.docs.map((doc)=>doc.data()))
        })
        // .get()
        // .then(querySnapshot=>{
        //   setMessage(querySnapshot.docs.map((doc)=>(doc.data())))
        //   console.log(querySnapshot.docs.map((doc)=>(doc.data())))
        // })   
     }
     
  }, [roomId]);

  return (
    <>
      <Header>
        <Logo>
          {!users ? <Avatar>{user.displayName[0]}</Avatar> :<Avatar src={users.image} />}
        </Logo>
        <ListItemButton>
          <ListItemText>
            {!users ? <h1>{user.displayName}</h1> : <h1>{users.displayName}</h1>}
          </ListItemText>
        </ListItemButton>
      </Header>
      <ScrollToBottom>
      <Message>
      {message.map((doc)=>{
        return (
          <>
          <AllMessage>
          <li>{doc.displayName}</li>
          <span>{doc.message}<span style={{fontSize:"8px",fontWeight:700,margin:"10px"}}>{new Date(doc.timestamp?.toDate()).toDateString("en-US")}</span></span>
          </AllMessage>
          </>
        )
      })}
      </Message>
      </ScrollToBottom>
      {!users ? null :
      <>
      <Section>
      <form onSubmit={sendMessage}>
      <Bottom>
      <Input>
      <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"  />
      </Input>
      <Send>
      <button type="submit">send</button>
      </Send>
      </Bottom>
      </form>
      </Section>
      </>
      }
    </>
  );
};

export default MessageScreen;
const Section = styled.div``
const Header = styled.div`
background-color: #bab0b0;
height:8vh;
color:white;
display:flex;
justify-content:start;
> .MuiSvgIcon-root {
    height:70px;
    color:white;
}
`
const Logo = styled.div`
padding:8px;
display:flex;
justify-content:start;`
const Message = styled.div`
margin:4px;
height:60vh;
`
const Bottom = styled.div`
display:flex;
`
const Input = styled.div`
flex:80;
> input {
  width:100%;
  border-radius: 4px;
  border: 1px solid #FFA500;
}
> input:focus {
  outline: none;
}
`
const Send = styled.div`
flex:20;
> button {
  width:100%;
  background-color:#FFA500;
  border:1px solid #FFA500;
  color:white;
}`
const AllMessage = styled.div`
  margin:12px;
  > li {
    font-size: 12px;
    font-weight: 800;
    list-style: none;
  }
  > span {
    margin:12px;
    background-color:white;
    padding:4px;
    border-radius: 4px;
  }
`