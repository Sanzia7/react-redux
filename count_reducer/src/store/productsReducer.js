const INCR_COUNT = 'INCR_COUNT'
const DECR_COUNT = 'DECR_COUNT'
const REM_BY_ID = 'REM_BY_ID'

const defaultState = [
   { id: 1, title: 'Велосипед', count: 5 },
   { id: 2, title: 'Самокат', count: 4 },
   { id: 3, title: 'Гантели', count: 7 },
   { id: 4, title: 'Ракетки', count: 1 }
]

export const productsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case INCR_COUNT:
         const prodIncr = state.find((elem) => elem.id === action.payload)
         if (prodIncr.count < 25)
            prodIncr.count += 1
         return state.filter(el => el.id !== action.payload)

      case DECR_COUNT:
         const prodDecr = state.find((elem) => elem.id === action.payload)
         if (prodDecr.count > 0)
            prodDecr.count -= 1           
         return [...state]
      case REM_BY_ID:
         return state.filter(elem => elem.id !== action.payload)

      default:
         return state
   }
}

export const incrCountAction = (payload) => ({ type: INCR_COUNT, payload })

export const decrCountAction = (payload) => ({ type: DECR_COUNT, payload })

export const remByIdAction = (payload) => ({ type: REM_BY_ID, payload })
