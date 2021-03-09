import React from 'react'
import  ExploreImage from '../images/explorePix.svg'

const MainHeader = () => {

    return(
        <div className="mainheader">
            <div className="mainheader-inner">
                <h1>Find Your <br/> Next Perfect<br/> Place to Live</h1>
                <p> AB&F Global is a Real Estate company established,to make a difference and create value for our clients by providing them with good lands,quality housing and as well as helping them multiply funds,in order to achieve their short and long term goals through save and secure real estate investment packages</p>
                <div className="mainheader-button">Explore</div>
            </div>
            <div>
                <img src={ExploreImage} alt="Img" />
            </div>
        </div>
    )
}

export default MainHeader 