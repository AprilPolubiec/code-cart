import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Routing
import PrivateRoutes from './routes/PrivateRoutes'
import PublicRoutes from './routes/PublicRoutes'

//Providers
import { UserProvider } from './providers/UserProvider'

function App() {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <Route path='/' component={PrivateRoutes} />
          <Route path='' component={PublicRoutes} />
        </Switch>
      </UserProvider>
    </Router>
  )
}

export default App
