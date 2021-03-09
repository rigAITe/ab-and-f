import React from 'react'
import Invest from '../images/invest.svg'

const Investment = () => {

    return(
        <div className="invest">
            <div className='container'>
                <div className="invest-inner">
                    <div>
                        <img src={Invest} alt="Img" />
                    </div>
                    <div>
                        <h2>Investments</h2>
                        <p>- Fill and submit our investment form alongside a valid ID card.</p>
                        <p>- Make payment directly into any of our company’s accounts.</p>
                        <p>- Send us a prove of payment for confirmation. </p>
                        <p>- Start countdown to your due date.</p>

                        <div className="buttons">Get Started</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Investment }