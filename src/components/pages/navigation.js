import './navigation.css'

import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import pic from '../images/logo kextraco.png'

//import { animateScroll as scroll } from 'react-scroll'

const Navigation = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    const closeMenu=()=>setClick(false)
        
  return (
        <>
            <BrowserRouter>
                <nav className="nav-bar">
                    <div className="logo">
                        <HashLink smooth to='/#' onClick={ closeMenu }>
                          <img src={pic} alt="img" width={50} height={50} />
                        </HashLink>
                  </div>
                  <div className="hamburger" onClick={handleClick}>
                      {click ? (<FaTimes size={40} style={{ color: '#fff' }} />) :
                          (<FaBars size={40} style={ {color:'#fff'}} />)
                      }
                  </div>
                    
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <HashLink
                              to='#about'
                              spy="true"
                              smooth={true}
                              activeClass="active"
                              offset={-80}
                              duration={500}
                              onClick={ closeMenu }
                            >
                                about
                            </HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink
                                to='/#skill'
                                spy="true"
                                smooth={true}
                                activeClass="active"
                                offset={-80}
                                duration={500}
                                onClick={ closeMenu }
                            >
                                skill
                            </HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink
                                to='/#project' 
                                spy="true" 
                                smooth={true} 
                                activeClass="active"
                                offset={-40}
                                duration={500}
                                onClick={ closeMenu }
                            >
                                project
                            </HashLink>
                      </li>
                      <li className="nav-item">
                            <HashLink
                                to='/#contact' 
                                spy="true" 
                                smooth={true} 
                                activeClass="active"
                                offset={-70}
                                duration={500}
                                onClick={ closeMenu }
                            >
                                contact
                            </HashLink>
                        </li>
                  </ul>
                </nav>
            </BrowserRouter>
      
        </>
    )
}

export default Navigation
