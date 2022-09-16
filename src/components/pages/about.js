import './about.css'

import React, {useState} from 'react'

import pic from '../images/pic-2.png'

const About = () => {

  const [click, setClick] = useState(false);
  const Toggle = () => setClick(!click);

  
  return (
    <>
      <section className="about" id='about'>
        <div className="about-container">
          <div className="about-box" id='name'>
            <h1>Bassey Samuel</h1>
            <p>
              I am a frontend web developer, with expertise in developing designs
              into fully functionl websites. I have one and half a year working experience in frontend
              web developemt with the latest web technologies, like React Js.
              I also build your web application to mobile responsive.
            </p>
            <button className='hire-button' id='hire-button' onClick={Toggle}>Hire me &#8663;</button>
          </div>
          <div className="about-box" id='pix-box'>
            <img src={pic} alt="profile-pic" className='profile-pix' />
          </div>
          
          {click &&
            <div className='hire-me-modal' id='hire-me-modal'>
              <div className="modal-content" id='modal-content'>
                <p><b>Phone Number:</b> 00 11 22 33 44 55</p>
                <p> <b>Email: </b>kextracol@gmail.com</p>
              </div>
          </div>

          }
        </div>
      </section>
      
    </>
  )
}

export default About
