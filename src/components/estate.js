import React from 'react'
import Header from '../header/header'
import Construction from '../images/construction.jpg'

const Estate = () => {

    return(
        <div>
            <Header/>
            <div className="construct">
                <img src={Construction} alt="Img"/>
            </div>
        </div>
    )
}

export { Estate }