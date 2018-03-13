import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import App from 'App'
import adminReducer from 'store/reducers/admin'
import authReducer from 'store/reducers/auth'
import companyReducer from 'store/reducers/company'
import placeReducer from 'store/reducers/place'
import registerServiceWorker from 'registerServiceWorker'

import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
import 'assets/styles/style.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  admin: adminReducer,
  auth: authReducer,
  company: companyReducer,
  place: placeReducer,
  form: formReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
