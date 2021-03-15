import React from 'react'
import Header from '../header/header'
import MainHeader from './mainHeader'
import About from './about'
import VisMif from './misVis'
import Core from './core'
//  
import { ChooseUs } from './chooseUs'
import { Address } from './address'
import { Footer } from './footer'


const Home = () => {

    return(
        <div>
            <div className="head">
                <div className="contain head">
                    <Header/>
                </div>
            </div>
            <MainHeader/>
            <About/>
            <VisMif/>
            <Core/>
            {/* <Buy/> */}
            {/* <div className="buy-nowBg">
                <BuyNow/>
            </div> */}
            {/* <Investment/> */}
            <ChooseUs/>
            <Address/>
            <Footer/>
        </div>
    )
}

export default Home