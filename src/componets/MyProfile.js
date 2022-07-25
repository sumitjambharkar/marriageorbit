import React, {useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { db, auth} from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./userSlice";
import { selectUser } from "./userSlice";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { Avatar } from '@mui/material';
import { storage} from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import images from "../image/bg-border.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './MyProfile.css'
import Navbar from "./Nav/Navbar";
import Header from "./Header";

const style = {
  position: "absolute",
  textAlign:"center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingLeft:2,
  paddingRight:2,
};



const MyProfile = () => {
  const [img ,setImag ] = useState('')
  const [userDetails, setUserDetails] = useState([]);
  const [userFirst, setUserFirst] = useState([]);
  const [userSecand, setUserSecand] = useState([]);
  var user = useSelector(selectUser);
  // if else Start
  const [num,setNum] = useState(false)
  const [data ,setData] = useState({marital:"",birth:"",diet:"",work:"",qaulification:"",collage:"",family:"",members:"",city:"",state:""})
  const [show ,setShow] = useState(false)
  // if else Close 
  const dispatch = useDispatch();
  const [number, setNumber] = useState()
  const [userN, setUserN] = useState()
 
  
  useEffect(()=>{
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUserN(docSnap.data());
      }
    });
    if(img){
      const uploadImg =async()=>{
        const imgRef = ref(storage,`avatar/${new Date().getTime()} - ${img.name}`)
        try{
        const snap =await uploadBytes(imgRef,img)
        console.log(snap.ref.fullPath)
        const url = await  getDownloadURL(ref(storage,snap.ref.fullPath))
        await updateDoc(doc(db,"users",auth.currentUser.uid),{
          image:url,
          avatarPath:snap.ref.fullPath
        })
        console.log(url)
        setImag("")
        }
        catch(err){
          console.log(err.message);
        }
      }
      uploadImg()
    }

  },[img])

  let x = userDetails.birth
  let date = new Date(x)
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  const updateNum =(e)=> {
    e.preventDefault();
    db.collection("users").doc(user.uid).update({
      number
    })
    setNum(false)
    toast.success("update Success")
  }

  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})

  }
  const firstUpdate = () => {
    db.collection("users").doc(user.uid).update({birth:data.birth})

  }
  const secondUpdate = ()=> {
    db.collection("users").doc(user.uid).collection("userdata1").update({
      city:data.city,
      state:data.state,
      diet:data.diet,
      family:data.family,
      height: data.height,
      maritalStatus:data.marital,
      
    })

  }
  const thirdUpdate = () => {
    db.collection("users").doc(user.uid).collection("userdata2").update({
      collage:data.collage,
      qaulification:data.qaulification,
      religion:data.religion,
      tounge:data.tounge,
      work:data.work,

    })

  }
  const updateDataAll = ()=> {
    console.log({...data});
    // setTimeout(() => {
    //   firstUpdate()
    // }, )
    setTimeout(() => {
       secondUpdate()
    }, )
    // setTimeout(() => {
    //   thirdUpdate()
    // }, )
    setTimeout(() => {
      setShow(false)
    }, )
  }
  
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    if (user.uid) {
      db.collection("users")
        .doc(user.uid).onSnapshot((snapshot) => {
          setUserDetails(snapshot.data());
      });
      db.collection("users")
        .doc(user.uid)
        .collection("userdata1")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserFirst(doc.data());
          });
        });
      db.collection("users")
        .doc(user.uid)
        .collection("userdata2")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserSecand(doc.data());
          });
        })
    }
  }, [user.uid]);
  const Input = styled('input')({
    display: 'none',
  });

  return (
    <>
    <Header/>
      <Navbar/>
      <ProfileSection>
        <ImageSection>
          <CardImage>
          <Avatar src={userDetails.image}   sx={{width:200,height:230,backgroundColor:"#eee",border:"1px solid #ccc",color:"#ccc"}} variant="square"/>
          <label htmlFor="icon-button-file">
        <Input onChange={(e)=>setImag(e.target.files[0])} accept="image/*" id="icon-button-file" type="file" />
        <IconButton style={{display:"flex",fontWeight:"500",color:"white",border:"#FFA500",backgroundColor: "#FFA500",borderRadius:"1px"}} aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
          </CardImage>
          <ImageDetails>
            <h3 style={{ textTransform: "capitalize" }}>
              {userDetails.displayName}
            </h3>
            <hr></hr>

            <li>{calculate_age(new Date(userDetails.birth))} Yrs</li>
            <li>{userFirst.height}</li>
            <li>Indian</li>
            <li>{userDetails.number}<Button onClick={()=>setNum(true)}>
              <Tooltip title="Edit"><EditIcon />
              </Tooltip>
            </Button></li>
            {num ? <li><input type="number" value={number} defaultValue={userDetails.number} onChange={(e)=>setNumber(e.target.value)}/><Button onClick={updateNum}>Update</Button></li> : null}
          </ImageDetails>
        </ImageSection>
      </ProfileSection>
     
      
    <div class="container" style={{justifyContent:'center'}}>
      <div class="bg-colr">
        <div class="row">
            <div class="col-md-12">
                <div class="section1">
                    <h1>Details Of Profile</h1>
                    <img src="fancyline.png"></img>
                </div>
                <div class="section2">
                    <strong>About</strong>
                    <p>I am currently living in uk. I am a smart and dynamic girl who respects her culture very much.
                        I belong to a simple marathi family.</p>
                    <hr></hr>
                </div>

            </div>
        </div>

        <div class="entire">
            <div class="row">
                <div class="col-md-12">
                    <div class="first">
                        <strong>Basic Info</strong>

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info">
                    <li>Date Of Birth</li>
                        {!show? 
                       <>
                       <li>{dateMDY}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="birth" type="date" value={data.birth} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="info">
                        <li>Marrired Status</li>
                        {!show? 
                       <>
                       <li>{userFirst.maritalStatus}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="marital" value={data.marital} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }
                    </div>



                </div>



            </div>


            <div class="row">
                <div class="col-md-12">
                    <div class="first">

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info">
                        <li>Religion</li>
                        {!show? 
                       <>
                       <li>{userSecand.religion}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input  name="religion" value={data.religion} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }

                    </div>

                </div>
                <div class="col-md-6">
                    <div class="info">
                        <li>Mother Tounge</li>
                        {!show? 
                       <>
                       <li>{userSecand.tounge}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="tounge" value={data.tounge} onChange={handleChange} /></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }
                    </div>



                </div>
            </div>


            <hr></hr>


            <div class="row">
                <div class="col-md-12">
                    <div class="first">
                        <strong>Lifestyle And Intrests</strong>

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info">
                        <li>Eating Habbit</li>
                        {!show? 
                       <>
                       <li>{userFirst.diet}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="diet" value={data.diet} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }

                    </div>

                </div>
                <div class="col-md-6">
                    <div class="info">
                        <li>Work</li>
                        {!show? 
                       <>
                       <li>{userSecand.work}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="work" value={data.work} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }
                    </div>



                </div>
            </div>


            <hr></hr>


            <div class="row">
                <div class="col-md-12">
                    <div class="first">
                        <strong>Education and profession</strong>

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info">
                        <li>Qualification</li>
                        {!show? 
                       <>
                       <li>{userSecand.qaulification}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="qaulification" value={data.qaulification} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }

                    </div>

                </div>
                <div class="col-md-6">
                    <div class="info">
                        <li>University</li>
                        {!show? 
                       <>
                       <li>{userSecand.collage}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="collage" value={data.collage} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }
                    </div>



                </div>
            </div>

            <hr></hr>


            <div class="row">
                <div class="col-md-12">
                    <div class="first">
                        <strong>Family Details</strong>

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info">
                        <li>Live With Family</li>
                        {!show? 
                       <>
                       <li>{userFirst.family}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="family" value={data.family} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }

                    </div>

                </div>
                <div class="col-md-6">
                    <div class="info">
                        <li>Members</li>
                        {!show? 
                       <>
                       <li>No Required</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="members" value={data.members} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }

                    </div>



                </div>
            </div>

            <hr></hr>


            <div class="row">
                <div class="col-md-12">
                    <div class="first">
                        <strong>Location</strong>

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info">
                        <li>Live In </li>
                        {!show? 
                       <>
                       <li>{userFirst.city}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="city" value={data.city} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }


                    </div>

                </div>
                <div class="col-md-6">
                    <div class="info">
                        <li>State</li>
                        {!show? 
                       <>
                       <li>{userFirst.state}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="state" value={data.state} onChange={handleChange}/></li>
                        <li><button><img src="https://img.icons8.com/windows/30/000000/assessments.png"/></button>
                        </li>
                       </>
                       }
                    </div>



                </div>

                <div class="col-md-12">
                    <div class="update">
                        <button onClick={updateDataAll}>Update</button>
                    </div>
                </div>

            </div>

        </div>
        </div>
    </div>


      <Footer />
    </>
  );
};

