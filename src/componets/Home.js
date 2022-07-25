import React from 'react';
import Head from './Head';
import Abouts from './Abouts';
import Story from './Story';
import Main from './Main';
import Footer from './Footer';
import styled from '@emotion/styled';
import Filter from './Filter';

const Home = () => {
  return (
    <>
    <Head/>
    <Section>
    <Main/>
    <Story/>
    <Abouts/>
    <Footer/>
    </Section>
    </>
  )
}

export default Home;

const Section = styled.div`
@media (max-width:500px) {
  
}`