import React from 'react'
// import Header from '../header/header'
import MainHeader from './mainHeader'
import About from './about'
import VisMif from './misVis'
import Core from './core'
//  
import { ChooseUs } from './chooseUs'
import { Address } from './address'
import { Footer } from './footer'
import Navbar from "../components/nav/nav"
import { Testimonial } from './testimonial'
import Ourservices from './ourservices'

const Home = (props) => {

    return (
        <>
            <Navbar  {...props} />
            <div className="x-home">
                {/* <div className="head">
                <div className="contain head">
                    <Header/>
                </div>
            </div> */}
                <MainHeader history={props.history}/>
                <About />
                <VisMif />
                <Core />
                <Ourservices />
                {/* <Buy/> */}
                {/* <div className="buy-nowBg">
                <BuyNow/>
            </div> */}
                {/* <Investment/> */}
                <ChooseUs />
                <Testimonial/>
                <Address />
                <Footer />
            </div>
        </>
    )
}

export default Home