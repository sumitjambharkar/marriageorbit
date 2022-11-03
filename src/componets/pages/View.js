import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import images from "../image/bg-border.png";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Navbar from "../Nav/Navbar";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CallIcon from "@mui/icons-material/Call";
import { DoDisturb } from "@mui/icons-material";
import { doc } from "firebase/firestore";
import girl from "../image/girl.jpeg";
import man from "../image/man.jpg";

const View = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const { Id } = useParams();
  const [getImage, setGetImage] = useState("");
  const [personData, setPersonData] = useState([]);

  let x = personData.birth;
  let date = new Date(x);
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  const sendNot = async (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(user.uid)
      .collection("sent")
      .doc(personData.uid)
      .set({ data: personData });
    db.collection("users")
      .doc(personData.uid)
      .collection("req")
      .doc(user.uid)
      .set({ data: getImage });
    const respone = await fetch(
      "https://marriageorbit-backend-api.herokuapp.com/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: personData.email,
          from: user.email,
          subject: `${user.displayName} Members visited your Profile`,
          message: `Hi ${personData.displayName} ${
            user.displayName
          } may be interested in you as they visisted your Profile.Take the first step and connect with them ${`https://marriageorbit.com/view/${user.uid}`}`,
        }),
      }
    );
    const result = await respone.json();
    toast.success("Notification send");
    console.log(result);
  };

  useEffect(() => {
    if (Id) {
      db.collection("users")
        .doc(Id)
        .onSnapshot((snapshot) => {
          setPersonData(snapshot.data());
        });
    }
  }, [Id]);

  useEffect(() => {
    if (user.uid) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((snapshot) => {
          setGetImage(snapshot.data());
        });
    }
  }, [user.uid]);

  const getData = async () => {
    const uid = personData.uid;
    const displayName = personData.displayName;
    const image = personData.image;

    const id = user.uid > uid ? `${user.uid + uid}` : `${uid + user.ui}`;
    if (user.uid) {
      db.collection("users")
        .doc(user.uid)
        .collection("messages")
        .doc(id)
        .set({
          uid: uid,
          displayName,
          image: image || null,
          createdAt: new Date(),
        });
      if (uid) {
        db.collection("users")
          .doc(uid)
          .collection("messages")
          .doc(id)
          .set({
            uid: user.uid,
            displayName: getImage.displayName,
            image: getImage.image || null,
            createdAt: new Date(),
          });
      }
      history.push({
        pathname: "/chat",
        state: { uid: personData.uid },
      });
    }
  };

  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow,index" />
        <meta name="description" content="Pagekeyword" />
        <meta name="keywords" content="Pagekeywords" />
        <meta name="author" content="Marriageorbit" />
        <meta property="og:url" content="PageURL.html" />
        <meta property="og:type" content="products" />
        <meta property="og:title" content="Title-Name" />
        <meta property="og:image" content="Pageimagelink.jpg" />
        <meta property="og:site_name" content="Who We are " />

        <link rel="canonical" href="" />

        <title></title>

        <link
          rel="icon"
          href="imagelink.png"
          sizes="16x16"
          type="image/png"
        ></link>
      </Helmet>
      <Header />
      <Navbar />
      <ProfileSection>
        <ImageSection>
          <CardImage>
            {personData.gender === "Male" ? (
              <>
                {personData.image ? (
                  <img
                    style={{ height: 250, width: "100%" }}
                    src={personData.image}
                  />
                ) : (
                  <img style={{ height: 250, width: "100%" }} src={man} />
                )}
              </>
            ) : (
              <>
                {personData.image ? (
                  <img
                    style={{ height: 250, width: "100%" }}
                    src={personData.image}
                  />
                ) : (
                  <img style={{ height: 250, width: "100%" }} src={girl} />
                )}
              </>
            )}
          </CardImage>
          <ImageDetails>
            <h3 style={{ textTransform: "capitalize" }}>
              {personData.displayName}
            </h3>
            <hr></hr>
            <Section>
              <Firsts>
                <li>{calculate_age(new Date(personData.birth))} Years</li>
                <li>{personData.maritalStatus}</li>
                <li>{personData.religion}</li>
                <li>{personData.tounge}</li>
              </Firsts>
              <Firsts>
                <li>Not Specified</li>
                <li>Not Specified</li>
                <li>Lives in {personData.city}</li>
                {/* <li><Link to="/chats/:roomId">Group Chat</Link></li> */}
                <li>
                  <Link>Online Now</Link>
                </li>
              </Firsts>
            </Section>

            <Second>
              <li>
                <a onClick={sendNot}>
                  <EmailIcon email={personData.email} />
                </a>
                <p>Connect now</p>
              </li>
              <li>
                <a href={`tel:+91${personData.number}`}>
                  <CallIcon />
                </a>
                <p>Call now</p>
              </li>
              <li>
                <a onClick={getData}>
                  <ChatIcon />
                </a>
                <p>Chat now</p>
              </li>
            </Second>
          </ImageDetails>
        </ImageSection>
      </ProfileSection>
      <AllDetails>
        <Details className="container">
          <h1 style={{ marginTop: "15px" }}>Details of Profile</h1>
          <div class="fancy2">
            <img src={images} alt="" />
          </div>
          <Box>
            <h3>About</h3>
            <span>{personData.about}</span>
          </Box>
          <hr></hr>
          <Box>
            <h3>Basic Info</h3>
            <Agent>
              <First>
                <li>Gender</li>
                <li>{personData.gender}</li>
              </First>
              <First>
                <li>Date Of Birth</li>
                <li>{dateMDY}</li>
              </First>
            </Agent>
            <Agent>
              <First>
                <li>Religion</li>
                <li>{personData.religion}</li>
              </First>
              <First>
                <li>Mother Tounge</li>
                <li>{personData.tounge}</li>
              </First>
            </Agent>
          </Box>
          <hr></hr>
          <Box>
            <h3>Lifestyle and Intrests</h3>
            <Agent>
              <First>
                <li>Eating Habit</li>
                <li>{personData.diet}</li>
              </First>
              <First>
                <li>Height</li>
                <li>{personData.height}</li>
              </First>
            </Agent>
          </Box>
          <hr></hr>
          <Box>
            <h3>Education and profession</h3>
            <Agent>
              <First>
                <li>Qaulification</li>
                <li>{personData.qaulification}</li>
              </First>
              <First>
                <li>University</li>
                <li>{personData.collage}</li>
              </First>
            </Agent>
          </Box>
          <hr></hr>
          <Box>
            <h3>Family Details</h3>
            <Agent>
              <First>
                <li>Live in Family</li>
                <li>{personData.family}</li>
              </First>
              <First>
                <li>Members</li>
                <li>Not Specified</li>
              </First>
            </Agent>
          </Box>
          <hr></hr>
          <Box>
            <h3>Location</h3>
            <Agent>
              <First>
                <li>Live in</li>
                <li>{personData.city}</li>
              </First>
              <First>
                <li>State</li>
                <li>{personData.state}</li>
              </First>
            </Agent>
          </Box>
          <hr></hr>
        </Details>
      </AllDetails>
      <Footer />
    </>
  );
};

