import React, { useEffect, useState } from "react";
import { onSnapshot, doc,orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Avatar from '@mui/material/Avatar';

const User = ({ user1, user, selectUser, chat }) => {
  
  const user2 = user?.uid;
  const [data, setData] = useState("");

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id),
     (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);

  return (
    <>
      <div
        className={`user_wrapper ${chat.displayName === user.displayName && "selected_user"}`}
        onClick={() => selectUser(user)}
      >
        <div className="user_info">
          <div className="user_detail">
            <Avatar src={user.image} alt="avatar" />
            <h4>{user.displayName}</h4>
            {data?.from !== user1 && data?.unread && (
              <small className="unread">New</small>
            )}
          </div>
          <div
            className={`user_status ${user.isOnline ? "online" : "offline"}`}
          ></div>
        </div>
        {data && (
          <p className="truncate">
            <strong>{data.from === user1 ? "Me:" : null}</strong>
            {data.text}
          </p>
        )}
      </div>
      <div
        onClick={() => selectUser(user)}
        className={`sm_container ${chat.displayName === user.displayName && "selected_user"}`}
      >
        <div className="sm_screen">
           <Avatar src={user.image}/>
        </div>
      </div>
    </>
  );
};

export default User;
