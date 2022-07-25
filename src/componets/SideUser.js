import styled from '@emotion/styled';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

const SideUser = ({name,image,id}) => {
    const user = useSelector(selectUser)
    
  return (
    <>
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