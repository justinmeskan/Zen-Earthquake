import { initialState } from './appSelector'
import { GET_DATA } from './appAction'


const app = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default app
