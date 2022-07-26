import React from 'react';
import {Helmet} from "react-helmet";
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import Navbar from '../Nav/Navbar';
import Header from '../Header';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import Footer from '../Footer';


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
let age = [
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71,
];

let religion = ["Hindu","Muslim","Christian","Sikh","Parsi","Jain","Buddhist","Jewish","No_Religion","Spiritual","Other"]

let caste = [
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
const height = [4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6.0,6.1,
  6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,6.0,7.0,7.1 ]

  const city=  ["Mumbai", "Pune", "New Delhi", "Surat", "Nashik", "Nagpur", "Kolkata", "Ahmedabad", "Hyderabad", "Bangalore", "Jaipur", "Kochi", "kanpur", "Vadodara", "Faridabad", "Coimbatore", "Karnataka", "Chennai", "Lucknow", "dore", "dehradun", "Jamshedpur", "Trivandrum", "Rajasthan"]

const SearchPage = () => {


  const [card, setCard] = useState([])

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
      
      </Helmet>
      <Header/>
    <Navbar/>

  <Section>
  <div className='container se mt-5'>
    <div className='row mt-3'>
      <div className='label col-md-3 sm-12'>
        <label>age</label>
      </div>
      <div className='col-md-7'>
        <div className='searr'>
        <select>
          {age.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        <select>
        {age.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Height</label>
      </div>
      <div className='col-md-7'>
        <div className='searr'>
        <select>
          {height.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        <select>
          {height.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        
        <label>Marital Status</label> 
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
             <option >Select</option>
                 <option>Married</option>
                 <option>Never Married</option>
                 <option>Divorce</option>
             </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Religion</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
             <option >Select</option>
                 {religion.map((ele)=>{
                     return <option >{ele}</option>
                 })}
             </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Caste</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
        {caste.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Mother Tongue</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
        {motherTounge.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>City</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
        {city.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <span>Photo Settings</span>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
       <input type="checkbox"/>
         <span>  Only with photo</span>
        </div>
      </div>
    </div>

    <div className='row mt-3 mb-5'>
      <div className='col-md-3 sm-12'>
        <label></label>
      </div>
      <div className='col-md-7'>
      <Link to="/"><button type="submit" class="btn" name="btnSearch"><i class="fa fa-search mr-2"></i> Search Profile</button></Link>
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
  </Section>
  <Footer/>
  </>
  )
}
export default SearchPage

const Section = styled.div`

.ser select{
  width: 100%;
  margin-top: 15px;
  outline: none;
}

.btn{
  background-color: #ffa500;
}

.searr select{
  width: 50%;
}

input[type=checkbox], input[type=radio] {
  box-sizing: border-box;
  padding: 0;
  margin-top: 19px;
 
}

.se{
  background-color: #eee;
  padding: 5px;
  margin-bottom: 20px;
}

.label{
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

select{
  width: 100%;
  height: 40px;
  margin-top: 15px;
  outline: none;
}

`