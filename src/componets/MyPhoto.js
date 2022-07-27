import UploadFileIcon from '@mui/icons-material/UploadFile';
import {Helmet} from "react-helmet";

function MyPhoto() {
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
 
      <title>My Photo</title>
      
      <link rel="icon" href="imagelink.png" sizes="16x16" type="image/png"></link>
      </Helmet>
        <div className="con mt-5">
          <div className='container cono'>
            <div className='row'>
              <div className='col-md-11 sm-12 mt-5'>
                <div className="photo mt-4">
                  <div className='row' width="90%">
                  
                    <div className="col-md-3">
                      <div className="img mt-5">

                      </div>
                    </div>

                    <div className="col-md-9">

                      <div className="row mt-4">
                        <div className="text">
                          <strong>Add your photo and</strong>
                          <h2>get 5 times more responses!</h2>
                        </div>
                      </div>

                      <div className="row text-center mt-5">
                        <div className="col-md-5">
                          <div className="textt">
                        <input type="file"/>
                        <a><UploadFileIcon/>Uplod</a>
                          </div>
                        </div>

                        <div className="col-md-1">
                          <strong>OR</strong>
                        </div>

                        <div className="col-md-5">
                          <div className="textt">
                            <a>Photo at</a>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-5">
                      <div className=" col-md-12  textta">
                        <p>Note : Only Image formats allowed. Image size should be upto 10MB</p>
                       </div>
                      </div>





                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='container'>
    <div className='row mt-5 mb-5'>
    <div className='col-md-3'>
     <div className='pic'>
      <div className='pic1'>
       <span>Profile Id: </span>
       <p>25 hindu India</p>
       <p>other</p>
      </div>
     </div>
     </div>

     <div className='col-md-3'>
     <div className='pic'>
      <div className='pic1'>
       <span>Profile Id: </span>
       <p>25 hindu India</p>
       <p>other</p>
      </div>
     </div>
     </div>

     <div className='col-md-3'>
     <div className='pic'>
      <div className='pic1'>
       <span>Profile Id: </span>
       <p>25 hindu India</p>
       <p>other</p>
      </div>
     </div>
     </div>

     <div className='col-md-3'>
     <div className='pic'>
      <img src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'alt=''/>
      <div className='pic1'>
       <span>Profile Id: </span>
       <p>25 hindu India</p>
       <p>other</p>
      </div>
     </div>
     </div>
    </div>
  </div>
      </>
  );
}

export default MyPhoto;
