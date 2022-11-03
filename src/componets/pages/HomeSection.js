import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { Avatar, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login, logout } from "../userSlice";
import { auth } from "../firebase";
import Slider from "@mui/material/Slider";
import { Helmet } from "react-helmet";
import ScrollArea from "react-scrollbar";
import Navbar from "../Nav/Navbar";
import Header from "../Header";
import Footer from "../Footer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import city from "./city.json";
import girl from "../image/girl.jpeg";
import man from "../image/man.jpg";
import SearchIcon from "@mui/icons-material/Search";

const age = [
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37 ",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
];

let religion = [
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Parsi",
  "Jain",
  "Buddhist",
  "Jewish",
  "No_Religion",
  "Spiritual",
  "Sindhi",
  "Other",
];

let motherTounge = [
  "Hindi",
  "English",
  "Marathi",
  "Punjabi",
  "Bengali",
  "Gujarati",
  "Urdu",
  "Telugu",
  "Kannada",
  "English",
  "Tamil",
  "Oriya",
  "Marwari",
  "More",
  "Aka",
  "Arabic",
  "Arunachali",
  "Assamese",
  "Awadhi",
  "Baluchi",
  "Bengali",
  "Bhojpuri",
  "Bhutia",
  "Brahui",
  "Brij",
  "Burmese",
  "Chattis,garhi",
  "Chinese",
  "Coorgi",
  "Dogri",
  "English,",
  "French",
  "Garhwali,",
  "Garo",
  "Gujarati",
  "Haryana",
  "Himachal",
  "Pahari",
  "Hindi",
  "Hindko",
  "Kakbarak,",
  "Kanauji",
  "Kannada",
  "Kashmiri",
  "Khandesi",
  "Khasi",
  "Konkani,",
  "Koshali",
  "Kumaoni",
  "Kutchi",
  "Ladakhi",
  "Lepcha",
  "Magahi",
  "Maithili,",
  "Malay",
  "Malayal",
  "Manipuri",
  "Marathi",
  "Marwari",
  "Miji",
  "Mizo",
  "Monpa",
  "Nepali",
  "Odia",
  "Pashto",
  "Persian",
  "Punjabi",
  "Rajasthan",
  "Russian",
  "Sanskrit",
  "Santhali",
  "Seraiki",
  "Sindhi",
  "Sinhala",
  "Sourashtr",
  "Spanish",
  "Swedish",
  "Tagalog",
  "Tamil",
  "Telugu",
  "Tulu",
  "Urdu",
  "Other",
];

const height = [
  4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4,
  5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9,
  6.0, 7.0, 7.1,
];

