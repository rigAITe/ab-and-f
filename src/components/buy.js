import React from 'react'
import One  from '../images/one.svg'
import Two  from '../images/two.svg'
import Three  from '../images/three.svg'
import ThreeImage  from '../images/threeImage.jpg'
import TwoImage  from '../images/twoImage.jpg'
import OneImage  from '../images/oneImage.jpg'


const Buy = () => {

    return(
        <div className="buy">
            <div className="container">
                <div className="buy-inner">
                    <div className="buy-inner-one ">
                        <div className="imageOne">
                            < img src={One} alt= "Img"/>
                        </div>
                        <div>
                            <h2>How to Buy</h2>
                            <div className="line"></div>
                            <h2>Land/Housing</h2>
                            <span>-Book an Inspection</span>
                            <p>We are always ready and delighted to show you around some of our properties.This enables you to compare various features so as to make a decision that suits your taste.</p>
                        </div>
                    </div>
                    <div className="one">
                        <img src={OneImage} alt= "Img"/>
                    </div>
                </div>
                
                <div className="buy-inner">
                    <div className="two">
                        <img src={TwoImage} alt= "Img"/>
                    </div>
                    <div className="buy-inner-one">
                        
                        <div>
                            <h2>How to Buy</h2>
                            <div className="line"></div>
                            <h2>Land/Housing</h2>
                            <span>-Fill and submit your subscription form.</span>
                            <p>We advice you take your time to properly do this, as we would like to have even to the slightest information correctly.</p>
                        </div>
                        <div className="imageTwo">
                            <img src={Two} alt= "Img"/>
                        </div>
                    </div>
                </div>

                <div className="buy-inner">
                    <div className="buy-inner-one">
                        <div className="imageThree">
                            <img src={Three} alt= "Img"/>
                        </div>
                        <div>
                            <h2>How to Buy</h2>
                            <div className="line"></div>
                            <h2>Land/Housing</h2>
                            <span>-Payment Preparations</span>
                            <p>We are happy your loved what you see, and you want it as your next comfort zone. Make payment directly into any of our company’s account and we will begin  the paperworks. </p>
                        </div>
                    </div>
                    <div className="three">
                        <img src={ThreeImage} alt= "Img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy