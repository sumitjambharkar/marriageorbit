import React from 'react'
import styled from 'styled-components'
const Location = () => {

    

    return(
        <>

        {/* ==================Start Location===================== */}
        <Section><br></br>
            <strong>Filter By Categories</strong>
        <div class="dropdown">
  <button class="dropbtn">Select Location</button>
  <div class="dropdown-content">
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>


  </div>
</div>

        </Section>
 {/* ==================End Location===================== */}


 {/* ==================Start Age===================== */}
        <Section>
        <div class="dropdown">
  <button class="dropbtn">Select Age</button>
  <div class="dropdown-content">
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>


  </div>
</div>

        </Section>

 {/* ==================End Age===================== */}



 {/* ==================Start Height===================== */}
        <Section>
        <div class="dropdown">
  <button class="dropbtn">Select Height</button>
  <div class="dropdown-content">
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>


  </div>
</div>

        </Section>
        
 {/* ==================End Height===================== */}





 
 {/* ==================Start Religion===================== */}
 <Section>
        <div class="dropdown">
  <button class="dropbtn">Select Religion</button>
  <div class="dropdown-content">
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>


  </div>
</div>

        </Section>
        
 {/* ==================end Religion===================== */}



 
 {/* ==================End mothertounge===================== */}
 <Section>
        <div class="dropdown">
  <button class="dropbtn">Select Mothertounge</button>
  <div class="dropdown-content">
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>
 <li>Mumbai</li>


  </div>
</div>

        </Section>
        
 {/* ==================End mothertounge===================== */}

        </>
    )

}
export default Location
const Section = styled.div`
.dropbtn {
    background-color: #ffa500;
    color: white;
    padding: 10px;
    width: 270px;
    font-size: 16px;
    margin-top: 40px;
    border: none;

    cursor: pointer;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
    transition:0.3s;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    transition:0.3s;
    min-width: 270px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
  
    text-decoration: none;
    display: block;
  }
  .dropdown-content li{
    list-style:none;
    cursor:pointer;
    transition:0.3s;
 
padding:10px;
}


  .dropdown-content li:hover {background-color: #fab90a;color:#fff;}
  
  .dropdown:hover .dropdown-content {
    display: block;
    transition:0.3s;
  }
  
  .dropdown:hover .dropbtn {
    background-color: #ff8507;


  }

`