import React from 'react'
import { Carousel } from './homeCarousel'

const MainHeader = ({history}) => {

    return(
        <div className="mainheader">
            <div className="mainheader-inner">
                <h1>About Us</h1>
                <p> 
                AB&F GLOBAL is a leading real estate company in Nigeria. We are etablished to make a difference and 
create value by providing affordable lands and 
houses, as well as helping individuals grow funds 
through real estate investment. With a secure and 
reliable platform, our investment packages has been designed to fit into various budgets. Let’s guide you to a richer life!
                </p>
                <div className="mainheader-button" onClick={()=>history.push("/housing")}>Explore</div>
            </div>
            <div className="x-right">
                <Carousel/>
            </div>
        </div>
    )
}

export default MainHeader 