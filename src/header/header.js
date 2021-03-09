
import React, { useState} from 'react'
import "./header.scss";
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as MenuIcon } from '../assets/menu.svg'
import { ReactComponent as CloseIcon } from '../assets/x.svg'
import { NavLink } from 'react-router-dom'
import Facebook from '../assets/facebookIcon2.svg'
import Instagram from '../assets/instagramIcon2.svg'
import Twitter from '../assets/twitter.svg'



function App() {

  const [ clickMobileNav, setMobileNav ] = useState(false)
  const handleMobileNav = () => {
    setMobileNav(!clickMobileNav)
  }
  const closeMobileMenu = () => setMobileNav(false);


  return (

    <div className="header">
      
      <div className="header-desktop">
        <div>
          <NavLink exact to='/'>
            <Logo className="logo"/>
          </NavLink>
        </div>
        <div>
          <div className={ clickMobileNav ? ("header-link active ") : ("header-link")  }>
            <div>
              <Logo className="logo logo-mobile"/>
            </div>
            <NavLink exact to='/' >
                <div onClick={closeMobileMenu} className="home">
                Home
              </div>
            </NavLink>
            <NavLink to='/housing'><div onClick={closeMobileMenu} className="housing"> Housing</div></NavLink>
            <NavLink to='/estate' ><div onClick={closeMobileMenu} className="estate">  Estate</div></NavLink>
            <NavLink to='/investment'><div onClick={closeMobileMenu} className="investment">Investment</div></NavLink>
            <NavLink to='/contact'><div onClick={closeMobileMenu} className="contact"> Contact Us</div></NavLink>
              <div className="header-social " onClick={closeMobileMenu}>
                {/* <p>Connect with Us</p> */}
                <div className="social">
                    <div><a target="_" href="/"><img src={Facebook} alt="Facebook Icon"/></a></div> 
                    <div><a target="_" href="/"><img src={Instagram} alt="Instagram Icon"/></a></div> 
                    <div><a target="_" href="/"><img src={Twitter} alt="Instagram Icon"/></a></div>
                </div>
            </div>
          </div> 
        </div>
      </div>
      
      <div className="header-mobile" onClick={handleMobileNav}>
        { clickMobileNav ? 
          ( <CloseIcon className="icon"/> ) : ( <MenuIcon className="icon"/> ) 
        }
      </div>

    </div>

  );
}

export default App;
