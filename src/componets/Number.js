import React, { useState } from 'react'
import styled from 'styled-components';
import {RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { auth } from './firebase';
import {useHistory } from "react-router-dom";

const Number = () => {
    
    const user = useSelector(selectUser);
    const history = useHistory();
    const [show, setShow] = useState(false)
    const [number,setNumber] = useState("")
    const [otp,setOtp] = useState("")
    const [confirmObj ,setConfirmObj] = useState("")

    const handleNumber =async(e)=> {
        e.preventDefault()
        if (number) {
            try {
                const response = await setUpReCaptcha(number)
                setConfirmObj(response)
                setShow(true)
            } catch (error) {
                console.log(error);
            }
        }
        
    }
    const numberVerify =async(e)=> {
        console.log(otp);
        e.preventDefault()
        if (otp ==="" || otp === null) return;
        try{
            await confirmObj.confirm(otp)
            history.push("/top-matches");

        }
        catch(error){
            console.log(error);
        }
    }

    function setUpReCaptcha (number) {
        const recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container', {
        },auth);
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth,number,recaptchaVerifier)
        
    }
    
    
  return (
    <Sec>
        {!show ? 
        <>
         <Form onSubmit={handleNumber}>
            <p>Please Enter your mobile number</p>
            <Img>
            <img src="https://img.icons8.com/cute-clipart/64/000000/sms.png"/>
            </Img>
            <Input>
            <label>Enter Your Number</label>
            <PhoneInput defaultCountry='IN' value={number} onChange={setNumber} placeholder='Enter Your Number'/>
            <div id='recaptcha-container'/>
            <button type='submit'>Verify Number</button>
            </Input>
        </Form>
        </> :
        <>
        <Form onSubmit={numberVerify}>
            <p>Please verify your mobile number</p>
            <Img>
            <img src="https://img.icons8.com/cute-clipart/64/000000/sms.png"/>
            </Img>
            <Input>
            <label>Enter PIN Number</label>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder='Enter Your PIN'/>
            <button type='submit'>Verify</button>
            </Input>
        </Form>
         </>
         }
    </Sec>
  )
}

export default Number;

const Sec = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
width:100vw`

const Form = styled.form`
border: 1px solid var(--ux-97h3vl,#d3d3d3);
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:12px;
> p {
    text-align: center;
    font-weight: bold;
}`

const Img = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:4px;`

const Input = styled.div`
display:flex;
flex-direction:column;
>label {
    margin-left: 18px;
}
>input {
    margin: 6px 18px 18px;
    padding:6px;
}>button {
   margin:18px;
   padding:6px;
   background-color:#ffa500;
   border: 1px solid #ffa500;
   font-weight: 700;
   color:black;
   border-radius:4px;

}`