import React from 'react';
import "../App.css";

const Gallery = () => {
  return (
    <>
    {/* <div className='gallery'>
     <div className='container'>

     </div>
    </div> */}

    <div className='container text-center'>
     <div className='row mt-5'>
        <h1>Our Gallery</h1>
        <p>Lorem ipsum do Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://images.unsplash.com/photo-1616165415772-f5b95c3ae135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHw%3D'alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://cdn0.weddingwire.in/article/7282/3_2/960/jpg/42827-newly-married-couple-dipak-studios-lead.jpeg'alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://cdn0.weddingwire.in/vendor/0413/3_2/960/jpeg/aashu-photo-studio-1_15_250413-1567773198.jpeg'alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://cdn0.weddingwire.in/article/1790/3_2/1280/jpg/40971-married-couple-qoutes-thelightsmiths-kiss.jpeg'alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://media.istockphoto.com/photos/found-my-queen-in-you-picture-id1174343486?k=20&m=1174343486&s=612x612&w=0&h=tADis8k8Bt1E-S8xNk1jPawEwRow5oeVCLn0ptibnBE='alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://cdn0.weddingwire.in/article-vendor-o/5446/3_2/960/jpg/kerala-palakkad-wedding-photography-glareart-photography-15_15_135446_v1.jpeg'alt=''/>
            </div>
        </div>

     </div>
    </div>
    </>
  )
}

export default Gallery