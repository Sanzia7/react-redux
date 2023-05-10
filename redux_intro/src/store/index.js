import { combineReducers, createStore } from 'redux'
import { countReducer } from './countRreducer'
import { emplReducer } from './emplReducer'
// combineReducers объединяет несколько редусеров:
const rootReducer = combineReducers({
   count: countReducer,
   empl: emplReducer
})

export const store = createStore(rootReducer)

// const rootReducer = combineReducers({
//    count: {count: 0}, //объект
//    empl: [...1, 2, 3, 4] // массив
// })




// здесь логика изменения стейтов
// store - какой стейт будет меняться
//action получать тип операции

/* default значение формируется прямо в аргументах
он нужен только для первой инициализации обьекта
function double(num = 4){
   console.log(num ** 2)
}
double()
 */

// Добавить в reducer 2 кейса, которые будут добавлять и убавлять значение стейта на 100
// На стороне компонента сделать 2 кнопки