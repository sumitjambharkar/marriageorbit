import React from 'react';
import './Form.css';
import Loginn from './Loginn';
import {Helmet} from "react-helmet";

const Form = () => {

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
    let array = [
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71,
    ];

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
  return (
   <>
    <Helmet>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="robots" content="follow,index"/>
      <meta name="description" content="Pagekeyword"/>
      <meta name="keywords" content="Pagekeywords"/>
      <meta name="author" content="Marriageorbit"/>
      <meta property="og:url" content="PageURL.html"/>
      <meta property="og:type" content="products" />
      <meta property="og:title" content="Title-Name"/>
      <meta property="og:image" content="Pageimagelink.jpg" />
      <meta property="og:site_name" content="Who We are "/>
   
    <link rel="canonical" href="" />
 
      <title></title>
      
      <link rel="icon" href="imagelink.png" sizes="16x16" type="image/png"></link>
      </Helmet>
      
   <div class="container form">
        <form>
           
        <div class="row">
     
           
            <div class="col-md-3 col-12 spc">
                <div >
                    <label className='change'>I'm looking for a</label>
                    <select className='sel'>
                        <option>Women</option>
                        <option>Men</option>
                    </select>
                </div>
            </div>
            

            <div class="col-md-3 col-6 spc">
                <label className='change'>Aged</label>
              <div class="row">
                  <div class="col-6 spc">
                      <select className='sel'>
                      <option>Select</option>
                          {array.map((ele)=>(
                            <option>{ele}</option>
                          ))}
                      </select>
                  </div>

                  <div class="col-6 spc">
                    <select className='sel'>
                    <option>Select</option>
                          {array.map((ele)=>(
                            <option>{ele}</option>
                          ))}
                    </select>
                </div>
              </div>
            </div>

            
            <div class="col-md-2 col-6 spc">
                <div >
                    <label className='change'>of religion</label>
                    <select className='sel'>
                        <option>Select</option>
                        {caste.map(ele=>(
                            <option>{ele}</option>
                        ))}
                    </select>
                </div>
            </div>


            
            <div class="col-md-3 col-12">
                <div >
                    <label className='change'>and mother tongue</label>
                    <select className='sel'>
                        <option>Select</option>
                        {motherTounge.map(ele=>(
                            <option>{ele}</option>
                        ))}
                    </select>
                </div>
            </div>


            
            <div class="col-md-1 col-12">
                <div class="search">
                    <span style={{position:"absolute",marginTop:"30px",marginLeft:"-20px",opacity:0}}>
                    <Loginn/>
                    </span>
                    <input type="submit" value="Lets Go"/>
                   
                </div>
            </div>


            

      
    </div>
        
    </form>
    </div>
   </>
  )
}

export default Form;