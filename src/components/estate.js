import React from 'react'
import Header from '../header/header'
import { Footer } from './footer'
import EstateImage from '../images/estateImage.jpg'
import { NavLink } from 'react-router-dom'

const Estate = () => {

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
                        <h2>GloryVille Estate, Ibeju Lekki</h2>
                        <p>If you’re looking for a dry land with paved road network, your search ends here! This estate contains perimeter fencing and street lightning..</p>
                        <p>Features include 5 mins drive from Eleko beach, Lekki Free Trade Zone, Pan Atlantic University, Dangote refinery etc.</p>
                        <NavLink to="/buy-form"><div className="buttons">Book Now</div></NavLink>

                    </div>
                    <div className="x-z">
                        <img src={EstateImage } alt="Img" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export { Estate }