
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrByPayloadAction, incrByPayloadAction } from './store/countRreducer';
import { addNewEmplAction, changeAgeAction, delFirstEmplAction, delLastEmplAction, remByIdAction, resetAgeAction } from './store/emplReducer';


function App() {
  // seSelector позволяет получить c Provider значение хранилища store из выбранного стейта .count :
  let count = useSelector(store => store.count.count) // так как есть вложенная структура
  let empl = useSelector(store => store.empl)
  //useDispatch - функция которая отправляет команды в redicer на изменение храанилищв (store)
  let dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <h2>Счётчик:</h2>
        <h2>{count}</h2>
        <button onClick={() => dispatch(incrByPayloadAction(1))}>Увеличить</button>
        <button onClick={() => dispatch(decrByPayloadAction(1))}>Уменьшить</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrByPayloadAction(100))}>Увеличить на 100</button>
        <button onClick={() => dispatch(decrByPayloadAction(100))}>Уменьшитьна 100</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrByPayloadAction(+prompt()))}>Добавить число</button>
        <button onClick={() => dispatch(decrByPayloadAction(+prompt()))}>Удалить число</button>
      </div>
      <div>
        <h2>Сотрудники:</h2>
        <div>
          <button onClick={() => dispatch(delFirstEmplAction())} >Удаление первого сотрудника</button>
          <button onClick={() => dispatch(delLastEmplAction())}>Удаление последнего сотрудника</button>
          <button onClick={() => dispatch(addNewEmplAction(prompt()))}>Добавление нового сотрудника</button>
        </div>
        <div>
          {empl.map(elem =>
            <div
              key={elem.id}
              onDoubleClick={() => dispatch(remByIdAction(elem.id))}
            >
              <p>{elem.name}: {elem.age}</p>
              <button onClick={() => dispatch(remByIdAction(elem.id))}>x</button>

              <button onClick={() => dispatch(changeAgeAction())}>Увеличить возраст сотрудников на 10</button>
              
              <button onClick={() => dispatch(resetAgeAction())}>Обнулить возраст всех сотрудников</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


  // const [count, setCount] = useState(0)

  // const incrHandle = () => {
  //   setCount(count + 1)
  // }

  // const decrHandle = () => {
  //   setCount(count - 1)
  // }

/* <button onClick={incrHandle}>Increment</button>
        <button onClick={decrHandle}>Decrement</button> */