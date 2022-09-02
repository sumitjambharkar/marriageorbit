import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Inbox.css";
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
import Header from "../Header";
import Navbar from "../Nav/Navbar";
import { selectUser } from "../userSlice";
import { db } from "../firebase";
import { useSelector } from "react-redux";

const Inbox = () => {
  const user = useSelector(selectUser);
  const [data, setData] = useState([]);
  console.log(data);
  const [request, setRequest] = useState(false);
  const [accepted,setAccepted] = useState(false)
  const [received,setReceived] = useState(true)
  const [sent,setSent] = useState(false)
  console.log(user.uid);
  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .collection("send")
      .onSnapshot((snapshot) => {
      snapshot.docs.map((doc)=>{
        setData(doc.data())
      })
      });
  }, []);

  const first =()=> {
    setAccepted(false)
    setRequest(false)
    setSent(false)
  }

  const second =()=> {
    setAccepted(true)
    setSent(false)
    setReceived(false)

  }
  const third =()=> {
    setRequest(true)
    setAccepted(false)
    setSent(false)
    setReceived(false)
  }
  const four =()=> {
    setRequest(false)
    setAccepted(false)
    setSent(true)
    setReceived(false)
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <ul className="nav">
              <li onClick={first} className="mh active">
                <a>Received</a>
              </li>
              <li onClick={second} className="mh">
                <a>Accepted</a>
              </li>
              <li onClick={third} className="mh">
                <a>Requests</a>
              </li>
              <li onClick={four} className="mh">
                <a>sent</a>
              </li>
            </ul>
          </div>
          <div className="col-3"></div>
        </div>
       {received ? 
        <div className="mah">
        <div className="hi">
          <p>Received</p>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="fl">
              <div className="row">
                <div className="col-3">
                  <div className="im">
                    <AccountCircleIcon />
                  </div>
                  <div className="gd">
                    <p>Request a Photos</p>
                  </div>
                </div>
                <div className="col-6 sib">
                  <div className="sid">
                    <p>
                      Nirjala Vishwakarma <VerifiedUserOutlinedIcon />
                    </p>
                    <h2>
                      <span>
                        <QuestionAnswerOutlinedIcon />
                      </span>{" "}
                      Online 1hr Ago
                    </h2>
                    <hr></hr>
                    <small>
                      27 yrs,5'3"
                      <br />
                      Hindi , Rajput
                      <br />
                      Delhi, Delhi-NCR
                      <br />
                      Master
                      <br />
                      Interior Designer
                    </small>
                  </div>
                  <div className="lov">
                    <span>
                      <LockOutlinedIcon />
                    </span>
                    <p>
                      Nirjala has sent you a message. In the interest of our
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
                      <CheckOutlinedIcon />
                    </span>
                    <p>Accept</p>
                    <ClearOutlinedIcon />
                    <p>Decline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-"></div>
        </div>
      </div> 
       : ""}
        {accepted ? (
          <div className="mah">
            <div className="hi">
              <p>Accepted Invitations</p>
            </div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="fl">
                  <div className="row">
                    <div className="col-3">
                      <div className="im">
                        <AccountCircleIcon />
                      </div>
                      <div className="gd">
                        <p>Request a Photos</p>
                      </div>
                    </div>
                    <div className="col-6 sib">
                      <div className="sid">
                        <p>
                          Nirjala Vishwakarma <VerifiedUserOutlinedIcon />
                        </p>
                        <h2>
                          <span>
                            <QuestionAnswerOutlinedIcon />
                          </span>{" "}
                          Online 1hr Ago
                        </h2>
                        <hr></hr>
                        <small>
                          27 yrs,5'3"
                          <br />
                          Hindi , Rajput
                          <br />
                          Delhi, Delhi-NCR
                          <br />
                          Master
                          <br />
                          Interior Designer
                        </small>
                      </div>
                      <div className="lov">
                        <span>
                          <LockOutlinedIcon />
                        </span>
                        <p>
                          Nirjala has sent you a message. In the interest of our
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

                        <p className="piku">
                          <span>
                            <CallIcon />
                          </span>
                          Call
                        </p>

                        <p className="pik">
                          {" "}
                          <WhatsAppIcon />
                          Whatsapp
                        </p>

                        <p className="pikk">
                          {" "}
                          <MarkChatReadIcon />
                          Shaddi Chat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        ) : (
          ""
        )}

     {request ?
     <>
      <div className='mah'>
      <div className='hi'>
          <p>Request</p>
      </div>
  <div className='row'>
  <div className='col-2'></div>
  <div className='col-8'>
           <div className='fl'>
              <div className='row'>
                  <div className='col-3'>
                      <div className='im'>
                         <AccountCircleIcon/>
                        </div>
                      <div className='gd'>
                          <p>Request a Photos</p>
                          </div>              
                        </div>
                  <div className='col-6 sib'>
  <div className='sid'>
      <p>{data.displayName}<VerifiedUserOutlinedIcon/></p>
      <h2><span><QuestionAnswerOutlinedIcon/></span> Online 1hr Ago</h2>
      <hr></hr>
      <small>
          27 yrs,5'3"<br/>
           Hindi , Rajput<br/>
          Delhi, Delhi-NCR<br/>
          Master<br/>
          Interior Designer</small>
  </div>
                  </div>
                  <div className='col-3'>
                  <div className='invx'>
                        
                          <span><CameraAltIcon/></span>
                          <p>Add Photo</p>
                         
                      </div>
                  </div>
              </div>
           </div>
      </div>
      <div className='col-3'></div>
  </div>
        </div>
        </>
        : ""
     }


{sent ?
  <div className='mah'>
    <div className='hi'>
        <p>Sent</p>
    </div>
<div className='row'>
<div className='col-2'></div>
<div className='col-8'>

   

         <div className='fl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='im'>
                       <AccountCircleIcon/>
                      </div>
                    <div className='gd'>
                        <p>Request a Photos</p>
                        </div>              
                      </div>
                <div className='col-6 sib'>
<div className='sid'>
    <p>Nirjala Vishwakarma <VerifiedUserOutlinedIcon/></p>
    <h2><span><QuestionAnswerOutlinedIcon/></span> Online 1hr Ago</h2>
    <hr></hr>
    <small>
        27 yrs,5'3"<br/>
         Hindi , Rajput<br/>
        Delhi, Delhi-NCR<br/>
        Master<br/>
        Interior Designer</small>
</div><br/>
<div className='love'>
<p><span><EmailIcon/></span>&nbsp;Hello, I like your Profile. Accept my request if my profile interests you too</p>
<h3>He viewed your Invitation on 25 Aug 2022 and chose to respond later.</h3>
</div>



                </div>
                <div className='col-3'>
                    <div className='invv'>
                        <p>Upgrade to Contact him directly</p>
                        
                        <p className='piku'><span><CallIcon/></span>Call</p>
                      
                        <p className='pik'>  <WhatsAppIcon/>Whatsapp</p>
                       
                        <p className='pikk'> <MarkChatReadIcon/>Shaddi Chat</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
    <div className='col-3'></div>
</div>
</div>:""
}
      </div>
    </>
  );
};

export default Inbox;
