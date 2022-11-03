import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EmailIcon from "@mui/icons-material/Email";
import "./Inbox.css";
import Navbar from "../Nav/Navbar";
import Header from "../Header";
import { db } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Inbox = () => {

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  const user = useSelector(selectUser);
  const [userData,setUserData] = useState([])
  const [sent ,setSent] = useState([])
  const [req, setReq] = useState([]);
  const [accepted , setAccepted ] = useState([]);
  const [received, setReceived] = useState([]);
  console.log(userData);


  useEffect(() => {
    db.collection("users").doc(user.uid).onSnapshot(snapshot=>(
      setUserData(snapshot.data())
    ))
    db.collection("users")
      .doc(user.uid)
      .collection("req")
      .onSnapshot((snapshot) => setReq(snapshot.docs.map((doc) => doc.data())));
    db.collection("users")
      .doc(user.uid)
      .collection("sent")
      .onSnapshot((snapshot) => setSent(snapshot.docs.map((doc) => doc.data())));
      db.collection("users")
      .doc(user.uid)
      .collection("received")
      .onSnapshot((snapshot) => setReceived(snapshot.docs.map((doc) => doc.data())));
      db.collection("users")
      .doc(user.uid)
      .collection("accept")
      .onSnapshot((snapshot) => setAccepted(snapshot.docs.map((doc) => doc.data())));
  }, []);
   
  
  
  const accept =async(doc)=> {
    console.log(doc);
    db.collection("users").doc(user.uid).collection("accept").doc(doc.data.uid).set({
      data:doc.data

    })
    db.collection("users").doc(user.uid).collection("req").doc(doc.data.uid).delete()
    db.collection("users").doc(doc.data.uid).collection("received").doc(user.uid).set({
      data:userData
    })
    db.collection("users").doc(doc.data.uid).collection("sent").doc(user.uid).delete()
    const respone = await fetch(
      "https://marriageorbit-backend-api.herokuapp.com/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to:doc.data.email,
          from: user.email,
          subject: `${user.displayName} Members Accepted your Request`,
          message: `Hi ${doc.data.displayName} ${
            user.displayName
          } may be interested in you as they visisted your Profile.Take the first step and connect with them ${`https://marriageorbit.com/view/${user.uid}`}`,
        }),
      }
    );
    const result = await respone.json();
    console.log(result)
  }

  return (
    <>
      <Header />
      <Navbar />
      <Tabs>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <ul className="nav">
            <TabList>
              <Tab>
              <li>
                <a>Received</a>
              </li>
              </Tab>
             <Tab>
             <li>
                <a>Accepted</a>
              </li>
             </Tab>
              <Tab>
              <li>
                <a>Requests</a>
              </li>
              </Tab>
              <Tab>
              <li>
                <a>sent</a>
              </li>
              </Tab>
              </TabList>
            </ul>
          </div>
          <div className="col-3"></div>
        </div>
        <div className="mah">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <TabPanel>
            {received.map((doc)=>(
               <div className="fl">
               <div className="row">
                 <div className="col-3">
                   <div className="im">
                   {doc.data.image ? <img className="img" src={doc.data.image}/> :
                     <AccountCircleIcon /> }
                   </div>
                 </div>
                 <div className="col-6 sib">
                   <div className="sid">
                     <p>
                       {doc.data.displayName} <VerifiedUserOutlinedIcon />
                     </p>
                     <h2>
                       <span>
                         <QuestionAnswerOutlinedIcon />
                       </span>
                       Online 1hr Ago
                     </h2>
                     <hr></hr>
                     <small>
                     {calculate_age(new Date(doc.data.birth))} yrs,{doc.data.height}
                       <br />
                       {doc.data.religion}, {doc.data.tounge}
                       <br />
                       {doc.data.city}, {doc.data.state}
                       <br />
                       {doc.data.qaulification}
                       <br />
                       {doc.data.des}
                     </small>
                   </div>
                   <div className="lov">
                     <span>
                       <LockOutlinedIcon />
                     </span>
                     <p>
                     {doc.data.displayName} has sent you a message. In the interest of our
                       Premium Members, we allow only Premium users to read
                       messages.
                     </p>
                     <a className="lovv">
                       Upgrade Now
                       <KeyboardArrowRightIcon />
                     </a>
                   </div>
                 </div>
                 <div className="col-3">
                   <div className="invv">
                     <p>Upgrade to Contact him directly</p>

                     <a href={`tel:${doc.data.number}`}>
                     <p className="piku">
                       <span>
                         <CallIcon />
                       </span>
                       Call
                     </p>
                     </a>
                     <a target="blank" href={`https://api.whatsapp.com/send?phone=${doc.data.number}`}>
                     <p className="pik">
                       <WhatsAppIcon />
                       Whatsapp
                     </p>
                     </a>
                     <Link to="/chat">
                     <p className="pikk">
                       <MarkChatReadIcon />
                       Shaddi Chat
                     </p>
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
             ))}
            </TabPanel>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="mah">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
             <TabPanel>
             {accepted.map((doc)=>(
              <div className="fl">
                <div className="row">
                  <div className="col-3">
                    <div className="im">
                    {doc.data.image ? <img className="img" src={doc.data.image}/> :
                     <AccountCircleIcon /> }
                    </div>
                    <div className="gd">
                      <p>Request a Photos</p>
                    </div>
                  </div>
                  <div className="col-6 sib">
                  <div className="sid">
                     <p>
                       {doc.data.displayName} <VerifiedUserOutlinedIcon />
                     </p>
                     <h2>
                       <span>
                         <QuestionAnswerOutlinedIcon />
                       </span>
                       Online 1hr Ago
                     </h2>
                     <hr></hr>
                     <small>
                     {calculate_age(new Date(doc.data.birth))} yrs,{doc.data.height}
                       <br />
                       {doc.data.religion}, {doc.data.tounge}
                       <br />
                       {doc.data.city}, {doc.data.state}
                       <br />
                       {doc.data.qaulification}
                       <br />
                       {doc.data.des}
                     </small>
                   </div>
                    <div className="lov">
                      <span>
                        <LockOutlinedIcon />
                      </span>
                      <p>
                      {doc.data.displayName} has sent you a message. In the interest of our
                        Premium Members, we allow only Premium users to read
                        messages.
                      </p>
                      <a className="lovv">
                        Upgrade Now
                        <KeyboardArrowRightIcon />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="invv">
                      <p>Upgrade to Contact him directly</p>

                      <a href={`tel:${doc.data.number}`}>
                     <p className="piku">
                       <span>
                         <CallIcon />
                       </span>
                       Call
                     </p>
                     </a>
                     <a target="blank" href={`https://api.whatsapp.com/send?phone=${doc.data.number}`}>
                     <p className="pik">
                       <WhatsAppIcon />
                       Whatsapp
                     </p>
                     </a>

                      <Link to="/chat">
                      <p className="pikk">
                        <MarkChatReadIcon />
                        Shaddi Chat
                      </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              ))}
             </TabPanel>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
        <div className="mah">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
             <TabPanel>
             {req.map((doc)=>(
               <div className="fl">
               <div className="row">
                 <div className="col-3">
                   <div className="im">
                   {doc.data.image ? <img className="img" src={doc.data.image}/> :
                     <AccountCircleIcon /> }
                   </div>
                   <div className="gd">
                     <p>Request a Photos</p>
                   </div>
                 </div>
                 <div className="col-6 sib">
                 <div className="sid">
                     <p>
                       {doc.data.displayName} <VerifiedUserOutlinedIcon />
                     </p>
                     <h2>
                       <span>
                         <QuestionAnswerOutlinedIcon />
                       </span>
                       Online 1hr Ago
                     </h2>
                     <hr></hr>
                     <small>
                     {calculate_age(new Date(doc.data.birth))} yrs,{doc.data.height}
                       <br />
                       {doc.data.religion}, {doc.data.tounge}
                       <br />
                       {doc.data.city}, {doc.data.state}
                       <br />
                       {doc.data.qaulification}
                       <br />
                       {doc.data.des}
                     </small>
                   </div>
                   <div className="lov">
                     <span>
                       <LockOutlinedIcon />
                     </span>
                     <p>
                       {doc.data.displayName} has sent you a message. In the interest of our
                       Premium Members, we allow only Premium users to read
                       messages.
                     </p>
                     <a className="lovv">
                       Upgrade Now
                       <KeyboardArrowRightIcon />
                     </a>
                   </div>
                 </div>
                 <div className="col-3">
                   <div className="inv">
                     <p>He invited you to Connect</p>
                     <span>
                      <Button onClick={()=>accept(doc)}>
                       <CheckOutlinedIcon />
                       </Button>
                     </span>
                     <p>Accept</p>
                     <ClearOutlinedIcon />
                     <p>Decline</p>
                   </div>
                 </div>
               </div>
             </div>
              ))}
             </TabPanel>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
        <div className="mah">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
             <TabPanel>
             {sent.map((doc)=>(
                <div className="fl">
                <div className="row">
                  <div className="col-3">
                    <div className="im">
                    {doc.data.image ? <img className="img" src={doc.data.image}/> :
                     <AccountCircleIcon /> }
                    </div>
                    <div className="gd">
                      <p>Request a Photos</p>
                    </div>
                  </div>
                  <div className="col-6 sib">
                  <div className="sid">
                     <p>
                       {doc.data.displayName} <VerifiedUserOutlinedIcon />
                     </p>
                     <h2>
                       <span>
                         <QuestionAnswerOutlinedIcon />
                       </span>
                       Online 1hr Ago
                     </h2>
                     <hr></hr>
                     <small>
                     {calculate_age(new Date(doc.data.birth))} yrs,{doc.data.height}
                       <br />
                       {doc.data.religion}, {doc.data.tounge}
                       <br />
                       {doc.data.city}, {doc.data.state}
                       <br />
                       {doc.data.qaulification}
                       <br />
                       {doc.data.des}
                     </small>
                   </div>
                    <br />
                    <div className="love">
                      <p>
                        <span>
                          <EmailIcon />
                        </span>
                        &nbsp;Hello, I like your Profile. Accept my request if
                        my profile interests you too
                      </p>
                      <h3>
                        He viewed your Invitation and choose to
                        respond later.
                      </h3>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="invv">
                      <p>Upgrade to Contact him directly</p>

                      <a href={`tel:${doc.data.number}`}>
                     <p className="piku">
                       <span>
                         <CallIcon />
                       </span>
                       Call
                     </p>
                     </a>
                     <a target="blank" href={`https://api.whatsapp.com/send?phone=${doc.data.number}`}>
                     <p className="pik">
                       <WhatsAppIcon />
                       Whatsapp
                     </p>
                     </a>

                     <Link to="/chat">
                     <p className="pikk">
                        <MarkChatReadIcon />
                        Shaddi Chat
                      </p>
                     </Link>
                    </div>
                  </div>
                </div>
              </div>
              ))}
             </TabPanel>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
      </Tabs>
    </>
  );
};

export default Inbox;