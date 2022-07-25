import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import { db } from './firebase';
import { Avatar } from '@mui/material';
import { useSelector } from "react-redux";
import {selectUser} from './userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HttpsIcon from '@mui/icons-material/Https';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from 'react-redux';
import {logout,login} from './userSlice';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';
import { updateDoc, doc } from "firebase/firestore";
import New from './New';

const PayHome = () => {

  const [show, setShow] = useState('')
  const [isGender, setIsGender] = useState('')
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
        }))
      }else{
        dispatch(logout())
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

  function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const [personData, setPersonData] = useState([])
  useEffect(() => {
    if(user.uid){
      db.collection("users")
      .doc(user.uid)
      .onSnapshot((snapshot) => {
        setIsGender(snapshot.data());
      });
    }
    db.collection("users").onSnapshot(snapshot => {
      setPersonData(snapshot.docs.map((doc) => ({
        id: doc.id,
        data : doc.data()
      })))
    })  
    
    return () => {
      
    }
  }, [])
  
  return (
    <>
    <Header>
     <h1>TruShaadi.com</h1>
     <h6>Free Membership</h6>
    </Header>
    <NavBar>
        <Nav>
        <Link to="/">HOME</Link>
        {
        !user ? 
        <>
        <Link to="/about">ABOUT</Link>
        <Link to="/signup">REGISTER</Link>
        <Link to="/login">LOGIN</Link>
        </>
        :
        <>
        <Link to="/">MATCHES</Link>
        <Link to="/my-profile">ACCOUNT</Link>
        </>
        } 
        
        </Nav>
        <Avtars>
          {
            ! user ? 
            <Link>Help</Link>
            :
            <>
            <Link className='name' onClick={()=>setShow(!show)}>{user.displayName}</Link>
            <Link style={{textTransform: 'capitalize'}}  onClick={()=>setShow(!show)}>
            <button><Avatar style={{textTransform: 'capitalize'}}>{user.displayName?.[0]}</Avatar></button>
            <ArrowDropDownIcon/>
            </Link>
            {show ? 
            <Dash>
            <li to="/my-profile"><AccountCircleIcon/><Link to="/my-profile">My Profile</Link></li>
            <li onClick={handalLogout}><LogoutIcon/><Link>Logout</Link></li>
            <li to="/my-profile"><SettingsIcon/><Link to="/my-account">Account Setting</Link></li>
            <li><HttpsIcon/><Link to="my-policys">Privacy Options</Link></li>
           </Dash>
           : ""
            }
            
            </>
          }
        </Avtars>
      </NavBar>
      <h3 style={{textAlign:"center",padding:"40px",backgroundColor:" #ebdcdc"}}>Members Looking For Me 418</h3>
      <Section>
      {personData.map((doc)=>{
        return (
          <>
          {isGender.gender !== doc.data.gender ? 
          <> {doc.data.displayName===user.displayName ? 
            null :
            <Card>
            <Avatar src={doc.data.image} sx={{width:224,height:250}} variant="square"/>
            <span style={{textTransform: 'capitalize'}}>{doc.data.displayName}</span>
            <span style={{textTransform: 'capitalize'}}>{doc.data.gender}</span>
            <span>{calculate_age(new Date(doc.data.birth))}</span>
            <span style={{color:"white",backgroundColor:"#FFA500",textAlign:"center"}}><New user={user}/></span>
            </Card>
            }
            </> : null
          }
          </>
        )
      })}
      </Section>
      <Footer/>
    </>
  )
}

export default PayHome;

const Header = styled.div`
display:flex;
justify-content:space-around;
margin:12px;
> h1 {
    font-family:romon
}
`
const Section = styled.div`
padding: 46px;
background-color: #ebdcdc;
display: flex;
justify-content:center;
flex-wrap: wrap;
background-color:#ebdcdc;`
const Card =styled.div`
> img {
  width:224px;
}
display:flex;
justify-content: start;
flex-direction: column;
padding:12px;
margin:6px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 2px;
width:247px;
background-color:white;
`

const NavBar = styled.div`
display: flex;
padding: 8px;
justify-content: space-around;
background-color:#FFA500;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
`;
const Nav = styled.div`
> a {
  color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 14px;
    line-height:50px;
    font-weight: 600;
  }
  @media (max-width:500px) {
  a {padding:5px;
     }
  }
  `
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
      display: none;
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
margin-left:-130px;
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