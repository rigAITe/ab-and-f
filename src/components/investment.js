import React from 'react'
import Invest from '../images/invest.svg'
import Navbar from "../components/nav/nav"

const Investment = (props) => {

    return(   <>
        <Navbar  {...props} />

        <div className="invest x-housing">
            <div className='contain'>
                <div className="invest-inner">
                    {/* <div>
                        <img src={Invest} alt="Img" />
                    </div> */}
                    <div>
                        <h2>Investments</h2>
                        <p>- Fill and submit our investment form alongside a valid ID card.</p>
                        <p>- Make payment directly into any of our company’s accounts.</p>
                        <p>- Send us a prove of payment for confirmation. </p>
                        <p>- Start countdown to your due date.</p>
                        {/* <NavLink to="/buy-form"><div>Book Now</div></NavLink> */}

                        <div className="buttons">Get Started</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export { Investment }