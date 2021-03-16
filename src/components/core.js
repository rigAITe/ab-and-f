import React from 'react'
import { ReactComponent as Intergrity } from '../assets/intergrity.svg'
import { ReactComponent as Accountabitlity } from '../assets/accointability.svg'
import { ReactComponent as Profess } from '../assets/profess.svg'
import { ReactComponent as Dedication } from '../assets/dedication.svg'

const Core = () => {

    return(
        <div className="core">
            <div className="contain">
                <h2>Core Values</h2>
                <p>These values underlie our work, how we interact and which strategies we employ to fulfil our mission.</p>
                <div className="core-inner">
                    <div>
                        <Intergrity/>
                        <p>Intergrity</p>
                    </div>
                    <div>
                        <Accountabitlity/>
                        <p>Accountability</p>
                    </div>
                    <div>
                        <Profess/>
                        <p>Professionalism</p>
                    </div>
                    <div>
                        <Dedication/>
                        <p>Dedication</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Core