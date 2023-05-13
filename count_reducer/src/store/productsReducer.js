const defaultState = [
   { id: 1, title: 'Велосипед', count: 5 },
   { id: 2, title: 'Самокат', count: 4 },
   { id: 3, title: 'Гантели', count: 7 },
   { id: 4, title: 'Ракетки', count: 1 }
]

const INCR_COUNT = 'INCR_COUNT'
const DECR_COUNT = 'DECR_COUNT'
const REM_BY_ID = 'REM_BY_ID'
const ADD_NEW_PRODUCT_CART = 'ADD_NEW_PRODUCT_CART'


export const productsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case INCR_COUNT:
         let prodIncr = state.find((elem) => elem.id === action.payload)
         if (prodIncr.count < 25) {
            prodIncr.count++
         }
         return [...state]

      case DECR_COUNT:
         const prodDecr = state.find((el) => el.id === action.payload)
         prodDecr.count--
         if (prodDecr.count === 0) {
            state = state.filter(el=> el.id !== action.payload)
         } 
         return [...state]

      case REM_BY_ID:
         return state.filter(elem => elem.id !== action.payload)
      
      case ADD_NEW_PRODUCT_CART:
         let addNewProductCart = {
            id: Date.now(),
            title: action.payload,
            count:1
         }
         return [...state, addNewProductCart]

      default:
         return state
   }
}

export const incrCountAction = (payload) => ({ type: INCR_COUNT, payload })

export const decrCountAction = (payload) => ({ type: DECR_COUNT, payload })

export const remByIdAction = (payload) => ({ type: REM_BY_ID, payload })

export const addNewProductCartAction = (payload) => ({ type: ADD_NEW_PRODUCT_CART, payload })


