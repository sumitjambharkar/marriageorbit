import React, { useRef, useState } from "react";
import styled from "styled-components";

const city = [
  "mumbai",
  "pune",
  "new delhi",
  "surat",
  "nashik",
  "nagpur",
  "kolkata",
  "ahmedabad",
  "hyderabad",
  "bangalore",
  "jaipur",
  "kochi",
  "kanpur",
  "vadodara",
  "faridabad",
  "coimbatore",
  "karnataka",
  "chennai",
  "lucknow",
  "indore",
  "dehradun",
  "jamshedpur",
  "trivandrum",
  "rajasthan",
];

const age = [
  "18", "19","20","21","22", "23","24","25","26", "27","28","29","30", "31","32","33","34", "35","36","37 ","38", "39","40","41","42", "43","44","45","46", "47","48","49","50", "51","52","53","54", "55","56","57",
  "58","59","60","61", "62","63","64","65", 
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

const height = [4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6.0,6.1,
  6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,6.0,7.0,7.1 ]
  


const Location = () => {
  const [location,setLocation] = useState("")
  console.log(location);
  const handleLocation =(e)=> {
      setLocation({...location,[e.target.name]:e.target.value})
  }
  return (
    <>
      {/* ==================Start Location===================== */}
      <Section>
        <br></br>
        <strong>Filter By Categories</strong>
        <div class="dropdown">
          <select class="dropbtn" name="location" onChange={(e)=>setLocation(e.target.value)}>
            <option>Select Location</option>
          {city.map(doc=>(
            <option class="dropdown-content">{doc}</option>
            ))}
          </select>
        </div>
      </Section>
      {/* ==================End Location===================== */}

      {/* ==================Start Age===================== */}
      <Section>
      <div class="dropdown">
          <select class="dropbtn" >
            <option>Select Age</option>
          {age.map(doc=>(
            <option class="dropdown-content">{doc}</option>
            ))}
          </select>
        </div>
      </Section>

      {/* ==================End Age===================== */}

      {/* ==================Start Height===================== */}
      <Section>
      <div class="dropdown">
          <select class="dropbtn">
            <option>Select Religion</option>
          {religion.map(doc=>(
            <option class="dropdown-content">{doc}</option>
            ))}
          </select>
        </div>
      </Section>

      {/* ==================End Height===================== */}

      {/* ==================Start Religion===================== */}
      <Section>
      <div class="dropdown">
          <select class="dropbtn" >
            <option>Select MotherTounge</option>
          {motherTounge.map(doc=>(
            <option class="dropdown-content">{doc}</option>
            ))}
          </select>
        </div>
      </Section>

      {/* ==================end Religion===================== */}

      {/* ==================End mothertounge===================== */}
      <Section>
      <div class="dropdown">
          <select class="dropbtn">
            <option>Select Height</option>
          {height.map(doc=>(
            <option class="dropdown-content">{doc}</option>
            ))}
          </select>
        </div>
      </Section>

      {/* ==================End mothertounge===================== */}
    </>
  );
};
export default Location;
const Section = styled.div`
  .dropbtn {
    background-color: #ffa500;
    color: white;
    padding: 10px;
    width: 270px;
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
