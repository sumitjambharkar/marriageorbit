import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import ng from "./image/nl.png";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verification = () => {
    const history = useHistory()
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  
  const sendOtp = async (e) => {
    e.preventDefault();
    if (!phone) {
      toast.error("Please Enter Your Number");
    }else{
      const respone = await fetch("http://localhost:5000/send-verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone:phone,
      }),
    });
    const data = await respone.json();
    if (!data) {
      toast.error("Please Enter Vaild Number");;
    } else {
      toast.success("OTP Send");
      setShow(true);
    }
    }
  };

  const verify = async (e) => {
    e.preventDefault();
    const respone = await fetch("http://localhost:5000/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code:code,
        phone:phone
      }),
    });
    const result = await respone.json();
    if (!result) {
      console.log("err");
      toast.error("Please Enter Vaild OTP");
      history.push("/send-verification")
      
    } else {
      console.log(result);
      toast.success("Number Verification Successfully");
      history.push("/top-matches")
    }
  };



  return (
    <>
      <VerifySection>
        <div className="logo">
          <h1>MARRIAGE</h1>
          <img src={ng} alt="" />
          <h1>RBIT</h1>
        </div>
       
        <div className="niru">
          <div className="container">
            <div className="about">
              <h2>
                <strong>Congratulations!</strong> You have succesfully
                registered with MARRIGEORBIT
              </h2>
              <h3>
                Your Matrimony ID is h11292996 <HelpOutlineIcon />
              </h3>
              <h4>
                <Checkbox /> Keep me Logged in <span>(Recommended).</span> Stay
                logged in always with marriageorbit.com
              </h4>
              <hr></hr>
              {!show ?
                <div className="verify">
                  <h2>Verify Your Mobile Number</h2>
                  &nbsp;&nbsp;
                  <form>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="se"
                      type="text"
                      placeholder="Enter Mobile Number"
                    />
                    &nbsp;&nbsp;
                    <button onClick={sendOtp} className="mk" type="submit">
                      Send OTP
                    </button>
                  </form>
                  &nbsp;
                  <div className="row">
                    <div className="col-md-11"></div>
                    <div className="col-md-1">
                      <div className="veri">
                        <a>
                          Skip <KeyboardArrowRightIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
               :
                <div className="verify">
                  <h2>Verify Your Mobile Number</h2>
                  <p>
                    You will receive a 6-digit confirmation code vis SMS to {phone} 
                    &nbsp;<small>(Edit)</small>
                  </p>
                  &nbsp;&nbsp;&nbsp;
                  <form>
                    <input
                      className="se"
                      type="search"
                      value={code}
                      onChange={(e)=>setCode(e.target.value)}
                      placeholder="Enter Code"
                      name="code"
                    />
                    &nbsp;&nbsp;
                    <input onClick={verify} className="mk" type="submit" placeholder="Verify" />
                  </form>
                  &nbsp;
                  <p className="cod">
                    Didn't receive code yet? <span onClick={()=>setShow(false)}>Resend Code</span>
                  </p>
                  <div className="row">
                    <div className="col-md-11"></div>
                    <div className="col-md-1">
                      <div className="veri">
                        <a>
                          Skip <KeyboardArrowRightIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
          <hr></hr>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="gk col-md-3">
                <div className="sam">
                  <p>
                    OTHER WAYS
                    <br />
                    TO VERIFY
                  </p>
                </div>
              </div>
              <div className="gk col-md-4">
                <div className="nh">
                  <PhoneMissedIcon />
                </div>
                <div>
                  &nbsp;&nbsp;
                  <span>Verify with missed call</span>
                </div>
              </div>
              <div className="gk col-md-4">
                <div className="nh">
                  <PhoneInTalkIcon />
                </div>
                <div>
                  &nbsp;&nbsp;
                  <span>Request Automated IVR call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VerifySection>
    </>
  );
};
export default Verification;

const VerifySection = styled.div`
  .logo {
    font-size: 30px;
    font-weight: 600;
    color: rgb(255, 165, 0);
    font-family: poppins;
    margin-top: 30px;
  }

  .logo {
    background-color: #fff;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
  }
  .logo img {
    width: 50px;
    margin-top: -10px;
  }
  .about {
    text-align: center;
    background-color: #eee;
    margin-top: 30px;
  }
  .about h2 {
    padding-top: 20px;
    font-size: 21px;
    color: #424242;
  }
  .about strong {
    color: #000;
    font-weight: 600;
  }

  .about h3 {
    font-size: 19px;
    color: #464646;
    font-weight: 400;
  }

  .about h4 {
    font-size: 17px;
  }

  .about span {
    color: #a9a7a7;
  }

  .verify {
    padding-top: 40px;
  }
  .verify h2 {
    font-size: 45px;
    color: #424242;
  }

  .verify p {
    font-size: 20px;
    color: rgb(63, 60, 60);
  }

  .verify small {
    color: #158dea;
    font-size: 14px;
    font-weight: 400;
  }

  .se {
    padding: 12px 30px;
    border-radius: 10px;
    border: 1px solid #6668;
  }

  .se:focus {
    outline: none;
  }

  .cod {
    padding-top: 5px;
    font-size: 18px !important;
    color: #424242;
  }

  .cod span {
    color: #158dea;
  }
  .mk {
    padding: 11px 20px;
    border-radius: 10px;
    background: rgb(255, 165, 0);
    color: #fff;
    border: 1px solid rgb(255, 165, 0);
  }

  .veri h2 {
    background-color: #fff;
    display: flex;
    justify-content: end;
  }

  .niru {
    background-color: #eee;
  }

  .veri a {
    display: flex;
    justify-content: center;
    color: #158dea !important;
    border-radius: 5px;
    padding: 7px 14px;
    text-align: center;
    border: 1px solid #9997;
    background-color: #fff;
  }
  .sam p {
    font-size: 18px;
    color: #424242;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nh {
    background-color: #158dea;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nh p {
    color: #158dea !important;
  }
  .gk {
    display: flex;
    justify-content: start;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 767px) {
    .about h2 {
      font-size: 13px;
    }
    .about h3 {
      font-size: 15px;
    }
    .about h4 {
      font-size: 11px;
    }

    .verify h2 {
      font-size: 21px;
      color: #424242;
      font-weight: 600;
    }
    .cod {
      font-size: 12px;
    }
  }
`;
