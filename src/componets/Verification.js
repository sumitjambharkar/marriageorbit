import { Checkbox } from "@mui/material"
import React, { useState } from "react"
import ng from "./image/nl.png"
import "./Verification.css"
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Verification = () => {
    const [show, setShow] = useState(false)
    
    return <>

        <div className="logo">
            <h1>MARRIAGE</h1>
            <img src={ng} alt />
            <h1>RBIT</h1>

        </div>

        <div className="niru">
            <div className="container">
                <div className="about">
                    <h2><strong>Congratulations!</strong> You have succesfully registered with MARRIGEORBIT</h2>
                    <h3>Your Matrimony ID is h11292996 <HelpOutlineIcon/></h3>
                    <h4><Checkbox /> Keep me Logged in <span>(Recommended).</span> Stay logged in always with marriageorbit.com</h4>
                    <hr></hr>
                    {!show ?
                    <div className="verify">
                        <h2>Verify Your Mobile Number</h2>
                        &nbsp;&nbsp;
                        <form>

                            <input className="se" type="search" id="gsearch" placeholder="Enter Mobile Number" name="gsearch" />&nbsp;&nbsp;
                            <button onClick={()=>setShow(true)} className="mk"type="submit" >Send OTP</button>
                            

                        </form>
                        &nbsp;
                        <p className="cod">Didn't receive code yet? <span>Resend Code</span></p>
                        <div className="row">
                            <div className="col-md-11"></div>
                            <div className="col-md-1">
                            <div className="veri">
                            <a>Skip <KeyboardArrowRightIcon/></a>
                        </div>
                            </div>
                        </div>
                        
                   
                   
                    </div>
                          :
                    <div className="verify">
                        <h2>Verify Your Mobile Number</h2>
                        <p>You will receive a 6-digit confirmation code vis SMS to 9876543219 
                             &nbsp;<small>(Edit)</small></p>&nbsp;&nbsp;&nbsp;
                        <form>

                            <input className="se" type="search" id="gsearch" placeholder="Enter Code" name="gsearch" />&nbsp;&nbsp;
                            <input className="mk" type="submit" placeholder="Verify" />

                        </form>
                        &nbsp;
                        <p className="cod">Didn't receive code yet? <span>Resend Code</span></p>
                        <div className="row">
                            <div className="col-md-11"></div>
                            <div className="col-md-1">
                            <div className="veri">
                            <a>Skip <KeyboardArrowRightIcon/></a>
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
                            <p>OTHER WAYS<br/>TO VERIFY</p>
                        </div>
                    </div>
                    <div className="gk col-md-4">
                        <div className="nh">
<PhoneMissedIcon/>
</div>
<div>&nbsp;&nbsp;
<span>Verify with missed call</span>
</div>


                    </div>
                    <div className="gk col-md-4">
                        <div className="nh">
                           
                        <PhoneInTalkIcon/>
                        </div>
                        <div>
                            &nbsp;&nbsp;
                        <span>Request Automated IVR call</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </>
}
export default Verification