import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logout,login} from './userSlice';
import { auth,db } from './firebase';
import { updateDoc, doc } from "firebase/firestore";
import { useHistory } from 'react-router-dom';
import {selectUser} from './userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HttpsIcon from '@mui/icons-material/Https';
import SettingsIcon from '@mui/icons-material/Settings';
import Setting from './setting/Setting';
import DeleteUser from './setting/DeleteUser'
import Loginn from './Loginn';
import images2 from "../image/logos.png";


const UseNav = () => {
  const [show, setShow] = useState('')

  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  const history = useHistory()
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
        displayName :userAuth.displayName,
        isOnline:true
        }))
      }else{
        dispatch(logout({
          isOnline:false
        }))
      }
    })
    
  }, [])

  const handalLogout = async() => {
    dispatch(logout());
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    auth.signOut()
    history.push('/')
  }
  
  return (
    <>
    <Header>
    <div class="logoS"><img src={images2}/></div>
     <p style={{paddingLeft:"15px"}}>Free Membership</p>
    </Header>
    <NavBar>
        <Nav>
        <Link to="/">Home</Link>
        {
        !user ? 
        <>
        <Link to="/about">About</Link>
        <Link><span style={{position:'absolute',opacity:0}}><Loginn/></span>Register</Link>
        <Link><span style={{position:'absolute',opacity:0}}><Loginn/></span>Login</Link>
        </>
        :
        <>
        <Link to="/">Matches</Link>
        <Link to="/my-profile">Account</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/search">Search</Link>
        <Link to="/Filter">Filter</Link>
        </>
        } 
        
        </Nav>
        <Avtars>
          {
            ! user ? 
            <a href="https://api.whatsapp.com/send?phone=8898699492&amp;text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.">Help »</a>
            :
            <>
            <Link className='name' onClick={()=>setShow(!show)}>{user.displayName}</Link>
            <Link style={{textTransform: 'capitalize'}} onClick={()=>setShow(!show)}>
            <button><Avatar style={{textTransform: 'capitalize'}}>{user.displayName?.[0]}</Avatar></button>
            <ArrowDropDownIcon/>
            </Link>
            {show ? 
            <Dash>   
            <li to="/my-profile"><AccountCircleIcon/><Link to="/my-profile">My Profile</Link></li>
            <li onClick={handalLogout}><LogoutIcon/><Link>Logout</Link></li>
            <li style={{display:"flex",cursor:'pointer'}}><SettingsIcon/><Setting/></li>
            <li style={{display:"flex",cursor:'pointer'}}><HttpsIcon/><DeleteUser/></li>
           </Dash>
           : ""
            }
           
            </>
          }
        </Avtars>
      </NavBar>
    
    </>
  )
}

export default UseNav;
const Header = styled.div`
display:flex;
justify-content:space-around;
margin:12px;
> h1 {
    font-family:romon
}
`
const NavBar = styled.div`
padding: 8px;
display: flex;
justify-content: space-around;
background-color:#FFA500;
`;
const Nav = styled.div`
> a {
  color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 14px;
    line-height:50px;
    font-weight:600;
    

}
@media (max-width:500px) {
  a {padding:5px;
  }
}`
const Avtars = styled.div`
> a {
  color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height:50px;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  > a > button {
    margin:4px;
    border:none;
    border-radius:50%;
  }
  @media (max-width:500px) {
    .name {
      display:none;
    }
  }
`
const Dash = styled.div`
z-index:1;
display:flex;
justify-content:start;
flex-wrap:wrap;
background-color:#fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
border-radius:2px;
position:absolute;
width:340px;
height:115px;
padding-top:16px;
margin-left: -145px;
margin-top: 8px;
> li {
    width: 149px;
    margin: 10px;
    text-decoration: none;
    list-style: none;
    color: gray;
}
> li >a {
  text-decoration: none;
    list-style: none;
    color: gray;
}
> .MuiSvgIcon-root {
  width: 20px;
  color: gray;
  margin:5px;
}
@media (max-width:500px) {
z-index:1;
display:flex;
justify-content:start;
flex-direction:column;
flex-wrap:wrap;
background-color:#fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
border-radius:2px;
position:absolute;
width:170px;
height:200px;
margin-left:-100px;
}

`
