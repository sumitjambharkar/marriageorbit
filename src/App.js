import './App.css';
import React, { useEffect } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CoupleDetails from './componets/CoupleDetails';
import Video from './componets/Video';
import Tellus from './componets/Tellus';
import Profile from './componets/Profile';
import Steptwo from './componets/Steptwo';
import Topmatch from './componets/Topmatch';
import About from './componets/About';
import Home from './componets/Home'
import HomeSection from './componets/HomeSection';
import View from './componets/View';
import { useDispatch, useSelector} from 'react-redux';
import {selectUser,login,logout} from './componets/userSlice';
import { auth } from './componets/firebase';
import Contact from './componets/Contact';
import Policy from './componets/Policy';
import Sitemap from './componets/Sitemap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './componets/ScrollToTop';
import MyProfile from './componets/MyProfile';
import Chats from './componets/Chats';
import BuySub from './componets/BuySub';
import PayHome from './componets/PayHome';
import Chat from './componets/chat/Chat';
import PrivateRoute from './PrivateRoute';
import SearchPage from './componets/SearchPage';
import MyPhoto from './componets/MyPhoto';

import Filter from './componets/Filter'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
        email:userAuth.email,
        name :userAuth.name,
        password: userAuth.password
        }))
      }else{
        dispatch(logout({
          isOnline:false
        }))
      }
    })
    
  }, [])
  
  return (
    <>
    <Router>
      <ScrollToTop/>
      <ToastContainer  theme="colored" position="top-center"/>
    <Switch>
         {!user ?
        <Route exact path="/">
          <Home/>
        </Route> :
        <>
        {/* {user.email === "shraddha@gmail.com" || user.email === "abc@gmail.com" || user.email === "ssjambharkar@gmail.com" ? <Route exact path="/"><HomeSection/></Route> :<Route exact path="/"><PayHome/></Route> } */}
        <Route exact path="/">
          <HomeSection/>
        </Route>
        <Route exact path="/view/:Id">
        <View/>
      </Route>
      <Route exact path="/view/:Id/buy">
        <BuySub/>
      </Route>
      <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/privacy-policy">
            <Policy/>
          </Route>
          <Route exact path="/sitemap">
            <Sitemap/>
          </Route>
          <PrivateRoute exact path="/profile/step/2">
            <Steptwo/>
          </PrivateRoute>
          <Route exact path="/top-matches">
            <Topmatch/>
          </Route>
          <Route exact path="/my-profile">
            <MyProfile/>
          </Route>
          <Route exact path="/connect-match">
            <PayHome/>
          </Route>
      <Route exact path="/chats/:roomId">
        <Chats/>
      </Route>
      <Route exact path="/chat">
        <Chat/>
      </Route>
      <Route exact path="/search">
        <SearchPage/>
      </Route>

      <Route exact path="/Filter">
        <Filter/>
        </Route>
      <Route exact path="/MyPhoto">
        <MyPhoto/>
      </Route>

      </>
          }
  
          <Route exact path="/couple/:personId">
            <CoupleDetails/>
          </Route>
          <Route exact path="/video">
            <Video/>
          </Route>
          <Route exact path="/tellus">
            <Tellus/>
          </Route>
          <Route exact path="/top-matches">
            <Topmatch/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/privacy-policy">
            <Policy/>
          </Route>
          <Route exact path="/sitemap">
            <Sitemap/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
