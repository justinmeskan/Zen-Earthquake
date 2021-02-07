import { initialState } from './detailSelector'
import { LOAD_DETAILS } from './detailActon'


const detail = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default detail
