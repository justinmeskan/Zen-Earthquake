import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './rootReducer'
import redux_thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'


let createHistory = ({}) => {}
let historyOptions = {}
createHistory = typeof document !== 'undefined' ? require('history').createBrowserHistory : undefined
export const history = typeof document !== 'undefined' ? createHistory(historyOptions) : {}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [
    redux_thunk,
    routerMiddleware(history)
]


const enhancer = composeEnhancers(
    applyMiddleware(
        ...middleware
    )
)

const reduxStore = createStore(rootReducer(history), {}, enhancer)

export default reduxStore


