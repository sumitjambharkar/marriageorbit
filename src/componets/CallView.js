import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import CallIcon from '@mui/icons-material/Call';
import styled from 'styled-components';

export default function SimplePopper({number}) {
    
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Div>
        <button type="button" aria-describedby={id} onClick={handleClick}>
            <CallIcon/></button>
        
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: "1px solid #ffa500", p: 1, bgcolor: 'background.paper' }}>
          Mobile No {number}
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