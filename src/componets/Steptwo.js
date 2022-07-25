import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { auth, db } from './firebase';

const Steptwo = () => {
    const [data, setData] = useState({
       qaulification :"" ,
       collage :"",
       work:"",
       tounge:"",
       religion:""
    })

    const submitForm = (e)=>{
        e.preventDefault() 
        const {qaulification,collage,work,tounge,religion} = data
        auth.onAuthStateChanged(user=>{
            if(user){
                db.collection("users").doc(user.uid).collection("userdata2").add({
                    qaulification:qaulification,
                    collage:collage,
                    work:work,
                    tounge:tounge,
                    religion:religion
                })
            }
        })
    }
    let name, value
    const handalChange =(e)=>{
        name = e.target.name
        value = e.target.value
        setData({...data,[name]:value})

    }
    let religion = ["Hindu","Muslim","Christian","Sikh","Parsi","Jain","Buddhist","Jewish","No_Religion","Spiritual","Other"]
    let motherTounge = ["Hindi","English","Marathi","Punjabi","Bengali","Gujarati","Urdu","Telugu","Kannada","English", "Tamil","Oriya","Marwari","More","Aka",
        "Arabic","Arunachali","Assamese","Awadhi","Baluchi","Bengali","Bhojpuri","Bhutia","Brahui","Brij","Burmese","Chattis,garhi","Chinese",
        "Coorgi","Dogri","English,","French","Garhwali,","Garo","Gujarati","Haryana","Himachal","Pahari","Hindi","Hindko","Kakbarak,","Kanauji", "Kannada","Kashmiri",
        "Khandesi","Khasi","Konkani,","Koshali","Kumaoni","Kutchi","Ladakhi","Lepcha","Magahi","Maithili,", "Malay","Malayal","Manipuri", "Marathi","Marwari","Miji","Mizo","Monpa","Nepali","Odia","Pashto","Persian",
        "Punjabi","Rajasthan","Russian","Sanskrit","Santhali","Seraiki","Sindhi","Sinhala","Sourashtr","Spanish","Swedish","Tagalog","Tamil","Telugu","Tulu","Urdu","Other"]
  return (
    <>
    <Header>
        <h1>marriageorbit.com</h1>
    </Header>
    <CreateSection>
        <Card>
         <Form>
             <h1>Just a few questions your about.</h1>
             <label>Your Religion</label>
             <select name='religion'  onChange={handalChange} value={data.religion}>
             <option >Select</option>
                 {religion.map((ele)=>{
                     return <option >{ele}</option>
                 })}
             </select>
             <label>Sub Community</label>
             <select name='religion'  onChange={handalChange} value={data.religion}>
             <option >Select</option>
                 {religion.map((ele)=>{
                     return <option >{ele}</option>
                 })}
             </select>
             <label>Your Mother Tongue</label>
             <select name='tounge'  onChange={handalChange} value={data.tounge}>
             <option >Select</option>
                 {motherTounge.map((ele)=>{
                     return <option >{ele}</option>
                 })}
             </select>
             <label>Your highest qaulification *</label>
             <input name='qaulification' onChange={handalChange} value={data.qaulification} placeholder='Enter Your Qualification' type="text" />
             <label>Your University</label>
             <input name='collage' onChange={handalChange} value={data.collage} placeholder='Enter your University' type="text" />
             <label>Your work with</label>
             <select name='work'  onChange={handalChange} value={data.work}>
               <option >Select</option>
                 <option>Bussiness</option>
                 <option>Self Employed</option>
                 <option>Salaried</option>
                 <option>Govt Employed</option>
                 <option>Private Firm</option>
                 <option>Not Work</option>
             </select>
             <button onClick={submitForm}><Link to="/top-matches">Continue</Link></button> 
         </Form>
        </Card>
    </CreateSection>
    <SectionFooter>
    <Footer/>
    </SectionFooter>
    </>
  )
}

export default Steptwo;
const Header = styled.div`
display:flex;
justify-content:space-around;
margin:12px;
> h1 {
    font-family:romon
}
@media (max-width:500px) {
    display: none;
}`
const CreateSection = styled.div`
background-color:#E8E8E8;
display:flex;
justify-content:center;
padding-top:24px;
@media (max-width:500px) {
    background-color: white;
}`
const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color:white;
margin-bottom:24px;
border-radius:6px;
@media (max-width:500px) {
    box-shadow: none;
}
`
const Form = styled.div`
padding: 20px 20px 20px 20px;
display:flex;
height:auto;
flex-direction:column;
> h1 {
    font-size:28px;
    font-weight:400;
}
>label {
    margin-bottom:8px;
    padding:5px;
}
>input {
    margin-bottom:8px;
    padding:5px;
    border:1px solid #FFA500;
}
> input:focus {
    outline:none;
}
>select {
    margin-bottom:8px;
    padding:5px;
    border:1px solid #FFA500;
    outline:none;
    height:35px;
    font-size:14px;
}
>button {
    margin-top:8px;
    height:40px;
    background-color:#FFA500;
    border:1px solid #FFA500;
    color:white;
    font-weight:700;

}
>button a {
    text-decoration:none;
    color:white;
}`
const SectionFooter = styled.div`
@media (max-width:500px) {
    display: none;
}`