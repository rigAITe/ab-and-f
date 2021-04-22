import React from 'react'
import Facebook from '../assets/facebookIcon2.svg'
import Instagram from '../assets/instagramIcon2.svg'
import Twitter from '../assets/twitter.svg'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className="footer">
            <div className="contain">
                <div className="foot">
                    <div className="footer-inner">
                        <div><h2>Your Next Comfort <span>Zone</span></h2></div>
                        <div className="buttons">
                            <NavLink to="/invest">Book Now</NavLink>
                        </div>
                    </div>
                    <div className="footer-inner-x">
                        <div className="social">
                            <div><a target="_" href="https://www.facebook.com/AB-F-Global-103101605187781/"><img src={Facebook} alt="Facebook Icon"/></a></div> 
                            <div><a target="_" href="https://www.instagram.com/abandf_global"><img src={Instagram} alt="Instagram Icon"/></a></div> 
                            <div><a target="_" href="https://twitter.com/abandf_global"><img src={Twitter} alt="Instagram Icon"/></a></div>
                        </div>
                        <div className="footer-inner-z">
                            <div>
                                <p>Projects</p>
                                {/* <p><Link to="/estate" >GloryVille</Link></p> */}
                                <p><Link to="/housing" >Housing</Link></p>
                                <p><Link to="/estate" >Estate</Link></p>
                                <p><Link to="/investment" >Investment</Link></p>
                            </div>
                            <div>
                                <p>Company</p>
                                <p><NavLink to="/">About Us</NavLink></p>
                                <p><NavLink to="/">Be a partner</NavLink></p>
                                <p><NavLink to="/contact">Contact Us</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer }