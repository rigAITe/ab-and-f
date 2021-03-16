import React,{useState, useEffect} from 'react'
import ScrollToTop from './components/scrollTop'
import Home from './components/home'
import { Housing } from './components/housing'
import { Estate } from './components/estate'
import { BuyForm } from './components/buyNowForm'
import { InvestmentMain} from './components/investmentMain'
import './components/style.scss'

import 'antd/dist/antd.css';
import "./styles/styles.scss";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ContactUs } from './components/contact-us'

import AOS from "aos"
import Loader from "react-loader-spinner";
import 'aos/dist/aos.css';
const  App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false)
  }, 3000);

  }, [])
  
  return (
    <>
    <Router>
      <div>
        {/* <Header/> */}
        <ScrollToTop />
        <Switch>
          <Route path='/invest'  component={BuyForm} />
          <Route path='/housing'  component={Housing} />
          <Route path='/investment'  component={InvestmentMain} />
          <Route path='/contact'  component={ContactUs} />
          <Route path='/estate'  component={Estate} />
          <Route exact path='/'  component={Home} />
        </Switch>
      </div>
    </Router>
    {loading && <div className="animate-loader"> 
                <div><Loader type="Puff" color="#eee" height={80} width={80} />
                </div>
                </div>}
    </>
  )
}

export default App;
