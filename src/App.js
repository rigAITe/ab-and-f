import React from 'react'
import ScrollToTop from './components/scrollTop'
import Home from './components/home'
import Housing from './components/housing'
import './components/style.scss'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const  App = () => {
  return (
    
    <Router>
      <div>
        {/* <Header/> */}
        <ScrollToTop />
        <Switch>
          <Route exact path='/housing'  component={Housing} />
          <Route exact path='/'  component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
