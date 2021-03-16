import React from 'react'
import Header from '../header/header'
import { Footer } from './footer'

import { data } from './data'

const BuyForm = () => {

    return(
        <div>
            <div className="head">
                <div  className="contain">
                    <Header/>
                </div>
            </div>
            <div className="buyNowForm container">
                <h4>Please  provide us the following:</h4>
                <form>
                        <div>
                            <input type="text" 
                            placeholder="Full Name"  
                            name="name" required/>
                        </div>
                        <div>
                            <input type="email" 
                            placeholder="Email" 
                            name="email" required/>
                        </div>
                        <div>
                            <input type="number" 
                            placeholder="Mobile Number" 
                            name="phone" required/>
                        </div>
                        <div>
                            <select>
                                { data.map( data => 
                                    <option>{data.deal}</option>   
                                )}
                            </select>
                        </div>
                        <div>
                            <textarea type="text" 
                            placeholder="Additional Message" 
                            name="message" required/>
                        </div>
                        <div>
                            <input type="checkbox" required className="check"/> <span>I have read and agree to the website terms and condition *</span>
                        </div>
                            <div className="but">
                                <button type="submit">Submit</button>
                            </div>
                        
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export { BuyForm }