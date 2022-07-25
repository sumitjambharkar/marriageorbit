import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import { auth, db } from './firebase';


const Profile = () => {

    const [data, setData] = useState({
        city: "",
        family : "",
        maritalStatus: "",
        diet : "",
        height : "",
        state:""
    })

        const submitForm = (e)=>{
            console.log(data);
            e.preventDefault() 
            const {city,family,maritalStatus,diet,height,state} = data
            auth.onAuthStateChanged(user=>{
                if(user){
                    db.collection("users").doc(user.uid).collection("userdata1").add({
                        city:city,
                        family:family,
                        diet:diet,
                        maritalStatus:maritalStatus,
                        height:height,
                        state:state
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
   

    const height = [4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6.0,6.1,
                   6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,6.0,7.0,7.1 ]
    const city = ['Mumbai','Delhi','Chennai','Bangalore','Hyderabad','Pune','Kochi','Kolkata']

    const state = ["Andhra Pradesh","Arunachal Pradesh","Assam"	,"Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal ","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Nagaland",	"Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
           
  return (
    <>
    <Header>
        <h1>marriageorbit.com</h1>
    </Header>
    <CreateSection>
        <Card>
         <Form>
             <h1>Let's Create Your Profile Now</h1>
             <label>City you live in *</label>
             <select  name='city'   onChange={handalChange} value={data.city}>
                 <option >Select</option>
                 {city.map((ele)=>{
                     return <option >{ele}</option>
                 })}
             </select>
             <label>State *</label>
             <select autoComplete='off' required name='state'   onChange={handalChange} value={data.state}>
                 <option >Select</option>
                 {state.map((ele)=>{
                     return <option >{ele}</option>
                 })}
             </select>
             <label>you live with your family</label>
             <select autoComplete='off' required name='family'   onChange={handalChange} value={data.family}>
                 <option >Select</option>
                 <option >Yes</option>
                 <option >No</option>
             </select>
             <label>your Marital Status</label>
             <select autoComplete='off' required name='maritalStatus'   onChange={handalChange} value={data.maritalStatus}>
             <option >Select</option>
                 <option>Married</option>
                 <option>Never Married</option>
                 <option>Divorce</option>
             </select>
             <label>your diet</label>
             <select autoComplete='off' required name='diet'  onChange={handalChange} value={data.diet}>
             <option >Select</option>
                 <option >Veg</option>
                 <option >No-Veg</option>
                 <option >Jain</option>
                 <option >Veg & No-Veg</option>
             </select>
             <label>your height</label>
             <select autoComplete='off' required name='height' onChange={handalChange} value={data.height}>
             <option >Select</option>
                {height.map((ele)=>{
                    return  <option >{ele}</option>
                })}
             </select>
             <button onClick={submitForm} ><Link to="/profile/step/2">Continue</Link></button>
             
         </Form>
        </Card>
    </CreateSection>
    <SectionFooter>
    <Footer/>
    </SectionFooter>
    </>
  )
}

export default Profile;
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
border-radius:6px;
margin-bottom:24px;
@media (max-width:500px) {
    box-shadow:none;
}
`
const Form = styled.div`
padding: 20px 20px 20px 20px;
display:flex;
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
    font-size: 14px;
}
>button {
    margin-top:8px;
    height:40px;
    background-color: #FFA500;
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