export default MyProfile;

const ProfileSection = styled.div`
  margin-top:4px;
  display: flex;
  justify-content: center;
`;
const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const CardImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding:12px; */
  margin: 12px;
  > img {
    width: 200px;
  }
`;
const ImageDetails = styled.div`
  border:1px solid #ccc;
  background-color: #eee;
  margin: 12px;
  width: 450px;
  padding: 12px;
  padding-right: 80px;
  color:black;
  > li {
    list-style: none;
    margin: 6px;
  }
  > li > .MuiSvgIcon-root {
    margin-left: 24px;
  }
  > li Button {
    color:black;
  }
  @media (max-width: 600px) {
    width: 230px;
  }
`;
const AllDetails = styled.div`
display:flex;
justify-content:start;
padding:30px;
background-color:white;`
const Details = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
background-color:#eee;
width: 70%;
>h1 {
  font-size: 1.8rem;
    font-weight: bold;
    font-family: auto;
    color:#FFA500;
    margin-top: 15px;
}
@media (max-width:600px) {
    width:100%;
    padding:0;
  }
> h1 {
  text-align:center;
}`

const Agent = styled.div`
display:flex;
width: 100%;
`
const First = styled.div`
display: flex;
justify-content: center;
width: 50%;
padding-left:8px;
margin:4px;
> li {
  list-style:none;
  font-size: 15px;
  color: #666;
  width: 30%;
  
}
`
const Box = styled.div`
padding:24px;
>h3 {
  font-size: 1rem;
    font-weight: 600;
    font-family: auto;
}
`