import React,{Component} from  "react"
// import { Row, Col} from 'antd'
import {Link} from "react-router-dom"
import { CloseCircleOutlined} from "@ant-design/icons"

export default class Navmodal extends Component{
    // constructor(props){
    //     super(props)
  
    // }
    render(){
        // var {scroll} = this.props
     
        return(
                <div className="navmodal" data-aos="fade-in">
                    <div >
                        <div className="x-close" >
                        <CloseCircleOutlined className="xcursor" onClick={()=>this.props.handleClose()}/>
                        </div>
                    <div className="modal-links">
                                <div  data-aos="zoom-in" data-aos-delay="100">
                                <p>
                                    <Link to="/">Home</Link>
                                </p>
                                </div>
                                {/* <div  data-aos="zoom-in" data-aos-delay="100">
                                <p>
                                    <a href="#"  onClick={(e) => scroll(e, "#about")}>About us</a>
                                </p>
                                </div> */}
                                <div  data-aos="zoom-in" data-aos-delay="200">
                                <p>
                                    <Link to="/housing">Housing</Link>
                                </p>
                                </div>
                                <div  data-aos="zoom-in" data-aos-delay="300">
                                <p>
                                <Link to="/estate">Estate</Link>
                                </p>
                                </div>
                                <div  data-aos="zoom-in" data-aos-delay="100">
                                <p>
                                    <Link to="/investment"> Investments </Link>
                                </p>
                                </div>
                                <div  data-aos="zoom-in" data-aos-delay="200">
                                <p>
                                    <Link to="/contact"> Contact Us</Link>
                                </p>
                                </div>
                               
                    </div>
                   </div>
                </div>
        )
    }
}