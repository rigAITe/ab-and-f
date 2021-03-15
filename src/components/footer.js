import React from 'react'
import Facebook from '../assets/facebookIcon2.svg'
import Instagram from '../assets/instagramIcon2.svg'
import Twitter from '../assets/twitter.svg'
import { NavLink } from 'react-router-dom'


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
                            <div><a target="_" href="/"><img src={Facebook} alt="Facebook Icon"/></a></div> 
                            <div><a target="_" href="/"><img src={Instagram} alt="Instagram Icon"/></a></div> 
                            <div><a target="_" href="/"><img src={Twitter} alt="Instagram Icon"/></a></div>
                        </div>
                        <div className="footer-inner-z">
                            <div>
                                <p>Projects</p>
                                <p>GloryVille</p>
                                <p>Housing</p>
                                <p>Estate</p>
                                <p>Investment</p>
                            </div>
                            <div>
                                <p>Company</p>
                                <p>About Us</p>
                                <p>Be a partner</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer }