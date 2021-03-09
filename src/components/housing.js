import React from 'react'
import Header from '../header/header'
import Construction from '../images/construction.jpg'

const Housing = () => {

    return(
        <div>
            <Header/>
            <div className="construct">
                <img src={Construction} alt="Img"/>
            </div>
        </div>
    )
}

export { Housing }