import React from 'react'
// import Header from '../header/header'
import { Footer } from './footer'
import { NavLink } from 'react-router-dom'
import { Carousel } from './estateCarousel'
import Navbar from "../components/nav/nav"

const Estate = (props) => {

    return(    <>
        <Navbar  {...props} />

        <div className="x x-housing">
            {/* <div className="head">
                <div  className="contain">
                    <Header/>
                </div>
            </div> */}
            <div className="contain">
                <div className="x-one">
                    <div className="x-y">
                        <h2>Estates</h2>
                        <p>Our delight is in delivering top notch houses to our clients. In a bid to reduce housing deficit in Nigeria, we put in a lot of effort into providing affordable luxurious modern houses.</p>
                        <p>Our estates are in close proximity to some of the city’s most popular landmarks with apartments ranging from 2 bedrooms to 4bedrooms that comes in bungalows and duplexes.</p>
                        <p>With basic infrastructures like security gatehouse, estate drainage, paved road, CCTV, you’ll be living the life of your dreams!</p>
                        <NavLink to="/invest"><div className="buttons">Book Now</div></NavLink>

                    </div>
                    <div className="x-z">
                        <Carousel/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export { Estate }