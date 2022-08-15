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
          <select class="dropbtn" name="location" value={location} onChange={handleLocation}>
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
          {city.map(doc=>(
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
          {city.map(doc=>(
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
          {city.map(doc=>(
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
          {city.map(doc=>(
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
