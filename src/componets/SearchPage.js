import React from 'react';
import "../App.css";
import {Helmet} from "react-helmet";
import { db } from './firebase';
import { useEffect, useState } from 'react';

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
      

  <meta charset="utf-8"/>
  <meta name="robots" content="follow,index"/>
  <meta http-equiv="content-language" content="en"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="description" content="On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity. Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession."/>

      <meta name="keywords" content="Matrimony services for boys in mumbai, matchmaking services for boys in mumbai, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in mumbai, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in mumbai, Online matchmaking Services,Indian single boys in mumbai,boys for marriage in mumbai
      lifepartner for wedding in mumbai.get girlfriend for marriage in mumbai.diffrent casts of boys for marriage in mumbai.
      services of matrimony for mens in mumbai, Matrimonial websites to find boys, matrimonials, couples boys and boys matchmaking companies in mumbai, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in mumbai, Online matchmaking Services,Indian single boys in mumbai,boys for marriage in mumbai
      lifepartner for wedding in mumbai.get boyfriend for marriage in mumbai.diffrent casts of boys for marriage in mumbai.
      hindu boys and boys for marriage."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/search"/>
      <meta property="og:type" content="Matrimonial Matchmaking Service In India" />
      <meta property="og:title" content="Search | top matrimonial services and companies in navi mumbai" />
      <meta property="og:image" content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png" />
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/search" />
 
      <title>Search | top matrimonial services and companies in navi mumbai</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 
   


      </Helmet>

    <div className='container se mt-5'>
    <div className='row mt-3'>
      <div className='label col-md-3 sm-12'>
        <label>age</label>
      </div>
      <div className='col-md-7'>
        <select>
          <option>22</option>
        </select>
        <select>
          <option>22</option>
        </select>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Height</label>
      </div>
      <div className='col-md-7'>
        <select>
          <option>22</option>
        </select>
        <select>
          <option>22</option>
        </select>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Marital Status</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
          <option></option>
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
          <option></option>
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
          <option></option>
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
          <option></option>
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Country</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
          <option></option>
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
      <button type="submit" class="btn" name="btnSearch"><i class="fa fa-search mr-2"></i> Search Profile</button>
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
  </>
  )
}
export default SearchPage
