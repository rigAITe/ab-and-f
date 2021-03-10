import React from 'react'
import { NavLink } from 'react-router-dom'


const BuyNow = () => {

    return(
        <div className="contain buy-now" >
            <div>It’s that <span>Simple,</span> right ? </div>
            <NavLink to="/buy-form" className="buttons"><div>Book Now</div></NavLink>
        </div>
    )
}

export { BuyNow }