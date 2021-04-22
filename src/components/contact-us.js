import React, { useState } from 'react'
import { notification,  } from "antd";
// import Header from '../header/header'
import { Footer } from './footer'
import Navbar from "../components/nav/nav"
import axios from 'axios';
import { PushpinOutlined , PhoneOutlined, MailOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined, LoadingOutlined} from '@ant-design/icons';

const ContactUs = (props) => {
    const [email, setEmail] = useState("")
    const [fullName, setFullname] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)
          axios.post('https://abandfglobal.com/api/contact',{
            fullName, email, message, 
          }).then((res) => {
            openNotification(res.data.success)  
            setEmail("")
            setMessage("")
            setFullname("")
            setLoading(false)
          }).catch((err) => {
          console.log(err)
            openNotification("An error has occured please try again later")  
            setLoading(false)
          })

    }

const openNotification = (message) => {
    notification.open({
      message: 'Notification ',
      description:message,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
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
                    <form onSubmit={sendEmail}>
                        <div>
                            <input type="text" 
                            placeholder="Your Name"
                            name="firstname" 
                            onChange={(e)=> setFullname(e.target.value)}
                            value={fullName}
                            required/>
                        </div>
                        <div>
                            <input type="email" 
                            placeholder="Your Email" 
                            onChange={(e)=> setEmail(e.target.value)}
                            value={email}
                            name="email" required/>
                        </div>
                        <div>
                            <textarea type="text" 
                            placeholder="Message" 
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}
                            name="message" required/>
                        </div>

                        <button type="submit">
                        {loading? <LoadingOutlined /> : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export { ContactUs }