import UploadFileIcon from '@mui/icons-material/UploadFile';
import {Helmet} from "react-helmet";
import ScrollArea from 'react-scrollbar';
import { Avatar, Container } from '@mui/material';
import { auth, db } from '../firebase';
import React, {useEffect, useState } from "react";
import { storage} from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { selectUser } from "../userSlice";
import { useSelector } from 'react-redux';
import Navbar from '../Nav/Navbar';
import Header from '../Header';

function MyPhoto() {
  
  var user = useSelector(selectUser);
  const [card, setCard] = useState([])
  const [img ,setImag ] = useState('')
  const [userN, setUserN] = useState()
  const [profile,setProfile] = useState([])

  useEffect(() => {
    db.collection("users")
        .doc(user.uid).onSnapshot((snapshot) => {
          setProfile(snapshot.data());
      });
  
  }, [])
  

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

  useEffect(() => {
    db.collection("card").onSnapshot(snapshot=>(
      setCard(snapshot.docs.map((doc)=>(
        {data:doc.data()}
      )))
    ))
  }, [])
  
  return (
      <>
      <Helmet>
      <meta charset="utf-8"/>
  <meta name="robots" content="follow,index"/>
  <meta http-equiv="content-language" content="en"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="description" content="On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity. Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession."/>

      <meta name="keywords" content="Matrimony services in andheri, matchmaking services in andheri, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in andheri Brides, matchmaking services in andheri, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in mulund, Online matchmaking Services,Indian single girls in ,girls for marriage in mahim
      lifepartner for wedding in Andheri.get girlfriend for marriage in sion.diffrent casts of girls for marriage in andheri.
      services of matrimony for mens in andheri, Matrimonial websites to find girls, matrimonials, couples girls and boys and girls matchmaking companies in mahalaxmi, Brides, matchmaking services in andheri, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in jogeshwari, Online matchmaking Services,Indian single boys and girls in kurla,boys and girls for marriage in mahalaxmi
      lifepartner for wedding in andheri.get boyfriend for marriage in andheri.diffrent casts of boys and girls for marriage in andheri.
      hindu girls and boys and girls for marriage."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/myphoto"/>
      <meta property="og:type" content="Matrimonial Matchmaking Service In India" />
      <meta property="og:title" content="My Photo | Best matchmaking services in Juhu" />
      <meta property="og:image" content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png" />
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/myphoto" />
 
      <title>My Photo | Best matchmaking services in Juhu</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 

      </Helmet>
      <Header/>
    <Navbar/>

        <div className="con mt-5">
          <div className='container cono'>
            <div className='row'>
              <div className='col-md-11 sm-12 mt-5'>
                <div className="photo mt-4">
                  <div className='row' width="90%">
                  
                    <div className="col-md-3">
                      <div className="img mt-5">
                        <img src={profile ? profile.image : null} alt=""/>
                      </div>
                    </div>

                    <div className="col-md-9">

                      <div className="row mt-4">
                        <div className="text">
                          <strong>Add your photo and</strong>
                          <h2>get 5 times more responses!</h2>
                        </div>
                      </div>

                      <div className="row text-center mt-5">
                        <div className="col-md-5">
                          <div className="textt">
                        <input onChange={(e)=>setImag(e.target.files[0])} type="file"/>
                        <a><UploadFileIcon/>Uplod</a>
                          </div>
                        </div>

                        <div className="col-md-1">
                          <strong>OR</strong>
                        </div>

                        <div className="col-md-5">
                          <div className="textt">
                            <a>Photo at</a>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-5">
                      <div className=" col-md-12  textta">
                        <p>Note : Only Image formats allowed. Image size should be upto 10MB</p>
                       </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='container'>
    <div className='row mt-5 mb-5'>
   {card.map((ele)=>(
    <>
     <div className='col-md-3'>
     <div className='pic'>
     <img src={ele.data.image} alt=''/>
      <div className='pic1'>
       <span>{ele.data.displayName}</span>
       <p>{ele.data.city}</p>
       <p>{ele.data.age}</p>
      </div>
     </div>
     </div>
    </>
   ))}
    </div>
  </div>

  <Container>
        <h1 style={{textAlign:"center",fontSize:"24px", fontWeight:600, marginTop:"25px"}}>We Are Available In Several Locations</h1>
    <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{height:100, color:"#666666", marginBottom:"25px",padding:"15px", border:"1px solid #ffa500"}}
            > 
<p>	online meeting matrimonial companies in Mumbai.	</p>
<p>	best matchmaking services in Indore.	</p>
<p>	boys lifepartner providing matrimonial websites in New Delhi.	</p>
<p>	top 10 matrimony matrimonial services in Kolkata.	</p>
<p>	top 10 matrimony matrimonial websites in Rajasthan.	</p>
<p>	boys lifepartner providing matchmaking apps in Kolkata.	</p>
<p>	upcoming matchmaking services in Ahmedabad.	</p>
<p>	online dating matchmaking websites in New Delhi.	</p>
<p>	newly launched matrimonial services in Hyderabad.	</p>
<p>	trusted matchmaking websites in Mumbai.	</p>
<p>	online meeting matchmaking companies in Kolkata.	</p>
<p>	newly launched matchmaking websites in Ahmedabad.	</p>
<p>	top 10 matrimony matchmaking companies in Kolkata.	</p>
<p>	online meeting matrimonial websites in Chennai.	</p>
<p>	top 10 matrimony matrimonial websites in Vadodara.	</p>
<p>	online dating matrimonial services in Surat.	</p>
<p>	best matchmaking services in Hyderabad.	</p>
<p>	upcoming matrimonial apps in Surat.	</p>
<p>	online dating matrimonial websites in Nashik.	</p>
<p>	newly launched matchmaking apps in Pune.	</p>
<p>	best matrimonial services in Rajasthan.	</p>
<p>	boys lifepartner providing matchmaking apps in Rajasthan.	</p>
<p>	online meeting matrimonial apps in Coimbatore.	</p>
<p>	online dating matrimonial companies in dehradun.	</p>
<p>	top 10 matrimony matchmaking services in Coimbatore.	</p>
<p>	girls lifepartner providing matrimonial apps in Nagpur.	</p>
<p>	top 10 matrimony matrimonial companies in Kochi.	</p>
<p>	upcoming matchmaking websites in Jamshedpur.	</p>
<p>	boys lifepartner providing matchmaking apps in Kochi.	</p>
<p>	newly launched matchmaking websites in Lucknow.	</p>
<p>	top 10 matrimony matrimonial apps in Nashik.	</p>
<p>	online meeting matchmaking companies in Nagpur.	</p>
<p>	newly launched matrimonial websites in Coimbatore.	</p>
<p>	boys lifepartner providing matrimonial apps in Jaipur.	</p>
<p>	trusted matchmaking companies in Karnataka.	</p>
<p>	trusted matchmaking websites in Bangalore.	</p>
<p>	top 10 matrimony matchmaking apps in Karnataka.	</p>
<p>	online meeting matrimonial websites in Vadodara.	</p>
<p>	trusted matchmaking apps in Mumbai.	</p>
<p>	online dating matchmaking companies in Hyderabad.	</p>
<p>	online dating matchmaking companies in Faridabad.	</p>
<p>	online dating matrimonial companies in Jamshedpur.	</p>
<p>	newly launched matrimonial services in Faridabad.	</p>
<p>	online dating matchmaking services in Rajasthan.	</p>
<p>	girls lifepartner providing matchmaking services in dehradun.	</p>
<p>	upcoming matchmaking companies in kanpur.	</p>
<p>	newly launched matrimonial services in Nashik.	</p>
<p>	boys lifepartner providing matrimonial companies in Surat.	</p>
<p>	top 10 matrimony matrimonial companies in New Delhi.	</p>
<p>	online dating matchmaking websites in Faridabad.	</p>
<p>	boys lifepartner providing matchmaking websites in Pune.	</p>
<p>	girls lifepartner providing matchmaking services in Nashik.	</p>
<p>	trusted matrimonial apps in kanpur.	</p>
<p>	top 10 matrimony matrimonial companies in Hyderabad.	</p>
<p>	online dating matchmaking websites in Vadodara.	</p>
<p>	newly launched matrimonial companies in Surat.	</p>
<p>	newly launched matchmaking companies in Kolkata.	</p>
<p>	top 10 matrimony matchmaking companies in kanpur.	</p>
<p>	online meeting matchmaking apps in Ahmedabad.	</p>
<p>	upcoming matrimonial websites in Ahmedabad.	</p>
<p>	newly launched matrimonial websites in Bangalore.	</p>
<p>	best matchmaking apps in Coimbatore.	</p>
<p>	best matrimonial websites in Nashik.	</p>
<p>	online dating matrimonial services in Nashik.	</p>
<p>	upcoming matchmaking apps in Vadodara.	</p>
<p>	girls lifepartner providing matchmaking companies in New Delhi.	</p>
<p>	online meeting matchmaking services in Kolkata.	</p>
<p>	newly launched matchmaking companies in Karnataka.	</p>
<p>	online meeting matchmaking companies in Jamshedpur.	</p>
<p>	best matrimonial websites in Nagpur.	</p>
<p>	newly launched matrimonial apps in Jaipur.	</p>
<p>	online dating matchmaking websites in Trivandrum.	</p>
<p>	trusted matrimonial websites in Jamshedpur.	</p>
<p>	best matrimonial companies in Jaipur.	</p>
<p>	trusted matrimonial companies in Hyderabad.	</p>
<p>	newly launched matrimonial services in Chennai.	</p>
<p>	top 10 matrimony matchmaking apps in Faridabad.	</p>
<p>	girls lifepartner providing matchmaking apps in Bangalore.	</p>
            
          </ScrollArea>
          </Container>


      </>
  );
}

export default MyPhoto;
