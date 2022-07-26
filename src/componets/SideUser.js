import styled from '@emotion/styled';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import {Helmet} from "react-helmet";

const SideUser = ({name,image,id}) => {
    const user = useSelector(selectUser)
    
  return (
    <>
    <Helmet>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="robots" content="follow,index"/>
      <meta name="description" content="Pagekeyword"/>
      <meta name="keywords" content="Pagekeywords"/>
      <meta name="author" content="Marriageorbit"/>
      <meta property="og:url" content="PageURL.html"/>
      <meta property="og:type" content="products" />
      <meta property="og:title" content="Title-Name"/>
      <meta property="og:image" content="Pageimagelink.jpg" />
      <meta property="og:site_name" content="Who We are "/>
   
    <link rel="canonical" href="" />
 
      <title></title>
      
      <link rel="icon" href="imagelink.png" sizes="16x16" type="image/png"></link>
      </Helmet>
     <Header>
      <Image>
          <img style={{width:"35px",borderRadius:"50px",height:"35px"}} src={image} />
          <p>{name}</p>
      </Image>
      <UserStatus>
          {user.isOnline ? <Online/> :<Offline/>}
      </UserStatus>
     </Header>
    </>
  )
}

export default SideUser;
const Header = styled.div`
display:flex`;
const UserStatus = styled.div``
const Online = styled(UserStatus)`
width:40px;
height:40px;
border-radius:50%;`
const Offline = styled(UserStatus)`
width:40px;
height:40px;
border-radius:50%;
background-color:green;`
const Image = styled.div``