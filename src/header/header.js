
import React, { useState} from 'react'
import "./header.scss";
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { ReactComponent as MenuIcon } from '../assets/menu.svg'
import { ReactComponent as CloseIcon } from '../assets/x.svg'
import { NavLink } from 'react-router-dom'
import Facebook from '../assets/facebookIcon2.svg'
import Instagram from '../assets/instagramIcon2.svg'
import Twitter from '../assets/twitter.svg'
import { ReactComponent as  Home }  from '../assets/homeIcon.svg'
import { ReactComponent as Investment }  from '../assets/investmentIcon.svg'
import { ReactComponent as Estate }  from '../assets/estateIcon.svg'



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
                <div onClick={closeMobileMenu}>
                <Home/> <span>Home</span>
              </div>
            </NavLink>
            <NavLink to='/housing'><div onClick={closeMobileMenu}> <span>Housing</span></div></NavLink>
            <NavLink to='/estate' ><div onClick={closeMobileMenu}> <Estate/> <span> Estate</span></div></NavLink>
            <NavLink to='/investment'><div onClick={closeMobileMenu}><Investment/> <span>Investment</span></div></NavLink>
            <NavLink to='/contact-us'><div onClick={closeMobileMenu}> <span>Contact Us</span></div></NavLink>
              <div className="header-social " onClick={closeMobileMenu}>
                {/* <p>Connect with Us</p> */}
                <div className="social">
                    <div><a target="_" href="https://web.facebook.com/holiday.destination.775/"><img src={Facebook} alt="Facebook Icon"/></a></div> 
                    <div><a target="_" href="https://www.instagram.com/destinationswithjohn/"><img src={Instagram} alt="Instagram Icon"/></a></div> 
                    <div><a target="_" href="https://www.instagram.com/destinationswithjohn/"><img src={Twitter} alt="Instagram Icon"/></a></div>
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
