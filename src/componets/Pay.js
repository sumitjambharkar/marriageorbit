import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
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
    <div className='card1'>
      <>
      <div className='container'>
        <div className='row'>
         <div className='col-md-12 text-center mt-5 ca'>
         <h2>Select Membership Package</h2>
         </div>

          <div className='col-md-3 mt-5'>
            <div className='card'>
              <p>MOST POPULAR</p>
              <strong><span>Gold</span> 3 Months</strong>
              <span>r3999</span>
              <ul>
                <li> 150 Contact</li>
                <li>Perfect E-Matches</li>
                <li>Unlimited Personalized messages</li>
                <li> Bold Listing</li>
                <li> Astro Matching</li>
              </ul>
              <a>Buyow</a>
            </div>
          </div>

          <div className='col-md-3 mt-5'>
            <div className='card'>
              <p>MOST POPULAR</p>
              <strong><span>Diamond</span> 6 Months</strong>
              <span>r5999</span>
              <ul>
                <li> 250 Contact</li>
                <li>Perfect E-Matches</li>
                <li>Unlimited Personalized messages</li>
                <li> Bold Listing</li>
                <li> 100 Astro Matching</li>
              </ul>
              <a>Buyow</a>
            </div>
          </div>

          <div className='col-md-3 mt-5'>
            <div className='card'>
              <p>MOST POPULAR</p>
              <strong><span>Platinum </span> 9 Months</strong>
              <span>r7999</span>
              <ul>
                <li> 150 Contact</li>
                <li>Perfect E-Matches</li>
                <li>Unlimited Personalized messages</li>
                <li> Bold Listing</li>
                <li> 200 Astro Matching</li>
              </ul>
              <a>Buyow</a>
            </div>
          </div>

          <div className='col-md-3 mt-5'>
            <div className='card'>
              <p>MOST POPULAR</p>
              <strong><span>Star </span> Till Marriage</strong>
              <span>r3999</span>
              <ul>
                <li> 150 Contact</li>
                <li>Perfect E-Matches</li>
                <li>Unlimited Personalized messages</li>
                <li> Bold Listing</li>
                <li> 250 Astro Matching</li>
              </ul>
              <a>Buyow</a>
            </div>
          </div>

        </div>
      </div>
      </>
    </div>
    </>
  );
}

export default App;
