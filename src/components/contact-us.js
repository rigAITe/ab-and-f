import React from 'react'
// import Header from '../header/header'
import { Footer } from './footer'
import Navbar from "../components/nav/nav"


const ContactUs = (props) => {

    return(
        <>
        <Navbar  {...props} />

        <div>
            {/* <div className="head">
                <div  className="contain">
                    <Header/>
                </div>
            </div> */}
            <div className="construct contain">
                <div className="form contact-Us">
                    <form>
                        <div>
                            <input type="text" 
                            placeholder="Your Name"
                            name="firstname" 
                            required/>
                        </div>
                        <div>
                            <input type="email" 
                            placeholder="Your Email" 
                            name="email" required/>
                        </div>
                        <div>
                            <textarea type="text" 
                            placeholder="Message" 
                            name="message" required/>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export { ContactUs }