import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import displayRazorpay from './Payment';
import { Close } from '@mui/icons-material';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:320,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  
};

const New =({user})=> {
  const main =()=>{
    displayRazorpay()
    setTimeout(() => {
      handleClose()
    },500);
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
 
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <div>
      <Button style={{color:"white"}} onClick={handleOpen}>Send Message</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
            <span onClick={handleClose} style={{float:"right",fontWeight:"700",cursor:"pointer"}}><Close/></span>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <h2 style={{textAlign:"center"}}>Contact Details</h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <h6 style={{textAlign:"center"}}>Email ID : {user.email}</h6>
           <h5 style={{textAlign:"center",color:"#FFA500"}}>Become a Premium Member @ Just Rs.199/-</h5>
           <h6 style={{textAlign:"center"}}>Premium Benefits</h6>
           <Typography style={{display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center"}} >
           <p>Access Contact Details of 20 Profiles (Only Indian)</p>
           <p>Can Send 50 Personalise Messages</p>
           <p>View Details of Perfect E-Matches</p>
           <p>Membership Duration - 10 Days</p>
           <Button style={{color:"white",backgroundColor:"#FFA500"}}
            onClick={main}>Pay Now</Button>
           </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default New;
