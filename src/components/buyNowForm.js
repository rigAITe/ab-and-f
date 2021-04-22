import React, { useState } from 'react'
import {  notification,  } from "antd";
import {  LoadingOutlined} from '@ant-design/icons';
import Header from '../header/header'
import { Footer } from './footer'
import axios from 'axios';
import Navbar from "../components/nav/nav"

import { data } from './data'

const BuyForm = (props) => {

    const [email, setEmail] = useState("")
    const [fullName, setFullname] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [property, setProperty] = useState("")
    const [loading, setLoading] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('https://abandfglobal.com/api/contact',
        {
            fullName, email, message, estate: property, phone
          }).then((res) => {
            openNotification(res.data.success)  
            setEmail("")
            setMessage("")
            setFullname("")
            setPhone("")
        setLoading(false)
    }).catch((err) => {
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
        <div>
        <Navbar  {...props} />
{/*           
            <div className="head">
                <div  className="contain">
                    <Header/>
                </div>
            </div> */}
            <div className="buyNowForm container">
                <h4>Please  provide us the following:</h4>
                <form onSubmit={sendEmail}>
                        <div>
                            <input type="text" 
                            placeholder="Full Name"  
                            value={fullName}
                            onChange={(e)=> setFullname(e.target.value)}
                            name="name" required/>
                        </div>
                        <div>
                            <input type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            name="email" required/>
                        </div>
                        <div>
                            <input type="number" 
                            value={phone}
                            placeholder="Mobile Number" 
                            onChange={(e)=> setPhone(e.target.value)}
                            name="phone" required/>
                        </div>
                        <div>
                           
                            <select 
                            required
                             onChange={(e)=> setProperty(e.target.value)}>
                                { props.location.search ?
                                    <option name='Global silver investment'>Global silver investment</option>   
                                    :
                                 data.map( data => 
                                    <option name={data.dela}>{data.deal}</option>   
                                )}
                            </select>
                        </div>
                        <div>
                            <textarea type="text" 
                            placeholder="Additional Message" 
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}
                            name="message" required/>
                        </div>
                        <div>
                            <input type="checkbox" required className="check"/> <span>I have read and agree to the website terms and condition *</span>
                        </div>
                            <div className="but">
                                <button type="submit">
                                {loading? <LoadingOutlined /> : "Submit"}
                                </button>
                            </div>
                        
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export { BuyForm }