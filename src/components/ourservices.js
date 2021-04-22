import React from 'react'
import { ReactComponent as Intergrity } from '../assets/intergrity.svg'
import { ReactComponent as Accountabitlity } from '../assets/accointability.svg'
import { ReactComponent as Profess } from '../assets/profess.svg'
import { ReactComponent as Dedication } from '../assets/dedication.svg'
import {Row, Col} from "antd"
const Ourservices = () => {

    return(
        <div className=" x-ourservices">
            <div className="contain">
                <h2>Our Products And Services</h2>
                {/* <p>These values underlie our work, how we interact and which strategies we employ to fulfil our mission.</p> */}
                <Row gutter={32} justify="center" align="middle">
                    <Col lg={8} xs={24} style={{cursor: "pointer"}} onClick={()=>window.location.assign("/housing")} >
                        <div className="x-grid x1" >
                            HOUSING
                        </div>
                    </Col>
                    <Col lg={8} xs={24} >
                        <div className="x-grid x2" style={{cursor: "pointer"}} onClick={()=>window.location.assign("/estate")} >
                            ESTATE
                        </div>
                    </Col>
                    <Col lg={8} xs={24} >
                        <div className="x-grid x3" style={{cursor: "pointer"}} onClick={()=>window.location.assign("/investment")} >
                           INVESTMENT
                        </div>
                    </Col>
                </Row>
                
            </div>
        </div>
    )
}

export default Ourservices