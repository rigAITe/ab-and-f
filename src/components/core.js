import React from 'react'
import { ReactComponent as Intergrity } from '../assets/intergrity.svg'
import { ReactComponent as Accountabitlity } from '../assets/accointability.svg'
import { ReactComponent as Profess } from '../assets/profess.svg'
import { ReactComponent as Dedication } from '../assets/dedication.svg'
import {Row, Col} from "antd"

const Core = () => {

    return(
        <div className="core">
            <div className="contain">
                <h2>Core Values</h2>
                <p>These values underlie our work, how we interact and which strategies we employ to fulfil our mission.</p>
                {/* <div className="core-inner"> */}
                    
                <Row justify="center" align="middle">
                    <Col lg={6} xs={24} >
                    <div className="bg-tab">
                        <Intergrity/>
                        <p>Intergrity</p>
                    </div>
                    </Col>
                    <Col lg={6} xs={24} >
                    <div className="bg-tab">
                        <Accountabitlity/>
                        <p>Accountability</p>
                    </div>
                    </Col>
                    <Col lg={6} xs={24} >
                    <div className="bg-tab">
                        <Dedication/>
                        <p>Dedication</p>
                    </div>
                    </Col>
                    <Col lg={6} xs={24} >
                    <div className="bg-tab">
                        <Profess/>
                        <p>Professionalism</p>
                    </div>
                    </Col>
                </Row>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Core