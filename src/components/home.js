import React from 'react'
import Header from '../header/header'
import MainHeader from './mainHeader'
import About from './about'
import VisMif from './misVis'
import Core from './core'
import Buy from './buy'
import { BuyNow } from './buy-now'
import { Investment } from './investment'
import { ChooseUs } from './chooseUs'
import { Address } from './address'
import { Footer } from './footer'


const Home = () => {

    return(
        <div>
            <div className="head">
                <div className="container head">
                    <Header/>
                </div>
            </div>
            <MainHeader/>
            <About/>
            <VisMif/>
            <Core/>
            <Buy/>
            <div className="buy-nowBg">
                <BuyNow/>
            </div>
            <Investment/>
            <ChooseUs/>
            <Address/>
            <Footer/>
        </div>
    )
}

export default Home