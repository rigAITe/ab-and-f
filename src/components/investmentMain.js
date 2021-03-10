import React from 'react'
import Header from '../header/header'
import { Footer } from './footer'
import { Carousel } from './investmentCarousel'
import { NavLink } from 'react-router-dom'


const InvestmentMain = () => {

    return(
        <div className="x">
            <div className="head">
                <div  className="contain">
                    <Header/>
                </div>
            </div>
            <div className="contain">
                <div className="x-one">
                    <div className="x-y">
                        <h2>Global Silver Investment</h2>
                        <p>People are usually looking for the real estates which are well managed and sounds appealing to them.  Investing in real estate is a long term approach and yields high profit in future at a low-risk level. </p>
                        <p>Invest in this plan of ours for 3 months with a minimum investment of 200k and get 12% ROI.</p>

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

export { InvestmentMain }