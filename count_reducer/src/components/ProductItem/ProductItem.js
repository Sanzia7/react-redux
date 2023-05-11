import { useDispatch } from 'react-redux'
import s from './ProductItem.module.css'
import { decrCountAction, incrCountAction, remByIdAction } from '../../store/productsReducer'

function ProductItem({ id, title, count }) {

   let dispatch = useDispatch()

   return (
      <div className={s.product}>
         <p>номер: {id}</p>
         <p>Название: {title}</p>         
         <div className={s.btns}>
            {/* <button onClick={() => dispatch(incrCountAction(id))}>+</button> */}
            <div onClick={() => dispatch(incrCountAction(id))}>+</div>
            <p>Количество: {count}</p>
            {/* <button onClick={() => dispatch(decrCountAction(id))}>-</button> */}
            <div onClick={() => dispatch(decrCountAction(id))}>-</div>
            <button onClick={() => dispatch(remByIdAction(id))}>X</button>            
         </div>
      </div>
   )
}

export default ProductItem