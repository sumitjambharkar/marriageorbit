import React, { useEffect, useState } from "react";
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
import Header from "../Header";
import Navbar from "../Nav/Navbar";
import { selectUser } from "../userSlice";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
          <Inboxs>
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
          </Inboxs>
        </div>
       {received ? 
        <div className="mah">
        <div className="hi">
          <p>Received</p>
        </div>
        <div className="row">
        <Inboxs>
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
          <div className="col-2"></div>
          </Inboxs>
        </div>
      </div> 
       : ""}
        {accepted ? (
          <div className="mah">
            <div className="hi">
              <p>Accepted Invitations</p>
            </div>
            <div className="row">
              <Inbox>
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
              </Inbox>
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
    <Inboxs>
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
      </Inboxs>
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
  <Inboxs>
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
    </Inboxs>
</div>
</div>:""
}
      </div>
    </>
  );
};

export default Inbox;
const Inboxs = styled.div`

.hi p{
    font-size: 20px;
    color:red;
    font-weight: 600;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .nav{
    display: flex;
    margin: auto;
    gap: 50px;
  }
  .mh {
    display: inline;

    TEXT-ALIGN: CENTER;
  }

.fl{
    border: 2px solid #9994;
    transition: 0.5s;
    border-radius: 10px;
}
  .mh {
   color:#ffa500 !important;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #878787;
  }
  .mh a{
    color:#ffa500;
  }

  .mh:hover{
    background: #ffa500;
    padding: 10px 12px;
  }
  .mh:hover a{
 color: #fff;
    
  }
.fl:hover{
   
    box-shadow: 3px 3px 2px 3px #6667;
}
.im{
    display: flex;
    justify-content: center;
    align-items: center;
}
.im .MuiSvgIcon-root{
    width: 130px;
    height: 130px;
    color:#999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mah{
    margin-top: 50px;
}

.gd p{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #158dea;
}
.sid{
    padding-top: 25px;
}
.sid span{
    color:#baba00;
}
.sid h2{
    font-size: 14px;
}

.sid small{
    font-size: 15px;
}

.lov {
    color: rgb(81, 80, 93);
    text-align: center;
    border: 1px dashed #158dea;
    border-radius: 3px;
    background: rgb(255, 255, 255);
    position: relative;
    padding: 14px 20px 12px;
    margin: 21px 0px 10px;
}

.lovv {
    color: #158dea;
    text-align: center;
   border-radius: 3px;
    background: rgb(255, 255, 255);
    position: relative;
    padding: 14px 20px 12px;
    margin: 21px 0px 10px;
}
.lov span{
    color: #999;
    padding-top: 6px;
}
.lov p{
    font-size: 13px;
    display: flex;
    text-align: center;
    padding-top: 5px;
}    

.sib{
    border-right: 1px dotted #999;
}
.inv{
    text-align: center;
    margin-top: 100px;
}
.inv .MuiSvgIcon-root{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    color:#fff;
    background:#158dea;
    transition: 0.5s;
}

.inv .MuiSvgIcon-root:hover{
    background: #ffa500;
}
.invv{
    text-align: center;
    margin-top: 100px;
}
.invv .MuiSvgIcon-root{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color:#158dea;
    
    transition: 0.5s;
}

.piku{
    border: 1px solid #adadad;
    border-radius: 30px;
    width: 187px;
    padding: 6px;
}

.piku:hover{
   
    box-shadow: rgb(11 226 255 / 39%) 0px 5px 9px;
    color: #000;
}
.pik{
    border: 1px solid #adadad;
    border-radius: 30px;
    width: 187px;
    padding: 6px;
}

.pik:hover{
    box-shadow: #5bf276 0px 3px 9px;
    color:#000;
}
.pikk{
    border: 1px solid #adadad;
    border-radius: 30px;
    width: 187px;
    padding: 6px;
}

.pikk:hover{
   
    box-shadow: #3fa8ef 0px 3px 9px;
    color:#000;
}

.invx{
    text-align: center;
    margin-top: 100px;
}
.invx .MuiSvgIcon-root{
    width: 65px;
    height: 65px;
    padding: 7px;
    border-radius: 50%;
    color:#fff;
    background:#158dea;
    transition: 0.5s;
}

.invx .MuiSvgIcon-root:hover{
    background: #ffa500;
}

.love h3{
    background-color: #dbf7fb;
    color: #424242;
    font-size: 16px;
    padding: 24px;
    text-align: center;
}

.love span{
    color:#7fe1ee;
}
`
