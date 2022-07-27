import { Container } from '@mui/material';
import { height } from '@mui/system';
import React from 'react'
import ScrollArea from 'react-scrollbar';
const Meta = () => {
  return (
    <Container>
        <h1 style={{textAlign:"center",fontSize:"24px", fontWeight:600, marginTop:"25px"}}>We Are Avialble In Several Locations</h1>
    <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{height:100, color:"#666666", marginBottom:"25px",padding:"5px", border:"1px solid #ffa500"}}
            > 
            <div>Some long content.</div>
            <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div>
            <div>Some long content.</div>
            <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div>
            <div>Some long content.</div>
            <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div> <div>Some long content.</div>
            
            
          </ScrollArea>
          </Container>
  )
}

export default Meta