import React from 'react'
// import Header from '../header/header'
import { Footer } from './footer'
import { Carousel } from './investmentCarousel'
import { NavLink } from 'react-router-dom'
import Navbar from "../components/nav/nav"


const InvestmentMain = (props) => {

    return(
        <>
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
                        <h2>Investments</h2>
                        <p>People are usually looking for the real estates which are well managed and sounds appealing to them.  Investing in real estate is a long term approach and yields high profit in future at a low-risk level. </p>
                        <h2 className="h2">How to Invest</h2>
                        <p>-Fill and submit our investment form alongside a valid ID card.</p>
                        <p>-Make payment directly into any of our company’s accounts.</p>
                        <p>-Send us a prove of payment for confirmation.</p>
                        <p>-Start countdown to your due date.</p>
                        <NavLink to="/invest"><div className="buttons">Invest Now</div></NavLink>

                    </div>
                    <div  className="x-z">
                        <Carousel/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export { InvestmentMain }