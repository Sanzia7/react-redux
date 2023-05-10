const defaultState = {
   count: 0
}
const INCR_BY_PAYLOAD = 'INCR_BY_PAYLOAD'
const DECR_BY_PAYLOAD = 'DECR_BY_PAYLOAD'

export const countReducer = (state = defaultState, action) => {
   switch (action.type) {
      // case 'INCR':
      //    return {...store, count: store.count + 1 }
      // case 'DECR':
      //    return { ...store, count: store.count - 1 }
      // case 'ADD':
      //    return { ...store, count: store.count + 100 }
      // case 'REM':
      //    return { ...store, count: store.count - 100 }
      case INCR_BY_PAYLOAD:
         return { ...state, count: state.count + action.payload }
      
      case DECR_BY_PAYLOAD:
         return { ...state, count: state.count - action.payload }
      
      default:
         return state
   }
}

//Action generation:
export const incrByPayloadAction = (payload) => ({ type: INCR_BY_PAYLOAD, payload })
export const decrByPayloadAction = (payload) => ({ type: DECR_BY_PAYLOAD, payload })
