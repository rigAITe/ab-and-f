import React from 'react'
import AboutImage from '../images/abtUs.jpg'

const About = () => {

    return(
        <div className="about-bg">
            <div className="about">
            <h2>Find Your Next Perfect Place to Live</h2>
                <div className="about-inner">
                    <div className="x-text">
                        <p>We are on a mission to turn one of life’s most stressful events into an easy one. To do this, we’ve combined our experience, expertise and diverse market knowledge, to help maximize your finances to attain an exponential growth.</p>

                        <p>We deliver from the heart, with passion, ensuring our green spirit shines through in everything we do.</p>
                        <p>We cover all property sectors, with specialists in residential, commercial, mixed use and strategic land projects, serving the interests of land owners, property companies, registered providers, house builders. Our primary objective is to seek development opportunities for clients and use expertise to add value, build and manage a range of exciting projects.</p>
                        <p>Also, our investment packages has been carefully designed to fit into various budget with attractive ROI.</p>
                    </div>
                    <div>
                        <img src={AboutImage} alt="Imag"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About