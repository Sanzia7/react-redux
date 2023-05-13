import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem/ProductItem'
import s from './ProductsList.module.css'
import { addNewProductCartAction } from '../../store/productsReducer'
import { useEffect } from 'react'


function ProductsList() {
   const products = useSelector(store => store.products)
   let dispatch = useDispatch()
   useEffect(() => {
   localStorage.setItem('products', JSON.stringify(products))
}, [products])

   return (
      <>
         <h1>Products in the Cart:</h1>

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