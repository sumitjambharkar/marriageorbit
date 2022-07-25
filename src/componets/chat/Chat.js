import React, { useEffect, useState } from "react";
import { db, auth, storage } from "../firebase";
import Avatar from '@mui/material/Avatar';
import styled from "styled-components";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import ScrollToBottom from 'react-scroll-to-bottom';
import User from "./User";
import MessageForm from "./MessageForm";
import Message from "./Message";
import Header from "../Header";
import Navbar from "../Nav/Navbar";
import {Helmet} from "react-helmet";


const Home = () => {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [msgs, setMsgs] = useState([]);


  const user1 = auth.currentUser.uid;

  useEffect(() => {
    const usersRef = collection(db, "users");
    // create query object
    const q = query(usersRef, where("uid", "not-in", [user1]));
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);

  const selectUser = async (user) => {
    console.log(user);
    setChat(user);

    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(db, "messages", id, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });

    // get last message b/w logged in user and selected user
    const docSnap = await getDoc(doc(db, "lastMsg", id));
    // if last message exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, set unread to false
      await updateDoc(doc(db, "lastMsg", id), { unread: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });

    await setDoc(doc(db, "lastMsg", id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    });

    setText("");
    setImg("");
  };
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Chat</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <Header/>
    <Navbar/>
    <HomeContainer>
      <UserContainer>
        <ScrollToBottom>
        {users.map((user) => (
          <User
            key={user.uid}
            user={user}
            selectUser={selectUser}
            user1={user1}
            chat={chat}
          />
        ))}
        </ScrollToBottom>
      </UserContainer>
      <MessageContainer>
        {chat ? (
          <>
            <div className="messages_user">
              <Avatar style={{width:"50px",height: "50px",marginRight:"6px"}} src={chat.image}/>
              <h3>{chat.displayName}</h3>
            </div>
            <div className="messages">
              {msgs.length
                ? msgs.map((msg, i) => (
                    <Message key={i} msg={msg} user1={user1} />
                  ))
                : null}
            </div>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              setImg={setImg}
            />
          </>
        ) : (
          <h3 className="no_conv">Select a user to start conversation</h3>
        )}
      </MessageContainer>
    </HomeContainer>
    </>
  );
};

export default Home;
const HomeContainer = styled.div`
display:flex;
width:auto;
height:100vh;`
const UserContainer = styled.div`
margin:24px;
flex:3;
border-right: 2px solid var(--color-6);
overflow-y: auto;
border-right: 1px solid black;
@media (max-width:500px) {
  margin:0px;
  flex: 2;
}`
const MessageContainer = styled.div`
flex:7;
position: relative;
margin:24px;
width:auto;
@media (max-width:500px) {
  margin:0px;
  flex: 8;
}`

