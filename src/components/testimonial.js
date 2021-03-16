import React from 'react'
import Image from '../images/testimonial.svg'

const Testimonial = () => {

    return(
        <div className="testimonial">
            <div className="testimonial-inner">
                <h1>Testimonials</h1>
                <img src={Image} alt="Imag"/>
                <p>“AbandF Real Estate Team worked with us from mid-August identifying the right property to meet our needs. They always ensured accessibility and williness to make a variety of suggestions and options as we tried to make the right decision. We feel we have a trustworthy team, as well as a friend! Thank you, AbandF!”</p>
                <h4>Tade Ogunsanya</h4>
            </div>
        </div>
    )
}

export {Testimonial }