import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

/*
Store - это хранилище(объект), которе содержит много стейтов

Action --> Reducer --> Store --> Component
<--------- dispatch <--------------------


Rducer - это обычная js function в виде условного оператора (список изменения всех стейтов)
dispatch - отправка команд  (имя операции) из   Component в Action 
Rducer - это обычная js function в виде условного оператора (список изменения всех стейтов)
Action - js объект (ключ : значение)
dispatch ({type: 'ADD_TODO, payload})

Инструкция:
npm i redux react-redux

создание папки store (создание файла внутри index.js)

внутри index.js необходимо создать store и reducer

на стороне index.js (не внутри store) импортировать Provider (и  store) и передать как проп store = {store}

Используя useSelector (react-redux) необходимо внутри компонента получить store и далее использовать на стороне разметки

Используя useDispatch далее осуществляем передачу команд в уже созданный reducer


*/