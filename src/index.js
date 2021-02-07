import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reduxStore, { history } from './store/index'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes/routes'
import {BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
    <Provider store={reduxStore}>
      <ConnectedRouter history={history}>
          <Router>
              { routes }
          </Router>
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
)

