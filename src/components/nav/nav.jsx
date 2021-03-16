import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ArrowRightOutlined, BarsOutlined } from "@ant-design/icons";
import $ from "jquery";
import Navmodal from "./navmodal";
import { ReactComponent as Logo } from '../../assets/Logo.svg'
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      toggleModal: false,
    };
  }
  componentDidMount() {
    $(window).scrollTop(0)
    
  }
  
  handleOpen = () => {
    this.setState({ active: true });
  };
  handleClose = () => {
    this.setState({ active: false, toggleModal: false });
  };
  toggleModal = () => {
    this.setState({ toggleModal: true });
  };
  scroll = (e,div) => {
    e.preventDefault()
    var { location, history } = this.props
    if(this.state.toggleModal) this.handleClose()
    if(location.pathname != '/'){
        history.push({
            pathname: '/',
            state: { scrollTo: div }})
    } else{
        $('html, body').animate({
            scrollTop: $(div).offset().top - 100
        }, 500);
    }
}
  render() {
    return (
      <>
        {this.state.toggleModal ? (
          <Navmodal
            {...this.props}
            handleClose={this.handleClose}
            logout={this.logout}
            scroll={this.scroll}
          />
        ) : null}
        <nav className="x-nav">
          <ul>
            <li>
              <Link to="/">
                <img src={process.env.PUBLIC_URL + "../Logo.svg"} height="70px"/>
                {/* <Logo /> */}
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/" onClick={(e)=>this.scroll(e, '#about')}>About us</Link>
            </li> */}
            <li>
              <Link to="/housing">Housing</Link>
            </li>
            <li>
              <Link to="/estate">Estate</Link>
            </li>
            <li>
              <Link to="/investment">Investment</Link>
            </li>

            <li className="x-mobile">
              <Button size="large" onClick={this.toggleModal}>
                <BarsOutlined />
              </Button>
            </li>
            <li>
              <Button
                size="large"
                onClick={() => this.props.history.push("/contact")}
              >
                Contact Us
                {/* <ArrowRightOutlined /> */}
              </Button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
