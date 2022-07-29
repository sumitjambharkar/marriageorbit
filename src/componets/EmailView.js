import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components';


export default function SimplePopper({email}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Div>
        <button type="button" style={{width:"60px",height:"60px",borderRadius:'50%',lineHeight: "50px",color: "#ffa500",fontSize: "18px", border: "1px solid #ffa500"}} aria-describedby={id} onClick={handleClick}><EmailIcon/></button>
        
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          Email ID {email}
        </Box>
      </Popper>
    </Div>
  );
}

const Div = styled.div`
> button {
    width:60px;
    height:60px;
    border-radius:50%;
    line-height: 50px;
    color: #ffa500;
    font-size: 18px;
    border: 1px solid #ffa500;
  
    >.MuiSvgIcon-root {
  font-size:35px;
  color:#FFA500;
}
}
`
