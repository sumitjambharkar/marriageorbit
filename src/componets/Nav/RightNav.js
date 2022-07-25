import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logout,login} from '../userSlice';
import { auth,db } from '../firebase';
import { updateDoc, doc } from "firebase/firestore";
import { useHistory } from 'react-router-dom';
import {selectUser} from '../userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HttpsIcon from '@mui/icons-material/Https';
import SettingsIcon from '@mui/icons-material/Settings';
import Setting from '../setting/Setting';
import DeleteUser from '../setting/DeleteUser'
import Loginn from '../Loginn';

const Nav = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  line-height: 64px;
  ul {
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-left:0;
  }
  a {
    color: white;
      text-decoration: none;
      padding: 15px;
      font-size: 14px;
      line-height:50px;
      font-weight:600;  
  }
  .name {
    display:none;
  }
  .logout {
    display:none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    z-index: 1;
    height:auto;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    ul {
    flex-flow: column nowrap;
    background-color: #0D2538;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    margin-bottom:none;
    }
    li {
      color: #fff;
      height: 60px;
      border-bottom: 1px solid #ffa500;
    }
    .name {
      display: block;
      background-color: white;
      color: black;
      height: 150px;
      padding: 10px;

    }

    .use{
      display: inline-grid;
      width:300px;
      text-align: center;
      justify-content: center;
    >button{
      height: 32px;
    margin-top: 10px;
    line-height: 32px;
    font-size: 15px;
    text-align: center;
    width: 131px;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid #ffa500;
    }
  }

    .user{
      display: flex;
      border-bottom: 1px solid #ccc;
      height: 48px;
      >span{  
        display: inline-grid;
        margin-left: 15px;
        margin-top: -18px;
      }
      >span a{
        margin-left: -14px;
        font-size: 16px;
        margin-top: -70px;
      }
      >span p{
        font-size: 13px;
      }
    }
    .name a {
      color:black;
    }
    .logout {
      display: block;
    }
    .hide {
      display:none;
    }
   
  }
`

// const Dash = styled.div`
// z-index:1;
// display:flex;
// justify-content:start;
// flex-wrap:wrap;
// background-color:#fff;
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
// border-radius:2px;
// position:absolute;
// width:340px;
// padding-top:16px;
// margin-left: -145px;
// margin-top: 8px;
// > li {
//     width: 149px;
//     margin: 10px;
//     text-decoration: none;
//     list-style: none;
//     color: gray;
// }
// > li >a {
//   text-decoration: none;
//     list-style: none;
//     color: gray;
// }
// > .MuiSvgIcon-root {
//   width: 20px;
//   color: gray;
//   margin:5px;
// }
// @media (max-width:500px) {
// z-index:1;
// display:flex;
// justify-content:start;
// flex-direction:column;
// flex-wrap:wrap;
// background-color:#fff;
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
// border-radius:2px;
// position:absolute;
// width:170px;
// height:200px;
// margin-left:-100px;
// }

// `
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
`
const Drop = styled.div`
   position:absolute;
   justify-content:start;
   display:flex;
  width:300px;
  margin-left:-134px;
  z-index:1;
  height:100px;
  background-color:#fff;
  box-shadow: 5px 5px 5px #0008;
  flex-wrap: wrap;
  justify-content: center;
>span {
  width:150px;
  line-height: 46px;
  padding-left: 10px;
  color:grey;
  }
  > span a {
    color: gray;
    font-weight: inherit;
    font-size: 17px;
  }
`

const RightNav = ({ open }) => {

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
    <div className='container'>
    <Nav open={open}>
      {!user ?
      <>
      <ul>
      <li><Link to="/">Home</Link></li>
       <li><Link to="/">Login</Link></li>
       <li><Link to="/my-profile">Sing Up</Link></li>
       <li><Link to="/chat">About</Link></li>
      </ul>
      <ul>
      <li><Link to="/myphoto">Help</Link></li>
      </ul>
      </>
       :
       <>
       <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/">Matches</Link></li>
       <li><Link to="/my-profile">Account</Link></li>
       <li><Link to="/chat">Chat</Link></li>
       <li><Link to="/search">Search</Link></li>
       <li><Link to="/myphoto">My Photo</Link></li>
       <li onClick={handalLogout} className='logout'><Link>Logout</Link></li>
       </ul>
       <ul>
       <li className='hide'>
       <Avtars>
       <Link onClick={()=>setShow(!show)}>{user.displayName}</Link>
            <Link style={{textTransform: 'capitalize'}} onClick={()=>setShow(!show)}>
            <button><Avatar style={{textTransform: 'capitalize'}}>{user.displayName?.[0]}</Avatar></button>
            <ArrowDropDownIcon/>
            </Link>
            {show ? <>
       <Drop>
              <span><Link to="/my-profile"><AccountCircleIcon/> My Profile</Link></span>
              <span onClick={handalLogout}><LogoutIcon/>Logout</span>
              <span style={{display:"flex",alignItems:"center"}}><SettingsIcon/><Setting/></span>
              <span style={{display:"flex",alignItems:"center"}}><HttpsIcon/><DeleteUser/></span>
       </Drop>
       </>
       :""}
       </Avtars> 
       </li>
       <li className='name'>
        <div className='user'>
        <Avatar  style={{textTransform: 'capitalize'}}>{user.displayName?.[0]}</Avatar>
        <span>
        <p >Welcome</p>
        <a  style={{textTransform: 'capitalize'}}>{user.displayName}</a>
        </span>
        </div>
    <div className='use'>
    <span style={{fontsize:"18px",height:"25px",fontWeight:"bold",marginBottom:"4px"}}>FREE Member</span>
    <button >Upgrade Now</button>
    </div>
       </li>
       </ul>
       </>
      }
    </Nav>
    </div>
    
    </>

  
  )
}

export default RightNav