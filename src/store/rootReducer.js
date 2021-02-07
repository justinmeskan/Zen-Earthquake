import { combineReducers } from 'redux'
import app from './reducers/app/appReducer'
import detail from './reducers/detail/detailReducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = (hist) => combineReducers({
    router: connectRouter(hist),
    app,
    detail

})



export default rootReducer
