import React from 'react'
import Header from '../header/header'
import { Footer } from './footer'
import { Carousel } from './housingCarousel'
import { NavLink } from 'react-router-dom'




const Housing = () => {

    return(
        <div className="x">
            <div className="head">
                <div  className="contain">
                    <Header/>
                </div>
            </div>
            <div className="contain">
                <div className="x-one">
                    <div  className="x-y">
                        <h2>2 Bedrooms Bungalow at N17m </h2>
                        <p>If you’re looking for a simple and affordable two-bedroom semi detached bungalow, your search ends here! This collection contains floor plans for a variety of 2 bedroom house plans. Pay initial deposit of 3 million.</p>
                        <p>These two bedroom tiny houses are perfect for newly-weds looking for their first home, or for a family requiring efficient use of space. 2 bedroom house designs can also be converted into rental properties, residential space for retirees, staff quarters, and more. This collection comes with two bedroom house plans in various styles and specifications.</p>
                        <NavLink to="/buy-form"><div className="buttons">Book Now</div></NavLink>

                    </div>
                    <div  className="x-z">
                        <Carousel/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export { Housing }