import './project.css'

import { FaArrowDown } from 'react-icons/fa'
import React from 'react'
import advice from '../images/advice.JPG'
import { click } from '@testing-library/user-event/dist/click'
import tasty from '../images/tasty.JPG'
import build from '../images/build.JPG'
import coffee from '../images/coffee.JPG'
import tour from '../images/tour.JPG'
import { useState } from 'react'
import food from '../images/Food.JPG'

const Project = () => {

  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
    
  const SeeMore = () => setToggle(!toggle);
  const Close =()=>setClick(!click)


  return (
      <section className='project' id='project'>
          <h1>
              My Projects <span>.</span>
          </h1>
        <section className="project-1" id="tcc">
          <div className="card" id='tcc-img-card'>
          <img src={tour} alt="tour-website" />
          </div>
          <div className="card" id='tcc-description'>
            <h2>01</h2>
            <h3>kextraco Tour website</h3>
            <p>
            Web application developed for Tour site. Adventure is worthwhile, dicover a new place.
            </p>
            <a href="https://genzy-bassey.github.io/Tour-site/" target={'_blank'}>view site &#8663;</a>
          </div>
        </section>
      
        <section className="project-2" id="eesa">
          <div className="card" id='eesa-img-card'>
            <img src={ tasty } alt="eesa-website" />
          </div>
          <div className="card" id='eesa-description'>
            <h2>02</h2>
            <h3>Tasy Food</h3>
            <p>
              Try the best Food of the week.
            </p>
            <a href="https://genzy-bassey.github.io/Restaurant-site/" target={'_blank'}>view site &#8663;</a>
          </div>
        </section>

        <section className="project-1" id="tcc">
          <div className="card" id='tcc-img-card'>
            <img src={food} alt="food-website" />
          </div>
          <div className="card" id='tcc-description'>
            <h2>03</h2>
            <h3>Food Site</h3>
            <p>
              Our special dish developed Web application site.
            </p>
            <a href="https://genzy-bassey.github.io/Food-Site/" target={'_blank'}>view site &#8663;</a>
          </div>
        </section>
        <div className='see-more' onClick={Close}>{/*========= toggle button=========*/}
          <button className='toggle-button' onClick={SeeMore}>{click? "see less":"see more" }</button>
        </div>
      {toggle &&
        
        <div className='toggle'>
          <section className="project-2" id="eesa">
            <div className="card" id='eesa-img-card'>
              <img src={ build } alt="eesa-website" />
            </div>
            <div className="card" id='eesa-description'>
              <h2>04</h2>
              <h3>kextraco community</h3>
              <p>
              Kextraco, re-imagines the way we build communities. 
              You have a voice, but so does your audience. 
              Create connections with your users as you engage in genuine discussion. 
              </p>
              <a href="https://genzy-bassey.github.io/Folla/" target={'_blank'}>view site &#8663;</a>
            </div>
          </section>
          <section className="project-1" id="tcc">
            <div className="card" id='tcc-img-card'>
              <img src={coffee} alt="tcc-website" />
            </div>
            <div className="card" id='tcc-description'>
              <h2>05</h2>
              <h3>coffee site</h3>
              <p>
                Have a Fresh coffee in the morning
              </p>
              <a href="https://genzy-bassey.github.io/coffee-shop-site/" target={'_blank'}>view site &#8663;</a>
            </div>
          </section>

          <section className="project-2" id="eesa">
            <div className="card" id='eesa-img-card'>
              <img src={ advice } alt="advice app" />
            </div>
            <div className="card" id='eesa-description'>
              <h2>06</h2>
              <h3>Simple Advice app</h3>
              <p>
                A simple advice application that display minute advice to keep one in line.
                hold the door open for the next person 
              </p>
              <a href="https://genzy-bassey.github.io/AdviceApp/" target={'_blank'}>view site &#8663;</a>
            </div>
          </section>
        </div>
        
      }
    </section>
  )
}

export default Project
