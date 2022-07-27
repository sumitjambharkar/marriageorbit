import React from 'react';
import Head from './Head';
import Abouts from './Abouts';
import Story from './Story';
import Main from './Main';
import styled from '@emotion/styled';
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <>
   
    <Head/>
    <Section>
    <Main/>
    <Story/>
    <Abouts/>
    </Section>
    </>
  )
}

export default Home;

const Section = styled.div`
@media (max-width:500px) {
  
}`