const HomeSection = () => {
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const [data, setData] = useState([]);
  const user = useSelector(selectUser);
  const [search, setSearch] = useState("");

  const [location, setLocation] = useState("");
  const [showFiltter, setShowFiltter] = useState(false);
  const [selectAge, setSelectAge] = useState("");
  const [selectReligion, setSelectReligion] = useState("");
  const [selectTounge, setSelectTounge] = useState("");
  const [selectHeight, setSelectHeight] = useState("");
  const [userData, setUserData] = useState("");
  
  useEffect(() => {
    if (user.uid) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((snapshot) => {
          setUserData(snapshot.data());
        });
    }
  }, [user.uid]);

  useEffect(
    () =>
      db
        .collection("users")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          setData(snapshot.docs.map((doc) => doc.data()));
        }),
    []
  );

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="robots" content="follow,index" />
        <meta http-equiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity. Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession."
        />

        <meta
          name="keywords"
          content="best Matrimony services in mumbai, best Matrimony services in pune, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in karnataka, Brides, matchmaking services in coimbatore, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in new delhi, Online matchmaking Services,Indian single girls in surat,girls for marriage in jaipur
      lifepartner for wedding in bangalore.get girlfriend for marriage in hyderabad.diffrent casts of girls for marriage in amritsar.
      services of matrimony for mens in ahmedabad, Matrimonial websites to find girls, matrimonials, couples girls and boys matchmaking companies in chandigadh, Brides, matchmaking services in uttar pradesh, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in gujarat, Online matchmaking Services,Indian single boys in kolkata,boys for marriage in bihar
      lifepartner for wedding in chennai.get boyfriend for marriage in kanpur.diffrent casts of boys for marriage in nashik.
      hindu girls and boys for marriage."
        />

        <meta name="author" content="Design and Promoted By Marriageorbit" />
        <meta property="og:url" content="https://marriageorbit.com/matches" />
        <meta
          property="og:type"
          content="Matrimonial Matchmaking Service In India"
        />
        <meta
          property="og:title"
          content="Matches | find your favourite lifepartner for marriage in mumbai"
        />
        <meta
          property="og:image"
          content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png"
        />
        <meta property="og:site_name" content="Marriageorbit.com" />

        <link rel="canonical" href="https://marriageorbit.com/matches" />

        <title>
          Matches | find your favourite lifepartner for marriage in mumbai
        </title>

        <link
          rel="icon"
          href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png"
          sizes="16x16"
          type="image/png"
        />
      </Helmet>
      <Header />
      <Navbar />
      <h3
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: " #eee",
        }}
      >
        Members Looking For Me 418
      </h3>
      <Container>
        <SearchBar>
          <Speed>
            <a onClick={() => setShowFiltter(!showFiltter)}>
              <FilterAltIcon />
            </a>
            {showFiltter ? (
              <ul>
                <li data-aos="fade-down" data-aos-duration="500">
                  <select
                    class="dropbtn"
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option>Select Location</option>
                    {city.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
                <li data-aos="fade-down" data-aos-duration="600">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectAge(e.target.value)}
                  >
                    <option>Select Age</option>
                    {age.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
                <li data-aos="fade-down" data-aos-duration="700">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectReligion(e.target.value)}
                  >
                    <option>Select Religion</option>
                    {religion.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
                <li data-aos="fade-down" data-aos-duration="800">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectTounge(e.target.value)}
                  >
                    <option>Select MotherTounge</option>
                    {motherTounge.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
                <li data-aos="fade-down" data-aos-duration="900">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectHeight(e.target.value)}
                  >
                    <option>Select Height</option>
                    {height.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
              </ul>
            ) : (
              ""
            )}
          </Speed>
          <Input>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
            />
            <SearchIcon />
          </Input>
        </SearchBar>
      </Container>
      <Section className="container">
        <SectionFiltter>
          <Filtter>
              {/* ==================Start Location===================== */}
              <Filter>
                <br></br>
                <strong>Filter By Categories</strong>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option>Select Location</option>
                    {city.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>
              {/* ==================End Location===================== */}

              {/* ==================Start Age===================== */}
              <Filter>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    name="age"
                    onChange={(e) => setSelectAge(e.target.value)}
                  >
                    <option>Select Age        </option>
                    {age.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>

              {/* ==================End Age===================== */}

              {/* ==================Start Height===================== */}
              <Filter>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    name="rel"
                    onChange={(e) => setSelectReligion(e.target.value)}
                  >
                    <option>Select Religion</option>
                    {religion.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>

              {/* ==================End Height===================== */}

              {/* ==================Start Religion===================== */}
              <Filter>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectTounge(e.target.value)}
                  >
                    <option>Select MotherTounge</option>
                    {motherTounge.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>

              {/* ==================end Religion===================== */}

              {/* ==================End mothertounge===================== */}
              <Filter>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectHeight(e.target.value)}
                  >
                    <option>Select Height</option>
                    {height.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>

              {/* ==================End mothertounge===================== */}
          </Filtter>
        </SectionFiltter>
        <SectionCard>
          <Card>
            {data
              .filter(
                (doc) =>
                  doc.height
                    ?.toLowerCase()
                    .indexOf(selectHeight.toLowerCase()) !== -1
              )
              .filter(
                (doc) =>
                  doc.tounge
                    ?.toLowerCase()
                    .indexOf(selectTounge.toLowerCase()) !== -1
              )
              .filter(
                (doc) =>
                  doc.religion
                    ?.toLowerCase()
                    .indexOf(selectReligion.toLowerCase()) !== -1
              )
              .filter(
                (doc) =>
                  doc.city?.toLowerCase().indexOf(location.toLowerCase()) !== -1
              )
              .filter(
                (doc) =>
                  doc.displayName
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) !== -1
              )
              .map((doc) => (
                <>
                  {userData?.gender !== doc.gender ? (
                    <>
                      {doc.displayName === user.displayName ? null : (
                        <SingleCard>
                          {doc.gender === "Male" ? (
                            <>
                              {doc.image ? (
                                <img
                                  style={{ height: 250, width: "100%" }}
                                  src={doc.image}
                                />
                              ) : (
                                <img
                                  style={{ height: 250, width: "100%" }}
                                  src={man}
                                />
                              )}
                            </>
                          ) : (
                            <>
                              {doc.image ? (
                                <img
                                  style={{ height: 250, width: "100%" }}
                                  src={doc.image}
                                />
                              ) : (
                                <img
                                  style={{ height: 250, width: "100%" }}
                                  src={girl}
                                />
                              )}
                            </>
                          )}
                          <span
                            style={{
                              textTransform: "capitalize",
                              fontWeight: 600,
                            }}
                          >
                            {doc.displayName}
                          </span>
                          <span
                            style={{
                              textTransform: "capitalize",
                              fontFamily: "emoji",
                            }}
                          >
                            {doc?.gender}
                          </span>
                          <span style={{ fontFamily: "cursive" }}>
                            {calculate_age(new Date(doc.birth))}
                          </span>
                          <Button>
                            <Link to={`/view/${doc.uid}`}>Send Message</Link>
                          </Button>
                        </SingleCard>
                      )}
                    </>
                  ) : null}
                </>
              ))}
          </Card>
        </SectionCard>
      </Section>
      <Container>
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 600,
            marginTop: "25px",
          }}
        >
          We Are Available In Several Locations
        </h1>
        <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          horizontal={false}
          style={{
            height: 100,
            color: "#666666",
            marginBottom: "25px",
            padding: "15px",
            border: "1px solid #ffa500",
          }}
        >
          <p> Tamil mens For relationship In Mumbai </p>
          <p> online dating marriages apps in mumbai </p>
          <p> Maharashtrian females From mumbai for marriage </p>
          <p> newly launched matrimony services in mumbai </p>
          <p> Chambhar females From mumbai for matchmaking </p>
          <p> Brahmin males For wedding In Mumbai </p>
          <p> Bengali girls For wedding In Mumbai </p>
          <p> Buddhist females For marriage In Mumbai </p>
          <p> newly launched matrimonial websites in mumbai </p>
          <p> Bengali mens From mumbai for wedding </p>
          <p> Hanafi girls For relationship In Mumbai </p>
          <p> Gujarati mens For wedding In Mumbai </p>
          <p> trusted marriages websites in india </p>
          <p> Telugu girls From mumbai for marriage </p>
          <p> top 10 matrimony websites in india </p>
          <p> newly launched weddings websites in india </p>
          <p> Buddhist mens From mumbai for wedding </p>
          <p> English girls For relationship In Mumbai </p>
          <p> upcoming marriages services in mumbai </p>
          <p> Roman Catholic females From mumbai for wedding </p>
          <p> Bengali males From mumbai for marriage </p>
          <p> newly launched matrimonial companies in india </p>
          <p> upcoming matrimony services in mumbai </p>
          <p> Buddhist girls For marriage In Mumbai </p>
          <p> girls lifepartner providing weddings websites in india </p>
          <p> Punjabi males For relationship In Mumbai </p>
          <p> online meeting marriages websites in india </p>
          <p> upcoming weddings companies in india </p>
          <p> Marwari girls From mumbai for matchmaking </p>
          <p> Buddhist males From mumbai for marriage </p>
          <p> Malyalam mens From mumbai for matchmaking </p>
          <p> Hindu womens From mumbai for wedding </p>
          <p> Bengali girls For marriage In Mumbai </p>
          <p> Marathi boys For wedding In Mumbai </p>
          <p> Konkani womens For marriage In Mumbai </p>
          <p> Hindi girls From mumbai for matchmaking </p>
          <p> boys lifepartner providing matrimonial companies in mumbai </p>
          <p> online meeting matchmaking apps in india </p>
          <p> Roman Catholic boys From mumbai for wedding </p>
          <p> online meeting weddings companies in mumbai </p>
          <p> Hanafi womens For wedding In Mumbai </p>
          <p> girls lifepartner providing matchmaking services in mumbai </p>
          <p> online meeting marriages companies in india </p>
          <p> Maharashtrian boys For relationship In Mumbai </p>
          <p> Urdu females For marriage In Mumbai </p>
          <p> boys lifepartner providing matchmaking websites in india </p>
          <p> Hanafi males For relationship In Mumbai </p>
          <p> upcoming matrimonial services in india </p>
          <p> Kshatriya females For wedding In Mumbai </p>
          <p> English females From mumbai for marriage </p>
          <p> Marathi mens For relationship In Mumbai </p>
          <p> Roman Catholic males For wedding In Mumbai </p>
          <p> Maharashtrian womens For wedding In Mumbai </p>
          <p> newly launched matrimony services in india </p>
          <p> online dating matrimony companies in india </p>
          <p> trusted matrimonial services in india </p>
          <p> Bengali mens From mumbai for marriage </p>
          <p> best matrimony apps in mumbai </p>
          <p> matrimony companies in india </p>
          <p> Urdu males For wedding In Mumbai </p>
          <p> best matrimonial companies in mumbai </p>
          <p> Punjabi girls For relationship In Mumbai </p>
          <p> online dating weddings apps in mumbai </p>
          <p> newly launched marriages services in india </p>
          <p> marriages websites in india </p>
          <p> online meeting matrimony services in mumbai </p>
          <p> Muslim females From mumbai for matchmaking </p>
          <p> girls lifepartner providing matrimony apps in mumbai </p>
          <p> top 10 marriages companies in mumbai </p>
          <p> Chambhar girls For wedding In Mumbai </p>
          <p> Hanafi males From mumbai for matchmaking </p>
          <p> newly launched matrimonial websites in india </p>
          <p> girls lifepartner providing weddings apps in mumbai </p>
          <p> English boys From mumbai for matchmaking </p>
          <p> newly launched matchmaking apps in india </p>
          <p> Tamil males From mumbai for wedding </p>
          <p> Konkani boys From mumbai for matchmaking </p>
          <p> girls lifepartner providing matrimony apps in india </p>
          <p> Telugu girls For relationship In Mumbai </p>
          <p> boys lifepartner providing marriages websites in mumbai </p>
          <p> Hindi males For wedding In Mumbai </p>
          <p> Konkani males From mumbai for wedding </p>
          <p> Buddhist males From mumbai for wedding </p>
          <p> Hindu males From mumbai for matchmaking </p>
          <p> English girls From mumbai for matchmaking </p>
          <p> Roman Catholic boys From mumbai for marriage </p>
          <p> Sindhi mens For marriage In Mumbai </p>
          <p> boys lifepartner providing matrimonial websites in india </p>
          <p> newly launched weddings companies in india </p>
          <p> Kshatriya boys For relationship In Mumbai </p>
          <p> boys lifepartner providing matrimony apps in mumbai </p>
          <p> Kshatriya mens For marriage In Mumbai </p>
          <p> Marathi boys From mumbai for marriage </p>
          <p> Brahmin mens From mumbai for matchmaking </p>
          <p> Odia males From mumbai for wedding </p>
          <p> Maharashtrian females From mumbai for wedding </p>
          <p> newly launched marriages websites in india </p>
          <p> Hanafi mens From mumbai for matchmaking </p>
          <p> Bengali womens From mumbai for wedding </p>
          <p> Telugu womens From mumbai for matchmaking </p>
          <p> weddings websites in india </p>
          <p> English mens From mumbai for matchmaking </p>
          <p> newly launched marriages apps in india </p>
          <p> top 10 matrimony websites in mumbai </p>
          <p> Marathi womens For relationship In Mumbai </p>
          <p> best marriages services in mumbai </p>
          <p> Marwari mens For marriage In Mumbai </p>
          <p> girls lifepartner providing matrimony websites in mumbai </p>
          <p> boys lifepartner providing matrimonial apps in mumbai </p>
          <p> Malyalam males For relationship In Mumbai </p>
          <p> Odia boys For marriage In Mumbai </p>
          <p> Kshatriya boys From mumbai for marriage </p>
          <p> Buddhist girls From mumbai for marriage </p>
          <p> Chambhar mens For marriage In Mumbai </p>
          <p> English males For wedding In Mumbai </p>
          <p> Kannada females For marriage In Mumbai </p>
          <p> Bengali males From mumbai for wedding </p>
          <p> Jain womens From mumbai for matchmaking </p>
          <p> Tamil girls From mumbai for wedding </p>
          <p> boys lifepartner providing weddings services in mumbai </p>
        </ScrollArea>
      </Container>
      <Footer />{" "}
    </>
  );
};

