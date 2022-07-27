import React from 'react';
import Head from './Head';
import Abouts from './Abouts';
import Story from './Story';
import Main from './Main';
import styled from '@emotion/styled';
import {Helmet} from "react-helmet";
import Meta from './Meta';


const Home = () => {
  return (
    <>
    <Helmet>
     
      </Helmet>
    <Head/>
    <Section>
    <Main/>
    <Story/>
    <Abouts/>
    <Meta/>
    </Section>
    </>
  )
}

export default Home;

const Section = styled.div`
@media (max-width:500px) {
  
}`