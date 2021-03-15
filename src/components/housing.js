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
                        <p>Our luxurious and affordable houses has been carefully designed to complete your dream.This gorgeous and nearly perfect house will stun you with its modern and dazzling interior finishes. Each piece sitting on a 250sqm has enough space for everyone in the family. It’s hard to list all the indoor and outdoor features of this stunning homes. Schedule a tour today!</p>
                        <div className="x-y-inner">
                            <div>
                                <span>-Book an Inspection</span>
                                <p>We are always ready and delighted to show you around some of our properties.This enables you to compare various features so as to make a decision that suits your taste.</p>
                            </div>
                            
                            <div>
                                <span>-Fill and submit your subscription form.</span>
                                <p>We advice you take your time to properly do this, as we would like to have even to the slightest information correctly.</p>            
                            </div>

                            <div>
                                <span>-Payment Preparations</span>
                                <p>We are happy your loved what you see, and you want it as your next comfort zone. Make payment directly into any of our company’s account and we will begin  the paperworks. </p>
                            </div>
                        </div>
                        <NavLink to="/invest"><div className="buttons">Book Now</div></NavLink>
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