export default HomeSection;

const Section = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const SectionFiltter = styled.div`
  padding: 1%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SectionCard = styled.div`
  width:100%;
  padding: 1%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Filtter = styled.div`
  background-color: #eee;
  min-height: 100vh;
  padding:10px;
`;
const Card = styled.div`
  display: flax;
  flex-wrap: wrap;
  justify-content: center;
`;

const SingleCard = styled.div`
  width:220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #eee;
  margin: 1%;
  border: 2px solid #9994;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  > span {
    margin-left: 4px;
  }

  > button {
    padding: 4px;
    background-color: #ffa500;
    color: white;
    border: 1px solid #ffa500;
    margin: 4px;
  }
  > button :hover {
    color: red;
  }
  > button a {
    color: white;
    text-decoration: none;
  }
`;
const SearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Filter = styled.div`
  .dropbtn {
    background-color: #ffa500;
    color: white;
    padding: 10px;
    width: 195px;
    font-size: 16px;
    margin-top: 40px;
    border: none;

    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    transition: 0.3s;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    transition: 0.3s;
    min-width: 270px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content {
    color: black;
    padding: 12px 16px;

    text-decoration: none;
    display: block;
  }
  .dropdown-content {
    list-style: none;
    cursor: pointer;
    transition: 0.3s;

    padding: 10px;
  }

  .dropdown-content li:hover {
    background-color: #fab90a;
    color: #fff;
  }

  .dropdown:hover .dropdown-content {
    display: block;
    transition: 0.3s;
  }

  .dropdown:hover .dropbtn {
    background-color: #ff8507;
  }
`;

const Speed = styled.div`
  margin-right: 10px;
  margin-top: 12px;
  display: none;
  a {
    background-color: #ffa500;
    border-radius: 50%;
    padding: 15px;
    
  }
  a :hover {
    cursor: pointer;
  }

  a > .MuiSvgIcon-root {
    color: white;
  }

  ul {
    position: absolute;
    z-index: 1;
    margin-top: 10px;
  }

  ul li {
    list-style: none;
    margin: 6px;
  }

  ul li select {
    width: 190px;
    padding: 4px;
    background-color: #ffa500;
    color: white;
    border-radius: 24px;
    border: 1px solid #ffa500;
    outline: none;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const Input = styled.div`
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  border-radius: 24px;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  > input {
    font-size: 15px;
    border: 1px solid #ccc;
    padding: 10px;
    height: 45px;
    width: 100%;
    border: none;
    outline: none;
  }
  .MuiSvgIcon-root {
    color: orange;
  }
`;
