import React from 'react'
import ScrollToTop from './components/scrollTop'
import Home from './components/home'
import { Housing } from './components/housing'
import { Estate } from './components/estate'
import { BuyForm } from './components/buyNowForm'
import { InvestmentMain} from './components/investmentMain'
import './components/style.scss'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ContactUs } from './components/contact-us'
const  App = () => {
  return (
    
    <Router>
      <div>
        {/* <Header/> */}
        <ScrollToTop />
        <Switch>
          <Route path='/buy-form'  component={BuyForm} />
          <Route path='/housing'  component={Housing} />
          <Route path='/investment'  component={InvestmentMain} />
          <Route path='/contact'  component={ContactUs} />
          <Route path='/estate'  component={Estate} />
          <Route exact path='/'  component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
