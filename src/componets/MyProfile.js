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
import { toast } from "react-toastify";
import { Avatar } from '@mui/material';
import { storage} from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './MyProfile.css'
import Navbar from "./Nav/Navbar";
import Header from "./Header";

const MyProfile = () => {
  const [img ,setImag ] = useState('')
  const [userDetails, setUserDetails] = useState([]);
  var user = useSelector(selectUser);
  // if else Start
  const [num,setNum] = useState(false)
  const [data ,setData] = useState({maritalStatus:"",birth:"",diet:"",work:"",qaulification:"",collage:"",family:"",members:"",city:"",state:"",religion:"",tounge:""})
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
  const updateDataAll = ()=> {
    db.collection("users").doc(user.uid).update({
      birth:data.birth,
      city:data.city,
      state:data.state,
      diet:data.diet,
      family:data.family,
      maritalStatus:data.maritalStatus,
      collage:data.collage,
      qaulification:data.qaulification,
      religion:data.religion,
      tounge:data.tounge,
      work:data.work,
    })
    setShow(false)
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
            <li>{userDetails.height}</li>
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
<<<<<<< HEAD
                    <img src="fancyline.png" alt=""/>
=======
                    <img src={images}/>
>>>>>>> 3559bd36a63ec8f50bcd0bb3273b1f97a6d7e294
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
                       <li><input name="birth" type="date" defaultValue={dateMDY} value={data.birth} onChange={handleChange}/></li>
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
                       <li>{userDetails.maritalStatus}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="maritalStatus" defaultValue={userDetails.maritalStatus} value={data.maritalStatus} onChange={handleChange}/></li>
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
                       <li>{userDetails.religion}</li>
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
                       <li>{userDetails.tounge}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="tounge" defaultValue={userDetails.tounge} value={data.tounge} onChange={handleChange} /></li>
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
                       <li>{userDetails.diet}</li>
                        <li><button onClick={()=>setShow(true)}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" /></button>
                        </li>
                       </>
                        : 
                       <>
                       <li><input name="diet" defaultValue={userDetails.diet} value={data.diet} onChange={handleChange}/></li>
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
                       <li>{userDetails.work}</li>
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
                       <li>{userDetails.qaulification}</li>
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
                       <li>{userDetails.collage}</li>
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
                       <li>{userDetails.family}</li>
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
                       <li>{userDetails.city}</li>
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
                       <li>{userDetails.state}</li>
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