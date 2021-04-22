import React from 'react'

const Address = () => {

    return(
        <div className="address">
            <div className="contain">
                <div className="address-inner">
                    <div>
                        <span>Email</span>
                        <p>contact@abandfglobal.com</p>
                        <span>Twitter:  <>@abandf_global</> </span>
                        <span>Instagram: <>@abandf_global</></span>
                        <span>Facebook: <>AB & F Global</></span>
                    </div>
                    <div>
                        <span>Operating Hours</span>
                        <p>Mon-Fri (8am-5:30pm)</p>
                        <span>Office Address: </span>
                        <p>The Philippi Center, Oluwalogbon House, Obafemi Awolowo Way, Alausa Ikeja, Lagos State</p>
                    </div>
                    {/* <div>
                        <span>Office Address: </span>
                        <p>The Philippi Center, Oluwalogbon House, Obafemi Awolowo Way, Alausa Ikeja, Lagos State</p>
                    </div> */}
                </div>
                <div className="address-x">
                    <div className="iframe">
                        <h3 className="xy">We’re here:</h3>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3963.2693673998874!2d3.3524536142972163!3d6.613416673947443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sthe%20philippi%20center%20oluwalogbon%20house%20ikeja!5e0!3m2!1sen!2sng!4v1615281637445!5m2!1sen!2sng"  height="400"loading="lazy" title="COMPANY"></iframe>
                    </div>
                    <div className="form">
                        <h3 className="xy">Contact us, Be a Partner</h3>
                        <form>
                                <div>
                                    <input type="text" placeholder="Your Name"  name="firstname" required/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email" name="email" required/>
                                </div>
                                <div>
                                    <textarea type="text" placeholder="Message" name="message" required/>
                                </div>

                                <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Address }