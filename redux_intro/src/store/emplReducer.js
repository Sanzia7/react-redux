// const defaultState = {
//    empl: []
// } это создаст лишнюю вложенность

// const defaultState = [1, 2, 3]

const defaultState = [
   { id: 1, name: 'Alex', age: 19 },
   { id: 2, name: 'Steven', age: 23 },
   { id: 3, name: 'Neena', age: 25 },
   { id: 4, name: 'John', age: 40 },
   { id: 5, name: 'Lui', age: 43 },
]

const DEL_FIRST_EMPL = 'DEL_FIRST_EMPL'
const DEL_LAST_EMPL = 'DEL_LAST_EMPL'
const ADD_NEW_EMPL = 'ADD_NEW_EMPL'
const REMOVE_BY_ID = 'REMOVE_BY_ID'
const CHANGE_AGE = 'CHANGE_AGE'
const RESET_AGE = 'RESET_AGE'

export const emplReducer = (state = defaultState, action) => {
   switch (action.type) {
      case DEL_FIRST_EMPL:
         return state.filter((elem, index) => index !== 0)

      case DEL_LAST_EMPL:
         return state.filter((elem, index) => index !== state.length - 1)

      // case ADD_NEW_EMPL:
      //    const [name, age] = action.payload.split(' ') //всегда строковый тип
      //    let newUser = {
      //       id: Date.now(),
      //       name,
      //       age: (isNaN(+age)) ? 0 : +age
      //    }
      //    return [...state, newUser]

      case ADD_NEW_EMPL:
         const [name, age] = action.payload.split(' ')
         const findElem = state.findIndex(elem => elem.name === name)
         if (findElem !== -1) {
            return state.map((elem, index) => {
               if (index === findElem) {
                  elem.age = (isNaN(+age)) ? 0 : +age
               }
               return elem
            })
         } else {
            const newUser = {
               id: Date.now(),
               name,
               age: (isNaN(+age)) ? 0 : +age
            }
            return [...state, newUser]
         }

      case REMOVE_BY_ID:
         return state.filter((elem) => elem.id !== action.payload)

      case CHANGE_AGE:
         return state.map(elem => ({ ...elem, age: elem.age + 10 }))
      
      case RESET_AGE:
         return state.map(elem => ({ ...elem, age: 0 }))


      default:
         return state
   }
}

export const delFirstEmplAction = () => ({ type: DEL_FIRST_EMPL })
export const delLastEmplAction = () => ({ type: DEL_LAST_EMPL })
export const addNewEmplAction = (payload) => ({ type: ADD_NEW_EMPL, payload })
export const remByIdAction = (payload) => ({ type: REMOVE_BY_ID, payload })

export const changeAgeAction = () => ({ type: CHANGE_AGE })

export const resetAgeAction = () => ({type: RESET_AGE})




//второй вариант-с циклом для увеличения возрста:
//   case CHANGE_AGE:
// return state.map(elem => ({ ...elem, age: elem.age + 10 }))
// //второй вариант // строка 
// let copy = [...state]
//       // for (let i in copy) {
//       //    copy[i].age += 10
//       // }

//       // for (let i in copy) {
//       //    if(i === '3') // выбор по индексу одного сооторудника
//       //    copy[i].age += 10
//       // }
//       // return copy


// MINI - ДЗ
// Реализовать новый кейс, который будет удалять сотруднов по двойному нажатию (dblbclick)

// генератор зкшена в более понятном виде
// export function incrByPayloadAction(payload){
//     return {
//         type: 'INCR_BY_PAYLOAD',
//         payload: payload
//     }
// }

// JavaScript:
// function test(age) {
//    return {
//       name: Lana,
//       // age: age -> 
//       age
//    }
// }
// test(age)
