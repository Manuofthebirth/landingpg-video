import React from 'react'
import './styles/index.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

// COMPONENTS
import Header from './components/Header'
import Menu from './components/Menu'

// CONTAINERS
import Home from './containers/Home'
// import Pag2 from './containers/Pag2'
// import Pag3 from './containers/Pag3'

export default function App() {
  return (
    <Router>
      <div className='row'>
        <div className='column'>
          <Header/>
          <Switch>
            <Route exact={true} path="/">
              <Home/>
            </Route>
            {/* <Route exact={true} path="/pag2">
              <Pag2/>
            </Route>
            <Route exact={true} path="/pag3">
              <Pag3/>
            </Route> */}
          </Switch>
        </div>
        <Menu />
      </div>
    </Router>
  );
}

