import React, { useState } from "react";
import { signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import { auth, createUserCollecton } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";
import { db } from "./firebase";
import { updateDoc, doc } from "firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { login } from "./userSlice";
import Logo from '../image/nl.png'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingLeft:2,
  paddingRight:2,
};

const Loginn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const [show, setShow] = useState(true);
  const [sign, setSign] = useState(false);
  const [forgot, setForgot] = useState(false);

  const [data, setData] = useState({ email: "", password: "" });

  const [forgotEmail, setFogortEmail] = useState('')

  const [dataName, setDataName] = useState({
    displayName: "",
    profile:"",
    email: "",
    number: "",
    birth: "",
    gender: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showUnderLine, setShowUnderLine] = useState(false)

  const handleClose = () => {
    setOpen(false);
    setForgot(false);
  };

  const handalForgot = () => {
    setForgot(true);
    setShow(false);
  };

  const handalLogin = () => {
    setSign(true);
    setShow(false);
    setForgot(false);
  };

  const handleOpen = () => {
    setShow(true);
    setOpen(true);
    setSign(false);
  };

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handalChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handalSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      try {
        // const {result} = await auth.signInWithEmailAndPassword(email,password)
        // dispatch(login({
        //   email:email,
        //   password:password,
        // }))
        const result = await signInWithEmailAndPassword(auth, email, password);

        await updateDoc(doc(db, "users", result.user.uid), {
          isOnline: true,
        });
        toast.success("Login Success", result);
        console.log(result);
        history.push("/");
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, "Login failed");
      }
    }
    setData("");
  };

  const handalSign = async (e) => {
    e.preventDefault();
    const { email, displayName, birth, number, password, gender,profile } = dataName;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
        { displayName, number }
      );
      console.log(user);
      await user.updateProfile({
        displayName: displayName,
        phoneNumber: user.number,
        isOnline: true,
      });
      await createUserCollecton(user, { displayName, birth, number, gender,profile });
      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          phoneNumber: user.number,
          isOnline: true,
        })
      );
      toast.success("Register Successfull");
      history.push("/profile");
    } catch (err) {
      console.log(err);
      toast.error("error", err.message);
      history.push("/");
    }
    setDataName("");
  };
  const handalChangeSign = (e) => {
    setDataName({ ...dataName, [e.target.name]: e.target.value });
  };

  const sendEmail =async(e)=>{
    e.preventDefault()
    sendPasswordResetEmail(auth,forgotEmail)
    .then(res=>{
      toast.success("Please check your email...",res)
      history.push('/')
    })
    .catch(err=>{
      toast.error("email not found",err)
    })
    
    
 }
 const handleMouseEnter = e => {
  e.target.style.border = "1px solid #FFA500"
  e.target.style.borderRadius = "24px"
  setShowUnderLine(true)
}
const handleMouseLeave = e => {
  e.target.style.border = "none"
  setShowUnderLine(false)
}
  
  return (
    
    <div >
      <Button style={{height:"40px",width:"80px" ,color: "#FFA500",border:"1px solid #FFA500",borderradius: '24px',textTransform: 'capitalize',fontSize: "18px",
        padding:"0 20px" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleOpen}>
        Login
      </Button>
      <Modal
        open={open}
        // shouldCloseOnOverlayClick={false}
        // onClose={handleOpen}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <> */}
              {/* <> */}
                {show ? (
                  <>
                    <div>
                      <FormC>
                        <form>
                          <MainDiv>
                            <div style={{ marginLeft: "256px", marginBottom: "4px"}}>
                              <Link>
                                <CloseIcon onClick={handleClose} />
                              </Link>
                            </div>
                            <LogoImage>
                    <img className="App-logo" src={Logo} alt="logo" />
                  </LogoImage>
                            <h5 style={{ marginBottom: "24px" }}>
                              Welcome back ! Please Login
                            </h5>
                            <Label>
                              <label>Email ID</label>
                            </Label>
                            <Input>
                              <input
                                name="email"
                                required
                                autoComplete="off"
                                placeholder="Email Id"
                                type="email"
                                value={data.email}
                                onChange={handalChange}
                              />
                            </Input>
                            <Label>
                              <label>Password</label>
                            </Label>
                            <div></div>
                            <Input>
                              <input
                                name="password"
                                required
                                autoComplete="off"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                value={data.password}
                                onChange={handalChange}
                              />
                              <Button
                                style={{ marginLeft: "-60px", color: "black" }}
                              >
                                {showPassword ? (
                                  <Visibility onClick={handleClick} />
                                ) : (
                                  <VisibilityOff onClick={handleClick} />
                                )}
                              </Button>
                            </Input>
                            <Forgot>
                              <Div>
                                <input className="checkbox" type="checkbox" />
                                <span>Stay Login</span>
                              </Div>
                              <Div>
                                <Link onClick={handalForgot}>
                                  <span>Forgot Password ?</span>
                                </Link>
                              </Div>
                            </Forgot>
                            <Div>
                              <button
                                onClick={handalSubmit}
                                type="submit"
                                className="button"
                              >
                                Login
                              </button>
                            </Div>
                            <Div>
                              <button onClick={handalLogin} className="button">
                                Register
                              </button>
                            </Div>
                            <Forgot>
                              <Div>
                                <p>New Shaadi ?</p>
                              </Div>
                              <Div>
                                <p>
                                  <Link onClick={handalLogin}>signup</Link>
                                </p>
                              </Div>
                            </Forgot>
                          </MainDiv>
                        </form>
                      </FormC>
                    </div>
                  </>
                ) : (
                  ""
                )}
              {/* </> */}
              {/* <> */}
                {sign ? (
                  <div>
                    <form method="post" onSubmit={handalSign}>
                      <FormC>
                        <MainDiv>
                          <div
                            style={{ marginLeft: "256px", marginBottom: "4px" }}
                          >
                            <Link onClick={handleClose}>
                              <CloseIcon />
                            </Link>
                          </div>
                          <h5 style={{ marginBottom: "10px" }}>
                            Let's set up your account,<br></br> while we find
                            Matches for you!
                          </h5>
                          <Label>
                            <label>Profile for</label>
                          </Label>
                          <select
                            autoComplete="off"
                            required
                            name="profile"
                            onChange={handalChangeSign}
                            value={dataName.profile}
                          >
                            <option>Select</option>
                            <option>Son</option>
                            <option>Self</option>
                            <option>Doughter</option>
                            <option>Sister</option>
                            <option>Brother</option>
                          </select>
                          <Label>
                            <label>Full Name</label>
                          </Label>
                          <Input>
                            <input
                              name="displayName"
                              type="text"
                              required
                              autoComplete="off"
                              placeholder="Full Name"
                              value={dataName.displayName}
                              onChange={handalChangeSign}
                            />
                          </Input>
                          <Label>
                            <label>Gender</label>
                          </Label>
                          <select
                            autoComplete="off"
                            required
                            name="gender"
                            onChange={handalChangeSign}
                            value={dataName.gender}
                          >
                            <option>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                          <Label>
                            <label>Birth Date</label>
                          </Label>
                          <Input>
                            <input
                              name="birth"
                              type="date"
                              required
                              autoComplete="off"
                              value={dataName.birth}
                              onChange={handalChangeSign}
                            />
                          </Input>
                          <Label>
                            <label>Mobile No.</label>
                          </Label>
                          <Input>
                            <input
                              name="number"
                              type="number"
                              required
                              autoComplete="off"
                              placeholder="Mobile No"
                              value={dataName.number}
                              onChange={handalChangeSign}
                            />
                          </Input>
                          <Label>
                            <label>Email ID</label>
                          </Label>
                          <Input>
                            <input
                              name="email"
                              type="email"
                              required
                              autoComplete="off"
                              placeholder="Email Id"
                              value={dataName.email}
                              onChange={handalChangeSign}
                            />
                          </Input>
                          <Label>
                            <label>Password</label>
                          </Label>
                          <div></div>
                          <Input>
                            <input
                              name="password"
                              type={showPassword ? "text" : "password"}
                              required
                              autoComplete="off"
                              placeholder="Password"
                              value={dataName.password}
                              onChange={handalChangeSign}
                            />
                            <Button
                              style={{ marginLeft: "-60px", color: "black" }}
                            >
                              {showPassword ? (
                                <Visibility onClick={handleClick} />
                              ) : (
                                <VisibilityOff onClick={handleClick} />
                              )}
                            </Button>
                          </Input>
                          <Div>
                            <button type="submit" className="button">
                              Register
                            </button>
                          </Div>
                          <Forgot>
                            <Div>
                              <Link onClick={handleOpen}>
                                <p>Already a Member? Login</p>
                              </Link>
                            </Div>
                          </Forgot>
                        </MainDiv>
                      </FormC>
                    </form>
                  </div>
                ) : (
                  ""
                )}

                {forgot ? (
                  // <>
                    <FormC>
                    <ForgetDiv>
                    <div style={{ marginLeft: "256px" }}>
                              <Link>
                                <CloseIcon onClick={handleClose} />
                              </Link>
                            </div>
                      <h4>Forget Password?</h4>
                      <p></p>
                      <hr></hr>
                      <label>Email ID</label>
                      <p></p>
                      <input value={forgotEmail} onChange={(e)=>setFogortEmail(e.target.value)} placeholder="Enter Your Email Id"/>
                      <p></p>
                      <button onClick={sendEmail} >Send Email</button>
                      <p></p>
                      <p>Not yet registered ?</p>
                      <p><Link onClick={handalLogin}>Free to Signup</Link></p>
                    </ForgetDiv>
                </FormC>
                  // </>
                ) : (
                  ""
                )}
              {/* </> */}
            {/* </> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default Loginn;

const FormC = styled.div``;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  margin:6px;

  .App-logo {

width:65px;
margin-bottom: 15px;
}

@media (prefers-reduced-motion: no-preference) {
.App-logo {
  animation: App-logo-spin infinite 1s linear;
}
}
@keyframes App-logo-spin {
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
}
`;
const MainDiv = styled.div`
    align-items: center;
    margin-left: 10px;
    /* display: flex;
    justify-content: center;
    flex-direction: column; */
  div > a {
    text-decoration: none;
    color: black;
  }
  > select {
    width: 270px;
    height:35px;
    margin-bottom: 8px;
    padding-left: 5px;
    border: 1px solid #ffa500;
    outline: none;
    font-size:14px;
  }
`;

const Label = styled.div`
  > label {
    font-size:16px;
    font-weight: 400;
   
  }
`;
const Input = styled.div`
  > input {
    width: 270px;
    height:35px;
    border: 1px solid #ffa500;
    border-radius: 2px;
    font-size:14px;
    padding-left: 5px;
  }
  > input:focus {
    outline: none;
  }
`;
const Forgot = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 21px;
`;
const Div = styled.div`
  > p > a {
    text-decoration: none;
    color: black;
  }
  .checkbox {
    margin-right: 7px;
  }
  .button {
    width: 270px;
    height: 40px;
    margin-top: 8px;
    background-color: #ffa500;
    border: 1px solid #ffa500;
    border-radius: 4px;
    color: white;
  }
  .button > a {
    text-decoration: none;
    color: white;
  }
`;

const ForgetDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
> p {
    text-align: center;
    
}
> p  > a {
    text-decoration:none;
}
> input {
    padding:6px;
    width: 270px;
    height:35px;
    border: 1px solid #FFA500;
    border-radius: 2px;
}
> input:focus {
  outline:none;
}
> button {
    width: 270px;
    height:35px;
    margin-top: 8px;
    background-color:#FFA500;
    border: 1px solid #FFA500;
    border-radius: 4px;
    color:white;
}
>button > a {
    text-decoration: none;
    color:white;
}
 
`;
