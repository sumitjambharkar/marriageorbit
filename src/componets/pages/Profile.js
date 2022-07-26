import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Footer from "../Footer";
import { auth, db, storage } from "../firebase";
import { Helmet } from "react-helmet";
import city from "./city.json";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Avatar } from "@mui/material";
const height = [
  4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4,
  5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9,
  6.0, 7.0, 7.1,
];

const state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

const Profile = () => {
  const user = auth;
  const history = useHistory();
  const [img, setImg] = useState("");
  const [data, setData] = useState({
    city: "",
    family: "",
    maritalStatus: "",
    diet: "",
    height: "",
    state: "",
  });

  const submitForm = (e) => {
    console.log(data);
    e.preventDefault();
    const { city, family, maritalStatus, diet, height, state } = data;
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users").doc(user.uid).update({
          city: city,
          family: family,
          diet: diet,
          maritalStatus: maritalStatus,
          height: height,
          state: state,
        });
      }
    });
    history.push("/profile/step/2");
  };

//   useEffect(() => {
//     const uploadImg = async () => {
//       const imgRef = ref(
//         storage,
//         `avatar/${new Date().getTime()} - ${img.name}`
//       );
//       try {
//         const snap = await uploadBytes(imgRef, img);
//         console.log(snap.ref.fullPath);
//         const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
//         await updateDoc(doc(db, "users", user.currentUser.uid), {
//           image: url,
//           avatarPath: snap.ref.fullPath,
//         });
//         console.log(url);
//         setImg("");
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     uploadImg();
//   });

  let name, value;
  const handalChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
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
      <Header>
        <h1>marriageorbit.com</h1>
      </Header>
      <CreateSection>
        <Card>
          <Form>
            <h1>Let's Create Your Profile Now</h1>
            {/* <label htmlFor="icon-button-file">
              <Input
                onChange={(e) => setImg(e.target.files[0])}
                accept="image/*"
                name="file"
                id="icon-button-file"
                type="file"
              />
              <IconButton
                style={{
                  display: "flex",
                  fontWeight: "500",
                  color: "white",
                  border: "#FFA500",
                  backgroundColor: "#FFA500",
                  borderRadius: "1px",
                }}
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
                Upload Image
              </IconButton>
            </label> */}
            <label>City you live in *</label>
            <select name="city" onChange={handalChange} value={data.city}>
              <option>Select</option>
              {city.map((ele) => {
                return <option>{ele}</option>;
              })}
            </select>
            <label>State *</label>
            <select
              autoComplete="off"
              required
              name="state"
              onChange={handalChange}
              value={data.state}
            >
              <option>Select</option>
              {state.map((ele) => {
                return <option>{ele}</option>;
              })}
            </select>
            <label>you live with your family</label>
            <select
              autoComplete="off"
              required
              name="family"
              onChange={handalChange}
              value={data.family}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <label>your Marital Status</label>
            <select
              autoComplete="off"
              required
              name="maritalStatus"
              onChange={handalChange}
              value={data.maritalStatus}
            >
              <option>Select</option>
              <option>Married</option>
              <option>Never Married</option>
              <option>Divorce</option>
            </select>
            <label>your diet</label>
            <select
              autoComplete="off"
              required
              name="diet"
              onChange={handalChange}
              value={data.diet}
            >
              <option>Select</option>
              <option>Veg</option>
              <option>No-Veg</option>
              <option>Jain</option>
              <option>Veg & No-Veg</option>
            </select>
            <label>your height</label>
            <select
              autoComplete="off"
              required
              name="height"
              onChange={handalChange}
              value={data.height}
            >
              <option>Select</option>
              {height.map((ele) => {
                return <option>{ele}</option>;
              })}
            </select>
            <button onClick={submitForm}>Continue</button>
          </Form>
        </Card>
      </CreateSection>
      <Footer />
      {/* <SectionFooter>
    <Footer/>
    </SectionFooter> */}
    </>
  );
};

export default Profile;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 12px;
  > h1 {
    font-family: romon;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const CreateSection = styled.div`
  background-color: #e8e8e8;
  display: flex;
  justify-content: center;
  padding-top: 24px;
  @media (max-width: 500px) {
    background-color: white;
  }
`;
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  border-radius: 6px;
  margin-bottom: 24px;
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;
const Form = styled.div`
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  > h1 {
    font-size: 28px;
    font-weight: 400;
  }
  > label {
    margin-bottom: 8px;
  }
  > input {
    margin-bottom: 8px;
    padding: 5px;
    border: 1px solid #ffa500;
  }
  > input:focus {
    outline: none;
  }
  > select {
    margin-bottom: 8px;
    padding: 5px;
    border: 1px solid #ffa500;
    outline: none;
    height: 35px;
    font-size: 14px;
  }
  > button {
    margin-top: 8px;
    height: 40px;
    background-color: #ffa500;
    border: 1px solid #ffa500;
    color: white;
    font-weight: 700;
  }
  > button a {
    text-decoration: none;
    color: white;
  }
`;
const SectionFooter = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding:12px; */
  position: relative;
  margin: 12px;
  > img {
    width: 200px;
  }
`;
const Input = styled.input`
display:none;`