export default View;

const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
`;
const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const CardImage = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  background-color: #eee;
  padding: 12px;
  margin: 12px;
  > img {
    width: 200px;
  }
`;
const ImageDetails = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  width: 450px;
  margin-top: 28px;
  padding: 12px;
  background-color: #eee;
  > h3 {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: ui-serif;
    color: #564343;
  }
  > p {
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    color: #666;
  }
  @media (max-width: 600px) {
    width: 230px;
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Firsts = styled.div`
  > li {
    list-style: none;
    font-size: 15px;
    color: #666;
    margin: 4px;
  }
  > li > a {
    text-decoration: none;
    font-size: 15px;
    color: #666;
  }
`;
const AllDetails = styled.div`
  display: flex;
  justify-content: start;
  padding: 30px;
  background-color: white;
`;
const Details = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  background-color: #eee;
  width: 70%;
  > h1 {
    font-size: 1.8rem;
    font-weight: bold;
    font-family: auto;
    color: #ffa500;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  > h1 {
    text-align: center;
  }
`;
const Box = styled.div`
  padding: 24px;
  > h3 {
    font-size: 1rem;
    font-weight: 600;
    font-family: auto;
  }
`;
const Agent = styled.div`
  display: flex;
  justify-content: space-around;
`;
const First = styled.div`
  padding-left: 8px;
  margin: 4px;
  > li {
    list-style: none;
    font-size: 15px;
    color: #666;
    width: 100px;
  }
`;
const Second = styled.div`
  width: 100%;
  text-align: center;
  > li {
    width: 33%;
    display: flex;
    float: left;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    > a {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffa500;
      font-size: 18px;
      border: 1px solid #ffa500;
      cursor: pointer;

      > .MuiSvgIcon-root {
        font-size: 35px;
        color: #ffa500;
      }
    }
    a:hover {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      line-height: 50px;
      color: white;
      font-size: 18px;
      background-color: #ffa500;
      border: 1px solid white;
      > .MuiSvgIcon-root {
        font-size: 35px;
        color: white;
      }
    }
    p {
      font-size: 12px;
      margin: 2px;
    }
    p:hover {
      cursor: pointer;
      color: #ffa500;
    }
  }
`;
