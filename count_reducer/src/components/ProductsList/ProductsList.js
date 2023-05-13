import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem/ProductItem'
import s from './ProductsList.module.css'
import { addNewProductCartAction } from '../../store/productsReducer'


function ProductsList() {
   const products = useSelector(state => state.products)
   let dispatch = useDispatch()

   return (
      <>
         <h1>Products:</h1>

         <button onClick={() => dispatch(addNewProductCartAction(prompt()))}>Добавить новый товар</button>

         <div className={s.container}>
            {
               products.map(elem =>
                  <ProductItem
                     key={elem.id}
                     id={elem.id}
                     title={elem.title}
                     count={elem.count}
                  />)
            }
         </div>
      </>
   )
}

export default ProductsList